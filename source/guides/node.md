---
title: Sales Tax API Guide for Node
description: "How to use SmartCalcs with our official Node client."
preferred_url: https://developers.taxjar.com/api/guides/node/
---

# Node Quickstart

Ready to dive into our sales tax API with Node? In this guide we'll show you how to set up TaxJar's official Node client, authenticate with your API token, and start calculating sales tax right away. If you get stuck don't panic... [shoot us an email](mailto:support@taxjar.com) or [open an issue on GitHub](https://github.com/taxjar/taxjar-api-docs/issues/new). Now let's go!

## Getting Started

> package.json

```javascript
{
  "dependencies": {
    "taxjar": "^2.0.0"
  }
}
```

First let's install the `taxjar` package. Go to your project directory in the terminal and enter the following command:

`npm install --save taxjar`

Shazam! You now have the TaxJar Node client inside your project. The `--save` flag automatically added the package as a dependency in your `package.json` file.

## Authentication

```javascript
// ES5 Import
const Taxjar = require('taxjar');

// ES6/7 Import
import Taxjar from 'taxjar';

// Useful for quick testing
const client = new Taxjar({
  apiKey: '48ceecccc8af930bd02597aec0f84a78'
});

// Recommended
const client = new Taxjar({
  apiKey: process.env.TAXJAR_API_KEY
});
```

In order to make requests to our [sales tax API](https://www.taxjar.com/smartcalcs/) and get data back, you'll need to pass your TaxJar API token. If you don't already have a TaxJar account, [sign up to get your token](https://app.taxjar.com/api_sign_up/).

We recommend using a `.env` file with a package such as [dotenv](https://github.com/motdotla/dotenv) to keep sensitive credentials like API tokens outside of your code.

**Warning:** Never expose your API token in client-side JavaScript. This is insecure and could put your TaxJar account at risk.

# Sales Tax Calculations

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: process.env.TAXJAR_API_KEY
});

client.taxForOrder({
  from_country: 'US',
  from_zip: '07001',
  from_state: 'NJ',
  to_country: 'US',
  to_zip: '07446',
  to_state: 'NJ',
  amount: 16.50,
  shipping: 1.5,
  line_items: [
    {
      quantity: 1,
      unit_price: 15.0,
      product_tax_code: 31000
    }
  ]
}).then(res => {
  res.tax; // Tax object
  res.tax.amount_to_collect; // Amount to collect
});
```

> Truncated Response

```json
{
  "tax": {
    "order_total_amount": 16.5,
    "amount_to_collect": 1.16,
    "has_nexus": true,
    "freight_taxable": true,
    "tax_source": "destination",
    "breakdown": {}
  }
}
```

Now that we've set up the Node client, let's calculate some sales tax. In the example to the right, we're passing the following:

- **From Address**: The address you're shipping from, such as a warehouse or business location.
- **To Address**: The buyer's shipping address. The destination of the order. You get the idea.
- **Amount**: Total amount of the order, **excluding shipping**. Shipping is included separately.
- **Shipping**: Total amount of shipping for the order.
- **Line Items**: A nested array of items being purchased in the order.

You can learn more about the parameters passed to our tax endpoint in the [API reference](/api/reference/?node#post-calculate-sales-tax-for-an-order). If you're passing a [product tax code](/api/guides#product-exemptions) for specific line items, refer to our [category list](/api/reference/?node#categories) to determine which code to use.

After calling `taxForOrder`, you'll get a response back. Check it out with `node debug`, [node-inspector](https://github.com/node-inspector/node-inspector), or simply `console.log(res.tax)`. To access a specific attribute in the response, use a property accessor: `res.tax.amount_to_collect`.

If you just need the rate for a given location, use the [/v2/rates](/api/reference/?node#get-show-tax-rates-for-a-location) endpoint. You can also take advantage of our [summarized rates endpoint](/api/reference/?node#get-summarize-tax-rates-for-all-regions) as a backup to store in your database.

# Sales Tax Reporting

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: process.env.TAXJAR_API_KEY
});

client.createOrder({
  transaction_id: '123',
  transaction_date: '2015/05/14',
  to_country: 'US',
  to_zip: '90002',
  to_state: 'CA',
  to_city: 'Los Angeles',
  to_street: '123 Palm Grove Ln',
  amount: 17.45,
  shipping: 1.5,
  sales_tax: 0.95,
  line_items: [
    {
      quantity: 1,
      product_identifier: '12-34243-9',
      description: 'Fuzzy Widget',
      unit_price: 15.0,
      sales_tax: 0.95
    }
  ]
}).then(res => {
  res.order; // Order object
});
```

