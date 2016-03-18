---
title: TaxJar API Reference
description: "Documentation and code examples for SmartCalcs, TaxJar's sales tax API."
preferred_url: http://developers.taxjar.com/api/reference/

language_tabs:
  - shell
  - ruby
  - php
  - javascript

toc_footers:
  - <a href='http://www.taxjar.com/api/docs/'>v1 Documentation</a>

includes:
  - errors

search: false
---

# Introduction

Welcome to the TaxJar Sales Tax API! You can use our API to get information on sales tax rates, categories or upload transactions.

We currently provide API clients for the following languages:

- <img class="client-icon" src="../images/clients/ruby-logo.png" width="16"> [Ruby Sales Tax API](https://github.com/taxjar/taxjar-ruby) *via RubyGems as `taxjar-ruby`*
- <img class="client-icon" src="../images/clients/php-logo.png" width="16"> [PHP Sales Tax API](https://github.com/taxjar/taxjar-php) *via Composer as `taxjar/taxjar-php`*
- <img class="client-icon" src="../images/clients/node-logo.png" width="16"> [Node Sales Tax API](https://github.com/taxjar/taxjar-node) *via NPM as `taxjar`*

Before getting started, you'll need to [sign up for TaxJar](https://app.taxjar.com/api_sign_up/basic/) and get an API key. If you have any questions or would like to request support for a new client language, feel free to [contact us](mailto:support@taxjar.com).

# Authentication

> Example Request With Authentication Headers

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");
```

```shell
# Authorization headers must be passed for every request
curl "API_ENDPOINT" \
  -H "Authorization: Token token="9e0cd62a22f451701f29c3bde214""

or

curl "API_ENDPOINT" \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"
```

> Make sure to replace `9e0cd62a22f451701f29c3bde214` with your API key.

TaxJar uses API keys to allow access to the API. If you're new to TaxJar, you'll need to [sign up for an account](https://app.taxjar.com/api_sign_up/basic/) to get your API key. Otherwise, [log in](https://app.taxjar.com) and go to *Account > API Access* to generate a new API token.

TaxJar expects the API key to be included in all API requests to the server using a header like the following:

`Authorization: Token token="9e0cd62a22f451701f29c3bde214"`

or

`Authorization: Bearer 9e0cd62a22f451701f29c3bde214`

<aside class="notice">
You must replace <code>9e0cd62a22f451701f29c3bde214</code> with your personal API key.
</aside>

# Countries

We currently support the following countries around the world. If you would like to request the addition of a new country, please email us at [support@taxjar.com](mailto:support@taxjar.com).

#### North America

<p class="column-set">
  <span class="flag-icon flag-icon-us"></span>&nbsp;&nbsp; United States<br>  
  <span class="flag-icon flag-icon-ca"></span>&nbsp;&nbsp; Canada
</p>

#### Oceania

<p class="column-set">
  <span class="flag-icon flag-icon-au"></span>&nbsp;&nbsp; Australia
</p>

#### European Union

<p class="column-set">
  <span class="flag-icon flag-icon-at"></span>&nbsp;&nbsp; Austria<br>
  <span class="flag-icon flag-icon-be"></span>&nbsp;&nbsp; Belgium<br>
  <span class="flag-icon flag-icon-bg"></span>&nbsp;&nbsp; Bulgaria<br>
  <span class="flag-icon flag-icon-hr"></span>&nbsp;&nbsp; Croatia<br>
  <span class="flag-icon flag-icon-cy"></span>&nbsp;&nbsp; Cyprus<br>
  <span class="flag-icon flag-icon-cz"></span>&nbsp;&nbsp; Czech Republic<br>
  <span class="flag-icon flag-icon-dk"></span>&nbsp;&nbsp; Denmark<br>
  <span class="flag-icon flag-icon-ee"></span>&nbsp;&nbsp; Estonia<br>
  <span class="flag-icon flag-icon-fi"></span>&nbsp;&nbsp; Finland<br>
  <span class="flag-icon flag-icon-fr"></span>&nbsp;&nbsp; France<br>
  <span class="flag-icon flag-icon-de"></span>&nbsp;&nbsp; Germany<br>
  <span class="flag-icon flag-icon-gr"></span>&nbsp;&nbsp; Greece<br>
  <span class="flag-icon flag-icon-hu"></span>&nbsp;&nbsp; Hungary<br>
  <span class="flag-icon flag-icon-ie"></span>&nbsp;&nbsp; Ireland<br>
  <span class="flag-icon flag-icon-it"></span>&nbsp;&nbsp; Italy<br>
  <span class="flag-icon flag-icon-lv"></span>&nbsp;&nbsp; Latvia<br>
  <span class="flag-icon flag-icon-lt"></span>&nbsp;&nbsp; Lithuania<br>
  <span class="flag-icon flag-icon-lu"></span>&nbsp;&nbsp; Luxembourg<br>
  <span class="flag-icon flag-icon-mt"></span>&nbsp;&nbsp; Malta<br>
  <span class="flag-icon flag-icon-nl"></span>&nbsp;&nbsp; Netherlands<br>
  <span class="flag-icon flag-icon-pl"></span>&nbsp;&nbsp; Poland<br>
  <span class="flag-icon flag-icon-pt"></span>&nbsp;&nbsp; Portugal<br>
  <span class="flag-icon flag-icon-ro"></span>&nbsp;&nbsp; Romania<br>
  <span class="flag-icon flag-icon-sk"></span>&nbsp;&nbsp; Slovakia<br>
  <span class="flag-icon flag-icon-si"></span>&nbsp;&nbsp; Slovenia<br>
  <span class="flag-icon flag-icon-es"></span>&nbsp;&nbsp; Spain<br>
  <span class="flag-icon flag-icon-se"></span>&nbsp;&nbsp; Sweden<br>
  <span class="flag-icon flag-icon-gb"></span>&nbsp;&nbsp; United Kingdom
</p>

# Sales Tax API

TaxJar API endpoints provide detailed sales tax rates and calculations. They also support extended reporting and filing capabilities for TaxJar users.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/591e69b1095ef11195be)

## Categories

The TaxJar API provides product-level tax rules for a subset of product categories. These categories are to be used for products that are either exempt from sales tax in some jurisdictions or are taxed at reduced rates. You need not pass in a product tax code for sales tax calculations on product that is fully taxable. Simply leave that parameter out.

We will be expanding support for additional, less common categories over time. If you would like to request the addition of a new product category, please email us at [support@taxjar.com](mailto:support@taxjar.com).

### <span class="badge badge--get">get</span> List tax categories

> Definition

```ruby
client.categories
```

```javascript
taxjar.categories();
```

```php?start_inline=1
$taxjar->categories();
```

```shell
GET https://api.taxjar.com/v2/categories
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

categories = client.categories
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");

taxjar.categories().then(function(res) {
  res.categories; // Array of categories
});
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$categories = $taxjar->categories();
```

```shell
curl https://api.taxjar.com/v2/categories \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"
```

> Response Example

```json
{
  "categories": [
    {
      "name": "Clothing",
      "product_tax_code": "20010",
      "description": " All human wearing apparel suitable for general use"
    },
    {
      "name": "Software as a Service",
      "product_tax_code": "30070",
      "description": "Pre-written software, delivered electronically, but access remotely."
    },
    {
      "name": "Digital Goods",
      "product_tax_code": "31000",
      "description": "Digital products transferred electronically, meaning obtained by the purchaser by means other than tangible storage media."
    },
    {
      "name": "Food & Groceries",
      "product_tax_code": "40030",
      "description": "Food for humans consumption, unprepared"
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
      "name": "Books",
      "product_tax_code": "81100",
      "description": "Books, printed"
    },
    {
      "name": "Textbook",
      "product_tax_code": "81110",
      "description": "Textbooks, printed"
    },
    {
      "name": "Religious Books",
      "product_tax_code": "81120",
      "description": "Religious books and manuals, printed"
    },
    {
      "name": "Magazines & Subscriptions",
      "product_tax_code": "81300",
      "description": "Periodicals, printed, sold by subscription"
    },
    {
      "name": "Magazine",
      "product_tax_code": "81310",
      "description": "Periodicals, printed, sold individually"
    },
    {
      "name": "Other Exempt",
      "product_tax_code": "99999",
      "description": "Item is exempt"
    }
  ]
}
```

```ruby
[
  #<Taxjar::Category:0x007f081dc3e278 @attrs={
    :name => "Digital Goods",
    :product_tax_code => "31000",
    :description => "Digital products transferred electronically."
  }>,
  #<Taxjar::Category:0x007f081dc3de90 @attrs={
    :name => "Clothing",
    :product_tax_code => "20010",
    :description => "All human wearing apparel suitable for general use"
  }>,
  #<Taxjar::Category:0x007f081dc3da80 @attrs={
    :name => "Non-Prescription",
    :product_tax_code => "51010",
    :description => "Drugs for human use without a prescription"
  }>
]
```

Lists all tax categories.

#### Request

GET https://api.taxjar.com/v2/categories

#### Response

Returns a JSON object with an array of product categories and corresponding tax codes. The following categories are currently supported:

| Category | Code | Description |
|---------------------------|------------------|----------------------------------------------------------------------------------------------------------------------------|
| Clothing | 20010 | All human wearing apparel suitable for general use. |
| Software as a Service | 30070 | Pre-written software, delivered electronically, but access remotely. |
| Digital Goods | 31000 | Digital products transferred electronically, meaning obtained by the purchaser by means other than tangible storage media. |
| Food & Groceries | 40030 | Food for humans consumption, unprepared. |
| Non-Prescription | 51010 | Drugs for human use without a prescription. |
| Prescription | 51020 | Drugs for human use with a prescription. |
| Books | 81100 | Books, printed. |
| Textbooks | 81110 | Textbooks, printed. |
| Religious Books | 81120 | Religious books and manuals, printed. |
| Magazines & Subscriptions | 81300 | Periodicals, printed, sold by subscription. |
| Magazine | 81310 | Periodicals, printed, sold individually. |
| Other Exempt | 99999 | Item is exempt. |

## Rates

### <span class="badge badge--get">get</span> Show tax rates for a location

> Definition

```ruby
client.rates_for_location
```

```javascript
taxjar.ratesForLocation();
```

```php?start_inline=1
$taxjar->ratesForLocation();
```

```shell
GET https://api.taxjar.com/v2/rates/:zip
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

