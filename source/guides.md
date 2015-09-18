---
title: TaxJar API Guides
---

# Product Exemptions

> Mixed Order of Exempt and Non-Exempt Clothing in NY

```shell
curl https://api.taxjar.com/v2/taxes \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d amount=215.30 \
  -d from_city="Delmar" \
  -d from_state="NY" \
  -d from_zip="12054" \
  -d to_city="Mahopac" \
  -d to_state="NY" \
  -d to_zip="10541" \
  -d "line_items[][quantity]=1 \
  &line_items[][unit_price]=150 \
  &line_items[][product_tax_code]=20010" \
  -d "line_items[][quantity]=3 \
  &line_items[][unit_price]=19.95 \
  &line_items[][product_tax_code]=20010 \
  &line_items[][shipping]=5.45"
```

> Taxability By Line Item

```json
{
  "tax": {
    "order_total_amount": 215.3,
    "shipping": 5.45,
    "taxable_amount": 215.3,
    "amount_to_collect": 15.63,
    "rate": 0.08375,
    "has_nexus": true,
    "freight_taxable": true,
    "tax_source": "destination",
    "breakdown": {
      "shipping": {
        "taxable_amount": 5.45,
        "tax_collectable": 0.46,
        "state_amount": 0.22,
        "state_sales_tax_rate": 0.04,
        "county_amount": 0.22,
        "county_tax_rate": 0.04,
        "city_amount": 0,
        "city_tax_rate": 0,
        "special_district_amount": 0.02,
        "special_tax_rate": 0.00375
      },
      "state_taxable_amount": 155.45,
      "state_tax_collectable": 6.22,
      "county_taxable_amount": 215.3,
      "county_tax_collectable": 8.61,
      "city_taxable_amount": 0,
      "city_tax_collectable": 0,
      "special_district_taxable_amount": 215.3,
      "special_district_tax_collectable": 0.8,
      "line_items": [
        {
          "id": "1",
          "tax_collectable": 12.56,
          "state_taxable_amount": 150,
          "state_sales_tax_rate": 0.04,
          "state_amount": 6,
          "county_taxable_amount": 150,
          "county_tax_rate": 0.04,
          "county_amount": 6,
          "city_taxable_amount": 0,
          "city_tax_rate": 0,
          "city_amount": 0,
          "special_district_taxable_amount": 150,
          "special_tax_rate": 0.00375,
          "special_district_amount": 0.56
        },
        {
          "id": "2",
          "tax_collectable": 2.62,
          "state_taxable_amount": 0,
          "state_sales_tax_rate": 0,
          "state_amount": 0,
          "county_taxable_amount": 59.85,
          "county_tax_rate": 0.04,
          "county_amount": 2.39,
          "city_taxable_amount": 0,
          "city_tax_rate": 0,
          "city_amount": 0,
          "special_district_taxable_amount": 59.85,
          "special_tax_rate": 0.00375,
          "special_district_amount": 0.22
        }
      ]
    }
  }
}
```