> Response

```json
{
  "order": {
    "transaction_id": "123",
    "user_id": 10649,
    "transaction_date": "2015-05-14T00:00:00Z",
    "to_country": "US",
    "to_zip": "90002",
    "to_state": "CA",
    "to_city": "LOS ANGELES",
    "to_street": "123 Palm Grove Ln",
    "amount": "17.95",
    "shipping": "2.0",
    "sales_tax": "0.95",
    "line_items": [
      {
        "id": 1,
        "quantity": 1,
        "product_identifier": "12-34243-0",
        "description": "Heavy Widget",
        "unit_price": "15.0",
        "discount": "0.0",
        "sales_tax": "0.95"
      }
    ]
  }
}
```

To get the full TaxJar experience you'll also want to set up sales tax reporting to file your tax returns later. To push transactions (orders and refunds) into TaxJar, we provide a [collection of endpoints](/api/reference/?node#transactions) that cover your basic CRUD operations. In the example to the right, we're pushing an order into TaxJar. Once imported, it'll appear on the **Transactions** page in the [TaxJar app](https://app.taxjar.com). We're passing the following parameters:

- **Transaction ID**: A unique identifier for your order.
- **Transaction Date**: The date the transaction was recorded.
- **From Address**: The address you're shipping from, such as a warehouse or business location.
- **To Address**: The buyer's shipping address or destination of the order.
- **Amount**: Total amount of the order, **including shipping** and **excluding sales tax**. Yeah, this is a gotcha we're planning to fix in the next API version.
- **Shipping**: Total amount of shipping for the order.
- **Sales Tax**: Total amount of sales tax collected.
- **Line Items**: A nested array of items purchased in the order. Includes the product ID, description, and amount of sales tax collected for the line item.

A successful response will return back the imported order transaction. Nifty!

# Error Handling

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: process.env.TAXJAR_API_KEY
});

client.createOrder({
  transaction_date: '2015/05/14',
  to_country: 'US',
  to_state: 'CA',
  to_zip: '90002',
  amount: 17.45,
  shipping: 1.5,
  sales_tax: 0.95
}).then(res => {
  res.order; // Order object
}).catch(err => {
  err.detail; // Error detail
  err.status; // Error status code
});
```

When invalid data is sent to TaxJar or we encounter an error, we'll reject the promise with a JSON object including the HTTP status code and error message. To catch these exceptions, you can use the example to the right. Here's a list of common [error response classes](/api/reference/?node#errors) for reference:

Error Code | Meaning
---------- | -------
400 | Bad Request -- Your request format is bad.
401 | Unauthorized -- Your API key is wrong.
403 | Forbidden -- The resource requested is not authorized for use.
404 | Not Found -- The specified resource could not be found.
405 | Method Not Allowed -- You tried to access a resource with an invalid method.
406 | Not Acceptable -- Your request is not acceptable.
410 | Gone -- The resource requested has been removed from our servers.
422 | Unprocessable Entity -- Your request could not be processed.
429 | Too Many Requests -- You're requesting too many resources! Slow down!
500 | Internal Server Error -- We had a problem with our server. Try again later.
503 | Service Unavailable -- We're temporarily offline for maintenance. Try again later.

# Resources & Help

If you have any questions about using our sales tax API for Node, please [contact us](https://www.taxjar.com/contact/) or tweet [@TaxJarDev](https://twitter.com/TaxJarDev). We'll help you out as soon as we can!

- [Node Sales Tax API Reference](/api/reference/?node)
- [General SmartCalcs FAQs](https://support.taxjar.com/knowledge_base/categories/smartcalcs)
- [taxjar-node on GitHub](https://github.com/taxjar/taxjar-node)
- [taxjar-node on NPM](https://npmjs.org/package/taxjar)