# United States (ZIP+4)
rates = client.rates_for_location('90404-3370')

# United States (ZIP w/ Optional Params)
rates = client.rates_for_location('90404', {
  :city => 'SANTA MONICA',
  :country => 'US'
})

# International Examples (Requires City and Country)
rates = client.rates_for_location('V5K0A1', {
  :city => 'VANCOUVER',
  :country => 'CA'
})

rates = client.rates_for_location('00150', {
  :city => 'HELSINKI',
  :country => 'FI'
})
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");

// United States (ZIP+4)
taxjar.ratesForLocation('90404-3370').then(function(res) {
  res.rate; // Rate object
});

// United States (ZIP w/ Optional Params)
taxjar.ratesForLocation('90404', {
  city: 'SANTA MONICA',
  country: 'US'
}).then(function(res) {
  res.rate; // Rate object
});

// International Examples (Requires City and Country)
taxjar.ratesForLocation('V5K0A1', {
  city: 'VANCOUVER',
  country: 'CA'
}).then(function(res) {
  res.rate; // Rate object
});

taxjar.ratesForLocation('00150', {
  city: 'HELSINKI',
  country: 'FI'
}).then(function(res) {
  res.rate; // Rate object
});
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

// United States (ZIP+4)
$rates = $taxjar->ratesForLocation('90404-3370');

// United States (ZIP w/ Optional Params)
$rates = $taxjar->ratesForLocation('90404', [
  'city' => 'SANTA MONICA',
  'country' => 'US'
]);

// International Examples (Requires City and Country)
$rates = $taxjar->ratesForLocation('V5K0A1', [
  'city' => 'VANCOUVER',
  'country' => 'CA'
]);

$rates = $taxjar->ratesForLocation('00150', [
  'city' => 'HELSINKI',
  'country' => 'FI'
]);
```

```shell
# United States (ZIP+4)
curl https://api.taxjar.com/v2/rates/90404-3370 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"

# United States (ZIP w/ Optional Params)
curl -G https://api.taxjar.com/v2/rates/90404 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d city="SANTA%20MONICA" \
  -d country="US"

# International Examples (Requires City and Country)
curl -G https://api.taxjar.com/v2/rates/V5K0A1 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d city="VANCOUVER" \
  -d country="CA"

curl -G https://api.taxjar.com/v2/rates/00150 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d city="HELSINKI" \
  -d country="FI"
```

> Response Example<br>
> <small>*International requests outside of US/Canada may return different parameters.*</small>

```json
{
  "rate": {
    "zip": "90404",
    "state": "CA",
    "state_rate": "0.065",
    "county": "LOS ANGELES",
    "county_rate": "0.01",
    "city": "SANTA MONICA",
    "city_rate": "0.005",
    "combined_district_rate": "0.015",
    "combined_rate": "0.095"
  }
}

{
  "rate": {
    "zip": "V5K0A1",
    "city": "Vancouver",
    "state": "BC",
    "country": "CA",
    "combined_rate": "0.12"
  }
}

{
  "rate": {
    "country": "FI",
    "name": "Finland",
    "standard_rate": "0.24",
    "reduced_rate": "0.0",
    "super_reduced_rate": "0.0",
    "parking_rate": "0.0",
    "distance_sale_threshold": "0.0",
    "freight_taxable": true
  }
}
```

```ruby
#<Taxjar::Rate:0x007fc47056a928 @attrs={
  :zip => "90404",
  :state => "CA",
  :state_rate => 0.065,
  :county => "LOS ANGELES",
  :county_rate => 0.01,
  :city => "SANTA MONICA",
  :city_rate => 0.005,
  :combined_district_rate => 0.015,
  :combined_rate => 0.095
}>

#<Taxjar::Rate:0x007fc47056a928 @attrs={
  :zip => "V5K0A1",
  :city => "Vancouver",
  :state => "BC",
  :country => "CA",
  :combined_rate => "0.12"
}>

