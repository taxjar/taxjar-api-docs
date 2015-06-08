---
title: TaxJar API Reference

language_tabs:

toc_footers:

includes:
  - errors

search: false
---

# Introduction

Welcome to the TaxJar API! You can use our API to access TaxJar API endpoints, which can get information on sales tax rates, categories or upload transactions.

You can view API request/response examples in the dark area to the right.


# Authentication

> Example Request With Authentication Headers

```shell
# Authorization headers must be passed for every request
curl "api_endpoint_here"
  -H "Authorization: Token token="9e0cd62a22f451701f29c3bde214c041""

or 

curl "api_endpoint_here"
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214c041"
```

> Make sure to replace `9e0cd62a22f451701f29c3bde214c041` with your API key.

TaxJar uses API keys to allow access to the API. You can register a new TaxJar API key at our [developer portal](http://taxjar.com/developers).

TaxJar expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: Token token="9e0cd62a22f451701f29c3bde214c041"`

or

`Authorization: Bearer 9e0cd62a22f451701f29c3bde214c041`

<aside class="notice">
You must replace <code>9e0cd62a22f451701f29c3bde214c041</code> with your personal API key.
</aside>


# Standard

The standard API endpoints provide for concise, easy to use sales tax rates and calculations.

The details of all enhanced API endpoints follow:

## Rates

### Show tax rates for a location

> Request Path

```
GET https://api.taxjar.com/v2/standard/rates/90002
```


> Request Body

```json
{
  "country": "US"
}
```

> Response Body

```json
{
  "rate": {
    "zip": "90002",
    "state": "CA",
    "state_rate": "0.065",
    "county": "LOS ANGELES",
    "county_rate": "0.01",
    "city": "WATTS",
    "city_rate": "0.0",
    "combined_district_rate": "0.015",
    "combined_rate": "0.09"
  }
}
```

This endpoint shows the sales tax rates for a given location.

#### Request

GET https://api.taxjar.com/v2/standard/rates/:zip

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
zip | string | required | The postal code for given location.
city | string | optional | The city for given location.
country | string | optional | The ISO two country code of the country for given location.

## Taxes

### Show sales tax for an order

> Request Path

```
POST https://api.taxjar.com/v2/standard/taxes
```

> Request Body

```json
{
  "from_country": "US",
  "from_zip": "90002",
  "from_state": "CA",
  "to_country": "US",
  "to_zip": "90001",
  "to_state": "CA",  
  "amount": 14.45,
  "shipping": 1.5
}
```

> Response Body

```json
{
  "tax": {
    "taxable_amount": "14.45",
    "amount_to_collect": 1.3,
    "rate": 0.09,
    "has_nexus": true,
    "freight_taxable": false,
    "tax_source": "destination",
    "breakdown": {
      "state_amount": 0.94,
      "state_sales_tax_rate": 0.065,
      "county_amount": 0.14,
      "county_rate": 0.01,
      "city_amount": 0,
      "city_tax_rate": 0,
      "special_district_amount": 0.22,
      "special_tax_rate": 0.015
    }
  }
}
```

This endpoint shows the sales tax that should be collected for a given order.

#### Request

POST https://api.taxjar.com/v2/standard/taxes

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
from_country | string | optional | The ISO two country code of the country where the order shipped from.
from_zip | string | optional | The postal code where the order shipped from.
from_state | string | optional | The state where the order shipped from.
from_city | string | optional | The city where the order shipped from.
from_street | string | optional | The street address where the order shipped from.
to_country | string | required | The ISO two country code of the country where the order shipped to.
to_zip | string | required | The postal code where the order shipped to.
to_state | string | required | The state where the order shipped to.
to_city | string | optional | The city where the order shipped to.
to_street | string | optional | The street address where the order shipped to.
amount | long | required | The total amount of the order.
shipping | long | required | The total amount of shipping for the order.

# Enhanced

The enhanced API endpoints provide for more detailed sales tax rates and calculations. It also supports extended reporting and filing capabilities for TaxJar users.

The details of all enhanced API endpoints follow:

## Categories

### List tax categories

> Request Path

```
GET https://api.taxjar.com/v2/enhanced/categories
```


> Response Body

```json
{
  "categories": [
     {
        "name": "Digital Goods",
        "product_tax_code": "31000",
        "description": "Digital products transferred electronically, meaning obtained by the purchaser by means other than tangible storage media."
     },
     {
        "name": "Clothing",
        "product_tax_code": "20010",
        "description": " All human wearing apparel suitable for general use"
     },
     {
        "name": "Non-Prescription",
        "product_tax_code": "51010",
        "description": "Drugs for human use without a prescription"
     },
     {
        "name": "Prescription",
        "product_tax_code": "51020",
        "description": "Drugs for human use with a prescription"
     },
     {
        "name": "Food & Groceries",
        "product_tax_code": "40030",
        "description": "Food for humans consumption, unprepared"
     },
     {
        "name": "Other Exempt",
        "product_tax_code": "99999",
        "description": "Item is exempt"
     },
     {
        "name": "Software as a Service",
        "product_tax_code": "30070",
        "description": "Pre-written software, delivered electronically, but access remotely."
     }
  ]
}
```

This endpoint lists all tax categories.

#### Request

GET https://api.taxjar.com/v2/enhanced/categories

## Rates

### Show tax rates for a location

> Request Path

```
GET https://api.taxjar.com/v2/enhanced/rates/90002
```

> Request Body

```json
{
  "country": "US"
}
```

> Response Body

```json
{
  "rate": {
    "zip": "90002",
    "state": "CA",
    "state_rate": "0.065",
    "county": "LOS ANGELES",
    "county_rate": "0.01",
    "city": "WATTS",
    "city_rate": "0.0",
    "combined_district_rate": "0.015",
    "combined_rate": "0.09"
  }
}
```

This endpoint shows the sales tax rates for a given location.

#### Request

GET https://api.taxjar.com/v2/enhanced/rates/:zip

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
country | string | optional | The ISO two country code of the country for given location.
zip | string | required | The postal code for given location.
city | string | optional | The city for given location.

## Taxes

### Show sales tax for an order

> Request Path

```
POST https://api.taxjar.com/v2/enhanced/taxes
```

> Request Body

```json
{
  "from_country": "US",
  "from_zip": "07001",
  "from_state": "NJ",
  "to_country": "US",
  "to_zip": "07446",
  "to_state": "NJ",  
  "amount": 16.50,
  "shipping": 1.5,
  "line_items": [
    {
      "line_item": {
        "quantity": "1",
        "unit_price": "15.0",
        "product_tax_code": 20010
      }
    }
  ]
}
```

> Response Body

```json
{
  "tax": {
    "order_total_amount": 16.5,
    "amount_to_collect": 1.16,
    "has_nexus": true,
    "freight_taxable": true,
    "tax_source": "destination",
    "breakdown": {
      "shipping": {
        "state_amount": 0.11,
        "state_sales_tax_rate": 0.07,
        "county_amount": 0,
        "county_tax_rate": 0,
        "city_amount": 0,
        "city_tax_rate": 0,
        "special_district_amount": 0,
        "special_tax_rate": 0
      },
      "state_taxable_amount": 16.5,
      "state_tax_collectable": 1.16,
      "county_taxable_amount": 0,
      "county_tax_collectable": 0,
      "city_taxable_amount": 0,
      "city_tax_collectable": 0,
      "special_district_taxable_amount": 0,
      "special_district_tax_collectable": 0,
      "line_items": [
        {
          "id": "1",
          "state_taxable_amount": 15,
          "state_sales_tax_rate": 0.07,
          "county_taxable_amount": 0,
          "county_tax_rate": 0,
          "city_taxable_amount": 0,
          "city_tax_rate": 0,
          "special_district_taxable_amount": 0,
          "special_tax_rate": 0
        }
      ]
    }
  }
}
```

This endpoint shows the sales tax that should be collected for a given order.

#### Request

POST https://api.taxjar.com/v2/enhanced/taxes

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
from_country | string | optional | The ISO two country code of the country where the order shipped from.
from_zip | string | optional | The postal code where the order shipped from.
from_state | string | optional | The state where the order shipped from.
from_city | string | optional | The city where the order shipped from.
from_street | string | optional | The street address where the order shipped from.
to_country | string | required | The ISO two country code of the country where the order shipped to.
to_zip | string | required | The postal code where the order shipped to.
to_state | string | required | The state where the order shipped to.
to_city | string | optional | The city where the order shipped to.
to_street | string | optional | The street address where the order shipped to.
amount | long | required | The total amount of the order.
shipping | long | required | The total amount of shipping for the order.
nexus_addresses[][address_id] | long | optional | The unique identifier of the given nexus address.
nexus_addresses[][country] | integer | optional | The ISO two country code of the country for the nexus address.
nexus_addresses[][zip] | long | optional | The postal code for the nexus address.
nexus_addresses[][state] | string | optional | The state for the nexus address.
nexus_addresses[][city] | string | optional | The city for the nexus address.
nexus_addresses[][street] | long | optional | The street address for the nexus address.

## Transactions

### Create an order transaction

> Request Path

```
POST https://api.taxjar.com/v2/enhanced/transactions/orders
```

> Request Body

```json
{
  "transaction_id": "123",
  "transaction_date": "2015/05/14",
  "to_country": "US",
  "to_zip": "90002",
  "to_state": "CA",
  "to_city": "Los Angeles",
  "to_street": "123 Palm Grove Ln",
  "amount": 17.45,
  "shipping": 1.5,
  "sales_tax": 0.95,
  "line_items": [
    {
      "quantity": 1,
      "product_identifier": "12-34243-9",
      "description": "Fuzzy Widget",
      "unit_price": 15.0,
      "sales_tax": 0.95
    }
  ]
}
```

> Response Body

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
    "amount": "17.45",
    "shipping": "1.5",
    "sales_tax": "0.95",
    "line_items": [
      {
        "id": 1,
        "quantity": 1,
        "product_identifier": "12-34243-9",
        "description": "Fuzzy Widget",
        "unit_price": "15.0",
        "discount": "0.0",
        "sales_tax": "0.95"
      }
    ]
  }
}
```

This endpoint creates a new order transaction.

#### Request

POST https://api.taxjar.com/v2/enhanced/transactions/orders

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | The unique identifier of the given order transaction.
transaction_date | date | required | The date the transaction was originally recorded.
from_country | string | optional | The ISO two country code of the country where the order shipped from.
from_zip | string | optional | The postal code where the order shipped from.
from_state | string | optional | The state where the order shipped from.
from_city | string | optional | The city where the order shipped from.
from_street | string | optional | The street address where the order shipped from.
to_country | string | required | The ISO two country code of the country where the order shipped to.
to_zip | string | required | The postal code where the order shipped to.
to_state | string | required | The state where the order shipped to.
to_city | string | optional | The city where the order shipped to.
to_street | string | optional | The street address where the order shipped to.
amount | long | required | The total amount of the order.
shipping | long | required | The total amount of shipping for the order.
sales_tax | long | required | The total amount of sales tax collected for the order.
line_items[][id] | long | optional | The unique identifier of the given line item.
line_items[][quantity] | integer | optional | The quantity for the item.
line_items[][product_identifier] | string | optional | The product identifier for the item.
line_items[][description] | string | optional | The description of the line item.
line_items[][unit_price] | long | optional | The unit price for the item.
line_items[][discount] | long | optional | The discount amount for the item.
line_items[][sales_tax] | long | optional | The sales tax collected for the item.

### Update an order transaction

> Request Path

```
PUT https://api.taxjar.com/v2/enhanced/transactions/orders/123
```

> Request Body

```json
{
  "amount": 17.95,
  "shipping": 2.0,
  "line_items": [
    {
      "quantity": 1,
      "product_identifier": "12-34243-0",
      "description": "Heavy Widget",
      "unit_price": "15.0",
      "discount": "0.0",
      "sales_tax": "0.95"
    }
  ]
}
```

> Response Body

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

This endpoint updates an existing order transaction.

#### Request

PUT https://api.taxjar.com/v2/enhanced/transactions/orders/:transaction_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | The unique identifier of the given order transaction.
transaction_date | date | optional | The date the transaction was originally recorded.
from_country | string | optional | The ISO two country code of the country where the order shipped from.
from_zip | string | optional | The postal code where the order shipped from.
from_state | string | optional | The state where the order shipped from.
from_city | string | optional | The city where the order shipped from.
from_street | string | optional | The street address where the order shipped from.
to_country | string | optional | The ISO two country code of the country where the order shipped to.
to_zip | string | optional | The postal code where the order shipped to.
to_state | string | optional | The state where the order shipped to.
to_city | string | optional | The city where the order shipped to.
to_street | string | optional | The street address where the order shipped to.
amount | long | optional | The total amount of the order.
shipping | long | optional | The total amount of shipping for the order.
sales_tax | long | optional | The total amount of sales tax collected for the order.
line_items[][id] | long | optional | The unique identifier of the given line item.
line_items[][quantity] | integer | optional | The quantity for the item.
line_items[][product_identifier] | string | optional | The product identifier for the item.
line_items[][description] | string | optional | The description of the line item.
line_items[][unit_price] | long | optional | The unit price for the item.
line_items[][discount] | long | optional | The discount amount for the item.
line_items[][sales_tax] | long | optional | The sales tax collected for the item.

### Create an refund transaction

> Request Path

```
POST https://api.taxjar.com/v2/enhanced/transactions/refunds
```

> Request Body

```json
{
  "transaction_id": "321",
  "transaction_date": "2015/05/14",
  "transaction_reference_id": "123",
  "to_country": "US",
  "to_zip": "90002",
  "to_state": "CA",
  "to_city": "Los Angeles",
  "to_street": "123 Palm Grove Ln",
  "amount": 17.45,
  "shipping": 1.5,
  "sales_tax": 0.95,
  "line_items": [
    {
      "quantity": 1,
      "product_identifier": "12-34243-9",
      "description": "Fuzzy Widget",
      "unit_price": 15.0,
      "sales_tax": 0.95
    }
  ]
}

```

> Response Body

```json
{
  "refund": {
    "transaction_id": "321",
    "user_id": 10649,
    "transaction_date": "2015-05-14T00:00:00Z",
    "transaction_reference_id": "123",
    "to_country": "US",
    "to_zip": "90002",
    "to_state": "CA",
    "to_city": "LOS ANGELES",
    "to_street": "123 Palm Grove Ln",
    "amount": "17.45",
    "shipping": "1.5",
    "sales_tax": "0.95",
    "line_items": [
      {
        "id": 1,
        "quantity": 1,
        "product_identifier": "12-34243-9",
        "description": "Fuzzy Widget",
        "unit_price": "15.0",
        "discount": "0.0",
        "sales_tax": "0.95"
      }
    ]
  }
}
```

This endpoint creates a new refund transaction.

#### Request

POST https://api.taxjar.com/v2/enhanced/transactions/refunds

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | The unique identifier of the given refund transaction.
transaction_reference_id | string | required | The unique identifier of the corresponding order transaction for the refund.
transaction_date | date | required | The date the transaction was originally recorded.
from_country | string | optional | The ISO two country code of the country where the order shipped from.
from_zip | string | optional | The postal code where the order shipped from.
from_state | string | optional | The state where the order shipped from.
from_city | string | optional | The city where the order shipped from.
from_street | string | optional | The street address where the order shipped from.
to_country | string | required | The ISO two country code of the country where the order shipped to.
to_zip | string | required | The postal code where the order shipped to.
to_state | string | required | The state where the order shipped to.
to_city | string | optional | The city where the order shipped to.
to_street | string | optional | The street address where the order shipped to.
amount | long | required | The total amount of the refunded order.
shipping | long | required | The total amount of shipping for the refunded order.
sales_tax | long | required | The total amount of sales tax collected for the refunded order.
line_items[][id] | long | optional | The unique identifier of the given line item.
line_items[][quantity] | integer | optional | The quantity for the item.
line_items[][product_identifier] | string | optional | The product identifier for the item.
line_items[][description] | string | optional | The description of the line item.
line_items[][unit_price] | long | optional | The unit price for the item.
line_items[][discount] | long | optional | The discount amount for the item.
line_items[][sales_tax] | long | optional | The sales tax collected for the item.

### Update an refund transaction

> Request Path

```
PUT https://api.taxjar.com/v2/enhanced/transactions/refunds/321
```

> Request Body

```json
{
  "amount": 17.95,
  "shipping": 2.0,
  "line_items": [
    {
      "quantity": 1,
      "product_identifier": "12-34243-0",
      "description": "Heavy Widget",
      "unit_price": 15.0,
      "sales_tax": 0.95
    }
  ]
}
```

> Response Body

```json
{
  "refund": {
    "transaction_id": "321",
    "user_id": 10649,
    "transaction_date": "2015-05-14T00:00:00Z",
    "transaction_reference_id": "123",
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

This endpoint updates an existing refund transaction.

#### Request

PUT https://api.taxjar.com/v2/enhanced/transactions/refunds/:transaction_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | The unique identifier of the given transaction.
transaction_reference_id | string | required | The unique identifier of the corresponding order transaction for the refund.
transaction_date | date | optional | The date the transaction was originally recorded.
from_country | string | optional | The ISO two country code of the country where the order shipped from.
from_zip | string | optional | The postal code where the order shipped from.
from_state | string | optional | The state where the order shipped from.
from_city | string | optional | The city where the order shipped from.
from_street | string | optional | The street address where the order shipped from.
to_country | string | optional | The ISO two country code of the country where the refunded order shipped to.
to_zip | string | optional | The postal code where the refunded order shipped to.
to_state | string | optional | The state where the refunded order shipped to.
to_city | string | optional | The city where the refunded order shipped to.
to_street | string | optional | The street address where the refunded order shipped to.
amount | long | optional | The total amount of the refunded order.
shipping | long | optional | The total amount of shipping for the refunded order.
sales_tax | long | optional | The total amount of sales tax collected for the refunded order.
line_items[][id] | long | optional | The unique identifier of the given line item.
line_items[][quantity] | integer | optional | The quantity for the item.
line_items[][product_identifier] | string | optional | The product identifier for the item.
line_items[][description] | string | optional | The description of the line item.
line_items[][unit_price] | long | optional | The unit price for the item.
line_items[][discount] | long | optional | The discount amount for the item.
line_items[][sales_tax] | long | optional | The sales tax collected for the item.
