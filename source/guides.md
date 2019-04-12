---
title: Sales Tax API Guides
description: "Tips and tricks on how to use SmartCalcs, TaxJar's sales tax API."
preferred_url: https://developers.taxjar.com/api/guides/
toc_header: "API Guides"
---

# Quickstart Guides

Using one of our official API clients? Hit the ground running with our quickstart guides:

- <img class="client-icon" src="../images/clients/ruby-logo.png" width="16"> [Ruby Quickstart](/api/guides/ruby/)
- <img class="client-icon" src="../images/clients/python-logo.png" width="16"> [Python Quickstart](/api/guides/python/)
- <img class="client-icon" src="../images/clients/php-logo.png" width="16"> [PHP Quickstart](/api/guides/php/)
- <img class="client-icon" src="../images/clients/node-logo.png" width="16"> [Node Quickstart](/api/guides/node/)
- <img class="client-icon" src="../images/clients/csharp-logo.svg" width="16"> [C# / .NET Quickstart](/api/guides/csharp/)
- <img class="client-icon" src="../images/clients/java-logo.svg" width="16"> [Java Quickstart](/api/guides/java/)

You'll learn how to set up the API client, authenticate with TaxJar, and make common requests using our sales tax API such as sales tax calculations and pushing transactions into TaxJar.

# Product Exemptions

> Mixed Order of Exempt and Non-Exempt Clothing in NY

```shell
$ curl https://api.taxjar.com/v2/taxes \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "to_city": "Mahopac",
    "to_state": "NY",
    "to_zip": "10541",
    "to_country": "US",
    "from_city": "Delmar",
    "from_state": "NY",
    "from_zip": "12054",
    "from_country": "US",
    "amount": 29.94,
    "shipping": 7.99,
    "line_items": [
      {
        "quantity": 1,
        "unit_price": 19.99,
        "product_tax_code": "20010"
      },
      {
        "quantity": 1,
        "unit_price": 9.95,
        "product_tax_code": "20010"
      }
    ]
  }'
```

> Taxability By Line Item

```json
{
  "tax": {
    "order_total_amount": 37.93,
    "shipping": 7.99,
    "taxable_amount": 37.93,
    "amount_to_collect": 1.98,
    "rate": 0.05218,
    "has_nexus": true,
    "freight_taxable": true,
    "tax_source": "destination",
    "breakdown": {
      "taxable_amount": 37.93,
      "tax_collectable": 1.98,
      "combined_tax_rate": 0.05218,
      "state_taxable_amount": 7.99,
      "state_tax_rate": 0.04,
      "state_tax_collectable": 0.32,
      "county_taxable_amount": 37.93,
      "county_tax_rate": 0.04,
      "county_tax_collectable": 1.52,
      "city_taxable_amount": 0.0,
      "city_tax_rate": 0.0,
      "city_tax_collectable": 0.0,
      "special_district_taxable_amount": 37.93,
      "special_tax_rate": 0.00375,
      "special_district_tax_collectable": 0.14,
      "shipping": {
        "taxable_amount": 7.99,
        "tax_collectable": 0.67,
        "combined_tax_rate": 0.08375,
        "state_taxable_amount": 7.99,
        "state_sales_tax_rate": 0.04,
        "state_amount": 0.32,
        "county_taxable_amount": 7.99,
        "county_tax_rate": 0.04,
        "county_amount": 0.32,
        "city_taxable_amount": 0.0,
        "city_tax_rate": 0.0,
        "city_amount": 0.0,
        "special_taxable_amount": 7.99,
        "special_tax_rate": 0.00375,
        "special_district_amount": 0.03
      },
      "line_items": [
        {
          "id": "1",
          "taxable_amount": 19.99,
          "tax_collectable": 0.87,
          "combined_tax_rate": 0.04375,
          "state_taxable_amount": 0.0,
          "state_sales_tax_rate": 0.0,
          "state_amount": 0.0,
          "county_taxable_amount": 19.99,
          "county_tax_rate": 0.04,
          "county_amount": 0.8,
          "city_taxable_amount": 0.0,
          "city_tax_rate": 0.0,
          "city_amount": 0.0,
          "special_district_taxable_amount": 19.99,
          "special_tax_rate": 0.00375,
          "special_district_amount": 0.07
        },
        {
          "id": "2",
          "taxable_amount": 9.95,
          "tax_collectable": 0.44,
          "combined_tax_rate": 0.04375,
          "state_taxable_amount": 0.0,
          "state_sales_tax_rate": 0.0,
          "state_amount": 0.0,
          "county_taxable_amount": 9.95,
          "county_tax_rate": 0.04,
          "county_amount": 0.4,
          "city_taxable_amount": 0.0,
          "city_tax_rate": 0.0,
          "city_amount": 0.0,
          "special_district_taxable_amount": 9.95,
          "special_tax_rate": 0.00375,
          "special_district_amount": 0.04
        }
      ]
    }
  }
}
```

In many states (and countries) certain products are either exempted from sales tax, taxed at a lower rate, or even exempted below certain prices and within only certain jurisdictions. To help you make an accurate determination about how an individual item should be taxed, [SmartCalcs](https://www.taxjar.com/api/) allows you to submit a `product_tax_code` parameter with each `line_item` in an order.

Let’s take one of the most commonly cited examples: clothing items sold in the state of New York that fall below the threshold of $110. Interestingly, these types of items are exempt from the state tax rate, but are only exempt from county taxes in certain jurisdictions. Fortunately, you need not worry about those rules. Simply pass in a value of **20010** in the `product_tax_code` parameter of a `line_item`, and we’ll do the work for you.

### Mixed Order Example

Here’s an example of an order in NY that contains a mixed order of exempt and non-exempt clothing items. Interestingly, we’ve chosen a destination address in a county where the clothing exemption does not apply (it only applies at the state level).

As you can see in the response, SmartCalcs figures out the taxability by item, by jurisdiction. All you need to do is tell us an item is “Clothing” using `product_tax_code` **20010**.

To obtain the current list of supported product_tax_codes, they are always available via our [Categories endpoint](https://developers.taxjar.com/api/#categories).

#### Helpful Tip

If you have an item that you believe should be “exempt” from sales tax, but it does not fall under on of our supported product codes, you may use the default exempt code of **99999**.

#### Additional Reminder

If no `product_tax_code` is submitted with a `line_item`, then that item is deemed to be fully taxable. You do not need to send any information to tell SmartCalcs that something is taxable. It assumes that, unless told otherwise through the existence of a `product_tax_code`.

# Handling Nexus

The very first bit of logic used when calculating sales tax is the notion of [nexus](https://blog.taxjar.com/sales-tax-nexus-definition/). In short, whether or not your business has sufficient presence within a taxing jurisdiction to require you to remit sales tax.

Using TaxJar's [SmartCalcs API](https://www.taxjar.com/api/), there are two ways for you let us know if you have nexus for a given order:

1. If you are calculating tax just for your own business, you can store all of your nexus information within your [TaxJar account](https://app.taxjar.com/api_sign_up/). Just use the [State Settings page](https://app.taxjar.com/account#states) to enter all of your business locations. When you make a call to SmartCalcs with your API token, we will look at your nexus information on file and calculate sales tax when appropriate. Of course, our ability to calculate properly will depend on your maintaining an accurate list of nexus locations. To add states and nexus locations, just go to the [State Settings page](https://app.taxjar.com/account#states) and click the **Add State with Nexus** button.

2. If you would rather not load your locations into your TaxJar account or if you are trying to perform calculations for other merchants, you may pass in nexus information with each call to SmartCalcs. At minimum, if you pass in valid values for nexus_country and nexus_state, we can make a proper nexus determination.

> No Nexus, Non-Taxable Sale

```json
{
  "tax": {
    "amount_to_collect": 0,
    "freight_taxable": false,
    "has_nexus": false,
    "rate": 0,
    "tax_source": null,
    "taxable_amount": 0
  }
}
```

> Mixed Order with `nexus_address` Parameters

```shell
$ curl https://api.taxjar.com/v2/taxes \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "to_city": "Mahopac",
    "to_state": "NY",
    "to_zip": "10541",
    "to_country": "US",
    "from_city": "Delmar",
    "from_state": "NY",
    "from_zip": "12054",
    "from_country": "US",
    "amount": 215.30,
    "shipping": 0,
    "line_items": [
      {
        "quantity": 1,
        "unit_price": 150,
        "product_tax_code": "20010"
      },
      {
        "quantity": 3,
        "unit_price": 19.95,
        "shipping": 5.45,
        "product_tax_code": "20010"
      }
    ],
    "nexus_addresses": [
      {
        "city": "Delmar",
        "state": "NY",
        "zip": "12054",
        "country": "US"
      }
    ]
  }'
```

### Nexus Address Example

You have set up your TaxJar account and have an API token, but have no nexus address information on file. Try submitting the same New York clothing article found under [Product Exemptions](#product-exemptions).

You should see a response similar to the one on the right.

TaxJar has no knowledge of your nexus, and because no nexus information was passed into SmartCalcs, we interpret it as a non-taxable sale.

Now, send the same order in, but with the optional `nexus_addresses[]` parameters filled in.

You should now see the same result as shown in the [Product Exemption example](#product-exemptions).

**Important:** While `nexus_addresses[]` parameters are optional, if you do use them, you must at a minimum send in `country` and `state` parameters. Otherwise, we can’t return a value.

### When to Use `from_` Address Information

In general, we recommend always passing in the address information from which an order ships. This gives us what we need to make sourcing determinations in both origin and destination states (as well as provinces and countries). If you know that you are shipping within/to a destination state, you may elect not to send `from_` address information. In addition, in the absence of `from_address` parameters, we will look to your State Settings in your TaxJar account, using the address information there. However, we recommend a best practice of always sending `from_` address information.

# Marketplaces

If you are building or operating a [marketplace platform](https://www.taxjar.com/marketplaces/), allowing multiple sellers to list and sell their items through you, there are a few different options.

First, if you are the merchant of record, then you are responsible for collecting and remitting sales tax for all of those sales. In such a case, you would use TaxJar's [SmartCalcs API](https://www.taxjar.com/api/) to calculate the proper amount of tax to collect, then, if you wish to use TaxJar for reporting and filing, send completed orders to TaxJar using the same API token that is tied to your account.

In most cases that we’ve seen, marketplaces are not acting as the seller of record, so the sales tax responsibilities and liabilities fall to the merchant. However, most marketplaces, as a courtesy, like to provide sales tax calculation services at the point of checkout. If you are building/operating such a marketplace, then you would use your TaxJar account and its API token to make calls to our SmartCalcs service, sending in order information and receiving the corresponding sales tax to collect.

Because we won’t know anything about a given merchant when you call SmartCalcs with their order information, you will need to submit additional parameters to get an accurate sales tax rate. For example, we need to know in what jurisdictions the merchant has nexus in order to determine whether an order is even subject to sales tax. For this purpose, we have the `nexus_address` parameters. Simply pass in a list of addresses with each order to get proper nexus determination. Of course, in order to provide this to SmartCalcs, you will need to have this information stored for each merchant. As such, we recommend storing all merchant business location addresses in your system, so that it is easy to pass in when calculating sales tax.

#### In Summary

- If you're building or operating a marketplace, TaxJar's [SmartCalcs API](https://www.taxjar.com/api/) can help you calculate sales tax.

- For most marketplaces where each merchant acts as the seller of record, you will need to submit `nexus_address` parameters for the merchant in every SmartCalcs API call.

- We recommend storing all merchant business location addresses in your system to pass in when calculating sales tax.

In addition to helping you calculate sales tax for your merchants, we also make it very easy to help them file and remit their sales tax to the states. [TaxJar’s transaction endpoints](https://developers.taxjar.com/api/#transactions) allow you to send completed order information to a merchant’s TaxJar account. Simply include the merchant’s TaxJar API token when posting, and those orders will show up in the merchant’s account with a return-ready report breaking out tax owed by jurisdiction. API calls to the Transactions endpoint do not get counted toward your monthly threshold. Merchants who choose to use TaxJar will simply pay us based on the number of transactions we’re processing for them on a monthly basis.

We also offer an affiliate program, which provides a revenue sharing opportunity back to you for each merchant who signs up for TaxJar’s reporting and filing through you. [Find out more here.](https://www.taxjar.com/affiliates/)

# Custom Apps & Carts

While SmartCalcs was originally created as a way for eCommerce marketplaces to provide compliance help for merchants, our [transaction endpoints](https://developers.taxjar.com/api/#transactions) also make it possible to build an integration from any shopping cart, invoicing tool or accounting platform to TaxJar.

You only need two things to make this possible:

1. A customer's TaxJar API token (so that you are sending the data to the proper account). This will require some work to collect and store the user submitted token.

2. [Sufficient order detail information](https://developers.taxjar.com/api/#post-create-an-order-transaction) for TaxJar to generate accurate return-ready sales tax reports.

Please note that every pushed transaction requires a unique ID string. You can submit both orders and refunds as well as instructions to edit or delete them.

How and when to send these transactions to TaxJar is entirely up to you. Some potential ideas:

1. If you already provide customers with a reporting interface that allows them to select a date range to view orders within that range, simply add a button that uses the same date range to query and send those orders/refunds.

2. To enable a more automated solution, allow users to opt-in to regular transaction submissions. You can choose to do this upon saving completed orders to your platform's database or set up in batches that occur on a regular basis (e.g. nightly).

### Avoiding Unnecessary API Calls

Want a simple way to reduce the number of SmartCalcs calls you need to make? Compare the delivery address of an order or invoice to the list of `nexus_addresses` for your business or merchant. **If the delivery address falls in a different state than those in which your business (or merchant of sale) has nexus, no sales tax need be collected.** *Note, this only works for US-based sales. Overseas sales, especially in the European Union, have different rules.*

Furthermore, many carts estimate taxes in the cart or preview pages prior to checkout. You could consider eliminating this estimate or at least delaying it until the shopper is closer to completing the purchase. During checkout make sure you wait to call SmartCalcs tax calculations until the shipping address is complete. Many customers use an [address validation service](https://developers.taxjar.com/blog/address-validation-apis-and-plugins/) to ensure a valid shipping address prior to calling SmartCalcs with the final order totals and shipping `from` and `to` addresses.

# Cart Integrations

At TaxJar, we provide integrations for popular eCommerce platforms such as WooCommerce and Magento. All of our plugins and extensions are **built and maintained in-house** by eCommerce experts.

We currently provide API-driven cart integrations for the following platforms:

- <img class="client-icon" src="../images/integrations/magento.png" width="16"> [Magento](https://github.com/taxjar/taxjar-magento-extension)
- <img class="client-icon" src="../images/integrations/magento.png" width="16"> [Magento 2](https://github.com/taxjar/taxjar-magento2-extension)
- <img class="client-icon" src="../images/integrations/stripe.png" width="16"> [Stripe](https://stripe.com/docs/relay/taxjar)
- <img class="client-icon" src="../images/integrations/woocommerce.png" width="16"> [WooCommerce](https://github.com/taxjar/taxjar-woocommerce-plugin)

## Magento

Our Magento sales tax extensions currently support Magento 1.7.x - 1.9.x and Magento 2.0+. SmartCalcs is fully integrated for checkout calculations and zip-based rate imports as a fallback.

- Install our [Magento 2](https://marketplace.magento.com/taxjar-module-taxjar.html) or [Magento 1](https://marketplace.magento.com/taxjar-taxjar-salestaxautomation.html) extension from Magento Marketplace
- Get started and learn how it works with our [Extension Guide](https://www.taxjar.com/guides/integrations/magento/)
- Browse the code in our [GitHub Repository](https://github.com/taxjar/taxjar-magento-extension)