#<Taxjar::Rate:0x007fc47056a928 @attrs={
  :country => "FI",
  :name => "Finland",
  :standard_rate => "0.24",
  :reduced_rate => nil,
  :super_reduced_rate => nil,
  :parking_rate => nil,
  :distance_sale_threshold => nil,
  :freight_taxable => true
}>
```

Shows the sales tax rates for a given location.

#### Request

GET https://api.taxjar.com/v2/rates/:zip

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
country | string | <span class="conditional" data-tooltip="For international locations outside of US, `country` is required." data-tooltip-position="top center">conditional</span> | ISO two country code of the country for given location.
zip | string | required | Postal code for given location (5-Digit ZIP or ZIP+4).
city | string | <span class="conditional" data-tooltip="For international locations outside of US, `city` is required." data-tooltip-position="top center">conditional</span> | City for given location.
street | string | <span class="conditional" data-tooltip="Currently in beta testing for State of Washington addresses." data-tooltip-position="top center">optional</span> | Street address for given location.

#### Response

Returns a JSON object with rates for a given location broken down by state, county, city, and district. For international requests, returns standard and reduced rates.

#### US/Canada Attributes

Parameter | Type | Description
--------- | ------- | -----------
zip | string | Postal code for given location.
state | string | State name for given location.
state_rate | long | State sales tax rate for given location.
county | string | County name for given location.
county_rate | long | County sales tax rate for given location.
city | string | City name for given location.
city_rate | long | City sales tax rate for given location.
combined_district_rate | long | Aggregate rate for all city and county sales tax districts effective at the location.
combined_rate | long | Overall sales tax rate which includes state, county, city and district tax. This rate should be used to determine how much sales tax to collect for an order.

#### International Attributes

Parameter | Type | Description
--------- | ------- | -----------
country | string | ISO two country code of the country for given location.
name | string | Country name for given location.
standard_rate | long | [Standard rate](https://en.wikipedia.org/wiki/European_Union_value_added_tax#VAT_rates) for given location.
reduced_rate | long | [Reduced rate](https://en.wikipedia.org/wiki/European_Union_value_added_tax#VAT_rates) for given location.
super_reduced_rate | long | Super reduced rate for given location.
parking_rate | long | Parking rate for given location.
distance_sale_threshold | long | [Distance selling threshold](https://en.wikipedia.org/wiki/European_Union_value_added_tax#Distance_sales) for given location.
freight_taxable | bool | Freight taxability for given location.

## Taxes

### <span class="badge badge--post">post</span> Calculate sales tax for an order

> Definition

```ruby
client.tax_for_order
```

```javascript
taxjar.taxForOrder();
```

```php?start_inline=1
$taxjar->taxForOrder();
```

```shell
POST https://api.taxjar.com/v2/taxes
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.tax_for_order({
  :to_country => 'US',
  :to_zip => '90002',
  :to_city => 'Los Angeles',
  :to_state => 'CA',
  :from_country => 'US',
  :from_zip => '92093',
  :from_city => 'San Diego',
  :amount => 16.50,
  :shipping => 1.5,
  :line_items => [
    {
      :quantity => 1,
      :unit_price => 15.0,
      :product_tax_code => '31000'
    }
  ]
})
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");

taxjar.taxForOrder({
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
      product_tax_code: '31000'
    }
  ]
}).then(function(res) {
  res.tax; // Tax object
  res.tax.amount_to_collect; // Amount to collect
});
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order_taxes = $taxjar->taxForOrder([
  'from_country' => 'US',
  'from_zip' => '07001',
  'from_state' => 'NJ',
  'to_country' => 'US',
  'to_zip' => '07446',
  'to_state' => 'NJ',
  'amount' => 16.50,
  'shipping' => 1.5,
  'line_items' => [
    [
      'quantity' => 1,
      'unit_price' => 15.0,
      'product_tax_code' => '31000'
    ]
  ]
]);
```

```shell
curl https://api.taxjar.com/v2/taxes \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d to_country="US" \
  -d to_zip="90002" \
  -d to_state="CA" \
  -d from_country="US" \
  -d from_zip="92101" \
  -d from_state="CA" \
  -d amount=16.50 \
  -d shipping=1.5 \
  -d "line_items[][quantity]=1 \
  &line_items[][unit_price]=15.0 \
  &line_items[][product_tax_code]='31000'"
```

> Response Example

```json
{
  "tax": {
    "order_total_amount": 16.5,
    "shipping": 1.5,
    "taxable_amount": 15.0,
    "amount_to_collect": 1.35,
    "rate": 0.09,
    "has_nexus": true,
    "freight_taxable": false,
    "tax_source": "destination",
    "breakdown": {  
      "taxable_amount": 15.0,
      "tax_collectable": 1.35,
      "state_taxable_amount": 15.0,
      "state_tax_rate": 0.065,
      "state_tax_collectable": 0.98,
      "county_taxable_amount": 15.0,
      "county_tax_rate": 0.01,
      "county_tax_collectable": 0.15,
      "city_taxable_amount": 0.0,
      "city_tax_rate": 0.0,
      "city_tax_collectable": 0.0,
      "special_district_taxable_amount": 15.0,
      "special_tax_rate": 0.015,
      "special_district_tax_collectable": 0.23,
      "line_items": [  
        {  
          "id": "1",
          "taxable_amount": 15.0,
          "tax_collectable": 1.35,
          "state_taxable_amount": 15.0,
          "state_sales_tax_rate": 0.065,
          "state_amount": 0.98,
          "county_taxable_amount": 15.0,
          "county_tax_rate": 0.01,
          "county_amount": 0.15,
          "city_taxable_amount": 0.0,
          "city_tax_rate": 0.0,
          "city_amount": 0.0,
          "special_district_taxable_amount": 15.0,
          "special_tax_rate": 0.015,
          "special_district_amount": 0.23
        }
      ]
    }
  }
}
```

```ruby
#<Taxjar::Tax:0x007f3945688fc8 @attrs={
  :order_total_amount => 16.5,
  :amount_to_collect => 1.35,
  :has_nexus => true,
  :freight_taxable => false,
  :tax_source => "destination",
  :breakdown => {
    :state_taxable_amount => 15.0,
    :state_tax_collectable => 0.98,
    :county_taxable_amount => 15.0,
    :county_tax_collectable => 0.15,
    :city_taxable_amount => 0.0,
    :city_tax_collectable => 0.0,
    :special_district_taxable_amount => 15.0,
    :special_district_tax_collectable => 0.22,
    :line_items => [
      {
        :id => "1",
        :state_taxable_amount => 15.0,
        :state_sales_tax_rate => 0.065,
        :county_taxable_amount => 15.0,
        :county_tax_rate => 0.01,
        :city_taxable_amount => 0.0,
        :city_tax_rate => 0.0,
        :special_district_taxable_amount => 15.0,
        :special_tax_rate => 0.015
      }
    ]
  }
}>
```


Shows the sales tax that should be collected for a given order.

#### Request

POST https://api.taxjar.com/v2/taxes

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
from_country | string | optional | ISO two country code of the country where the order shipped from. <span class="usage-note" data-tooltip="Either an address on file, or `nexus_addresses` parameter, or `from_` parameters are required to perform tax calculations." data-tooltip-position="top center">View Note</span>
from_zip | string | optional | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | optional | State where the order shipped from.
from_city | string | optional | City where the order shipped from.
from_street | string | <span class="conditional" data-tooltip="Currently in beta testing for State of Washington addresses." data-tooltip-position="top center">optional</span> | Street address where the order shipped from.
to_country | string | required | ISO two country code of the country where the order shipped to.
to_zip | string | <span class="conditional" data-tooltip="If `to_country` is 'US', `to_zip` is required." data-tooltip-position="top center">conditional</span> | Postal code where the order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | <span class="conditional" data-tooltip="If `to_country` is 'US' or 'CA', `to_state` is required." data-tooltip-position="top center">conditional</span> | State where the order shipped to.
to_city | string | optional | City where the order shipped to.
to_street | string | <span class="conditional" data-tooltip="Currently in beta testing for State of Washington addresses." data-tooltip-position="top center">optional</span> | Street address where the order shipped to.
amount | long | optional | Total amount of the order, excluding shipping. <span class="usage-note" data-tooltip="Either `amount` or `line_items` parameters are required to perform tax calculations." data-tooltip-position="top center">View Note</span>
shipping | long | required | Total amount of shipping for the order.
nexus_addresses[][id] | string | optional | Unique identifier of the given nexus address. <span class="usage-note" data-tooltip="Either an address on file, or `nexus_addresses` parameter, or `from_` parameters are required to perform tax calculations." data-tooltip-position="top center">View Note</span>
nexus_addresses[][country] | string | <span class="conditional" data-tooltip="If providing `nexus_addresses`, country is required." data-tooltip-position="top center">conditional</span> | ISO two country code of the country for the nexus address.
nexus_addresses[][zip] | string | <span class="conditional" data-tooltip="If providing `nexus_addresses`, zip is required." data-tooltip-position="top center">conditional</span> | Postal code for the nexus address.
nexus_addresses[][state] | string | <span class="conditional" data-tooltip="If providing `nexus_addresses`, state is required." data-tooltip-position="top center">conditional</span> | State for the nexus address.
nexus_addresses[][city] | string | optional | City for the nexus address.
nexus_addresses[][street] | string | optional | Street address for the nexus address.
line_items[][id] | string | optional | Unique identifier of the given line item. <span class="usage-note" data-tooltip="Either `amount` or `line_items` parameters are required to perform tax calculations." data-tooltip-position="top center">View Note</span>
line_items[][quantity] | integer | optional | Quantity for the item.
line_items[][product_tax_code] | string | optional | Product tax code for the item.
line_items[][unit_price] | long | optional | Unit price for the item.
line_items[][discount] | long | optional | Discount amount for the item.

#### Notes

- *Either `amount` or `line_items` parameters are required to perform tax calculations.*

- *The `to_zip` parameter is required when `to_country` is 'US'.*

- *The `to_state` parameter is required when `to_country` is 'US' or 'CA'.*

- *Either an address on file, or `nexus_addresses` parameter, or `from_` parameters are required to perform tax calculations.*

#### Response

Returns a JSON object with sales tax for a given order. If available, returns a breakdown of rates by jurisdiction.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
order_total_amount | long | Total amount of the order.
shipping | long | Total amount of shipping for the order.
taxable_amount | long | Amount of the order to be taxed.
amount_to_collect | long | Amount of sales tax to collect.
rate | long | Overall sales tax rate of the order (`amount_to_collect` &divide; `taxable_amount`).
has_nexus | bool | Whether or not you have [nexus](http://blog.taxjar.com/sales-tax-nexus-definition/) for the order based on an address on file, `nexus_addresses` parameter, or `from_` parameters.
freight_taxable | bool | Freight taxability for the order.
tax_source | string | [Origin-based or destination-based](http://blog.taxjar.com/charging-sales-tax-rates/) sales tax collection.
breakdown | object | Breakdown of rates by jurisdiction for the order, shipping, and individual line items.

## Transactions

### <span class="badge badge--get">get</span> List order transactions

> Definition

```ruby
client.list_orders
```

```javascript
taxjar.listOrders();
```

```php?start_inline=1
$taxjar->listOrders();
```

```shell
GET https://api.taxjar.com/v2/transactions/orders
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

