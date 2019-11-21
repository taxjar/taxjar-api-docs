---
title: Sales Tax API Guide for C# / .NET
description: "How to use SmartCalcs with our official C# / .NET client."
preferred_url: https://developers.taxjar.com/api/guides/csharp/
---

# C# / .NET Quickstart

Ready to dive into our sales tax API with C# / .NET? In this guide we'll show you how to set up TaxJar's official .NET client, authenticate with your API token, and start calculating sales tax right away. If you get stuck don't panic... [shoot us an email](mailto:support@taxjar.com) or [open an issue on GitHub](https://github.com/taxjar/taxjar-api-docs/issues/new). Now let's go!

## Getting Started

First let's install the `TaxJar` package via [NuGet](https://www.nuget.org/). Use the NuGet package manager inside Visual Studio, Xamarin Studio, or run the following command in the Package Manager Console:

`PM> Install-Package TaxJar`

Bam! You now have the TaxJar .NET client inside your project.

## Authentication

```xml
<!-- Supply your API token inside Web.config / App.config (recommended) -->
<appSettings>
...
  <add key="TaxjarApiKey" value="[Your TaxJar API Key]" />
...
</appSettings>
```

```csharp
// Method A: Use API key inside your project's Web.config or App.config
var client = new TaxjarApi();

// Method B: Useful for quick testing
var client = new TaxjarApi("[Your TaxJar API Key]");
```

In order to make requests to our [sales tax API](https://www.taxjar.com/smartcalcs/) and get data back, you'll need to pass your TaxJar API token. If you don't already have a TaxJar account, [sign up to get your token](https://app.taxjar.com/api_sign_up/).

We recommend placing the TaxJar API token inside your project's Web.config or App.config file to keep sensitive credentials outside of your code.

## Sales Tax Calculations

```csharp
using Taxjar;
var client = new TaxjarApi();

var tax = client.TaxForOrder(new {
  from_country = "US",
  from_zip = "92093",
  from_state = "CA",
  from_city = "San Diego",
  to_country = "US",
  to_zip = "90002",
  to_state = "CA",
  to_city = "Los Angeles",
  amount = 16.5,
  shipping = 1.5,
  line_items = new[] {
    new {
      quantity = 1,
      unit_price = 15,
      product_tax_code = "31000"
    }
  }
});

tax.AmountToCollect
tax.Rate
```

> Truncated Response

```json
{
  "tax": {
    "order_total_amount": 16.5,
    "shipping": 1.5,
    "taxable_amount": 15.0,
    "amount_to_collect": 1.35,
    "rate": 0.09,
    "has_nexus": true,
    "freight_taxable": true,
    "tax_source": "destination",
    "breakdown": {}
  }
}
```

Now that we've set up the .NET client, let's calculate some sales tax. In the example to the right, we're passing the following:

- **From Address**: The address you're shipping from, such as a warehouse or business location.
- **To Address**: The buyer's shipping address. The destination of the order. You get the idea.
- **Amount**: Total amount of the order, **excluding shipping**. Shipping is included separately.
- **Shipping**: Total amount of shipping for the order.
- **Line Items**: A nested array of items being purchased in the order.

You can learn more about the parameters passed to our tax endpoint in the [API reference](/api/reference/?csharp#post-calculate-sales-tax-for-an-order). If you're passing a [product tax code](/api/guides#product-exemptions) for specific line items, refer to our [category list](/api/reference/?csharp#categories) to determine which code to use.

After calling `TaxForOrder`, you'll get a response back. Check it out with your IDE debugger of choice. To access a specific attribute in the response, use C#'s dot notation syntax: `tax.AmountToCollect`.

If you just need the rate for a given location, use the [/v2/rates](/api/reference/?csharp#get-show-tax-rates-for-a-location) endpoint. You can also take advantage of our [summarized rates endpoint](/api/reference/?csharp#get-summarize-tax-rates-for-all-regions) as a backup to store in your database.

## Sales Tax Reporting

```csharp
using Taxjar;
var client = new TaxjarApi();

var order = client.CreateOrder(new {
  transaction_id = "123",
  transaction_date = "2015/05/04",
  to_country = "US",
  to_zip = "90002",
  to_city = "Los Angeles",
  to_street = "123 Palm Grove Ln",
  amount = 17,
  shipping = 2,
  sales_tax = 0.95,
  line_items = new[] {
    new {
      quantity = 1,
      product_identifier = "12-34243-0",
      description = "Heavy Widget",
      unit_price = 15,
      sales_tax = 0.95
    }
  }
});

order.TransactionId
order.SalesTax
```

> Truncated Response

```json
{
  "order": {
    "transaction_id": "123",
    "user_id": 10649,
    "transaction_date": "2015-05-04T00:00:00Z",
    "to_country": "US",
    "to_zip": "90002",
    "to_state": "CA",
    "to_city": "LOS ANGELES",
    "to_street": "123 Palm Grove Ln",
    "amount": "17",
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

To get the full TaxJar experience you'll also want to set up sales tax reporting to file your tax returns later. To push transactions (orders and refunds) into TaxJar, we provide a [collection of endpoints](/api/reference/?csharp#transactions) that cover your basic CRUD operations. In the example to the right, we're pushing an order into TaxJar. Once imported, it'll appear on the **Transactions** page in the [TaxJar app](https://app.taxjar.com). We're passing the following parameters:

- **Transaction ID**: A unique identifier for your order.
- **Transaction Date**: The date the transaction was recorded.
- **From Address**: The address you're shipping from, such as a warehouse or business location.
- **To Address**: The buyer's shipping address or destination of the order.
- **Amount**: Total amount of the order, **including shipping** and **excluding sales tax**. Yeah, this is a gotcha we're planning to fix in the next API version.
- **Shipping**: Total amount of shipping for the order.
- **Sales Tax**: Total amount of sales tax collected.
- **Line Items**: A nested array of items purchased in the order. Includes the product ID, description, and amount of sales tax collected for the line item.

A successful response will return back the imported order transaction. Nifty!

## Error Handling

```csharp
using Taxjar;
var client = new TaxjarApi();

try
{
  // Invalid request
  var order = client.CreateOrder(new {
    transaction_date = "2015/05/04",
    to_country = "US",
    to_state = "CA",
    to_zip = "90002",
    amount = 17.45,
    shipping = 1.5,
    sales_tax = 0.95
  });
}
catch(TaxjarException e)
{
  // 406 Not Acceptable – transaction_id is missing
  e.TaxjarError.Error;
  e.TaxjarError.Detail;
  e.TaxjarError.StatusCode;
}
```

When invalid data is sent to TaxJar or we encounter an error, we'll throw a `TaxjarException` with the HTTP status code and error message. To catch these exceptions, you can use the example to the right. Here's a list of common [error response classes](/api/reference/?csharp#errors) for reference:

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

## Resources & Help

If you have any questions about using our sales tax API for C# / .NET, please [contact us](https://www.taxjar.com/contact/) or tweet [@TaxJarDev](https://twitter.com/TaxJarDev). We'll help you out as soon as we can!

- [C# / .NET Sales Tax API Reference](/api/reference/?csharp)
- [General SmartCalcs FAQs](https://support.taxjar.com/knowledge_base/categories/smartcalcs)
- [taxjar.net on GitHub](https://github.com/taxjar/taxjar.net)
- [taxjar.net on NuGet](https://www.nuget.org/packages/TaxJar/)