In many states (and countries) certain products are either exempted from sales tax, taxed at a lower rate, or even exempted below certain prices and within only certain jurisdictions. To help you make an accurate determination about how an individual item should be taxed, [SmartCalcs](http://www.taxjar.com/api/) allows you to submit a `product_tax_code` parameter with each `line_item` in an order.

Let’s take one of the most commonly cited examples: clothing items sold in the state of New York that fall below the threshold of $110. Interestingly, these types of items are exempt from the state tax rate, but are only exempt from county taxes in certain jurisdictions. Fortunately, you need not worry about those rules. Simply pass in a value of **20010** in the `product_tax_code` parameter of a `line_item`, and we’ll do the work for you.

### Mixed Order Example

Here’s an example of an order in NY that contains a mixed order of exempt and non-exempt clothing items. Interestingly, we’ve chosen a destination address in a county where the clothing exemption does not apply (it only applies at the state level).

As you can see in the response, SmartCalcs figures out the taxability by item, by jurisdiction. All you need to do is tell us an item is “Clothing” using `product_tax_code` **20010**.

To obtain the current list of supported product_tax_codes, they are always available via our [Categories endpoint](http://developers.taxjar.com/api/#categories). 

#### Helpful Tip

If you have an item that you believe should be “exempt” from sales tax, but it does not fall under on of our supported product codes, you may use the default exempt code of **99999**.

#### Additional Reminder

If no `product_tax_code` is submitted with a `line_item`, then that item is deemed to be fully taxable. You do not need to send any information to tell SmartCalcs that something is taxable. It assumes that, unless told otherwise through the existence of a `product_tax_code`.

# Handling Nexus

The very first bit of logic used when calculating sales tax is the notion of [nexus](http://blog.taxjar.com/sales-tax-nexus-definition/). In short, whether or not your business has sufficient presence within a taxing jurisdiction to require you to remit sales tax.

Using TaxJar's [SmartCalcs API](http://www.taxjar.com/api/), there are two ways for you let us know if you have nexus for a given order:

1. If you are calculating tax just for your own business, you can store all of your nexus information within your [TaxJar account](https://app.taxjar.com/api_sign_up/). Just use the [State Settings page](https://app.taxjar.com/account#states) to enter all of your business locations. When you make a call to SmartCalcs with your API token, we will look at your nexus information on file and calculate sales tax when appropriate. Of course, our ability to calculate properly will depend on your maintaining an accurate list of nexus locations. To add states and nexus locations, just go to the [State Settings page](https://app.taxjar.com/account#states) and click the **Add State with Nexus** button. 

2. If you would rather not load your locations into your TaxJar account or if you are trying to perform calculations for other merchants, you may pass in nexus information with each call to SmartCalcs. At minimum, if you pass in valid values for nexus_country and nexus_state, we can make a proper nexus determination.

> No Nexus, Non-Taxable Sale

```json
{
  "tax": {
    "taxable_amount": 0,
    "amount_to_collect": 0,
    "rate": 0,
    "has_nexus": false,
    "freight_taxable": null,
    "tax_source": null
  }
}
```

> Mixed Order with `nexus_address` Parameters

```shell
curl https://api.taxjar.com/v2/taxes \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d amount=215.30 \
  -d from_city="Delmar" \
  -d from_state="NY" \
  -d from_zip="12054" \
  -d to_city="Mahopac" \
  -d to_state="NY" \
  -d to_zip="10541" \
  -d "line_items[][quantity]=1 \
  &line_items[][unit_price]=150 \
  &line_items[][product_tax_code]=20010" \
  -d "line_items[][quantity]=3 \
  &line_items[][unit_price]=19.95 \
  &line_items[][product_tax_code]=20010 \
  &line_items[][shipping]=5.45" \
  -d "nexus_addresses[][city]='Delmar' \
  &nexus_addresses[][state]='NY' \
  &nexus_addresses[][zip]=12054 \
  &nexus_addresses[][country]='US'"
```

### Nexus Address Example

You have set up your TaxJar account and have an API token, but have no nexus address information on file. Try submitting the same New York clothing article found under [Product Exemptions](#product-exemptions).

You should see a response similar to the one on the right.

TaxJar has no knowledge of your nexus, and because no nexus information was passed into SmartCalcs, we interpret it as a non-taxable sale.

Now, send the same order in, but with the optional nexus_address parameters filled in.

You should now see the same result as shown in the [Product Exemption example](#product-exemptions).

**Important:** While nexus_addresses parameters are optional, if you do use them, you must, as minimum send in Country and State parameters. Otherwise, we can’t return a value.

### When to Use `from_` Address Information

In general, we recommend always passing in the address information from which an order ships. This gives us what we need to make sourcing determinations in both origin and destination states (as well as provinces and countries). If you know that you are shipping within/to a destination state, you may elect not to send `from_` address information. In addition, in the absence of `from_address` parameters, we will look to your State Settings in your TaxJar account, using the address information there. However, we recommend a best practice of always sending `from_` address information.

# Marketplaces

If you are building or operating a [marketplace platform](http://www.taxjar.com/marketplaces/), allowing multiple sellers to list and sell their items through you, there are a few different options.

First, if you are the merchant of record, then you are responsible for collecting and remitting sales tax for all of those sales. In such a case, you would use TaxJar's [SmartCalcs API](http://www.taxjar.com/api/) to calculate the proper amount of tax to collect, then, if you wish to use TaxJar for reporting and filing, send completed orders to TaxJar using the same API token that is tied to your account.

In most cases that we’ve seen, marketplaces are not acting as the seller of record, so the sales tax responsibilities and liabilities fall to the merchant. However, most marketplaces, as a courtesy, like to provide sales tax calculation services at the point of checkout. If you are building/operating such a marketplace, then you would use your TaxJar account and its API token to make calls to our SmartCalcs service, sending in order information and receiving the corresponding sales tax to collect.

Because we won’t know anything about a given merchant when you call SmartCalcs with their order information, you will need to submit additional parameters to get an accurate sales tax rate. For example, we need to know in what jurisdictions the merchant has nexus in order to determine whether an order is even subject to sales tax. For this purpose, we have the `nexus_address` parameters. Simply pass in a list of addresses with each order to get proper nexus determination. Of course, in order to provide this to SmartCalcs, you will need to have this information stored for each merchant. As such, we recommend storing all merchant business location addresses in your system, so that it is easy to pass in when calculating sales tax.

#### In Summary

- If you're building or operating a marketplace, TaxJar's [SmartCalcs API](http://www.taxjar.com/api/) can help you calculate sales tax.

- For most marketplaces where each merchant acts as the seller of record, you'll need to submit `nexus_address` parameters for the merchant in every SmartCalcs API call.

- We recommend storing all merchant business location addresses in your system to pass in when calculating sales tax.

### Avoiding Unnecessary API Calls

Want a simple way to reduce the number of SmartCalcs calls you need to make? Compare the delivery address of an order to the list of `nexus_addresses` that a merchant has on file with you. **If the delivery address falls in a different state than those in which a merchant has nexus, no sales tax need be collected.** *Note, this only works for US-based sales. Overseas sales, especially in the European Union, have different rules.*

In addition to helping you calculate sales tax for your merchants, we also make it very easy to help them file and remit their sales tax to the states. [TaxJar’s Transactions endpoint](http://developers.taxjar.com/api/#get-list-order-transactions) allows you to send completed order information to a merchant’s TaxJar account. Simply include the merchant’s TaxJar API token when posting, and those orders will show up in the merchant’s account with a return-ready report breaking out tax owed by jurisdiction. API calls to the Transactions endpoint do not get counted toward your monthly threshold. Merchants who choose to use TaxJar will simply pay us based on the number of transactions we’re processing for them on a monthly basis.

We also offer an affiliate program, which provides a revenue sharing opportunity back to you for each merchant who signs up for TaxJar’s reporting and filing through you. [Find out more here.](http://www.taxjar.com/affiliates/)