orders = client.list_orders({
  :from_transaction_date => '2015/05/01',
  :to_transaction_date => '2015/05/31'
})
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");

taxjar.listOrders({
  from_transaction_date: '2015/05/01',
  to_transaction_date: '2015/05/31'
}).then(function(res) {
  res.orders; // Array of orders
});
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$orders = $taxjar->listOrders([
  'from_transaction_date' => '2015/05/01',
  'to_transaction_date' => '2015/05/31'
]);
```

```shell
curl -G https://api.taxjar.com/v2/transactions/orders \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d from_transaction_date="2015/05/01" \
  -d to_transaction_date="2015/05/31"
```

> Response Example

```json
{
  "orders": [
    "123",
    "456"
  ]
}
```

```ruby
["20", "21", "22"]
```

Lists existing order transactions.

#### Request

GET https://api.taxjar.com/v2/transactions/orders

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_date | date | optional | The date the transactions were originally recorded. <span class="usage-note" data-tooltip="Use `transaction_date` to list transactions for a specific date. Otherwise, use `from_transaction_date` and `to_transaction_date` for a range of dates." data-tooltip-position="top center">View Note</span>
from_transaction_date | date | optional | Start date of a range for which the transactions were originally recorded.
to_transaction_date | date | optional | End date of a range for which the transactions were originally recorded.

#### Notes

*Use `transaction_date` to list transactions for a specific date. Otherwise, use `from_transaction_date` and `to_transaction_date` for a range of dates.*

### <span class="badge badge--get">get</span> Show an order transaction

> Definition

```ruby
client.show_order
```

```javascript
taxjar.showOrder();
```

```php?start_inline=1
$taxjar->showOrder();
```

```shell
GET https://api.taxjar.com/v2/transactions/orders/:transaction_id
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.show_order(123)
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");

taxjar.showOrder(123).then(function(res) {
  res.order;
});
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order = $taxjar->showOrder(123);
```

```shell
curl https://api.taxjar.com/v2/transactions/orders/123 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"
```

> Response Example

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

```ruby
#<Taxjar::Order:0x007fd3e514a940 @attrs={
  :transaction_id => "123",
  :user_id => 11836,
  :transaction_date => "2015-05-14T00:00:00Z",
  :transaction_reference_id => nil,
  :from_country => "US",
  :from_zip => 93107,
  :from_state => "CA",
  :from_city => "SANTA BARBARA",
  :from_street => "1281 State St",
  :to_country => "US",
  :to_zip => 90002,
  :to_state => "CA",
  :to_city => "LOS ANGELES",
  :to_street => "123 Palm Grove Ln",
  :amount => 17.95,
  :shipping => 2,
  :sales_tax => 0.95,
  :line_items => [
    {
      :id => 1,
      :quantity => 1,
      :product_identifier => "12-34243-0",
      :product_tax_code => nil,
      :description => "Heavy Widget",
      :unit_price => "15.0",
      :discount => "0.0",
      :sales_tax => "0.95"
    }
  ]
}>
```

Shows an existing order transaction.

#### Request

GET https://api.taxjar.com/v2/transactions/orders/:transaction_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | Unique identifier of the given order transaction.

### <span class="badge badge--post">post</span> Create an order transaction

> Definition

```ruby
client.create_order
```

```javascript
taxjar.createOrder();
```

```php?start_inline=1
$taxjar->createOrder();
```

```shell
POST https://api.taxjar.com/v2/transactions/orders
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.create_order({
  :transaction_id => '123',
  :transaction_date => '2015/05/14',
  :to_country => 'US',
  :to_zip => '90002',
  :to_state => 'CA',
  :to_city => 'Los Angeles',
  :to_street => '123 Palm Grove Ln',
  :amount => 17.45,
  :shipping => 1.5,
  :sales_tax => 0.95,
  :line_items => [
    {
      :quantity => 1,
      :product_identifier => '12-34243-9',
      :description => 'Fuzzy Widget',
      :unit_price => 15.0,
      :sales_tax => 0.95
    }
  ]
})
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");

taxjar.createOrder({
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
}).then(function(res) {
  res.order; // Order object
});
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order = $taxjar->createOrder([
  'transaction_id' => '123',
  'transaction_date' => '2015/05/14',
  'to_country' => 'US',
  'to_zip' => '90002',
  'to_state' => 'CA',
  'to_city' => 'Los Angeles',
  'to_street' => '123 Palm Grove Ln',
  'amount' => 17.45,
  'shipping' => 1.5,
  'sales_tax' => 0.95,
  'line_items' => [
    [
      'quantity' => 1,
      'product_identifier' => '12-34243-9',
      'description' => 'Fuzzy Widget',
      'unit_price' => 15.0,
      'sales_tax' => 0.95
    ]
  ]
]);
```

```shell
curl https://api.taxjar.com/v2/transactions/orders \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d transaction_id="123" \
  -d transaction_date="2015/05/14" \
  -d to_country="US" \
  -d to_zip="90002" \
  -d to_state="CA" \
  -d to_city="Los Angeles" \
  -d to_street="123 Palm Grove Ln" \
  -d amount=17.45 \
  -d shipping=1.5 \
  -d sales_tax=0.95 \
  -d "line_items[][quantity]=1 \
  &line_items[][product_identifier]='12-34234-9' \
  &line_items[][description]='Fuzzy Widget' \
  &line_items[][unit_price]=15.0 \
  &line_items[][sales_tax]=0.95"
```

> Response Example

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

```ruby
#<Taxjar::Order:0x007f6d65b252d0 @attrs={
  :transaction_id => 20,
  :user_id => 11836,
  :transaction_date => "2015-05-14T00:00:00Z",
  :transaction_reference_id => nil,
  :from_country => "US",
  :from_zip => 93101,
  :from_state => "CA",
  :from_city => "SANTA BARBARA",
  :from_street => "1218 State St",
  :to_country => "US",
  :to_zip => 90002,
  :to_state => "CA",
  :to_city => "LOS ANGELES",
  :to_street => "123 Palm Grove Ln",
  :amount => 15.02,
  :shipping => 1.5,
  :sales_tax => 0.95,
  :line_items => [
    {
      :id => 1,
      :quantity => 1,
      :product_identifier => "12-34243-9",
      :product_tax_code => nil,
      :description => "Fuzzy Widget",
      :unit_price => "15.0",
      :discount => "0.0",
      :sales_tax => "0.85"
    }
  ]
}>
```

Creates a new order transaction.

#### Request

POST https://api.taxjar.com/v2/transactions/orders

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | Unique identifier of the given order transaction.
transaction_date | datetime | required | The date/time the transaction was originally recorded. <span class="usage-note" data-tooltip="The `transaction_date` may be a date '2015-05-25', an ISO UTC date/time '2015-05-25T13:05:45', or an ISO date/time with zone offset '2015-05-25T13:05:45-05:00'." data-tooltip-position="top center">View Note</span>
from_country | string | optional | ISO two country code of the country where the order shipped from. <span class="usage-note" data-tooltip="Either an address on file or `from_` parameters are required to perform tax calculations." data-tooltip-position="top center">View Note</span>
from_zip | string | optional | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | optional | State where the order shipped from.
from_city | string | optional | City where the order shipped from.
from_street | string | optional | Street address where the order shipped from.
to_country | string | required | ISO two country code of the country where the order shipped to.
to_zip | string | required | Postal code where the order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | required | State where the order shipped to.
to_city | string | optional | City where the order shipped to.
to_street | string | optional | Street address where the order shipped to.
amount | long | required | Total amount of the order with shipping, excluding sales tax.
shipping | long | required | Total amount of shipping for the order.
sales_tax | long | required | Total amount of sales tax collected for the order.
line_items[][id] | string | optional | Unique identifier of the given line item.
line_items[][quantity] | integer | optional | Quantity for the item.
line_items[][product_identifier] | string | optional | Product identifier for the item.
line_items[][description] | string | optional | Description of the line item.
line_items[][product_tax_code] | string | optional | Product tax code for the item.
line_items[][unit_price] | long | optional | Unit price for the item.
line_items[][discount] | long | optional | Discount amount for the item.
line_items[][sales_tax] | long | optional | Sales tax collected for the item.

#### Notes

- *Either an address on file or `from_` parameters are required to perform tax calculations.*

- *The `transaction_date` may be a date '2015-05-25', an ISO UTC date/time '2015-05-25T13:05:45', or an ISO date/time with zone offset '2015-05-25T13:05:45-05:00'.*

### <span class="badge badge--put">put</span> Update an order transaction

> Definition

```ruby
client.update_order
```

```javascript
taxjar.updateOrder();
```

```php?start_inline=1
$taxjar->updateOrder();
```

```shell
PUT https://api.taxjar.com/v2/transactions/orders/:transaction_id
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.update_order({
  :transaction_id => '123',
  :amount => 17.45,
  :shipping => 1.5,
  :line_items => [
    {
      :quantity => 1,
      :product_identifier => '12-34243-0',
      :description => 'Heavy Widget',
      :unit_price => 15.0,
      :discount => 0.0,
      :sales_tax => 0.95
    }
  ]
})
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");

taxjar.updateOrder({
  transaction_id: '123',
  amount: 17.45,
  shipping: 1.5,
  line_items: [
    {
      quantity: 1,
      product_identifier: '12-34243-0',
      description: 'Heavy Widget',
      unit_price: 15.0,
      discount: 0.0,
      sales_tax: 0.95
    }
  ]
}).then(function(res) {
  res.order; // Order object
});
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order = $taxjar->updateOrder([
  'transaction_id' => '123',
  'amount' => 17.95,
  'shipping' => 2.0,
  'line_items' => [
    [
      'quantity' => 1,
      'product_identifier' => '12-34243-0',
      'description' => 'Heavy Widget',
      'unit_price' => 15.0,
      'discount' => 0.0,
      'sales_tax' => 0.95
    ]
  ]
]);
```

```shell
curl https://api.taxjar.com/v2/transactions/orders/123 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d transaction_id="123" \
  -d amount=17.45 \
  -d shipping=1.5 \
  -d "line_items[][quantity]=1 \
  &line_items[][product_identifier]='12-34234-0' \
  &line_items[][description]='Heavy Widget' \
  &line_items[][unit_price]=15.0 \
  &line_items[][discount]=0.0 \
  &line_items[][sales_tax]=0.95" \
  -X PUT
```

> Response Example

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

```ruby
#<Taxjar::Order:0x007f6d65b252d0 @attrs={
  :transaction_id => "123",
  :user_id => 11836,
  :transaction_date => "2015-05-14T00:00:00Z",
  :transaction_reference_id => nil,
  :from_country => "US",
  :from_zip => 93101,
  :from_state => "CA",
  :from_city => "SANTA BARBARA",
  :from_street => "1218 State St",
  :to_country => "US",
  :to_zip => 90002,
  :to_state => "CA",
  :to_city => "LOS ANGELES",
  :to_street => "123 Palm Grove Ln",
  :amount => 17.95,
  :shipping => 2.0,
  :sales_tax => 0.95,
  :line_items => [
    {
      :id => 1,
      :quantity => 1,
      :product_identifier => "12-34243-0",
      :product_tax_code => nil,
      :description => "Heavy Widget",
      :unit_price => "15.0",
      :discount => "0.0",
      :sales_tax => "0.95"
    }
  ]
}>
```

Updates an existing order transaction.

#### Request

PUT https://api.taxjar.com/v2/transactions/orders/:transaction_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | Unique identifier of the given order transaction.
transaction_date | datetime | optional | The date/time the transaction was originally recorded. <span class="usage-note" data-tooltip="The `transaction_date` may be a date '2015-05-25', an ISO UTC date/time '2015-05-25T13:05:45', or an ISO date/time with zone offset '2015-05-25T13:05:45-05:00'." data-tooltip-position="top center">View Note</span>
from_country | string | optional | ISO two country code of the country where the order shipped from. <span class="usage-note" data-tooltip="Either an address on file or `from_` parameters are required to perform tax calculations." data-tooltip-position="top center">View Note</span>
from_zip | string | optional | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | optional | State where the order shipped from.
from_city | string | optional | City where the order shipped from.
from_street | string | optional | Street address where the order shipped from.
to_country | string | optional | ISO two country code of the country where the order shipped to.
to_zip | string | optional | Postal code where the order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | optional | State where the order shipped to.
to_city | string | optional | City where the order shipped to.
to_street | string | optional | Street address where the order shipped to.
amount | long | optional | Total amount of the order with shipping, excluding sales tax.
shipping | long | optional | Total amount of shipping for the order.
sales_tax | long | optional | Total amount of sales tax collected for the order.
line_items[][id] | string | optional | Unique identifier of the given line item.
line_items[][quantity] | integer | optional | Quantity for the item.
line_items[][product_identifier] | string | optional | Product identifier for the item.
line_items[][description] | string | optional | Description of the line item.
line_items[][product_tax_code] | string | optional | Product tax code for the item.
line_items[][unit_price] | long | optional | Unit price for the item.
line_items[][discount] | long | optional | Discount amount for the item.
line_items[][sales_tax] | long | optional | Sales tax collected for the item.

#### Notes

- *Either an address on file or `from_` parameters are required to perform tax calculations.*

- *The `transaction_date` may be a date '2015-05-25', an ISO UTC date/time '2015-05-25T13:05:45', or an ISO date/time with zone offset '2015-05-25T13:05:45-05:00'.*

### <span class="badge badge--delete">delete</span> Delete an order transaction

> Definition

```ruby
client.delete_order
```

```javascript
taxjar.deleteOrder();
```

```php?start_inline=1
$taxjar->deleteOrder();
```

```shell
DELETE https://api.taxjar.com/v2/transactions/orders/:transaction_id
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

client.delete_order(123)
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");

taxjar.deleteOrder(123).then(function(res) {

});
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$taxjar->deleteOrder(123);
```

```shell
curl https://api.taxjar.com/v2/transactions/orders/123 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"
  -X DELETE
```

> Response Example

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

```ruby
#<Taxjar::Order:0x007f6d65b252d0 @attrs={
  :transaction_id => "123",
  :user_id => 11836,
  :transaction_date => "2015-05-14T00:00:00Z",
  :transaction_reference_id => nil,
  :from_country => "US",
  :from_zip => 93101,
  :from_state => "CA",
  :from_city => "SANTA BARBARA",
  :from_street => "1218 State St",
  :to_country => "US",
  :to_zip => 90002,
  :to_state => "CA",
  :to_city => "LOS ANGELES",
  :to_street => "123 Palm Grove Ln",
  :amount => 17.95,
  :shipping => 2.0,
  :sales_tax => 0.95,
  :line_items => [
    {
      :id => 1,
      :quantity => 1,
      :product_identifier => "12-34243-0",
      :product_tax_code => nil,
      :description => "Heavy Widget",
      :unit_price => "15.0",
      :discount => "0.0",
      :sales_tax => "0.95"
    }
  ]
}>
```

Deletes an existing order transaction.

#### Request

DELETE https://api.taxjar.com/v2/transactions/orders/:transaction_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | Unique identifier of the given order transaction.

### <span class="badge badge--get">get</span> List refund transactions

> Definition

```ruby
client.list_refunds
```

```javascript
taxjar.listRefunds();
```

```php?start_inline=1
$taxjar->listRefunds();
```

```shell
GET https://api.taxjar.com/v2/transactions/refunds
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

refunds = client.list_refunds({
  :from_transaction_date => '2015/05/01',
  :to_transaction_date => '2015/05/31'
})
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");

taxjar.listRefunds({
  from_transaction_date: '2015/05/01',
  to_transaction_date: '2015/05/31'
}).then(function(res) {
  res.refunds; // Array of refunds
});
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$refunds = $taxjar->listRefunds([
  'from_transaction_date' => '2015/05/01',
  'to_transaction_date' => '2015/05/31'
]);
```

```shell
curl -G https://api.taxjar.com/v2/transactions/refunds \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d from_transaction_date="2015/05/01" \
  -d to_transaction_date="2015/05/31"
```

> Response Example

```json
{
  "refunds": [
    "321",
    "654"
  ]
}
```

```ruby
["203", "204", "205"]
```

Lists existing refund transactions.

#### Request

GET https://api.taxjar.com/v2/transactions/refunds

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_date | date | optional | The date the transactions were originally recorded. <span class="usage-note" data-tooltip="Use `transaction_date` to list transactions for a specific date. Otherwise, use `from_transaction_date` and `to_transaction_date` for a range of dates." data-tooltip-position="top center">View Note</span>
from_transaction_date | date | optional | The start date of a range for which the transactions were originally recorded.
to_transaction_date | date | optional | The end date of a range for which the transactions were originally recorded.

#### Notes

*Use `transaction_date` to list transactions for a specific date. Otherwise, use `from_transaction_date` and `to_transaction_date` for a range of dates.*

### <span class="badge badge--get">get</span> Show a refund transaction

> Definition

```ruby
client.show_refund
```

```javascript
taxjar.showRefund();
```

```php?start_inline=1
$taxjar->showRefund();
```

```shell
GET https://api.taxjar.com/v2/transactions/refunds/:transaction_id
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

refund = client.show_refund(321)
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");

taxjar.showRefund(321).then(function(res) {
  res.refund;
});
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$refund = $taxjar->showRefund(321);
```

```shell
curl https://api.taxjar.com/v2/transactions/refunds/321 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"
```

> Response Example

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

```ruby
#<Taxjar::Refund:0x007f6da40e33a0 @attrs={
  :transaction_id => "321",
  :user_id => 11836,
  :transaction_date => "2015-06-14T00:00:00Z",
  :transaction_reference_id => "123",
  :from_country => "US",
  :from_zip => 93107,
  :from_state => "CA",
  :from_city => "SANTA BARBARA",
  :from_street => "1218 State St",
  :to_country => "US",
  :to_zip => 90002,
  :to_state => "CA",
  :to_city => "LOS ANGELES",
  :to_street => "123 Palm Grove Ln",
  :amount => 17.95,
  :shipping => 2.0,
  :sales_tax => 0.95,
  :line_items => [
    {
      :id => 1,
      :quantity => 1,
      :product_identifier => "12-34243-0",
      :product_tax_code => nil,
      :description => "Heavy Widget",
      :unit_price => "15.0",
      :discount => "0.0",
      :sales_tax => "0.95"
    }
  ]
}>
```

Shows an existing refund transaction.

#### Request

GET https://api.taxjar.com/v2/transactions/refunds/:transaction_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | Unique identifier of the given refund transaction.

### <span class="badge badge--post">post</span> Create a refund transaction

> Definition

```ruby
client.create_refund
```

```javascript
taxjar.createRefund();
```

```php?start_inline=1
$taxjar->createRefund();
```

```shell
POST https://api.taxjar.com/v2/transactions/refunds
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.create_refund({
  :transaction_id => '123',
  :transaction_date => '2015/05/14',
  :transaction_reference_id => '123',
  :to_country => 'US',
  :to_zip => '90002',
  :to_state => 'CA',
  :to_city => 'Los Angeles',
  :to_street => '123 Palm Grove Ln',
  :amount => 17.45,
  :shipping => 1.5,
  :sales_tax => 0.95,
  :line_items => [
    {
      :quantity => 1,
      :product_identifier => '12-34243-9',
      :description => 'Fuzzy Widget',
      :unit_price => 15.0,
      :sales_tax => 0.95
    }
  ]
})
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");

taxjar.createRefund({
  transaction_id: '123',
  transaction_date: '2015/05/14',
  transaction_reference_id: '123',
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
}).then(function(res) {
  res.refund; // Refund object
});
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$refund = $taxjar->createRefund([
  'transaction_id' => '321',
  'transaction_date' => '2015/05/14',
  'transaction_reference_id' => '123',
  'to_country' => 'US',
  'to_zip' => '90002',
  'to_state' => 'CA',
  'to_city' => 'Los Angeles',
  'to_street' => '123 Palm Grove Ln',
  'amount' => 17.45,
  'shipping' => 1.5,
  'sales_tax' => 0.95,
  'line_items' => [
    [
      'quantity' => 1,
      'product_identifier' => '12-34243-9',
      'description' => 'Fuzzy Widget',
      'unit_price' => 15.0,
      'sales_tax' => 0.95
    ]
  ]
]);
```

```shell
curl https://api.taxjar.com/v2/transactions/refunds \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d transaction_id="123" \
  -d transaction_date="2015/05/14" \
  -d transaction_reference_id="123" \
  -d to_country="US" \
  -d to_zip="90002" \
  -d to_state="CA" \
  -d to_city="Los Angeles" \
  -d to_street="123 Palm Grove Ln" \
  -d amount=17.45 \
  -d shipping=1.5 \
  -d sales_tax=0.95 \
  -d "line_items[][quantity]=1 \
  &line_items[][product_identifier]='12-34234-9' \
  &line_items[][description]='Fuzzy Widget' \
  &line_items[][unit_price]=15.0 \
  &line_items[][sales_tax]=0.95"
```

> Response Example

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

```ruby
#<Taxjar::Refund:0x007f6da40e33a0 @attrs={
  :transaction_id => "321",
  :user_id => 11836,
  :transaction_date => "2015-06-14T00:00:00Z",
  :transaction_reference_id => "123",
  :from_country => "US",
  :from_zip => 93107,
  :from_state => "CA",
  :from_city => "SANTA BARBARA",
  :from_street => "1218 State St",
  :to_country => "US",
  :to_zip => 90002,
  :to_state => "CA",
  :to_city => "LOS ANGELES",
  :to_street => "123 Palm Grove Ln",
  :amount => 17.95,
  :shipping => 2.0,
  :sales_tax => 0.95,
  :line_items => [
    {
      :id => 1,
      :quantity => 1,
      :product_identifier => "12-34243-0",
      :product_tax_code => nil,
      :description => "Heavy Widget",
      :unit_price => "15.0",
      :discount => "0.0",
      :sales_tax => "0.95"
    }
  ]
}>
```

Creates a new refund transaction.

#### Request

POST https://api.taxjar.com/v2/transactions/refunds

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | Unique identifier of the given refund transaction.
transaction_reference_id | string | required | Unique identifier of the corresponding order transaction for the refund.
transaction_date | datetime | required | The date/time the transaction was originally recorded. <span class="usage-note" data-tooltip="The `transaction_date` may be a date '2015-05-25', an ISO UTC date/time '2015-05-25T13:05:45', or an ISO date/time with zone offset '2015-05-25T13:05:45-05:00'." data-tooltip-position="top center">View Note</span>
from_country | string | optional | ISO two country code of the country where the order shipped from. <span class="usage-note" data-tooltip="Either an address on file or `from_` parameters are required to perform tax calculations." data-tooltip-position="top center">View Note</span>
from_zip | string | optional | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | optional | State where the order shipped from.
from_city | string | optional | City where the order shipped from.
from_street | string | optional | Street address where the order shipped from.
to_country | string | required | ISO two country code of the country where the order shipped to.
to_zip | string | required | Postal code where the order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | required | State where the order shipped to.
to_city | string | optional | City where the order shipped to.
to_street | string | optional | Street address where the order shipped to.
amount | long | required | Total amount of the refunded order with shipping, excluding sales tax.
shipping | long | required | Total amount of shipping for the refunded order.
sales_tax | long | required | Total amount of sales tax collected for the refunded order.
line_items[][id] | string | optional | Unique identifier of the given line item.
line_items[][quantity] | integer | optional | Quantity for the item.
line_items[][product_identifier] | string | optional | Product identifier for the item.
line_items[][description] | string | optional | Description of the line item.
line_items[][product_tax_code] | string | optional | Product tax code for the item.
line_items[][unit_price] | long | optional | Unit price for the item.
line_items[][discount] | long | optional | Discount amount for the item.
line_items[][sales_tax] | long | optional | Sales tax collected for the item.

#### Notes

- *Either an address on file or `from_` parameters are required to perform tax calculations.*

- *The `transaction_date` may be a date '2015-05-25', an ISO UTC date/time '2015-05-25T13:05:45', or an ISO date/time with zone offset '2015-05-25T13:05:45-05:00'.*

### <span class="badge badge--put">put</span> Update a refund transaction

> Definition

```ruby
client.update_refund
```

```javascript
taxjar.updateRefund();
```

```php?start_inline=1
$taxjar->updateRefund();
```

```shell
PUT https://api.taxjar.com/v2/transactions/refunds/:transaction_id
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.update_refund({
  :transaction_id => '321',
  :amount => 17.95,
  :shipping => 2.0,
  :sales_tax => 0.95,
  :line_items => [
    {
      :quantity => 1,
      :product_identifier => '12-34243-0',
      :description => 'Heavy Widget',
      :unit_price => 15.0,
      :sales_tax => 0.95
    }
  ]
})
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");

taxjar.updateRefund({
  transaction_id: '123',
  amount: 17.95,
  shipping: 2.0,
  line_items: [
    {
      quantity: 1,
      product_identifier: '12-34243-0',
      description: 'Heavy Widget',
      unit_price: 15.0,
      sales_tax: 0.95
    }
  ]
}).then(function(res) {
  res.refund; // Refund object
});
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$refund = $taxjar->updateRefund([
  'transaction_id' => '321',
  'amount' => 17.95,
  'shipping' => 2.0,
  'line_items' => [
    [
      'quantity' => 1,
      'product_identifier' => '12-34243-0',
      'description' => 'Heavy Widget',
      'unit_price' => 15.0,
      'sales_tax' => 0.95
    ]
  ]
]);
```

```shell
curl https://api.taxjar.com/v2/transactions/refunds/321 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d transaction_id="321" \
  -d amount=17.95 \
  -d shipping=2.0 \
  -d sales_tax=0.95 \
  -d "line_items[][quantity]=1 \
  &line_items[][product_identifier]='12-34234-0' \
  &line_items[][description]='Heavy Widget' \
  &line_items[][unit_price]=15.0 \
  &line_items[][sales_tax]=0.95" \
  -X PUT
```

> Response Example

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

```ruby
#<Taxjar::Refund:0x007f6da40e33a0 @attrs={
  :transaction_id => "321",
  :user_id => 11836,
  :transaction_date => "2015-06-14T00:00:00Z",
  :transaction_reference_id => "123",
  :from_country => "US",
  :from_zip => 93107,
  :from_state => "CA",
  :from_city => "SANTA BARBARA",
  :from_street => "1218 State St",
  :to_country => "US",
  :to_zip => 90002,
  :to_state => "CA",
  :to_city => "LOS ANGELES",
  :to_street => "123 Palm Grove Ln",
  :amount => 17.95,
  :shipping => 2.0,
  :sales_tax => 0.95,
  :line_items => [
    {
      :id => 1,
      :quantity => 1,
      :product_identifier => "12-34243-9",
      :product_tax_code => nil,
      :description => "Heavy Widget",
      :unit_price => "15.0",
      :discount => "0.0",
      :sales_tax => "0.95"
    }
  ]
}>
```

Updates an existing refund transaction.

#### Request

PUT https://api.taxjar.com/v2/transactions/refunds/:transaction_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | Unique identifier of the given transaction.
transaction_reference_id | string | required | Unique identifier of the corresponding order transaction for the refund.
transaction_date | datetime | optional | The date/time the transaction was originally recorded.
from_country | string | optional | ISO two country code of the country where the order shipped from. <span class="usage-note" data-tooltip="Either an address on file or `from_` parameters are required to perform tax calculations." data-tooltip-position="top center">View Note</span>
from_zip | string | optional | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | optional | State where the order shipped from.
from_city | string | optional | City where the order shipped from.
from_street | string | optional | Street address where the order shipped from.
to_country | string | optional | ISO two country code of the country where the refunded order shipped to.
to_zip | string | optional | Postal code where the refunded order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | optional | State where the refunded order shipped to.
to_city | string | optional | City where the refunded order shipped to.
to_street | string | optional | Street address where the refunded order shipped to.
amount | long | optional | Total amount of the refunded order with shipping, excluding sales tax.
shipping | long | optional | Total amount of shipping for the refunded order.
sales_tax | long | optional | Total amount of sales tax collected for the refunded order.
line_items[][id] | string | optional | Unique identifier of the given line item.
line_items[][quantity] | integer | optional | Quantity for the item.
line_items[][product_identifier] | string | optional | Product identifier for the item.
line_items[][description] | string | optional | Description of the line item.
line_items[][product_tax_code] | string | optional | Product tax code for the item.
line_items[][unit_price] | long | optional | Unit price for the item.
line_items[][discount] | long | optional | Discount amount for the item.
line_items[][sales_tax] | long | optional | Sales tax collected for the item.

#### Notes

- *Either an address on file or `from_` parameters are required to perform tax calculations.*

- *The `transaction_date` may be a date '2015-05-25', an ISO UTC date/time '2015-05-25T13:05:45', or an ISO date/time with zone offset '2015-05-25T13:05:45-05:00'.*

### <span class="badge badge--delete">delete</span> Delete a refund transaction

> Definition

```ruby
client.delete_refund
```

```javascript
taxjar.deleteRefund();
```

```php?start_inline=1
$taxjar->deleteRefund();
```

```shell
DELETE https://api.taxjar.com/v2/transactions/refunds/:transaction_id
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

client.delete_refund(321)
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");

taxjar.deleteRefund(321).then(function(res) {

});
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$taxjar->deleteRefund(321);
```

```shell
curl https://api.taxjar.com/v2/transactions/refunds/321 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"
  -X DELETE
```

> Response Example

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

```ruby
#<Taxjar::Refund:0x007f6da40e33a0 @attrs={
  :transaction_id => "321",
  :user_id => 11836,
  :transaction_date => "2015-06-14T00:00:00Z",
  :transaction_reference_id => "123",
  :from_country => "US",
  :from_zip => 93107,
  :from_state => "CA",
  :from_city => "SANTA BARBARA",
  :from_street => "1218 State St",
  :to_country => "US",
  :to_zip => 90002,
  :to_state => "CA",
  :to_city => "LOS ANGELES",
  :to_street => "123 Palm Grove Ln",
  :amount => 17.95,
  :shipping => 2.0,
  :sales_tax => 0.95,
  :line_items => [
    {
      :id => 1,
      :quantity => 1,
      :product_identifier => "12-34243-9",
      :product_tax_code => nil,
      :description => "Heavy Widget",
      :unit_price => "15.0",
      :discount => "0.0",
      :sales_tax => "0.95"
    }
  ]
}>
```

Deletes an existing refund transaction.

#### Request

DELETE https://api.taxjar.com/v2/transactions/refunds/:transaction_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | Unique identifier of the given refund transaction.

## Validations

### <span class="badge badge--get">get</span> Validate a VAT number

Validates an existing VAT identification number against [VIES](http://ec.europa.eu/taxation_customs/vies/).

> Definition

```ruby
client.validate
```

```javascript
taxjar.validate();
```

```php?start_inline=1
$taxjar->validate();
```

```shell
GET https://api.taxjar.com/v2/validation
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

validation = client.validate({
  :vat => 'FR40303265045'
})
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");

taxjar.validate({
  vat: 'FR40303265045'
}).then(function(res) {
  res.validation; // Validation object
});
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$validation = $taxjar->validate([
  'vat' => 'FR40303265045'
]);
```

```shell
curl -G https://api.taxjar.com/v2/validation \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d vat="FR40303265045"
```

> Response Example

```json
{
  "validation": {
    "valid": true,
    "exists": true,
    "vies_available": true,
    "vies_response": {
      "country_code": "FR",
      "vat_number": "40303265045",
      "request_date": "2016-02-10",
      "valid": true,
      "name": "SA SODIMAS",
      "address": "11 RUE AMPERE\n26600 PONT DE L ISERE"
    }
  }
}
```

```ruby
#<Taxjar::Validation:0x006f6da40e33a0 @attrs={
  :valid => true,
  :exists => true,
  :vies_available => true,
  :vies_response => {
    :country_code => "FR",
    :vat_number => "40303265045",
    :request_date => "2016-02-10",
    :valid => true,
    :name => "SA SODIMAS",
    :address => "11 RUE AMPERE\n26600 PONT DE L ISERE"
  }
}>
```

#### Request

GET https://api.taxjar.com/v2/validation

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
vat | string | required | VAT identification number to validate. Country code should precede number, e.g. GB980780684.

#### Response

Returns a JSON object declaring if the VAT number is valid and exists along with data returned by VIES.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
valid | bool | Whether or not the VAT number is valid via regex and VIES.
exists | bool | Whether or not the VAT number exists in VIES.
vies_available | bool | Whether or not VIES is [currently available](http://ec.europa.eu/taxation_customs/vies/help.html).
vies_response | object | Data returned by VIES based on the given VAT number.

## Summarized Rates

### <span class="badge badge--get">get</span> Summarize tax rates for all regions

Retrieve minimum and average sales tax rates by region as a backup.

> Definition

```ruby
client.summary_rates
```

```javascript
taxjar.summaryRates();
```

```php?start_inline=1
$taxjar->summaryRates();
```

```shell
GET https://api.taxjar.com/v2/summary_rates
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

summarized_rates = client.summary_rates
```

```javascript
var taxjar = require("taxjar")("9e0cd62a22f451701f29c3bde214");

taxjar.summaryRates().then(function(res) {
  res.summary_rates; // Array of summarized rates
});
```

```php?start_inline=1
$taxjar = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$summarized_rates = $taxjar->summaryRates();
```

```shell
curl https://api.taxjar.com/v2/summary_rates \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"
```

> Response Example<br>
> <small>*Summary response shortened for brevity.*</small>

```json
{
  "summary_rates": [
    {
      "country_code": "US",
      "country": "United States",
      "region_code": "CA",
      "region": "California",
      "minimum_rate": {
        "label": "State Tax",
        "rate": 0.065
      },
      "average_rate": {
        "label": "Tax",
        "rate": 0.0827
      }
    },
    {
      "country_code": "CA",
      "country": "Canada",
      "region_code": "BC",
      "region": "British Columbia",
      "minimum_rate": {
        "label": "GST",
        "rate": 0.05
      },
      "average_rate": {
        "label": "PST",
        "rate": 0.12
      }
    },
    {
      "country_code": "UK",
      "country": "United Kingdom",
      "region_code": null,
      "region": null,
      "minimum_rate": {
        "label": "VAT",
        "rate": 0.2
      },
      "average_rate": {
        "label": "VAT",
        "rate": 0.2
      }
    }
  ]
}
```

```ruby
[
  {
    :country_code => "US",
    :country => "United States",
    :region_code => "CA",
    :region => "California",
    :minimum_rate => {
      :label => "State Tax",
      :rate => 0.065
    },
    :average_rate => {
      :label => "Tax",
      :rate => 0.0827
    }
  },
  {
    :country_code => "CA",
    :country => "Canada",
    :region_code => "BC",
    :region => "British Columbia",
    :minimum_rate => {
      :label => "GST",
      :rate => 0.05
    },
    :average_rate => {
      :label => "PST",
      :rate => 0.12
    }
  },
  {
    :country_code => "UK",
    :country => "United Kingdom",
    :region_code => nil,
    :region => nil,
    :minimum_rate => {
      :label => "VAT",
      :rate => 0.2
    },
    :average_rate => {
      :label => "VAT",
      :rate => 0.2
    }
  }
]
```

#### Request

GET https://api.taxjar.com/v2/summary_rates

#### Response

Returns a JSON object with an array of summarized rates for each region/state.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
country_code | string | Country code for summarized region.
country | string | Country name for summarized region.
region_code | string | Region code for summarized region.
region | string | Region name for summarized region.
minimum_rate | object | Region/state-only sales tax rate with label.
average_rate | object | Average rate for region/state and local sales tax across all postal codes in the summarized region with label.
