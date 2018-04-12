---
title: Sales Tax API Reference
description: "Documentation and code examples for SmartCalcs, TaxJar's sales tax API."
preferred_url: https://developers.taxjar.com/api/reference/

language_tabs:
  - shell: cURL
  - ruby: Ruby
  - python: Python
  - php: PHP
  - javascript: Node
  - csharp: .NET
  - java: Java

toc_header: "API Reference"

toc_footers:
  - <a href='https://www.taxjar.com/api/docs/'>v1 Documentation</a>

includes:
  - sandbox
  - rate-limiting
  - errors

search: false
---

# Introduction

> API Endpoint

```
https://api.taxjar.com/v2/
```

> [Sandbox](#sandbox-environment) API Endpoint

```
https://api.sandbox.taxjar.com/v2/
```

Welcome to the TaxJar Sales Tax API! You can use our API to get information on sales tax rates, categories or upload transactions.

We currently provide API clients for the following languages:

- <img class="client-icon" src="../images/clients/ruby-logo.png" width="16"> [Ruby Sales Tax API](https://github.com/taxjar/taxjar-ruby) *via RubyGems as `taxjar-ruby`*
- <img class="client-icon" src="../images/clients/python-logo.png" width="16"> [Python Sales Tax API](https://github.com/taxjar/taxjar-python) *via PyPI as `taxjar`*
- <img class="client-icon" src="../images/clients/php-logo.png" width="16"> [PHP Sales Tax API](https://github.com/taxjar/taxjar-php) *via Composer as `taxjar/taxjar-php`*
- <img class="client-icon" src="../images/clients/node-logo.png" width="16"> [Node Sales Tax API](https://github.com/taxjar/taxjar-node) *via NPM as `taxjar`*
- <img class="client-icon" src="../images/clients/csharp-logo.svg" width="16"> [C# / .NET Sales Tax API](https://github.com/taxjar/taxjar.net) *via NuGet as `TaxJar`*
- <img class="client-icon" src="../images/clients/java-logo.svg" width="16"> [Java Sales Tax API](https://github.com/taxjar/taxjar-java) *via Maven & Gradle as `com.taxjar:taxjar-java`*

Before getting started, you'll need to [sign up for TaxJar](https://app.taxjar.com/api_sign_up/basic/) and get an API key. If you have any questions or would like to request support for a new client language, feel free to [contact us](mailto:support@taxjar.com).

# Authentication

> Example Request With Authentication Headers

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;

public class AuthenticationExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");
    }

}
```

```shell
# Authorization headers must be passed for every request
$ curl "API_ENDPOINT" \
  -H "Authorization: Token token="9e0cd62a22f451701f29c3bde214""

or

$ curl "API_ENDPOINT" \
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

# Billing

Each sales tax calculation or rate lookup request made to our API results in a "transaction". These transactions will be counted toward your monthly plan limit. Overage fees are charged separately if you exceed your plan limit during busier months. You'll always remain on the same plan until you decide to upgrade. You can check your API usage under "Transaction History" from [Plans &amp; Billing](https://app.taxjar.com/account/plan) in the TaxJar app. Hover over the transaction counts for a breakdown of imported orders and calculations.

[View our pricing](https://www.taxjar.com/pricing/) to find a plan that works best for you. We also recommend our guide on [avoiding unnecessary API calls](/api/guides#avoiding-unnecessary-api-calls) to reduce your API usage and save money.

# Countries

We currently support the following countries around the world. If you would like to request the addition of a new country, please email us at [support@taxjar.com](mailto:support@taxjar.com).

#### North America

<p class="column-set">
  <span class="flag-icon flag-icon-us"></span>&nbsp;&nbsp; United States (US)<br>
  <span class="flag-icon flag-icon-ca"></span>&nbsp;&nbsp; Canada (CA)
</p>

#### Oceania

<p class="column-set">
  <span class="flag-icon flag-icon-au"></span>&nbsp;&nbsp; Australia (AU)
</p>

#### European Union

<p class="column-set">
  <span class="flag-icon flag-icon-at"></span>&nbsp;&nbsp; Austria (AT)<br>
  <span class="flag-icon flag-icon-be"></span>&nbsp;&nbsp; Belgium (BE)<br>
  <span class="flag-icon flag-icon-bg"></span>&nbsp;&nbsp; Bulgaria (BG)<br>
  <span class="flag-icon flag-icon-hr"></span>&nbsp;&nbsp; Croatia (HR)<br>
  <span class="flag-icon flag-icon-cy"></span>&nbsp;&nbsp; Cyprus (CY)<br>
  <span class="flag-icon flag-icon-cz"></span>&nbsp;&nbsp; Czech Republic (CZ)<br>
  <span class="flag-icon flag-icon-dk"></span>&nbsp;&nbsp; Denmark (DK)<br>
  <span class="flag-icon flag-icon-ee"></span>&nbsp;&nbsp; Estonia (EE)<br>
  <span class="flag-icon flag-icon-fi"></span>&nbsp;&nbsp; Finland (FI)<br>
  <span class="flag-icon flag-icon-fr"></span>&nbsp;&nbsp; France (FR)<br>
  <span class="flag-icon flag-icon-de"></span>&nbsp;&nbsp; Germany (DE)<br>
  <span class="flag-icon flag-icon-gr"></span>&nbsp;&nbsp; Greece (GR)<br>
  <span class="flag-icon flag-icon-hu"></span>&nbsp;&nbsp; Hungary (HU)<br>
  <span class="flag-icon flag-icon-ie"></span>&nbsp;&nbsp; Ireland (IE)<br>
  <span class="flag-icon flag-icon-it"></span>&nbsp;&nbsp; Italy (IT)<br>
  <span class="flag-icon flag-icon-lv"></span>&nbsp;&nbsp; Latvia (LV)<br>
  <span class="flag-icon flag-icon-lt"></span>&nbsp;&nbsp; Lithuania (LT)<br>
  <span class="flag-icon flag-icon-lu"></span>&nbsp;&nbsp; Luxembourg (LU)<br>
  <span class="flag-icon flag-icon-mt"></span>&nbsp;&nbsp; Malta (MT)<br>
  <span class="flag-icon flag-icon-nl"></span>&nbsp;&nbsp; Netherlands (NL)<br>
  <span class="flag-icon flag-icon-pl"></span>&nbsp;&nbsp; Poland (PL)<br>
  <span class="flag-icon flag-icon-pt"></span>&nbsp;&nbsp; Portugal (PT)<br>
  <span class="flag-icon flag-icon-ro"></span>&nbsp;&nbsp; Romania (RO)<br>
  <span class="flag-icon flag-icon-sk"></span>&nbsp;&nbsp; Slovakia (SK)<br>
  <span class="flag-icon flag-icon-si"></span>&nbsp;&nbsp; Slovenia (SI)<br>
  <span class="flag-icon flag-icon-es"></span>&nbsp;&nbsp; Spain (ES)<br>
  <span class="flag-icon flag-icon-se"></span>&nbsp;&nbsp; Sweden (SE)<br>
  <span class="flag-icon flag-icon-gb"></span>&nbsp;&nbsp; United Kingdom (GB)
</p>

# Sales Tax API

TaxJar API endpoints provide detailed sales tax rates and calculations. They also support extended US-based reporting and filing capabilities for TaxJar users.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/591e69b1095ef11195be)

## Categories

The TaxJar API provides product-level tax rules for a subset of product categories. These categories are to be used for products that are either exempt from sales tax in some jurisdictions or are taxed at reduced rates. You need not pass in a product tax code for sales tax calculations on product that is fully taxable. Simply leave that parameter out.

We will be expanding support for additional, less common categories over time. If you would like to request the addition of a new product category, please email us at [support@taxjar.com](mailto:support@taxjar.com).

### <span class="badge badge--get">get</span> List tax categories

> Definition

```ruby
client.categories
```

```python
client.categories
```

```javascript
client.categories();
```

```php?start_inline=1
$client->categories();
```

```csharp
client.Categories();
```

```java
client.categories();
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

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

categories = client.categories()
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.categories().then(res => {
  res.categories; // Array of categories
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$categories = $client->categories();
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var categories = client.Categories();
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.categories.CategoryResponse;

public class CategoryExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            CategoryResponse res = client.categories();
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/categories \
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
      "name": "Candy",
      "product_tax_code": "40010",
      "description": "Candy and similar items"
    },
    {
      "name": "Supplements",
      "product_tax_code": "40020",
      "description": "Non-food dietary supplements"
    },
    {
      "name": "Food & Groceries",
      "product_tax_code": "40030",
      "description": "Food for humans consumption, unprepared"
    },
    {
      "name": "Soft Drinks",
      "product_tax_code": "40050",
      "description": "Soft drinks, soda, and other similar beverages. Does not include fruit juices and water."
    },
    {
      "name": "Bottled Water",
      "product_tax_code": "40060",
      "description": "Bottled, drinkable water for human consumption."
    },
    {
      "name": "Prepared Foods",
      "product_tax_code": "41000",
      "description": "Foods intended for on-site consumption. Ex. Restaurant meals."
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
  #<Taxjar::Category:0x00000a @attrs={
    :name => "Digital Goods",
    :product_tax_code => "31000",
    :description => "Digital products transferred electronically."
  }>,
  #<Taxjar::Category:0x00000a @attrs={
    :name => "Clothing",
    :product_tax_code => "20010",
    :description => "All human wearing apparel suitable for general use"
  }>,
  #<Taxjar::Category:0x00000a @attrs={
    :name => "Non-Prescription",
    :product_tax_code => "51010",
    :description => "Drugs for human use without a prescription"
  }>
]
```

```python
[
  <TaxJarCategory {
    'product_tax_code': '31000',
    'name': 'Digital Goods',
    'description': 'Digital products transferred electronically, meaning obtained by the purchaser by means other than tangible storage media.'
  }>,
  <TaxJarCategory {
    'product_tax_code': '20010',
    'name': 'Clothing',
    'description': 'All human wearing apparel suitable for general use'
  }>,
  <TaxJarCategory {
    'product_tax_code': '51010',
    'name': 'Non-Prescription',
    'description': 'Drugs for human use without a prescription'
  }>
]
```

Lists all tax categories.

#### Request

GET https://api.taxjar.com/v2/categories

#### Response

Returns a `categories` JSON object with an array of product categories and corresponding tax codes. The following categories are currently supported:

| Category                  | Code  |                                                                                                                                                              Countries                                                                                                                                                              | Description                                                                                                                |
|:--------------------------|:------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------|
| Clothing                  | 20010 |                                                                                                            <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span>                                                                                                             | All human wearing apparel suitable for general use.                                                                        |
| Software as a Service     | 30070 |                                                                                                            <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span>                                                                                                             | Pre-written software, delivered electronically, but access remotely.                                                       |
| Digital Goods             | 31000 |                                                     <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-eu" data-tooltip="European Union" data-tooltip-position="top center"></span>                                                      | Digital products transferred electronically, meaning obtained by the purchaser by means other than tangible storage media. |
| Candy                     | 40010 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span>                                                                                                                                                                                                                        | Candy and similar items                                                                                                    |
| Supplements               | 40020 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span>                                                                                                                                                                                                                        | Non-food dietary supplements.                                                                                              |
| Food & Groceries          | 40030 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-eu" data-tooltip="European Union" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-au" data-tooltip="Australia" data-tooltip-position="top center"></span> | Food for humans consumption, unprepared.                                                                                   |
| Soft Drinks               | 40050 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span>                                                                                                                                                                                                                        | Soft drinks, soda, and other similar beverages. Does not include fruit juices and water.                                   |
| Bottled Water             | 40060 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span>                                                                                                                                                                                                                        | Bottled, drinkable water for human consumption.                                                                            |
| Prepared Foods            | 41000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span>                                                                                                                                                                                                                        | Foods intended for on-site consumption. Ex. Restaurant meals.                                                              |
| Non-Prescription          | 51010 |                                                     <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-eu" data-tooltip="European Union" data-tooltip-position="top center"></span>                                                      | Drugs for human use without a prescription.                                                                                |
| Prescription              | 51020 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-eu" data-tooltip="European Union" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-au" data-tooltip="Australia" data-tooltip-position="top center"></span> | Drugs for human use with a prescription.                                                                                   |
| Books                     | 81100 |                                                     <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-eu" data-tooltip="European Union" data-tooltip-position="top center"></span>                                                      | Books, printed.                                                                                                            |
| Textbooks                 | 81110 |                                                                                                            <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span>                                                                                                             | Textbooks, printed.                                                                                                        |
| Religious Books           | 81120 |                                                                                                            <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span>                                                                                                             | Religious books and manuals, printed.                                                                                      |
| Magazines & Subscriptions | 81300 |                                                     <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-eu" data-tooltip="European Union" data-tooltip-position="top center"></span>                                                      | Periodicals, printed, sold by subscription.                                                                                |
| Magazine                  | 81310 |                                                     <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-eu" data-tooltip="European Union" data-tooltip-position="top center"></span>                                                      | Periodicals, printed, sold individually.                                                                                   |
| Other Exempt              | 99999 |                                                                                                                                                                 All                                                                                                                                                                 | Item is exempt.                                                                                                            |

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
product_tax_code | string | Tax code of the given product category.
name | string | Name of the given product category.
description | string | Description of the given product category.

## Rates

### <span class="badge badge--get">get</span> Show tax rates for a location

> Definition

```ruby
client.rates_for_location
```

```python
client.rates_for_location
```

```javascript
client.ratesForLocation();
```

```php?start_inline=1
$client->ratesForLocation();
```

```csharp
client.RatesForLocation();
```

```java
client.ratesForLocation();
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
  :city => 'Santa Monica',
  :state => 'CA',
  :country => 'US'
})

# United States (ZIP+4 w/ Street Address for Rooftop Accuracy)
rates = client.rates_for_location('05495-2086', {
  :street => '312 Hurricane Lane',
  :city => 'Williston',
  :state => 'VT',
  :country => 'US'
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

# United States (ZIP+4)
rates = client.rates_for_location('90404-3370')

# United States (ZIP w/ Optional Params)
rates = client.rates_for_location('90404', {
  'city': 'Santa Monica',
  'state': 'CA',
  'country': 'US'
})

# United States (ZIP+4 w/ Street Address for Rooftop Accuracy)
rates = client.rates_for_location('05495-2086', {
  'street': '312 Hurricane Lane',
  'city': 'Williston',
  'state': 'VT',
  'country': 'US'
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

// United States (ZIP+4)
client.ratesForLocation('90404-3370').then(res => {
  res.rate; // Rate object
});

// United States (ZIP w/ Optional Params)
client.ratesForLocation('90404', {
  city: 'Santa Monica',
  state: 'CA',
  country: 'US'
}).then(res => {
  res.rate; // Rate object
});

// United States (ZIP+4 w/ Street Address for Rooftop Accuracy)
client.ratesForLocation('05495-2086', {
  street: '312 Hurricane Lane',
  city: 'Williston',
  state: 'VT',
  country: 'US'
}).then(res => {
  res.rate; // Rate object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

// United States (ZIP+4)
$rates = $client->ratesForLocation('90404-3370');

// United States (ZIP w/ Optional Params)
$rates = $client->ratesForLocation('90404', [
  'city' => 'Santa Monica',
  'state' => 'CA',
  'country' => 'US'
]);

// United States (ZIP+4 w/ Street Address for Rooftop Accuracy)
$rates = $client->ratesForLocation('05495-2086', [
  'street' => '312 Hurricane Lane',
  'city' => 'Williston',
  'state' => 'VT',
  'country' => 'US'
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

// United States (ZIP+4)
var rates = client.RatesForLocation("90404-3370");

// United States (ZIP w/ Optional Params)
var rates = client.RatesForLocation("90404", new {
  city = "Santa Monica",
  state = "CA",
  country = "US"
});

// United States (ZIP+4 w/ Street Address for Rooftop Accuracy)
var rates = client.RatesForLocation("05495-2086", new {
  street = "312 Hurricane Lane",
  city = "Williston",
  state = "VT",
  country = "US"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.rates.RateResponse;
import java.util.HashMap;
import java.util.Map;

public class RatesExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            RateResponse res = client.ratesForLocation("90404-3370");

            Map<String, String> params = new HashMap<>();
            params.put("city", "Santa Monica");
            params.put("state", "CA");
            params.put("country", "US");
            RateResponse res = client.ratesForLocation("90404", params);

            Map<String, String> params = new HashMap<>();
            params.put("street", "312 Hurricane Lane");
            params.put("city", "Williston");
            params.put("state", "VT");
            params.put("country", "US");
            RateResponse res = client.ratesForLocation("05495-2086", params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
# United States (ZIP+4)
$ curl https://api.taxjar.com/v2/rates/90404-3370 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"

# United States (ZIP w/ Optional Params)
$ curl -G https://api.taxjar.com/v2/rates/90404 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d city="Santa%20Monica" \
  -d state="CA" \
  -d country="US"

# United States (ZIP+4 w/ Street Address for Rooftop Accuracy)
$ curl -G https://api.taxjar.com/v2/rates/05495-2086 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d street="312 Hurricane Lane" \
  -d city="Williston" \
  -d state="VT" \
  -d country="US"
```

> <span class="scenario">Request Scenario: Canada</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

rates = client.rates_for_location('V5K0A1', {
  :city => 'Vancouver',
  :state => 'BC',
  :country => 'CA'
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

rates = client.rates_for_location('V5K0A1', {
  'city': 'Vancouver',
  'state': 'BC',
  'country': 'CA'
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.ratesForLocation('V5K0A1', {
  city: 'Vancouver',
  state: 'BC',
  country: 'CA'
}).then(res => {
  res.rate; // Rate object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$rates = $client->ratesForLocation('V5K0A1', [
  'city' => 'Vancouver',
  'state' => 'BC',
  'country' => 'CA'
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.RatesForLocation("V5K0A1", new {
  city = "Vancouver",
  state = "BC",
  country = "CA"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.rates.RateResponse;
import java.util.HashMap;
import java.util.Map;

public class CanadaRatesExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, String> params = new HashMap<>();
            params.put("city", "Vancouver");
            params.put("state", "BC");
            params.put("country", "CA");
            RateResponse res = client.ratesForLocation("V5K0A1", params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl -G https://api.taxjar.com/v2/rates/V5K0A1 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d city="Vancouver" \
  -d state="BC" \
  -d country="CA"
```

> <span class="scenario">Request Scenario: Australia</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

rates = client.rates_for_location('2060', {
  :city => 'Sydney',
  :country => 'AU'
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

rates = client.rates_for_location('2060', {
  'city': 'Sydney',
  'country': 'AU'
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.ratesForLocation('2060', {
  city: 'Sydney',
  country: 'AU'
}).then(res => {
  res.rate; // Rate object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$rates = $client->ratesForLocation('2060', [
  'city' => 'Sydney',
  'country' => 'AU'
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.RatesForLocation("2060", new {
  city = "Sydney",
  country = "AU"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.rates.RateResponse;
import java.util.HashMap;
import java.util.Map;

public class AustraliaRatesExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, String> params = new HashMap<>();
            params.put("city", "Sydney");
            params.put("country", "AU");
            RateResponse res = client.ratesForLocation("2060", params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl -G https://api.taxjar.com/v2/rates/2060 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d city="Sydney" \
  -d country="AU"
```

> <span class="scenario">Request Scenario: European Union</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

rates = client.rates_for_location('00150', {
  :city => 'Helsinki',
  :country => 'FI'
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

rates = client.rates_for_location('00150', {
  'city': 'Helsinki',
  'country': 'FI'
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.ratesForLocation('00150', {
  city: 'Helsinki',
  country: 'FI'
}).then(res => {
  res.rate; // Rate object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$rates = $client->ratesForLocation('00150', [
  'city' => 'Helsinki',
  'country' => 'FI'
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.RatesForLocation("00150", new {
  city = "Helsinki",
  country = "FI"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.rates.RateResponse;
import java.util.HashMap;
import java.util.Map;

public class EuropeanUnionRatesExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, String> params = new HashMap<>();
            params.put("city", "Helsinki");
            params.put("country", "FI");
            RateResponse res = client.ratesForLocation("00150", params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl -G https://api.taxjar.com/v2/rates/00150 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d city="Helsinki" \
  -d country="FI"
```

> Response Example<br>
> <small>*International requests outside of US/Canada may return different parameters.*</small>

```json
{
  "rate": {
    "zip": "90404",
    "state": "CA",
    "state_rate": "0.0625",
    "county": "LOS ANGELES",
    "county_rate": "0.01",
    "city": "SANTA MONICA",
    "city_rate": "0.0",
    "combined_district_rate": "0.025",
    "combined_rate": "0.0975",
    "freight_taxable": false
  }
}

{
  "rate": {
    "zip": "05495-2086",
    "country": "US",
    "country_rate": "0.0",
    "state": "VT",
    "state_rate": "0.06",
    "county": "CHITTENDEN",
    "county_rate": "0.0",
    "city": "WILLISTON",
    "city_rate": "0.0",
    "combined_district_rate": "0.01",
    "combined_rate": "0.07",
    "freight_taxable": true
  }
}
```

```ruby
#<Taxjar::Rate:0x00000a @attrs={
  :zip => "90404",
  :state => "CA",
  :state_rate => 0.065,
  :county => "LOS ANGELES",
  :county_rate => 0.01,
  :city => "SANTA MONICA",
  :city_rate => 0.005,
  :combined_district_rate => 0.015,
  :combined_rate => 0.095,
  :freight_taxable => false
}>

#<Taxjar::Rate:0x00000a @attrs={
  :zip => "05495-2086",
  :country => "US",
  :country_rate => 0,
  :state => "VT",
  :state_rate => 0.06,
  :county => "CHITTENDEN",
  :county_rate => 0,
  :city => "WILLISTON",
  :city_rate => 0,
  :combined_district_rate => 0.01,
  :combined_rate => 0.07,
  :freight_taxable => true
}>
```

```python
<TaxJarRate {
  'city': 'SANTA MONICA',
  'zip': '90404',
  'combined_district_rate': 0.025,
  'state_rate': 0.0625,
  'city_rate': 0,
  'county': 'LOS ANGELES',
  'state': 'CA',
  'combined_rate': 0.0975,
  'county_rate': 0.01,
  'freight_taxable': False
}>

<TaxJarRate {
  'city': 'WILLISTON',
  'zip': '05495-2086',
  'combined_district_rate': 0.01,
  'state_rate': 0.06,
  'city_rate': 0,
  'country_rate': 0,
  'county': 'CHITTENDEN',
  'state': 'VT',
  'country': 'US',
  'combined_rate': 0.07,
  'county_rate': 0,
  'freight_taxable': True
}>
```

> Response Scenario: Canada

```json
{
  "rate": {
    "zip": "V5K0A1",
    "city": "Vancouver",
    "state": "BC",
    "country": "CA",
    "combined_rate": "0.12",
    "freight_taxable": true
  }
}
```

```ruby
#<Taxjar::Rate:0x00000a @attrs={
  :zip => "V5K0A1",
  :city => "Vancouver",
  :state => "BC",
  :country => "CA",
  :combined_rate => 0.12,
  :freight_taxable => true
}>
```

```python
<TaxJarRate {
  'zip': 'V5K0A1',
  'city': 'Vancouver',
  'state': 'BC',
  'country': 'CA',
  'combined_rate': 0.12,
  'freight_taxable': True
}>
```

> Response Scenario: Australia

```json
{
  "rate": {
    "zip": "2060",
    "country": "AU",
    "country_rate": "0.1",
    "combined_rate": "0.1",
    "freight_taxable": true
  }
}
```

```ruby
#<Taxjar::Rate:0x00000a @attrs={
  :zip => "2060",
  :country => "AU",
  :country_rate => 0.1,
  :combined_rate => 0.1,
  :freight_taxable => true
}>
```

```python
<TaxJarRate {
  'zip': '2060',
  'country': 'AU',
  'country_rate': 0.1,
  'combined_rate': 0.1,
  'freight_taxable': True
}>
```

> Response Scenario: European Union

```json
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
#<Taxjar::Rate:0x00000a @attrs={
  :country => "FI",
  :name => "Finland",
  :standard_rate => 0.24,
  :reduced_rate => nil,
  :super_reduced_rate => nil,
  :parking_rate => nil,
  :distance_sale_threshold => nil,
  :freight_taxable => true
}>
```

```python
<TaxJarRate {
  'country': 'FI',
  'name': 'Finland',
  'standard_rate': 0.24,
  'reduced_rate': None,
  'super_reduced_rate': None,
  'parking_rate': None,
  'distance_sale_threshold': None,
  'freight_taxable': True
}>
```

Shows the sales tax rates for a given location.

#### Request

GET https://api.taxjar.com/v2/rates/:zip

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
country | string | <span class="conditional" data-tooltip="For international locations outside of US, `country` is required." data-tooltip-position="top center">conditional</span> | Two-letter ISO country code of the country for given location.
zip | string | required | Postal code for given location (5-Digit ZIP or ZIP+4).
state | string | optional | Two-letter ISO state code for given location.
city | string | optional | City for given location.
street | string | optional | Street address for given location. <span class="usage-note" data-tooltip="Street address provides more accurate calculations for the following states: AR, CT, GA, IA, IN, KS, KY, MD, MI, MN, NC, ND, NE, NJ, NV, OH, OK, RI, SD, TN, UT, VT, WA, WI, WV, WY" data-tooltip-position="top center">View Note</span>

#### Response

Returns a `rate` JSON object with rates for a given location broken down by state, county, city, and district. For international requests, returns standard and reduced rates.

<h4 id="us-rate-attributes"><span class="flag-icon flag-icon-us"></span>&nbsp; United States Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
zip | string | Postal code for given location.
country | string | Country for given location if SST state. <span class="usage-note" data-tooltip="Streamlined sales tax project member states include: AR, GA, IN, IA, KS, KY, MI, MN, NE, NV, NJ, NC, ND, OK, RI, SD, UT, VT, WA, WV, WI, WY" data-tooltip-position="top center">View Note</span>
country_rate | long | Country sales tax rate for given location if SST state. <span class="usage-note" data-tooltip="Streamlined sales tax project member states include: AR, GA, IN, IA, KS, KY, MI, MN, NE, NV, NJ, NC, ND, OK, RI, SD, UT, VT, WA, WV, WI, WY" data-tooltip-position="top center">View Note</span>
state | string | Postal abbreviated state name for given location.
state_rate | long | State sales tax rate for given location.
county | string | County name for given location.
county_rate | long | County sales tax rate for given location.
city | string | City name for given location.
city_rate | long | City sales tax rate for given location.
combined_district_rate | long | Aggregate rate for all city and county sales tax districts effective at the location.
combined_rate | long | Overall sales tax rate which includes state, county, city and district tax. This rate should be used to determine how much sales tax to collect for an order.
freight_taxable | bool | Freight taxability for given location.

<h4 id="ca-rate-attributes"><span class="flag-icon flag-icon-ca"></span>&nbsp; Canada Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
zip | string | Postal code for given location.
city | string | City name for given location.
state | string | Postal abbreviated state name for given location.
country | string | Two-letter ISO country code of the country for given location.
combined_rate | long | Overall sales tax rate. This rate should be used to determine how much sales tax to collect for an order.
freight_taxable | bool | Freight taxability for given location.

<h4 id="au-rate-attributes"><span class="flag-icon flag-icon-au"></span>&nbsp; Australia Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
zip | string | Postal code for given location.
country | string | Two-letter ISO country code of the country for given location.
country_rate | long | Country sales tax rate for given location.
combined_rate | long | Overall sales tax rate. This rate should be used to determine how much sales tax to collect for an order.
freight_taxable | bool | Freight taxability for given location.

<h4 id="eu-rate-attributes"><span class="flag-icon flag-icon-eu"></span>&nbsp; European Union Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
country | string | Two-letter ISO country code of the country for given location.
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

```python
client.tax_for_order
```

```javascript
client.taxForOrder();
```

```php?start_inline=1
$client->taxForOrder();
```

```csharp
client.TaxForOrder();
```

```java
client.taxForOrder();
```

```shell
POST https://api.taxjar.com/v2/taxes
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.tax_for_order({
  :from_country => 'US',
  :from_zip => '92093',
  :from_state => 'CA',
  :from_city => 'La Jolla',
  :from_street => '9500 Gilman Drive',
  :to_country => 'US',
  :to_zip => '90002',
  :to_state => 'CA',
  :to_city => 'Los Angeles',
  :to_street => '1335 E 103rd St',
  :amount => 15,
  :shipping => 1.5,
  :nexus_addresses => [
    {
      :id => 'Main Location',
      :country => 'US',
      :zip => '92093',
      :state => 'CA',
      :city => 'La Jolla',
      :street => '9500 Gilman Drive',
    }
  ],
  :line_items => [
    {
      :id => '1',
      :quantity => 1,
      :product_tax_code => '20010',
      :unit_price => 15,
      :discount => 0
    }
  ]
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

order = client.tax_for_order({
  'from_country': 'US',
  'from_zip': '92093',
  'from_state': 'CA',
  'from_city': 'La Jolla',
  'from_street': '9500 Gilman Drive',
  'to_country': 'US',
  'to_zip': '90002',
  'to_state': 'CA',
  'to_city': 'Los Angeles',
  'to_street': '1335 E 103rd St',
  'amount': 15,
  'shipping': 1.5,
  'nexus_addresses': [
    {
      'id': 'Main Location',
      'country': 'US',
      'zip': '92093',
      'state': 'CA',
      'city': 'La Jolla',
      'street': '9500 Gilman Drive'
    }
  ],
  'line_items': [
    {
      'id': '1',
      'quantity': 1,
      'product_tax_code': '20010',
      'unit_price': 15,
      'discount': 0
    }
  ]
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.taxForOrder({
  from_country: 'US',
  from_zip: '92093',
  from_state: 'CA',
  from_city: 'La Jolla',
  from_street: '9500 Gilman Drive',
  to_country: 'US',
  to_zip: '90002',
  to_state: 'CA',
  to_city: 'Los Angeles',
  to_street: '1335 E 103rd St',
  amount: 15,
  shipping: 1.5,
  nexus_addresses: [
    {
      id: 'Main Location',
      country: 'US',
      zip: '92093',
      state: 'CA',
      city: 'La Jolla',
      street: '9500 Gilman Drive'
    }
  ],
  line_items: [
    {
      id: '1',
      quantity: 1,
      product_tax_code: '20010',
      unit_price: 15,
      discount: 0
    }
  ]
}).then(res => {
  res.tax; // Tax object
  res.tax.amount_to_collect; // Amount to collect
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order_taxes = $client->taxForOrder([
  'from_country' => 'US',
  'from_zip' => '92093',
  'from_state' => 'CA',
  'from_city' => 'La Jolla',
  'from_street' => '9500 Gilman Drive',
  'to_country' => 'US',
  'to_zip' => '90002',
  'to_state' => 'CA',
  'to_city' => 'Los Angeles',
  'to_street' => '1335 E 103rd St',
  'amount' => 15,
  'shipping' => 1.5,
  'nexus_addresses' => [
    [
      'id' => 'Main Location',
      'country' => 'US',
      'zip' => '92093',
      'state' => 'CA',
      'city' => 'La Jolla',
      'street' => '9500 Gilman Drive',
    ]
  ],
  'line_items' => [
    [
      'id' => '1',
      'quantity' => 1,
      'product_tax_code' => '20010',
      'unit_price' => 15,
      'discount' => 0
    ]
  ]
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.TaxForOrder(new {
  from_country = "US",
  from_zip = "92093",
  from_state = "CA",
  from_city = "La Jolla",
  from_street = "9500 Gilman Drive",
  to_country = "US",
  to_zip = "90002",
  to_state = "CA",
  to_city = "Los Angeles",
  to_street = "1335 E 103rd St",
  amount = 15,
  shipping = 1.5,
  nexus_addresses = new[] {
    new {
      id = "Main Location",
      country = "US",
      zip = "92093",
      state = "CA",
      city = "La Jolla",
      street = "9500 Gilman Drive",
    }
  },
  line_items = new[] {
    new {
      id = "1",
      quantity = 1,
      product_tax_code = "20010",
      unit_price = 15,
      discount = 0
    }
  }
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.taxes.TaxResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TaxExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("from_country", "US");
            params.put("from_zip", "92093");
            params.put("from_state", "CA");
            params.put("from_city", "La Jolla");
            params.put("from_street", "9500 Gilman Drive");
            params.put("to_country", "US");
            params.put("to_zip", "90002");
            params.put("to_state", "CA");
            params.put("to_city", "Los Angeles");
            params.put("to_street", "1335 E 103rd St");
            params.put("amount", 15);
            params.put("shipping", 1.5);

            List<Map> nexusAddresses = new ArrayList();
            Map<String, Object> nexusAddress = new HashMap<>();
            nexusAddress.put("country", "US");
            nexusAddress.put("zip", "92093");
            nexusAddress.put("state", "CA");
            nexusAddress.put("city", "La Jolla");
            nexusAddress.put("street", "9500 Gilman Drive");
            nexusAddresses.add(nexusAddress);

            List<Map> lineItems = new ArrayList();
            Map<String, Object> lineItem = new HashMap<>();
            lineItem.put("id", 1);
            lineItem.put("quantity", 1);
            lineItem.put("product_tax_code", "20010");
            lineItem.put("unit_price", 15);
            lineItem.put("discount", 0);
            lineItems.add(lineItem);

            params.put("nexus_addresses", nexusAddresses);
            params.put("line_items", lineItems);

            TaxResponse res = client.taxForOrder(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/taxes \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "from_country": "US",
    "from_zip": "92093",
    "from_state": "CA",
    "from_city": "La Jolla",
    "from_street": "9500 Gilman Drive",
    "to_country": "US",
    "to_zip": "90002",
    "to_state": "CA",
    "to_city": "Los Angeles",
    "to_street": "1335 E 103rd St",
    "amount": 15,
    "shipping": 1.5,
    "nexus_addresses": [
      {
        "id": "Main Location",
        "country": "US",
        "zip": "92093",
        "state": "CA",
        "city": "La Jolla",
        "street": "9500 Gilman Drive"
      }
    ],
    "line_items": [
      {
        "id": "1",
        "quantity": 1,
        "product_tax_code": "20010",
        "unit_price": 15,
        "discount": 0
      }
    ]
  }'
```

> <span class="scenario">Request Scenario: Canada</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.tax_for_order({
  :from_country => 'CA',
  :from_zip => 'V6G 3E2',
  :from_state => 'BC',
  :from_city => 'Vancouver',
  :from_street => '845 Avison Way',
  :to_country => 'CA',
  :to_zip => 'M5V 2T6',
  :to_state => 'ON',
  :to_city => 'Toronto',
  :to_street => '301 Front St W',
  :amount => 15,
  :shipping => 1.5,
  :nexus_addresses => [
    {
      :id => 'Main Location',
      :country => 'CA',
      :zip => 'V6G 3E2',
      :state => 'BC',
      :city => 'Vancouver',
      :street => '845 Avison Way',
    }
  ],
  :line_items => [
    {
      :id => '1',
      :quantity => 1,
      :unit_price => 15,
      :discount => 0
    }
  ]
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

order = client.tax_for_order({
  'from_country': 'CA',
  'from_zip': 'V6G 3E2',
  'from_state': 'BC',
  'from_city': 'Vancouver',
  'from_street': '845 Avison Way',
  'to_country': 'CA',
  'to_zip': 'M5V 2T6',
  'to_state': 'ON',
  'to_city': 'Toronto',
  'to_street': '301 Front St W',
  'amount': 15,
  'shipping': 1.5,
  'nexus_addresses': [
    {
      'id': 'Main Location',
      'country': 'CA',
      'zip': 'V6G 3E2',
      'state': 'BC',
      'city': 'Vancouver',
      'street': '845 Avison Way'
    }
  ],
  'line_items': [
    {
      'id': '1',
      'quantity': 1,
      'unit_price': 15,
      'discount': 0
    }
  ]
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.taxForOrder({
  from_country: 'CA',
  from_zip: 'V6G 3E2',
  from_state: 'BC',
  from_city: 'Vancouver',
  from_street: '845 Avison Way',
  to_country: 'CA',
  to_zip: 'M5V 2T6',
  to_state: 'ON',
  to_city: 'Toronto',
  to_street: '301 Front St W',
  amount: 15,
  shipping: 1.5,
  nexus_addresses: [
    {
      id: 'Main Location',
      country: 'CA',
      zip: 'V6G 3E2',
      state: 'BC',
      city: 'Vancouver',
      street: '845 Avison Way'
    }
  ],
  line_items: [
    {
      id: '1',
      quantity: 1,
      unit_price: 15,
      discount: 0
    }
  ]
}).then(res => {
  res.tax; // Tax object
  res.tax.amount_to_collect; // Amount to collect
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order_taxes = $client->taxForOrder([
  'from_country' => 'CA',
  'from_zip' => 'V6G 3E2',
  'from_state' => 'BC',
  'from_city' => 'Vancouver',
  'from_street' => '845 Avison Way',
  'to_country' => 'CA',
  'to_zip' => 'M5V 2T6',
  'to_state' => 'ON',
  'to_city' => 'Toronto',
  'to_street' => '301 Front St W',
  'amount' => 15,
  'shipping' => 1.5,
  'nexus_addresses' => [
    [
      'id' => 'Main Location',
      'country' => 'CA',
      'zip' => 'V6G 3E2',
      'state' => 'BC',
      'city' => 'Vancouver',
      'street' => '845 Avison Way',
    ]
  ],
  'line_items' => [
    [
      'id' => '1',
      'quantity' => 1,
      'unit_price' => 15,
      'discount' => 0
    ]
  ]
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.TaxForOrder(new {
  from_country = "CA",
  from_zip = "V6G 3E2",
  from_state = "BC",
  from_city = "Vancouver",
  from_street = "845 Avison Way",
  to_country = "CA",
  to_zip = "M5V 2T6",
  to_state = "ON",
  to_city = "Toronto",
  to_street = "301 Front St W",
  amount = 15,
  shipping = 1.5,
  nexus_addresses = new[] {
    new {
      id = "Main Location",
      country = "US",
      zip = "V6G 3E2",
      state = "BC",
      city = "Vancouver",
      street = "845 Avison Way",
    }
  },
  line_items = new[] {
    new {
      id = "1",
      quantity = 1,
      unit_price = 15,
      discount = 0
    }
  }
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.taxes.TaxResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CanadaTaxExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("from_country", "CA");
            params.put("from_zip", "V6G 3E2");
            params.put("from_state", "BC");
            params.put("from_city", "Vancouver");
            params.put("from_street", "845 Avison Way");
            params.put("to_country", "CA");
            params.put("to_zip", "M5V 2T6");
            params.put("to_state", "ON");
            params.put("to_city", "Toronto");
            params.put("to_street", "301 Front St W");
            params.put("amount", 15);
            params.put("shipping", 1.5);

            List<Map> nexusAddresses = new ArrayList();
            Map<String, Object> nexusAddress = new HashMap<>();
            nexusAddress.put("country", "US");
            nexusAddress.put("zip", "V6G 3E2");
            nexusAddress.put("state", "BC");
            nexusAddress.put("city", "Vancouver");
            nexusAddress.put("street", "845 Avison Way");
            nexusAddresses.add(nexusAddress);

            List<Map> lineItems = new ArrayList();
            Map<String, Object> lineItem = new HashMap<>();
            lineItem.put("id", 1);
            lineItem.put("quantity", 1);
            lineItem.put("unit_price", 15);
            lineItem.put("discount", 0);
            lineItems.add(lineItem);

            params.put("nexus_addresses", nexusAddresses);
            params.put("line_items", lineItems);

            TaxResponse res = client.taxForOrder(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/taxes \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "from_country": "CA",
    "from_zip": "V6G 3E2",
    "from_state": "BC",
    "from_city": "Vancouver",
    "from_street": "845 Avison Way",
    "to_country": "CA",
    "to_zip": "M5V 2T6",
    "to_state": "ON",
    "to_city": "Toronto",
    "to_street": "301 Front St W",
    "amount": 15,
    "shipping": 1.5,
    "nexus_addresses": [
      {
        "id": "Main Location",
        "country": "CA",
        "zip": "V6G 3E2",
        "state": "BC",
        "city": "Vancouver",
        "street": "845 Avison Way"
      }
    ],
    "line_items": [
      {
        "id": "1",
        "quantity": 1,
        "unit_price": 15,
        "discount": 0
      }
    ]
  }'
```

> <span class="scenario">Request Scenario: Australia</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.tax_for_order({
  :from_country => 'AU',
  :from_zip => 'NSW 2000',
  :from_city => 'Sydney',
  :from_street => '483 George St',
  :to_country => 'AU',
  :to_zip => 'VIC 3002',
  :to_city => 'Richmond',
  :to_street => 'Brunton Ave',
  :amount => 15,
  :shipping => 1.5,
  :nexus_addresses => [
    {
      :id => 'Main Location',
      :country => 'AU',
      :zip => 'NSW 2000',
      :city => 'Sydney',
      :street => '483 George St',
    }
  ],
  :line_items => [
    {
      :id => '1',
      :quantity => 1,
      :unit_price => 15,
      :discount => 0
    }
  ]
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

order = client.tax_for_order({
  'from_country': 'AU',
  'from_zip': 'NSW 2000',
  'from_city': 'Sydney',
  'from_street': '483 George St',
  'to_country': 'AU',
  'to_zip': 'VIC 3002',
  'to_city': 'Richmond',
  'to_street': 'Brunton Ave',
  'amount': 15,
  'shipping': 1.5,
  'nexus_addresses': [
    {
      'id': 'Main Location',
      'country': 'AU',
      'zip': 'NSW 2000',
      'city': 'Sydney',
      'street': '483 George St'
    }
  ],
  'line_items': [
    {
      'id': '1',
      'quantity': 1,
      'unit_price': 15,
      'discount': 0
    }
  ]
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.taxForOrder({
  from_country: 'AU',
  from_zip: 'NSW 2000',
  from_city: 'Sydney',
  from_street: '483 George St',
  to_country: 'AU',
  to_zip: 'VIC 3002',
  to_city: 'Richmond',
  to_street: 'Brunton Ave',
  amount: 15,
  shipping: 1.5,
  nexus_addresses: [
    {
      id: 'Main Location',
      country: 'AU',
      zip: 'NSW 2000',
      city: 'Sydney',
      street: '483 George St'
    }
  ],
  line_items: [
    {
      id: '1',
      quantity: 1,
      unit_price: 15,
      discount: 0
    }
  ]
}).then(res => {
  res.tax; // Tax object
  res.tax.amount_to_collect; // Amount to collect
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order_taxes = $client->taxForOrder([
  'from_country' => 'AU',
  'from_zip' => 'NSW 2000',
  'from_city' => 'Sydney',
  'from_street' => '483 George St',
  'to_country' => 'AU',
  'to_zip' => 'VIC 3002',
  'to_city' => 'Richmond',
  'to_street' => 'Brunton Ave',
  'amount' => 15,
  'shipping' => 1.5,
  'nexus_addresses' => [
    [
      'id' => 'Main Location',
      'country' => 'AU',
      'zip' => 'NSW 2000',
      'city' => 'Sydney',
      'street' => '483 George St',
    ]
  ],
  'line_items' => [
    [
      'id' => '1',
      'quantity' => 1,
      'unit_price' => 15,
      'discount' => 0
    ]
  ]
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.TaxForOrder(new {
  from_country = "AU",
  from_zip = "NSW 2000",
  from_city = "Sydney",
  from_street = "483 George St",
  to_country = "AU",
  to_zip = "VIC 3002",
  to_city = "Richmond",
  to_street = "Brunton Ave",
  amount = 15,
  shipping = 1.5,
  nexus_addresses = new[] {
    new {
      id = "Main Location",
      country = "AU",
      zip = "NSW 2000",
      city = "Sydney",
      street = "483 George St",
    }
  },
  line_items = new[] {
    new {
      id = "1",
      quantity = 1,
      unit_price = 15,
      discount = 0
    }
  }
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.taxes.TaxResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AustraliaTaxExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("from_country", "AU");
            params.put("from_zip", "NSW 2000");
            params.put("from_city", "Sydney");
            params.put("from_street", "483 George St");
            params.put("to_country", "AU");
            params.put("to_zip", "VIC 3002");
            params.put("to_city", "Richmond");
            params.put("to_street", "Brunton Ave");
            params.put("amount", 15);
            params.put("shipping", 1.5);

            List<Map> nexusAddresses = new ArrayList();
            Map<String, Object> nexusAddress = new HashMap<>();
            nexusAddress.put("country", "AU");
            nexusAddress.put("zip", "NSW 2000");
            nexusAddress.put("city", "Sydney");
            nexusAddress.put("street", "483 George St");
            nexusAddresses.add(nexusAddress);

            List<Map> lineItems = new ArrayList();
            Map<String, Object> lineItem = new HashMap<>();
            lineItem.put("id", 1);
            lineItem.put("quantity", 1);
            lineItem.put("unit_price", 15);
            lineItem.put("discount", 0);
            lineItems.add(lineItem);

            params.put("nexus_addresses", nexusAddresses);
            params.put("line_items", lineItems);

            TaxResponse res = client.taxForOrder(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/taxes \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "from_country": "AU",
    "from_zip": "NSW 2000",
    "from_city": "Sydney",
    "from_street": "483 George St",
    "to_country": "AU",
    "to_zip": "VIC 3002",
    "to_city": "Richmond",
    "to_street": "Brunton Ave",
    "amount": 15,
    "shipping": 1.5,
    "nexus_addresses": [
      {
        "id": "Main Location",
        "country": "AU",
        "zip": "NSW 2000",
        "city": "Sydney",
        "street": "483 George St"
      }
    ],
    "line_items": [
      {
        "id": "1",
        "quantity": 1,
        "unit_price": 15,
        "discount": 0
      }
    ]
  }'
```

> <span class="scenario">Request Scenario: European Union</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.tax_for_order({
  :from_country => 'FR',
  :from_zip => '75008',
  :from_city => 'Paris',
  :from_street => '55 Rue du Faubourg Saint-Honoré',
  :to_country => 'FR',
  :to_zip => '13281',
  :to_city => 'Marseille',
  :to_street => 'Rue Fort du Sanctuaire',
  :amount => 15,
  :shipping => 1.5,
  :nexus_addresses => [
    {
      :id => 'Main Location',
      :country => 'FR',
      :zip => '75008',
      :city => 'Paris',
      :street => '55 Rue du Faubourg Saint-Honoré',
    }
  ],
  :line_items => [
    {
      :id => '1',
      :quantity => 1,
      :unit_price => 15,
      :discount => 0
    }
  ]
})
```

```python
# coding=utf-8
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

order = client.tax_for_order({
  'from_country': 'FR',
  'from_zip': '75008',
  'from_city': 'Paris',
  'from_street': '55 Rue du Faubourg Saint-Honoré',
  'to_country': 'FR',
  'to_zip': '13281',
  'to_city': 'Marseille',
  'to_street': 'Rue Fort du Sanctuaire',
  'amount': 15,
  'shipping': 1.5,
  'nexus_addresses': [
    {
      'id': 'Main Location',
      'country': 'FR',
      'zip': '75008',
      'city': 'Paris',
      'street': '55 Rue du Faubourg Saint-Honoré'
    }
  ],
  'line_items': [
    {
      'id': '1',
      'quantity': 1,
      'unit_price': 15,
      'discount': 0
    }
  ]
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.taxForOrder({
  from_country: 'FR',
  from_zip: '75008',
  from_city: 'Paris',
  from_street: '55 Rue du Faubourg Saint-Honoré',
  to_country: 'FR',
  to_zip: '13281',
  to_city: 'Marseille',
  to_street: 'Rue Fort du Sanctuaire',
  amount: 15,
  shipping: 1.5,
  nexus_addresses: [
    {
      id: 'Main Location',
      country: 'CA',
      zip: '75008',
      city: 'Paris',
      street: '55 Rue du Faubourg Saint-Honoré'
    }
  ],
  line_items: [
    {
      id: '1',
      quantity: 1,
      unit_price: 15,
      discount: 0
    }
  ]
}).then(res => {
  res.tax; // Tax object
  res.tax.amount_to_collect; // Amount to collect
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order_taxes = $client->taxForOrder([
  'from_country' => 'FR',
  'from_zip' => '75008',
  'from_city' => 'Paris',
  'from_street' => '55 Rue du Faubourg Saint-Honoré',
  'to_country' => 'FR',
  'to_zip' => '13281',
  'to_city' => 'Marseille',
  'to_street' => 'Rue Fort du Sanctuaire',
  'amount' => 15,
  'shipping' => 1.5,
  'nexus_addresses' => [
    [
      'id' => 'Main Location',
      'country' => 'FR',
      'zip' => '75008',
      'city' => 'Paris',
      'street' => '55 Rue du Faubourg Saint-Honoré',
    ]
  ],
  'line_items' => [
    [
      'id' => '1',
      'quantity' => 1,
      'unit_price' => 15,
      'discount' => 0
    ]
  ]
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.TaxForOrder(new {
  from_country = "FR",
  from_zip = "75008",
  from_city = "Paris",
  from_street = "55 Rue du Faubourg Saint-Honoré",
  to_country = "FR",
  to_zip = "13281",
  to_city = "Marseille",
  to_street = "Rue Fort du Sanctuaire",
  amount = 15,
  shipping = 1.5,
  nexus_addresses = new[] {
    new {
      id = "Main Location",
      country = "FR",
      zip = "75008",
      city = "Paris",
      street = "55 Rue du Faubourg Saint-Honoré",
    }
  },
  line_items = new[] {
    new {
      id = "1",
      quantity = 1,
      unit_price = 15,
      discount = 0
    }
  }
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.taxes.TaxResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EuropeanUnionTaxExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("from_country", "FR");
            params.put("from_zip", "75008");
            params.put("from_city", "Paris");
            params.put("from_street", "55 Rue du Faubourg Saint-Honoré");
            params.put("to_country", "FR");
            params.put("to_zip", "13281");
            params.put("to_city", "Marseille");
            params.put("to_street", "Rue Fort du Sanctuaire");
            params.put("amount", 15);
            params.put("shipping", 1.5);

            List<Map> nexusAddresses = new ArrayList();
            Map<String, Object> nexusAddress = new HashMap<>();
            nexusAddress.put("country", "FR");
            nexusAddress.put("zip", "75008");
            nexusAddress.put("city", "Paris");
            nexusAddress.put("street", "55 Rue du Faubourg Saint-Honoré");
            nexusAddresses.add(nexusAddress);

            List<Map> lineItems = new ArrayList();
            Map<String, Object> lineItem = new HashMap<>();
            lineItem.put("id", 1);
            lineItem.put("quantity", 1);
            lineItem.put("unit_price", 15);
            lineItem.put("discount", 0);
            lineItems.add(lineItem);

            params.put("nexus_addresses", nexusAddresses);
            params.put("line_items", lineItems);

            TaxResponse res = client.taxForOrder(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/taxes \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "from_country": "FR",
    "from_zip": "75008",
    "from_city": "Paris",
    "from_street": "55 Rue du Faubourg Saint-Honoré",
    "to_country": "FR",
    "to_zip": "13281",
    "to_city": "Marseille",
    "to_street": "Rue Fort du Sanctuaire",
    "amount": 15,
    "shipping": 1.5,
    "nexus_addresses": [
      {
        "id": "Main Location",
        "country": "FR",
        "zip": "75008",
        "city": "Paris",
        "street": "55 Rue du Faubourg Saint-Honoré"
      }
    ],
    "line_items": [
      {
        "id": "1",
        "quantity": 1,
        "unit_price": 15,
        "discount": 0
      }
    ]
  }'
```

> <span class="scenario">Request Scenario: Origin-Based Sourcing</span>
<span class="scenario-desc">Calculate sales tax for <a href="https://blog.taxjar.com/charging-sales-tax-rates/" target="_blank">origin-based states</a> such as Texas. In origin-based states, sales tax should be collected based on where you, the seller, are located. If shipping from out of state, destination-based sourcing may apply. Review our <a href="https://www.taxjar.com/states/" target="_blank">state guides</a> to learn how to collect sales tax where you have nexus.</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.tax_for_order({
  :from_country => 'US',
  :from_zip => '78701',
  :from_state => 'TX',
  :from_city => 'Austin',
  :from_street => '1100 Congress Ave',
  :to_country => 'US',
  :to_zip => '77058',
  :to_state => 'TX',
  :to_city => 'Houston',
  :to_street => '1601 E NASA Pkwy',
  :amount => 15,
  :shipping => 1.5,
  :nexus_addresses => [
    {
      :id => 'Main Location',
      :country => 'US',
      :zip => '78701',
      :state => 'TX',
      :city => 'Austin',
      :street => '1100 Congress Ave',
    }
  ],
  :line_items => [
    {
      :id => '1',
      :quantity => 1,
      :unit_price => 15,
      :discount => 0
    }
  ]
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

order = client.tax_for_order({
  'from_country': 'US',
  'from_zip': '78701',
  'from_state': 'TX',
  'from_city': 'Austin',
  'from_street': '1100 Congress Ave',
  'to_country': 'US',
  'to_zip': '77058',
  'to_state': 'TX',
  'to_city': 'Houston',
  'to_street': '1601 E NASA Pkwy',
  'amount': 15,
  'shipping': 1.5,
  'nexus_addresses': [
    {
      'id': 'Main Location',
      'country': 'US',
      'zip': '78701',
      'state': 'TX',
      'city': 'Austin',
      'street': '1100 Congress Ave'
    }
  ],
  'line_items': [
    {
      'id': '1',
      'quantity': 1,
      'unit_price': 15,
      'discount': 0
    }
  ]
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.taxForOrder({
  from_country: 'US',
  from_zip: '78701',
  from_state: 'TX',
  from_city: 'Austin',
  from_street: '1100 Congress Ave',
  to_country: 'US',
  to_zip: '77058',
  to_state: 'TX',
  to_city: 'Houston',
  to_street: '1601 E NASA Pkwy',
  amount: 15,
  shipping: 1.5,
  nexus_addresses: [
    {
      id: 'Main Location',
      country: 'US',
      zip: '78701',
      state: 'TX',
      city: 'Austin',
      street: '1100 Congress Ave'
    }
  ],
  line_items: [
    {
      id: '1',
      quantity: 1,
      unit_price: 15,
      discount: 0
    }
  ]
}).then(res => {
  res.tax; // Tax object
  res.tax.amount_to_collect; // Amount to collect
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order_taxes = $client->taxForOrder([
  'from_country' => 'US',
  'from_zip' => '78701',
  'from_state' => 'TX',
  'from_city' => 'Austin',
  'from_street' => '1100 Congress Ave',
  'to_country' => 'US',
  'to_zip' => '77058',
  'to_state' => 'TX',
  'to_city' => 'Houston',
  'to_street' => '1601 E NASA Pkwy',
  'amount' => 15,
  'shipping' => 1.5,
  'nexus_addresses' => [
    [
      'id' => 'Main Location',
      'country' => 'US',
      'zip' => '78701',
      'state' => 'TX',
      'city' => 'Austin',
      'street' => '1100 Congress Ave',
    ]
  ],
  'line_items' => [
    [
      'id' => '1',
      'quantity' => 1,
      'unit_price' => 15,
      'discount' => 0
    ]
  ]
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.TaxForOrder(new {
  from_country = "US",
  from_zip = "78701",
  from_state = "TX",
  from_city = "Austin",
  from_street = "1100 Congress Ave",
  to_country = "US",
  to_zip = "77058",
  to_state = "TX",
  to_city = "Houston",
  to_street = "1601 E NASA Pkwy",
  amount = 15,
  shipping = 1.5,
  nexus_addresses = new[] {
    new {
      id = "Main Location",
      country = "US",
      zip = "78701",
      state = "TX",
      city = "Austin",
      street = "1100 Congress Ave",
    }
  },
  line_items = new[] {
    new {
      id = "1",
      quantity = 1,
      unit_price = 15,
      discount = 0
    }
  }
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.taxes.TaxResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class OriginBasedSourcingTaxExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("from_country", "US");
            params.put("from_zip", "78701");
            params.put("from_state", "TX");
            params.put("from_city", "Austin");
            params.put("from_street", "1100 Congress Ave");
            params.put("to_country", "US");
            params.put("to_zip", "77058");
            params.put("to_state", "TX");
            params.put("to_city", "Houston");
            params.put("to_street", "1601 E NASA Pkwy");
            params.put("amount", 15);
            params.put("shipping", 1.5);

            List<Map> nexusAddresses = new ArrayList();
            Map<String, Object> nexusAddress = new HashMap<>();
            nexusAddress.put("country", "US");
            nexusAddress.put("zip", "78701");
            nexusAddress.put("state", "TX");
            nexusAddress.put("city", "Austin");
            nexusAddress.put("street", "1100 Congress Ave");
            nexusAddresses.add(nexusAddress);

            List<Map> lineItems = new ArrayList();
            Map<String, Object> lineItem = new HashMap<>();
            lineItem.put("id", 1);
            lineItem.put("quantity", 1);
            lineItem.put("unit_price", 15);
            lineItem.put("discount", 0);
            lineItems.add(lineItem);

            params.put("nexus_addresses", nexusAddresses);
            params.put("line_items", lineItems);

            TaxResponse res = client.taxForOrder(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/taxes \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "from_country": "US",
    "from_zip": "78701",
    "from_state": "TX",
    "from_city": "Austin",
    "from_street": "1100 Congress Ave",
    "to_country": "US",
    "to_zip": "77058",
    "to_state": "TX",
    "to_city": "Houston",
    "to_street": "1601 E NASA Pkwy",
    "amount": 15,
    "shipping": 1.5,
    "nexus_addresses": [
      {
        "id": "Main Location",
        "country": "US",
        "zip": "78701",
        "state": "TX",
        "city": "Austin",
        "street": "1100 Congress Ave"
      }
    ],
    "line_items": [
      {
        "id": "1",
        "quantity": 1,
        "unit_price": 15,
        "discount": 0
      }
    ]
  }'
```

> <span class="scenario">Request Scenario: Shipping Exemptions</span>
<span class="scenario-desc">If separately stated, <a href="https://blog.taxjar.com/sales-tax-and-shipping/" target="_blank">shipping charges</a> aren't taxable in states such as California and Massachusetts. They are taxable if you include the charge as part of the price of the item.</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.tax_for_order({
  :from_country => 'US',
  :from_zip => '02110',
  :from_state => 'MA',
  :from_city => 'Boston',
  :from_street => '1 Central Wharf',
  :to_country => 'US',
  :to_zip => '01608',
  :to_state => 'MA',
  :to_city => 'Worcester',
  :to_street => '455 Main St',
  :amount => 15,
  :shipping => 1.5,
  :nexus_addresses => [
    {
      :id => 'Main Location',
      :country => 'US',
      :zip => '02110',
      :state => 'MA',
      :city => 'Boston',
      :street => '1 Central Wharf',
    }
  ],
  :line_items => [
    {
      :id => '1',
      :quantity => 1,
      :unit_price => 15,
      :discount => 0
    }
  ]
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

order = client.tax_for_order({
  'from_country': 'US',
  'from_zip': '02110',
  'from_state': 'MA',
  'from_city': 'Boston',
  'from_street': '1 Central Wharf',
  'to_country': 'US',
  'to_zip': '01608',
  'to_state': 'MA',
  'to_city': 'Worcester',
  'to_street': '455 Main St',
  'amount': 15,
  'shipping': 1.5,
  'nexus_addresses': [
    {
      'id': 'Main Location',
      'country': 'US',
      'zip': '02110',
      'state': 'MA',
      'city': 'Boston',
      'street': '1 Central Wharf'
    }
  ],
  'line_items': [
    {
      'id': '1',
      'quantity': 1,
      'unit_price': 15,
      'discount': 0
    }
  ]
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.taxForOrder({
  from_country: 'US',
  from_zip: '02110',
  from_state: 'MA',
  from_city: 'Boston',
  from_street: '1 Central Wharf',
  to_country: 'US',
  to_zip: '01608',
  to_state: 'MA',
  to_city: 'Worcester',
  to_street: '455 Main St',
  amount: 15,
  shipping: 1.5,
  nexus_addresses: [
    {
      id: 'Main Location',
      country: 'US',
      zip: '02110',
      state: 'MA',
      city: 'Boston',
      street: '1 Central Wharf'
    }
  ],
  line_items: [
    {
      id: '1',
      quantity: 1,
      unit_price: 15,
      discount: 0
    }
  ]
}).then(res => {
  res.tax; // Tax object
  res.tax.amount_to_collect; // Amount to collect
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order_taxes = $client->taxForOrder([
  'from_country' => 'US',
  'from_zip' => '02110',
  'from_state' => 'MA',
  'from_city' => 'Boston',
  'from_street' => '1 Central Wharf',
  'to_country' => 'US',
  'to_zip' => '01608',
  'to_state' => 'MA',
  'to_city' => 'Worcester',
  'to_street' => '455 Main St',
  'amount' => 15,
  'shipping' => 1.5,
  'nexus_addresses' => [
    [
      'id' => 'Main Location',
      'country' => 'US',
      'zip' => '02110',
      'state' => 'MA',
      'city' => 'Boston',
      'street' => '1 Central Wharf',
    ]
  ],
  'line_items' => [
    [
      'id' => '1',
      'quantity' => 1,
      'unit_price' => 15,
      'discount' => 0
    ]
  ]
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.TaxForOrder(new {
  from_country = "US",
  from_zip = "02110",
  from_state = "MA",
  from_city = "Boston",
  from_street = "1 Central Wharf",
  to_country = "US",
  to_zip = "01608",
  to_state = "MA",
  to_city = "Worcester",
  to_street = "455 Main St",
  amount = 15,
  shipping = 1.5,
  nexus_addresses = new[] {
    new {
      id = "Main Location",
      country = "US",
      zip = "02110",
      state = "MA",
      city = "Boston",
      street = "1 Central Wharf",
    }
  },
  line_items = new[] {
    new {
      id = "1",
      quantity = 1,
      unit_price = 15,
      discount = 0
    }
  }
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.taxes.TaxResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ShippingExemptionTaxExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("from_country", "US");
            params.put("from_zip", "02110");
            params.put("from_state", "MA");
            params.put("from_city", "Boston");
            params.put("from_street", "1 Central Wharf");
            params.put("to_country", "US");
            params.put("to_zip", "01608");
            params.put("to_state", "MA");
            params.put("to_city", "Worcester");
            params.put("to_street", "455 Main St");
            params.put("amount", 15);
            params.put("shipping", 1.5);

            List<Map> nexusAddresses = new ArrayList();
            Map<String, Object> nexusAddress = new HashMap<>();
            nexusAddress.put("country", "US");
            nexusAddress.put("zip", "02110");
            nexusAddress.put("state", "MA");
            nexusAddress.put("city", "Boston");
            nexusAddress.put("street", "1 Central Wharf");
            nexusAddresses.add(nexusAddress);

            List<Map> lineItems = new ArrayList();
            Map<String, Object> lineItem = new HashMap<>();
            lineItem.put("id", 1);
            lineItem.put("quantity", 1);
            lineItem.put("unit_price", 15);
            lineItem.put("discount", 0);
            lineItems.add(lineItem);

            params.put("nexus_addresses", nexusAddresses);
            params.put("line_items", lineItems);

            TaxResponse res = client.taxForOrder(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/taxes \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "from_country": "US",
    "from_zip": "02110",
    "from_state": "MA",
    "from_city": "Boston",
    "from_street": "1 Central Wharf",
    "to_country": "US",
    "to_zip": "01608",
    "to_state": "MA",
    "to_city": "Worcester",
    "to_street": "455 Main St",
    "amount": 15,
    "shipping": 1.5,
    "nexus_addresses": [
      {
        "id": "Main Location",
        "country": "US",
        "zip": "02110",
        "state": "MA",
        "city": "Boston",
        "street": "1 Central Wharf"
      }
    ],
    "line_items": [
      {
        "id": "1",
        "quantity": 1,
        "unit_price": 15,
        "discount": 0
      }
    ]
  }'
```

> <span class="scenario">Request Scenario: Clothing Exemptions</span>
<span class="scenario-desc">Clothing items sold in New York under $110 are exempt from the state tax rate, but only exempt from county taxes in certain jurisdictions. We also handle <a href="https://blog.taxjar.com/sales-tax-on-clothing/" target="_blank">clothing exemptions</a> in states such as Pennsylvania and New Jersey.</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.tax_for_order({
  :from_country => 'US',
  :from_zip => '12054',
  :from_state => 'NY',
  :from_city => 'Delmar',
  :to_country => 'US',
  :to_zip => '10541',
  :to_state => 'NY',
  :to_city => 'Mahopac',
  :amount => 29.94,
  :shipping => 7.99,
  :line_items => [
    {
      :quantity => 1,
      :unit_price => 19.99,
      :product_tax_code => '20010'
    },
    {
      :quantity => 1,
      :unit_price => 9.95,
      :product_tax_code => '20010'
    }
  ]
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

order = client.tax_for_order({
  'from_country': 'US',
  'from_zip': '12044',
  'from_state': 'NY',
  'from_city': 'Delmar',
  'to_country': 'US',
  'to_zip': '10541',
  'to_state': 'NY',
  'to_city': 'Mahopac',
  'amount': 29.94,
  'shipping': 7.99,
  'line_items': [
    {
      'quantity': 1,
      'unit_price': 19.99,
      'product_tax_code': '20010'
    },
    {
      'quantity': 1,
      'unit_price': 9.95,
      'product_tax_code': '20010'
    }
  ]
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.taxForOrder({
  from_country: 'US',
  from_zip: '12054',
  from_state: 'NY',
  from_city: 'Delmar',
  to_country: 'US',
  to_zip: '10541',
  to_state: 'NY',
  to_city: 'Mahopac',
  amount: 29.94,
  shipping: 7.99,
  line_items: [
    {
      quantity: 1,
      unit_price: 19.99,
      product_tax_code: '20010'
    },
    {
      quantity: 1,
      unit_price: 9.95,
      product_tax_code: '20010'
    }
  ]
}).then(res => {
  res.tax; // Tax object
  res.tax.amount_to_collect; // Amount to collect
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order_taxes = $client->taxForOrder([
  'from_country' => 'US',
  'from_zip' => '12054',
  'from_state' => 'NY',
  'from_city' => 'Delmar',
  'to_country' => 'US',
  'to_zip' => '10541',
  'to_state' => 'NY',
  'to_city' => 'Mahopac',
  'amount' => 29.94,
  'shipping' => 7.99,
  'line_items' => [
    [
      'quantity' => 1,
      'unit_price' => 19.99,
      'product_tax_code' => '20010'
    ],
    [
      'quantity' => 1,
      'unit_price' => 9.95,
      'product_tax_code' => '20010'
    ]
  ]
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.TaxForOrder(new {
  from_country = "US",
  from_zip = "12054",
  from_state = "NY",
  from_city = "Delmar",
  to_country = "US",
  to_zip = "10541",
  to_state = "NY",
  to_city = "Mahopac",
  amount = 29.94,
  shipping = 7.99,
  line_items = new[] {
    new {
      quantity = 1,
      unit_price = 19.99,
      product_tax_code = "20010"
    },
    new {
      quantity = 1,
      unit_price = 9.95,
      product_tax_code = "20010"
    }
  }
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.taxes.TaxResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ClothingExemptionTaxExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("from_country", "US");
            params.put("from_zip", "12054");
            params.put("from_state", "NY");
            params.put("from_city", "Delmar");
            params.put("to_country", "US");
            params.put("to_zip", "10541");
            params.put("to_state", "NY");
            params.put("to_city", "Mahopac");
            params.put("amount", 29.94);
            params.put("shipping", 7.99);

            List<Map> lineItems = new ArrayList();
            Map<String, Object> lineItem = new HashMap<>();
            lineItem.put("quantity", 1);
            lineItem.put("unit_price", 19.99);
            lineItem.put("product_tax_code", "20010");
            lineItems.add(lineItem);
            Map<String, Object> lineItem2 = new HashMap<>();
            lineItem.put("quantity", 1);
            lineItem.put("unit_price", 9.95);
            lineItem.put("product_tax_code", "20010");
            lineItems.add(lineItem2);

            params.put("line_items", lineItems);

            TaxResponse res = client.taxForOrder(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/taxes \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "from_city": "Delmar",
    "from_state": "NY",
    "from_zip": "12054",
    "from_country": "US",
    "to_city": "Mahopac",
    "to_state": "NY",
    "to_zip": "10541",
    "to_country": "US",
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

> <span class="scenario">Request Scenario: Food & Grocery Exemptions</span>
<span class="scenario-desc">Food and grocery items are <a href="https://blog.taxjar.com/states-grocery-items-tax-exempt/" target="_blank">exempt from all sales tax</a> in states such as California, New York, and Texas.</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.tax_for_order({
  :from_country => 'US',
  :from_zip => '94133',
  :from_state => 'CA',
  :from_city => 'San Francisco',
  :to_country => 'US',
  :to_zip => '90071',
  :to_state => 'CA',
  :to_city => 'Los Angeles',
  :amount => 29.94,
  :shipping => 7.99,
  :line_items => [
    {
      :quantity => 1,
      :unit_price => 19.99,
      :product_tax_code => '40030'
    },
    {
      :quantity => 1,
      :unit_price => 9.95,
      :product_tax_code => '40030'
    }
  ]
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

order = client.tax_for_order({
  'from_country': 'US',
  'from_zip': '94133',
  'from_state': 'CA',
  'from_city': 'San Francisco',
  'to_country': 'US',
  'to_zip': '90071',
  'to_state': 'CA',
  'to_city': 'Los Angeles',
  'amount': 29.94,
  'shipping': 7.99,
  'line_items': [
    {
      'quantity': 1,
      'unit_price': 19.99,
      'product_tax_code': '40030'
    },
    {
      'quantity': 1,
      'unit_price': 9.95,
      'product_tax_code': '40030'
    }
  ]
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.taxForOrder({
  from_country: 'US',
  from_zip: '94133',
  from_state: 'CA',
  from_city: 'San Francisco',
  to_country: 'US',
  to_zip: '90071',
  to_state: 'CA',
  to_city: 'Los Angeles',
  amount: 29.94,
  shipping: 7.99,
  line_items: [
    {
      quantity: 1,
      unit_price: 19.99,
      product_tax_code: '40030'
    },
    {
      quantity: 1,
      unit_price: 9.95,
      product_tax_code: '40030'
    }
  ]
}).then(res => {
  res.tax; // Tax object
  res.tax.amount_to_collect; // Amount to collect
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order_taxes = $client->taxForOrder([
  'from_country' => 'US',
  'from_zip' => '94133',
  'from_state' => 'CA',
  'from_city' => 'San Francisco',
  'to_country' => 'US',
  'to_zip' => '90071',
  'to_state' => 'CA',
  'to_city' => 'Los Angeles',
  'amount' => 29.94,
  'shipping' => 7.99,
  'line_items' => [
    [
      'quantity' => 1,
      'unit_price' => 19.99,
      'product_tax_code' => '40030'
    ],
    [
      'quantity' => 1,
      'unit_price' => 9.95,
      'product_tax_code' => '40030'
    ]
  ]
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.TaxForOrder(new {
  from_country = "US",
  from_zip = "94133",
  from_state = "CA",
  from_city = "San Francisco",
  to_country = "US",
  to_zip = "90071",
  to_state = "CA",
  to_city = "Los Angeles",
  amount = 29.94,
  shipping = 7.99,
  line_items = new[] {
    new {
      quantity = 1,
      unit_price = 19.99,
      product_tax_code = "40030"
    },
    new {
      quantity = 1,
      unit_price = 9.95,
      product_tax_code = "40030"
    }
  }
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.taxes.TaxResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FoodGroceryExemptionTaxExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("from_country", "US");
            params.put("from_zip", "94133");
            params.put("from_state", "CA");
            params.put("from_city", "San Francisco");
            params.put("to_country", "US");
            params.put("to_zip", "90071");
            params.put("to_state", "CA");
            params.put("to_city", "Los Angeles");
            params.put("amount", 29.94);
            params.put("shipping", 7.99);

            List<Map> lineItems = new ArrayList();
            Map<String, Object> lineItem = new HashMap<>();
            lineItem.put("quantity", 1);
            lineItem.put("unit_price", 19.99);
            lineItem.put("product_tax_code", "20010");
            lineItems.add(lineItem);
            Map<String, Object> lineItem2 = new HashMap<>();
            lineItem.put("quantity", 1);
            lineItem.put("unit_price", 9.95);
            lineItem.put("product_tax_code", "20010");
            lineItems.add(lineItem2);

            params.put("line_items", lineItems);

            TaxResponse res = client.taxForOrder(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/taxes \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "from_city": "San Francisco",
    "from_state": "CA",
    "from_zip": "94133",
    "from_country": "US",
    "to_city": "Los Angeles",
    "to_state": "CA",
    "to_zip": "90071",
    "to_country": "US",
    "amount": 29.94,
    "shipping": 7.99,
    "line_items": [
      {
        "quantity": 1,
        "unit_price": 19.99,
        "product_tax_code": "40030"
      },
      {
        "quantity": 1,
        "unit_price": 9.95,
        "product_tax_code": "40030"
      }
    ]
  }'
```

> <span class="scenario">Request Scenario: Other Exemptions</span>
<span class="scenario-desc">Use the `99999` tax code to manually exempt products in categories we don't support yet.</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.tax_for_order({
  :from_country => 'US',
  :from_zip => '98101',
  :from_state => 'WA',
  :from_city => 'Seattle',
  :to_country => 'US',
  :to_zip => '99201',
  :to_state => 'WA',
  :to_city => 'Spokane',
  :amount => 29.94,
  :shipping => 7.99,
  :line_items => [
    {
      :quantity => 1,
      :unit_price => 19.99,
      :product_tax_code => '99999'
    },
    {
      :quantity => 1,
      :unit_price => 9.95
    }
  ]
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

order = client.tax_for_order({
  'from_country': 'US',
  'from_zip': '98101',
  'from_state': 'WA',
  'from_city': 'Seattle',
  'to_country': 'US',
  'to_zip': '99201',
  'to_state': 'WA',
  'to_city': 'Spokane',
  'amount': 29.94,
  'shipping': 7.99,
  'line_items': [
    {
      'quantity': 1,
      'unit_price': 19.99,
      'product_tax_code': '99999'
    },
    {
      'quantity': 1,
      'unit_price': 9.95
    }
  ]
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.taxForOrder({
  from_country: 'US',
  from_zip: '98101',
  from_state: 'WA',
  from_city: 'Seattle',
  to_country: 'US',
  to_zip: '99201',
  to_state: 'WA',
  to_city: 'Spokane',
  amount: 29.94,
  shipping: 7.99,
  line_items: [
    {
      quantity: 1,
      unit_price: 19.99,
      product_tax_code: '99999'
    },
    {
      quantity: 1,
      unit_price: 9.95
    }
  ]
}).then(res => {
  res.tax; // Tax object
  res.tax.amount_to_collect; // Amount to collect
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order_taxes = $client->taxForOrder([
  'from_country' => 'US',
  'from_zip' => '98101',
  'from_state' => 'WA',
  'from_city' => 'Seattle',
  'to_country' => 'US',
  'to_zip' => '99201',
  'to_state' => 'WA',
  'to_city' => 'Spokane',
  'amount' => 29.94,
  'shipping' => 7.99,
  'line_items' => [
    [
      'quantity' => 1,
      'unit_price' => 19.99,
      'product_tax_code' => '99999'
    ],
    [
      'quantity' => 1,
      'unit_price' => 9.95
    ]
  ]
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.TaxForOrder(new {
  from_country = "US",
  from_zip = "98101",
  from_state = "WA",
  from_city = "Seattle",
  to_country = "US",
  to_zip = "99201",
  to_state = "WA",
  to_city = "Spokane",
  amount = 29.94,
  shipping = 7.99,
  line_items = new[] {
    new {
      quantity = 1,
      unit_price = 19.99,
      product_tax_code = "99999"
    },
    new {
      quantity = 1,
      unit_price = 9.95
    }
  }
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.taxes.TaxResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class OtherExemptionTaxExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("from_country", "US");
            params.put("from_zip", "98101");
            params.put("from_state", "WA");
            params.put("from_city", "Seattle");
            params.put("to_country", "US");
            params.put("to_zip", "99201");
            params.put("to_state", "WA");
            params.put("to_city", "Spokane");
            params.put("amount", 29.94);
            params.put("shipping", 7.99);

            List<Map> lineItems = new ArrayList();
            Map<String, Object> lineItem = new HashMap<>();
            lineItem.put("quantity", 1);
            lineItem.put("unit_price", 19.99);
            lineItem.put("product_tax_code", "99999");
            lineItems.add(lineItem);
            Map<String, Object> lineItem2 = new HashMap<>();
            lineItem.put("quantity", 1);
            lineItem.put("unit_price", 9.95);
            lineItems.add(lineItem2);

            params.put("line_items", lineItems);

            TaxResponse res = client.taxForOrder(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/taxes \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "from_city": "Seattle",
    "from_state": "WA",
    "from_zip": "98101",
    "from_country": "US",
    "to_city": "Spokane",
    "to_state": "WA",
    "to_zip": "99201",
    "to_country": "US",
    "amount": 29.94,
    "shipping": 7.99,
    "line_items": [
      {
        "quantity": 1,
        "unit_price": 19.99,
        "product_tax_code": "99999"
      },
      {
        "quantity": 1,
        "unit_price": 9.95
      }
    ]
  }'
```

> <span class="scenario">Request Scenario: No Nexus</span>
<span class="scenario-desc">For interstate transactions, nexus won't trigger for the destination state unless you provide the destination state via `nexus_addresses[]` or have the destination state on file in your TaxJar account.</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.tax_for_order({
  :from_country => 'US',
  :from_zip => '33018',
  :from_state => 'FL',
  :from_city => 'Miami',
  :to_country => 'US',
  :to_zip => '97035',
  :to_state => 'OR',
  :to_city => 'Portland',
  :amount => 15,
  :shipping => 1.5
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

order = client.tax_for_order({
  'from_country': 'US',
  'from_zip': '33018',
  'from_state': 'FL',
  'from_city': 'Miami',
  'to_country': 'US',
  'to_zip': '97035',
  'to_state': 'OR',
  'to_city': 'Portland',
  'amount': 15,
  'shipping': 1.5
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.taxForOrder({
  from_country: 'US',
  from_zip: '33018',
  from_state: 'FL',
  from_city: 'Miami',
  to_country: 'US',
  to_zip: '97035',
  to_state: 'OR',
  to_city: 'Portland',
  amount: 15,
  shipping: 1.5
}).then(res => {
  res.tax; // Tax object
  res.tax.amount_to_collect; // Amount to collect
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order_taxes = $client->taxForOrder([
  'from_country' => 'US',
  'from_zip' => '33018',
  'from_state' => 'FL',
  'from_city' => 'Miami',
  'to_country' => 'US',
  'to_zip' => '97035',
  'to_state' => 'OR',
  'to_city' => 'Portland',
  'amount' => 15,
  'shipping' => 1.5
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.TaxForOrder(new {
  from_country = "US",
  from_zip = "33018",
  from_state = "FL",
  from_city = "Miami",
  to_country = "US",
  to_zip = "97305",
  to_state = "OR",
  to_city = "Portland",
  amount = 15,
  shipping = 1.5
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.taxes.TaxResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class NoNexusTaxExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("from_country", "US");
            params.put("from_zip", "33018");
            params.put("from_state", "FL");
            params.put("from_city", "Miami");
            params.put("to_country", "US");
            params.put("to_zip", "97305");
            params.put("to_state", "OR");
            params.put("to_city", "Portland");
            params.put("amount", 15);
            params.put("shipping", 1.5);

            TaxResponse res = client.taxForOrder(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/taxes \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "from_city": "Miami",
    "from_state": "FL",
    "from_zip": "33018",
    "from_country": "US",
    "to_city": "Portland",
    "to_state": "OR",
    "to_zip": "97035",
    "to_country": "US",
    "amount": 15,
    "shipping": 1.5
  }'
```

> Response Example

```json
{
  "tax": {
    "order_total_amount": 16.5,
    "shipping": 1.5,
    "taxable_amount": 15,
    "amount_to_collect": 1.35,
    "rate": 0.09,
    "has_nexus": true,
    "freight_taxable": false,
    "tax_source": "destination",
    "breakdown": {
      "taxable_amount": 15,
      "tax_collectable": 1.35,
      "combined_tax_rate": 0.09,
      "state_taxable_amount": 15,
      "state_tax_rate": 0.0625,
      "state_tax_collectable": 0.94,
      "county_taxable_amount": 15,
      "county_tax_rate": 0.0025,
      "county_tax_collectable": 0.04,
      "city_taxable_amount": 0,
      "city_tax_rate": 0,
      "city_tax_collectable": 0,
      "special_district_taxable_amount": 15,
      "special_tax_rate": 0.025,
      "special_district_tax_collectable": 0.38,
      "line_items": [
        {
          "id": "1",
          "taxable_amount": 15,
          "tax_collectable": 1.35,
          "combined_tax_rate": 0.09,
          "state_taxable_amount": 15,
          "state_sales_tax_rate": 0.0625,
          "state_amount": 0.94,
          "county_taxable_amount": 15,
          "county_tax_rate": 0.0025,
          "county_amount": 0.04,
          "city_taxable_amount": 0,
          "city_tax_rate": 0,
          "city_amount": 0,
          "special_district_taxable_amount": 15,
          "special_tax_rate": 0.025,
          "special_district_amount": 0.38
        }
      ]
    }
  }
}
```

```ruby
#<Taxjar::Tax:0x00000a @attrs={
  :order_total_amount => 16.5,
  :shipping => 1.5,
  :taxable_amount => 15.0,
  :amount_to_collect => 1.35,
  :rate => 0.09,
  :has_nexus => true,
  :freight_taxable => false,
  :tax_source => "destination",
  :breakdown => #<Taxjar::Breakdown:0x00000a @attrs={
    :taxable_amount => 15.0,
    :tax_collectable => 1.35,
    :combined_tax_rate => 0.09,
    :state_taxable_amount => 15.0,
    :state_tax_rate => 0.0625,
    :state_tax_collectable => 0.94,
    :county_taxable_amount => 15.0,
    :county_tax_rate => 0.0025,
    :county_tax_collectable => 0.04,
    :city_taxable_amount => 0.0,
    :city_tax_rate => 0.0,
    :city_tax_collectable => 0.0,
    :special_district_taxable_amount => 15.0,
    :special_tax_rate => 0.025,
    :special_district_tax_collectable => 0.38,
    :line_items => [
      #<Taxjar::BreakdownLineItem:0x00000a @attrs={
        :id => "1",
        :taxable_amount => 15.0,
        :tax_collectable => 1.35,
        :combined_tax_rate => 0.09,
        :state_taxable_amount => 15.0,
        :state_sales_tax_rate => 0.065,
        :state_amount => 0.94,
        :county_taxable_amount => 15.0,
        :county_tax_rate => 0.0025,
        :county_amount => 0.04,
        :city_taxable_amount => 0.0,
        :city_tax_rate => 0.0,
        :city_amount => 0.0,
        :special_district_taxable_amount => 15.0,
        :special_tax_rate => 0.025,
        :special_district_amount => 0.38
      }>
    ]
  }>
}>
```

```python
<TaxJarTax {
  'breakdown': <TaxJarBreakdown {
    'special_district_taxable_amount': 15.0,
    'city_tax_rate': 0.0,
    'county_tax_collectable': 0.15,
    'county_taxable_amount': 15.0,
    'special_district_tax_collectable': 0.23,
    'line_items': [<TaxJarBreakdownLineItem {
      'special_district_taxable_amount': 15.0,
      'city_tax_rate': 0.0,
      'county_taxable_amount': 15.0,
      'special_district_amount': 0.23,
      'state_sales_tax_rate': 0.0625,
      'state_amount': 0.94,
      'city_taxable_amount': 0.0,
      'taxable_amount': 15.0,
      'special_tax_rate': 0.015,
      'state_taxable_amount': 15.0,
      'combined_tax_rate': 0.0875,
      'county_tax_rate': 0.01,
      'city_amount': 0.0,
      'county_amount': 0.15,
      'id': '1',
      'tax_collectable': 1.31
    }>],
    'taxable_amount': 15.0,
    'state_taxable_amount': 15.0,
    'combined_tax_rate': 0.0875,
    'state_tax_collectable': 0.94,
    'state_tax_rate': 0.0625,
    'city_tax_collectable': 0.0,
    'county_tax_rate': 0.01,
    'special_tax_rate': 0.015,
    'city_taxable_amount': 0.0,
    'tax_collectable': 1.31
  }>,
  'has_nexus': True,
  'tax_source': 'destination',
  'shipping': 1.5,
  'taxable_amount': 15.0,
  'rate': 0.0875,
  'freight_taxable': False,
  'amount_to_collect': 1.31,
  'order_total_amount': 16.5
}>
```

> Response Scenario: Canada

```json
{
  "tax": {
    "amount_to_collect": 2.15,
    "breakdown": {
      "combined_tax_rate": 0.13,
      "gst": 0.83,
      "gst_tax_rate": 0.05,
      "gst_taxable_amount": 16.5,
      "line_items": [
        {
          "combined_tax_rate": 0.13,
          "gst": 0.75,
          "gst_tax_rate": 0.05,
          "gst_taxable_amount": 15,
          "id": "1",
          "pst": 1.2,
          "pst_tax_rate": 0.08,
          "pst_taxable_amount": 15,
          "qst": 0,
          "qst_tax_rate": 0,
          "qst_taxable_amount": 0,
          "tax_collectable": 1.95,
          "taxable_amount": 15
        }
      ],
      "pst": 1.32,
      "pst_tax_rate": 0.08,
      "pst_taxable_amount": 16.5,
      "qst": 0,
      "qst_tax_rate": 0,
      "qst_taxable_amount": 0,
      "shipping": {
        "combined_tax_rate": 0.13,
        "gst": 0.08,
        "gst_tax_rate": 0.05,
        "gst_taxable_amount": 1.5,
        "pst": 0.12,
        "pst_tax_rate": 0.08,
        "pst_taxable_amount": 1.5,
        "qst": 0,
        "qst_tax_rate": 0,
        "qst_taxable_amount": 0,
        "tax_collectable": 0.2,
        "taxable_amount": 1.5
      },
      "tax_collectable": 2.15,
      "taxable_amount": 16.5
    },
    "freight_taxable": true,
    "has_nexus": true,
    "order_total_amount": 16.5,
    "rate": 0.13,
    "shipping": 1.5,
    "tax_source": "destination",
    "taxable_amount": 16.5
  }
}
```

```ruby
#<Taxjar::Tax:0x00000a @attrs={
  :order_total_amount => 16.5,
  :shipping => 1.5,
  :taxable_amount => 16.5,
  :amount_to_collect => 2.15,
  :rate => 0.13,
  :has_nexus => true,
  :freight_taxable => true,
  :tax_source => "destination",
  :breakdown => #<Taxjar::Breakdown:0x00000a @attrs={
    :taxable_amount => 16.5,
    :tax_collectable => 2.15,
    :combined_tax_rate => 0.13,
    :gst_taxable_amount => 16.5,
    :gst_tax_rate => 0.05,
    :gst => 0.83,
    :pst_taxable_amount => 16.5,
    :pst_tax_rate => 0.08,
    :pst => 1.32,
    :qst_taxable_amount => 0.0,
    :qst_tax_rate => 0.0,
    :qst => 0.0,
    :shipping => {
      :taxable_amount => 1.5,
      :tax_collectable => 0.2,
      :combined_tax_rate => 0.13,
      :gst_taxable_amount => 1.5,
      :gst_tax_rate => 0.05,
      :gst => 0.08,
      :pst_taxable_amount => 1.5,
      :pst_tax_rate => 0.08,
      :pst => 0.12,
      :qst_taxable_amount => 0.0,
      :qst_tax_rate => 0.0,
      :qst => 0.0
    },
    :line_items => [
      #<Taxjar::BreakdownLineItem:0x00000a @attrs={
        :id => "1",
        :taxable_amount => 15.0,
        :tax_collectable => 1.95,
        :combined_tax_rate => 0.13,
        :gst_taxable_amount => 15.0,
        :gst_tax_rate => 0.05,
        :gst => 0.75,
        :pst_taxable_amount => 15.0,
        :pst_tax_rate => 0.08,
        :pst => 1.2,
        :qst_taxable_amount => 0.0,
        :qst_tax_rate => 0.0,
        :qst => 0.0
      }>
    ]
  }>
}>
```

```python
<TaxJarTax {
  'breakdown': <TaxJarBreakdown {
    'line_items': [
      <TaxJarBreakdownLineItem {
        'gst': 0.75,
        'pst_tax_rate': 0.08,
        'gst_tax_rate': 0.05,
        'taxable_amount': 15.0,
        'gst_taxable_amount': 15.0,
        'qst_taxable_amount': 0.0,
        'pst_taxable_amount': 15.0,
        'combined_tax_rate': 0.13,
        'qst': 0.0,
        'qst_tax_rate': 0.0,
        'id': '1',
        'pst': 1.2,
        'tax_collectable': 1.95
      }>
    ],
    'gst': 0.83,
    'pst_tax_rate': 0.08,
    'gst_tax_rate': 0.05,
    'shipping': {
      'gst': 0.08,
      'pst_tax_rate': 0.08,
      'gst_tax_rate': 0.05,
      'taxable_amount': 1.5,
      'gst_taxable_amount': 1.5,
      'qst_taxable_amount': 0.0,
      'pst_taxable_amount': 1.5,
      'combined_tax_rate': 0.13,
      'qst': 0.0,
      'qst_tax_rate': 0.0,
      'pst': 0.12,
      'tax_collectable': 0.2
    },
    'taxable_amount': 16.5,
    'gst_taxable_amount': 16.5,
    'qst_taxable_amount': 0.0,
    'pst_taxable_amount': 16.5,
    'combined_tax_rate': 0.13,
    'qst': 0.0,
    'qst_tax_rate': 0.0,
    'pst': 1.32,
    'tax_collectable': 2.15
  }>,
  'has_nexus': True,
  'tax_source': 'destination',
  'shipping': 1.5,
  'taxable_amount': 16.5,
  'rate': 0.13,
  'freight_taxable': True,
  'amount_to_collect': 2.15,
  'order_total_amount': 16.5
}>
```

> Response Scenario: Australia

```json
{
  "tax": {
    "amount_to_collect": 1.65,
    "breakdown": {
      "combined_tax_rate": 0.1,
      "country_tax_collectable": 1.65,
      "country_tax_rate": 0.1,
      "country_taxable_amount": 16.5,
      "line_items": [
        {
          "combined_tax_rate": 0.1,
          "country_tax_collectable": 1.5,
          "country_tax_rate": 0.1,
          "country_taxable_amount": 15,
          "id": "1",
          "tax_collectable": 1.5,
          "taxable_amount": 15
        }
      ],
      "shipping": {
        "combined_tax_rate": 0.1,
        "country_tax_collectable": 0.15,
        "country_tax_rate": 0.1,
        "country_taxable_amount": 1.5,
        "tax_collectable": 0.15,
        "taxable_amount": 1.5
      },
      "tax_collectable": 1.65,
      "taxable_amount": 16.5
    },
    "freight_taxable": true,
    "has_nexus": true,
    "order_total_amount": 16.5,
    "rate": 0.1,
    "shipping": 1.5,
    "tax_source": "destination",
    "taxable_amount": 16.5
  }
}
```

```ruby
#<Taxjar::Tax:0x00000a @attrs={
  :order_total_amount => 16.5,
  :shipping => 1.5,
  :taxable_amount => 16.5,
  :amount_to_collect => 1.65,
  :rate => 0.1,
  :has_nexus => true,
  :freight_taxable => true,
  :tax_source => "destination",
  :breakdown => #<Taxjar::Breakdown:0x00000a @attrs={
    :taxable_amount => 16.5,
    :tax_collectable => 1.65,
    :combined_tax_rate => 0.1,
    :country_taxable_amount => 16.5,
    :country_tax_rate => 0.1,
    :country_tax_collectable => 1.65,
    :shipping => {
      :taxable_amount => 1.5,
      :tax_collectable => 0.15,
      :combined_tax_rate => 0.1,
      :country_taxable_amount => 1.5,
      :country_tax_rate => 0.1,
      :country_tax_collectable => 0.15
    },
    :line_items => [
      #<Taxjar::BreakdownLineItem:0x00000a @attrs={
        :id => "1",
        :taxable_amount => 15.0,
        :tax_collectable => 1.5,
        :combined_tax_rate => 0.1,
        :country_taxable_amount => 15.0,
        :country_tax_rate => 0.1,
        :country_tax_collectable => 1.5
      }>
    ]
  }>
}>
```

```python
<TaxJarTax {
  'breakdown': <TaxJarBreakdown {
    'line_items': [
      <TaxJarBreakdownLineItem {
        'country_tax_collectable': 1.5,
        'country_taxable_amount': 15.0,
        'taxable_amount': 15.0,
        'combined_tax_rate': 0.1,
        'id': '1',
        'country_tax_rate': 0.1,
        'tax_collectable': 1.5
      }>
    ],
    'country_tax_collectable': 1.65,
    'shipping': {
      'country_tax_collectable': 0.15,
      'country_tax_rate': 0.1,
      'taxable_amount': 1.5,
      'combined_tax_rate': 0.1,
      'country_taxable_amount': 1.5,
      'tax_collectable': 0.15
    },
    'country_tax_rate': 0.1,
    'taxable_amount': 16.5,
    'combined_tax_rate': 0.1,
    'country_taxable_amount': 16.5,
    'tax_collectable': 1.65
  >},
  'has_nexus': True,
  'tax_source': 'destination',
  'shipping': 1.5,
  'taxable_amount': 16.5,
  'rate': 0.1,
  'freight_taxable': True,
  'amount_to_collect': 1.65,
  'order_total_amount': 16.5
}>
```

> Response Scenario: European Union

```json
{
  "tax": {
    "amount_to_collect": 3.3,
    "breakdown": {
      "combined_tax_rate": 0.2,
      "country_tax_collectable": 3.3,
      "country_tax_rate": 0.2,
      "country_taxable_amount": 16.5,
      "line_items": [
        {
          "combined_tax_rate": 0.2,
          "country_tax_collectable": 3,
          "country_tax_rate": 0.2,
          "country_taxable_amount": 15,
          "id": "1",
          "tax_collectable": 3,
          "taxable_amount": 15
        }
      ],
      "shipping": {
        "combined_tax_rate": 0.2,
        "country_tax_collectable": 0.3,
        "country_tax_rate": 0.2,
        "country_taxable_amount": 1.5,
        "tax_collectable": 0.3,
        "taxable_amount": 1.5
      },
      "tax_collectable": 3.3,
      "taxable_amount": 16.5
    },
    "freight_taxable": true,
    "has_nexus": true,
    "order_total_amount": 16.5,
    "rate": 0.2,
    "shipping": 1.5,
    "tax_source": "destination",
    "taxable_amount": 16.5
  }
}
```

```ruby
#<Taxjar::Tax:0x00000a @attrs={
  :order_total_amount => 16.5,
  :shipping => 1.5,
  :taxable_amount => 16.5,
  :amount_to_collect => 3.3,
  :rate => 0.2,
  :has_nexus => true,
  :freight_taxable => true,
  :tax_source => "destination",
  :breakdown => #<Taxjar::Breakdown:0x00000a @attrs={
    :taxable_amount => 16.5,
    :tax_collectable => 3.3,
    :combined_tax_rate => 0.2,
    :country_taxable_amount => 16.5,
    :country_tax_rate => 0.2,
    :country_tax_collectable => 3.3,
    :shipping => {
      :taxable_amount => 1.5,
      :tax_collectable => 0.3,
      :combined_tax_rate => 0.2,
      :country_taxable_amount => 1.5,
      :country_tax_rate => 0.2,
      :country_tax_collectable => 0.3
    },
    :line_items => [
      #<Taxjar::BreakdownLineItem:0x00000a @attrs={
        :id => "1",
        :taxable_amount => 15.0,
        :tax_collectable => 3.0,
        :combined_tax_rate => 0.2,
        :country_taxable_amount => 15.0,
        :country_tax_rate => 0.2,
        :country_tax_collectable => 3.0
      }>
    ]
  }>
}>
```

```python
<TaxJarTax {
  'breakdown': <TaxJarBreakdown {
    'line_items': [
      <TaxJarBreakdownLineItem {
        'country_tax_collectable': 3.0,
        'country_taxable_amount': 15.0,
        'taxable_amount': 15.0,
        'combined_tax_rate': 0.2,
        'id': '1',
        'country_tax_rate': 0.2,
        'tax_collectable': 3.0
      }>
    ],
    'country_tax_collectable': 3.3,
    'shipping': {
      'country_tax_collectable': 0.3,
      'country_tax_rate': 0.2,
      'taxable_amount': 1.5,
      'combined_tax_rate': 0.2,
      'country_taxable_amount': 1.5,
      'tax_collectable': 0.3
    },
    'country_tax_rate': 0.2,
    'taxable_amount': 16.5,
    'combined_tax_rate': 0.2,
    'country_taxable_amount': 16.5,
    'tax_collectable': 3.3
  }>,
  'has_nexus': True,
  'tax_source': 'destination',
  'shipping': 1.5,
  'taxable_amount': 16.5,
  'rate': 0.2,
  'freight_taxable': True,
  'amount_to_collect': 3.3,
  'order_total_amount': 16.5
}>
```

> Response Scenario: Origin-Based Sourcing

```json
{
  "tax": {
    "amount_to_collect": 1.36,
    "breakdown": {
      "city_tax_collectable": 0.17,
      "city_tax_rate": 0.01,
      "city_taxable_amount": 16.5,
      "combined_tax_rate": 0.0825,
      "county_tax_collectable": 0,
      "county_tax_rate": 0,
      "county_taxable_amount": 0,
      "line_items": [
        {
          "city_amount": 0.15,
          "city_tax_rate": 0.01,
          "city_taxable_amount": 15,
          "combined_tax_rate": 0.0825,
          "county_amount": 0,
          "county_tax_rate": 0,
          "county_taxable_amount": 0,
          "id": "1",
          "special_district_amount": 0.15,
          "special_district_taxable_amount": 15,
          "special_tax_rate": 0.01,
          "state_amount": 0.94,
          "state_sales_tax_rate": 0.0625,
          "state_taxable_amount": 15,
          "tax_collectable": 1.24,
          "taxable_amount": 15
        }
      ],
      "shipping": {
        "city_amount": 0.02,
        "city_tax_rate": 0.01,
        "city_taxable_amount": 1.5,
        "combined_tax_rate": 0.0825,
        "county_amount": 0,
        "county_tax_rate": 0,
        "county_taxable_amount": 0,
        "special_district_amount": 0.02,
        "special_tax_rate": 0.01,
        "special_taxable_amount": 1.5,
        "state_amount": 0.09,
        "state_sales_tax_rate": 0.0625,
        "state_taxable_amount": 1.5,
        "tax_collectable": 0.12,
        "taxable_amount": 1.5
      },
      "special_district_tax_collectable": 0.17,
      "special_district_taxable_amount": 16.5,
      "special_tax_rate": 0.01,
      "state_tax_collectable": 1.03,
      "state_tax_rate": 0.0625,
      "state_taxable_amount": 16.5,
      "tax_collectable": 1.36,
      "taxable_amount": 16.5
    },
    "freight_taxable": true,
    "has_nexus": true,
    "order_total_amount": 16.5,
    "rate": 0.0825,
    "shipping": 1.5,
    "tax_source": "origin",
    "taxable_amount": 16.5
  }
}
```

```ruby
#<Taxjar::Tax:0x00000a @attrs={
  :order_total_amount => 16.5,
  :shipping => 1.5,
  :taxable_amount => 16.5,
  :amount_to_collect => 1.36,
  :rate => 0.0825,
  :has_nexus => true,
  :freight_taxable => true,
  :tax_source => "origin",
  :breakdown => #<Taxjar::Breakdown:0x00000a @attrs={
    :taxable_amount => 16.5,
    :tax_collectable => 1.36,
    :combined_tax_rate => 0.0825,
    :state_taxable_amount => 16.5,
    :state_tax_rate => 0.0625,
    :state_tax_collectable => 1.03,
    :county_taxable_amount => 0.0,
    :county_tax_rate => 0.0,
    :county_tax_collectable => 0.0,
    :city_taxable_amount => 16.5,
    :city_tax_rate => 0.01,
    :city_tax_collectable => 0.17,
    :special_district_taxable_amount => 16.5,
    :special_tax_rate => 0.01,
    :special_district_tax_collectable => 0.17,
    :shipping => {
      :taxable_amount => 1.5,
      :tax_collectable => 0.12,
      :combined_tax_rate => 0.0825,
      :state_taxable_amount => 1.5,
      :state_sales_tax_rate => 0.0625,
      :state_amount => 0.09,
      :county_taxable_amount => 0.0,
      :county_tax_rate => 0.0,
      :county_amount => 0.0,
      :city_taxable_amount => 1.5,
      :city_tax_rate => 0.01,
      :city_amount => 0.02,
      :special_taxable_amount => 1.5,
      :special_tax_rate => 0.01,
      :special_district_amount => 0.02
    },
    :line_items => [
      #<Taxjar::BreakdownLineItem:0x00000a @attrs={
        :id => "1",
        :taxable_amount => 15.0,
        :tax_collectable => 1.24,
        :combined_tax_rate => 0.0825,
        :state_taxable_amount => 15.0,
        :state_sales_tax_rate => 0.0625,
        :state_amount => 0.94,
        :county_taxable_amount => 0.0,
        :county_tax_rate => 0.0,
        :county_amount => 0.0,
        :city_taxable_amount => 15.0,
        :city_tax_rate => 0.01,
        :city_amount => 0.15,
        :special_district_taxable_amount => 15.0,
        :special_tax_rate => 0.01,
        :special_district_amount => 0.15
      }>
    ]
  }>
}>
```

```python
<TaxJarTax {
  'breakdown': <TaxJarBreakdown {
    'special_district_taxable_amount': 16.5,
    'city_tax_rate': 0.01,
    'county_tax_collectable': 0.0,
    'county_taxable_amount': 0.0,
    'special_district_tax_collectable': 0.17,
    'line_items': [
      <TaxJarBreakdownLineItem {
        'special_district_taxable_amount': 15.0,
        'city_tax_rate': 0.01,
        'county_taxable_amount': 0.0,
        'special_district_amount': 0.15,
        'state_sales_tax_rate': 0.0625,
        'state_amount': 0.94,
        'city_taxable_amount': 15.0,
        'taxable_amount': 15.0,
        'special_tax_rate': 0.01,
        'state_taxable_amount': 15.0,
        'combined_tax_rate': 0.0825,
        'county_tax_rate': 0.0,
        'city_amount': 0.15,
        'county_amount': 0.0,
        'id': '1',
        'tax_collectable': 1.24
      }>
    ],
    'shipping': {
      'city_tax_rate': 0.01,
      'county_taxable_amount': 0.0,
      'special_district_amount': 0.02,
      'state_sales_tax_rate': 0.0625,
      'state_amount': 0.09,
      'special_taxable_amount': 1.5,
      'city_amount': 0.02,
      'taxable_amount': 1.5,
      'state_taxable_amount': 1.5,
      'combined_tax_rate': 0.0825,
      'county_tax_rate': 0.0,
      'special_tax_rate': 0.01,
      'county_amount': 0.0,
      'city_taxable_amount': 1.5,
      'tax_collectable': 0.12
    },
    'taxable_amount': 16.5,
    'state_taxable_amount': 16.5,
    'combined_tax_rate': 0.0825,
    'state_tax_collectable': 1.03,
    'state_tax_rate': 0.0625,
    'city_tax_collectable': 0.17,
    'county_tax_rate': 0.0,
    'special_tax_rate': 0.01,
    'city_taxable_amount': 16.5,
    'tax_collectable': 1.36
  }>,
  'has_nexus': True,
  'tax_source': 'origin',
  'shipping': 1.5,
  'taxable_amount': 16.5,
  'rate': 0.0825,
  'freight_taxable': True,
  'amount_to_collect': 1.36,
  'order_total_amount': 16.5
}>
```

> Response Scenario: Shipping Exemptions

```json
{
  "tax": {
    "amount_to_collect": 0.94,
    "breakdown": {
      "city_tax_collectable": 0,
      "city_tax_rate": 0,
      "city_taxable_amount": 0,
      "combined_tax_rate": 0.0625,
      "county_tax_collectable": 0,
      "county_tax_rate": 0,
      "county_taxable_amount": 0,
      "line_items": [
        {
          "city_amount": 0,
          "city_tax_rate": 0,
          "city_taxable_amount": 0,
          "combined_tax_rate": 0.0625,
          "county_amount": 0,
          "county_tax_rate": 0,
          "county_taxable_amount": 0,
          "id": "1",
          "special_district_amount": 0,
          "special_district_taxable_amount": 0,
          "special_tax_rate": 0,
          "state_amount": 0.94,
          "state_sales_tax_rate": 0.0625,
          "state_taxable_amount": 15,
          "tax_collectable": 0.94,
          "taxable_amount": 15
        }
      ],
      "special_district_tax_collectable": 0,
      "special_district_taxable_amount": 0,
      "special_tax_rate": 0,
      "state_tax_collectable": 0.94,
      "state_tax_rate": 0.0625,
      "state_taxable_amount": 15,
      "tax_collectable": 0.94,
      "taxable_amount": 15
    },
    "freight_taxable": false,
    "has_nexus": true,
    "order_total_amount": 16.5,
    "rate": 0.0625,
    "shipping": 1.5,
    "tax_source": "destination",
    "taxable_amount": 15
  }
}
```

```ruby
#<Taxjar::Tax:0x00000a @attrs={
  :order_total_amount => 16.5,
  :shipping => 1.5,
  :taxable_amount => 15.0,
  :amount_to_collect => 0.94,
  :rate => 0.0625,
  :has_nexus => true,
  :freight_taxable => false,
  :tax_source => "destination",
  :breakdown => #<Taxjar::Breakdown:0x00000a @attrs={
    :taxable_amount => 15.0,
    :tax_collectable => 0.94,
    :combined_tax_rate => 0.0625,
    :state_taxable_amount => 15.0,
    :state_tax_rate => 0.0625,
    :state_tax_collectable => 0.94,
    :county_taxable_amount => 0.0,
    :county_tax_rate => 0.0,
    :county_tax_collectable => 0.0,
    :city_taxable_amount => 0.0,
    :city_tax_rate => 0.0,
    :city_tax_collectable => 0.0,
    :special_district_taxable_amount => 0.0,
    :special_tax_rate => 0.0,
    :special_district_tax_collectable => 0.0,
    :line_items => [
      #<Taxjar::BreakdownLineItem:0x00000a @attrs={
        :id => "1",
        :taxable_amount => 15.0,
        :tax_collectable => 0.94,
        :combined_tax_rate => 0.0625,
        :state_taxable_amount => 15.0,
        :state_sales_tax_rate => 0.0625,
        :state_amount => 0.94,
        :county_taxable_amount => 0.0,
        :county_tax_rate => 0.0,
        :county_amount => 0.0,
        :city_taxable_amount => 0.0,
        :city_tax_rate => 0.0,
        :city_amount => 0.0,
        :special_district_taxable_amount => 0.0,
        :special_tax_rate => 0.0,
        :special_district_amount => 0.0
      }>
    ]
  }>
}>
```

```python
<TaxJarTax {
  'breakdown': <TaxJarBreakdown {
    'special_district_taxable_amount': 0.0,
    'city_tax_rate': 0.0,
    'county_tax_collectable': 0.0,
    'county_taxable_amount': 0.0,
    'special_district_tax_collectable': 0.0,
    'line_items': [
      <TaxJarBreakdownLineItem {
        'special_district_taxable_amount': 0.0,
        'city_tax_rate': 0.0,
        'county_taxable_amount': 0.0,
        'special_district_amount': 0.0,
        'state_sales_tax_rate': 0.0625,
        'state_amount': 0.94,
        'city_taxable_amount': 0.0,
        'taxable_amount': 15.0,
        'special_tax_rate': 0.0,
        'state_taxable_amount': 15.0,
        'combined_tax_rate': 0.0625,
        'county_tax_rate': 0.0,
        'city_amount': 0.0,
        'county_amount': 0.0,
        'id': '1',
        'tax_collectable': 0.94
      }>
    ],
    'taxable_amount': 15.0,
    'state_taxable_amount': 15.0,
    'combined_tax_rate': 0.0625,
    'state_tax_collectable': 0.94,
    'state_tax_rate': 0.0625,
    'city_tax_collectable': 0.0,
    'county_tax_rate': 0.0,
    'special_tax_rate': 0.0,
    'city_taxable_amount': 0.0,
    'tax_collectable': 0.94
  }>,
  'has_nexus': True,
  'tax_source': 'destination',
  'shipping': 1.5,
  'taxable_amount': 15.0,
  'rate': 0.0625,
  'freight_taxable': False,
  'amount_to_collect': 0.94,
  'order_total_amount': 16.5
}>
```

> Response Scenario: Clothing Exemptions

```json
{
  "tax": {
    "amount_to_collect": 1.98,
    "breakdown": {
      "city_tax_collectable": 0,
      "city_tax_rate": 0,
      "city_taxable_amount": 0,
      "combined_tax_rate": 0.05218,
      "county_tax_collectable": 1.52,
      "county_tax_rate": 0.04,
      "county_taxable_amount": 37.93,
      "line_items": [
        {
          "city_amount": 0,
          "city_tax_rate": 0,
          "city_taxable_amount": 0,
          "combined_tax_rate": 0.04375,
          "county_amount": 0.8,
          "county_tax_rate": 0.04,
          "county_taxable_amount": 19.99,
          "id": "1",
          "special_district_amount": 0.07,
          "special_district_taxable_amount": 19.99,
          "special_tax_rate": 0.00375,
          "state_amount": 0,
          "state_sales_tax_rate": 0,
          "state_taxable_amount": 0,
          "tax_collectable": 0.87,
          "taxable_amount": 19.99
        },
        {
          "city_amount": 0,
          "city_tax_rate": 0,
          "city_taxable_amount": 0,
          "combined_tax_rate": 0.04375,
          "county_amount": 0.4,
          "county_tax_rate": 0.04,
          "county_taxable_amount": 9.95,
          "id": "2",
          "special_district_amount": 0.04,
          "special_district_taxable_amount": 9.95,
          "special_tax_rate": 0.00375,
          "state_amount": 0,
          "state_sales_tax_rate": 0,
          "state_taxable_amount": 0,
          "tax_collectable": 0.44,
          "taxable_amount": 9.95
        }
      ],
      "shipping": {
        "city_amount": 0,
        "city_tax_rate": 0,
        "city_taxable_amount": 0,
        "combined_tax_rate": 0.08375,
        "county_amount": 0.32,
        "county_tax_rate": 0.04,
        "county_taxable_amount": 7.99,
        "special_district_amount": 0.03,
        "special_tax_rate": 0.00375,
        "special_taxable_amount": 7.99,
        "state_amount": 0.32,
        "state_sales_tax_rate": 0.04,
        "state_taxable_amount": 7.99,
        "tax_collectable": 0.67,
        "taxable_amount": 7.99
      },
      "special_district_tax_collectable": 0.14,
      "special_district_taxable_amount": 37.93,
      "special_tax_rate": 0.00375,
      "state_tax_collectable": 0.32,
      "state_tax_rate": 0.04,
      "state_taxable_amount": 7.99,
      "tax_collectable": 1.98,
      "taxable_amount": 37.93
    },
    "freight_taxable": true,
    "has_nexus": true,
    "order_total_amount": 37.93,
    "rate": 0.05218,
    "shipping": 7.99,
    "tax_source": "destination",
    "taxable_amount": 37.93
  }
}
```

```ruby
#<Taxjar::Tax:0x00000a @attrs={
  :order_total_amount => 37.93,
  :shipping => 7.99,
  :taxable_amount => 37.93,
  :amount_to_collect => 1.98,
  :rate => 0.05218,
  :has_nexus => true,
  :freight_taxable => true,
  :tax_source => "destination",
  :breakdown => #<Taxjar::Breakdown:0x00000a @attrs={
    :taxable_amount => 37.93,
    :tax_collectable => 1.98,
    :combined_tax_rate => 0.05218,
    :state_taxable_amount => 7.99,
    :state_tax_rate => 0.04,
    :state_tax_collectable => 0.32,
    :county_taxable_amount => 37.93,
    :county_tax_rate => 0.04,
    :county_tax_collectable => 1.52,
    :city_taxable_amount => 0.0,
    :city_tax_rate => 0.0,
    :city_tax_collectable => 0.0,
    :special_district_taxable_amount => 37.93,
    :special_tax_rate => 0.00375,
    :special_district_tax_collectable => 0.14,
    :shipping => {
      :taxable_amount => 7.99,
      :tax_collectable => 0.67,
      :combined_tax_rate => 0.08375,
      :state_taxable_amount => 7.99,
      :state_sales_tax_rate => 0.04,
      :state_amount => 0.32,
      :county_taxable_amount => 7.99,
      :county_tax_rate => 0.04,
      :county_amount => 0.32,
      :city_taxable_amount => 0.0,
      :city_tax_rate => 0.0,
      :city_amount => 0.0,
      :special_taxable_amount => 7.99,
      :special_tax_rate => 0.00375,
      :special_district_amount => 0.03
    },
    :line_items => [
      #<Taxjar::BreakdownLineItem:0x00000a @attrs={
        :id => "1",
        :taxable_amount => 19.99,
        :tax_collectable => 0.87,
        :combined_tax_rate => 0.04375,
        :state_taxable_amount => 0.0,
        :state_sales_tax_rate => 0.0,
        :state_amount => 0.0,
        :county_taxable_amount => 19.99,
        :county_tax_rate => 0.04,
        :county_amount => 0.8,
        :city_taxable_amount => 0.0,
        :city_tax_rate => 0.0,
        :city_amount => 0.0,
        :special_district_taxable_amount => 19.99,
        :special_tax_rate => 0.00375,
        :special_district_amount => 0.07
      }>,
      #<Taxjar::BreakdownLineItem:0x00000a @attrs={
        :id => "2",
        :taxable_amount => 9.95,
        :tax_collectable => 0.44,
        :combined_tax_rate => 0.04375,
        :state_taxable_amount => 0.0,
        :state_sales_tax_rate => 0.0,
        :state_amount => 0.0,
        :county_taxable_amount => 9.95,
        :county_tax_rate => 0.04,
        :county_amount => 0.4,
        :city_taxable_amount => 0.0,
        :city_tax_rate => 0.0,
        :city_amount => 0.0,
        :special_district_taxable_amount => 9.95,
        :special_tax_rate => 0.00375,
        :special_district_amount => 0.04
      }>
    ]
  }>
}>
```

```python
<TaxJarTax {
  'breakdown': <TaxJarBreakdown {
    'special_district_taxable_amount': 37.93,
    'city_tax_rate': 0.0,
    'county_tax_collectable': 1.52,
    'county_taxable_amount': 37.93,
    'special_district_tax_collectable': 0.14,
    'line_items': [
      <TaxJarBreakdownLineItem {
        'special_district_taxable_amount': 19.99,
        'city_tax_rate': 0.0,
        'county_taxable_amount': 19.99,
        'special_district_amount': 0.07,
        'state_sales_tax_rate': 0.0,
        'state_amount': 0.0,
        'city_taxable_amount': 0.0,
        'taxable_amount': 19.99,
        'special_tax_rate': 0.00375,
        'state_taxable_amount': 0.0,
        'combined_tax_rate': 0.04375,
        'county_tax_rate': 0.04,
        'city_amount': 0.0,
        'county_amount': 0.8,
        'id': '1',
        'tax_collectable': 0.87
      }>,
      <TaxJarBreakdownLineItem {
        'special_district_taxable_amount': 9.95,
        'city_tax_rate': 0.0,
        'county_taxable_amount': 9.95,
        'special_district_amount': 0.04,
        'state_sales_tax_rate': 0.0,
        'state_amount': 0.0,
        'city_taxable_amount': 0.0,
        'taxable_amount': 9.95,
        'special_tax_rate': 0.00375,
        'state_taxable_amount': 0.0,
        'combined_tax_rate': 0.04375,
        'county_tax_rate': 0.04,
        'city_amount': 0.0,
        'county_amount': 0.4,
        'id': '2',
        'tax_collectable': 0.44
      }>
    ],
    'shipping': {
      'city_tax_rate': 0.0,
      'county_taxable_amount': 7.99,
      'special_district_amount': 0.03,
      'state_sales_tax_rate': 0.04,
      'state_amount': 0.32,
      'special_taxable_amount': 7.99,
      'city_amount': 0.0,
      'taxable_amount': 7.99,
      'state_taxable_amount': 7.99,
      'combined_tax_rate': 0.08375,
      'county_tax_rate': 0.04,
      'special_tax_rate': 0.00375,
      'county_amount': 0.32,
      'city_taxable_amount': 0.0,
      'tax_collectable': 0.67
    },
    'taxable_amount': 37.93,
    'state_taxable_amount': 7.99,
    'combined_tax_rate': 0.05218,
    'state_tax_collectable': 0.32,
    'state_tax_rate': 0.04,
    'city_tax_collectable': 0.0,
    'county_tax_rate': 0.04,
    'special_tax_rate': 0.00375,
    'city_taxable_amount': 0.0,
    'tax_collectable': 1.98
  }>,
  'has_nexus': True,
  'tax_source': 'destination',
  'shipping': 7.99,
  'taxable_amount': 37.93,
  'rate': 0.05218,
  'freight_taxable': True,
  'amount_to_collect': 1.98,
  'order_total_amount': 37.93
}>
```

> Response Scenario: Food & Grocery Exemptions

```json
{
  "tax": {
    "amount_to_collect": 0,
    "breakdown": {
      "city_tax_collectable": 0,
      "city_tax_rate": 0,
      "city_taxable_amount": 0,
      "combined_tax_rate": 0,
      "county_tax_collectable": 0,
      "county_tax_rate": 0,
      "county_taxable_amount": 0,
      "line_items": [
        {
          "city_amount": 0,
          "city_tax_rate": 0,
          "city_taxable_amount": 0,
          "combined_tax_rate": 0,
          "county_amount": 0,
          "county_tax_rate": 0,
          "county_taxable_amount": 0,
          "id": "1",
          "special_district_amount": 0,
          "special_district_taxable_amount": 0,
          "special_tax_rate": 0,
          "state_amount": 0,
          "state_sales_tax_rate": 0,
          "state_taxable_amount": 0,
          "tax_collectable": 0,
          "taxable_amount": 0
        },
        {
          "city_amount": 0,
          "city_tax_rate": 0,
          "city_taxable_amount": 0,
          "combined_tax_rate": 0,
          "county_amount": 0,
          "county_tax_rate": 0,
          "county_taxable_amount": 0,
          "id": "2",
          "special_district_amount": 0,
          "special_district_taxable_amount": 0,
          "special_tax_rate": 0,
          "state_amount": 0,
          "state_sales_tax_rate": 0,
          "state_taxable_amount": 0,
          "tax_collectable": 0,
          "taxable_amount": 0
        }
      ],
      "special_district_tax_collectable": 0,
      "special_district_taxable_amount": 0,
      "special_tax_rate": 0,
      "state_tax_collectable": 0,
      "state_tax_rate": 0,
      "state_taxable_amount": 0,
      "tax_collectable": 0,
      "taxable_amount": 0
    },
    "freight_taxable": false,
    "has_nexus": true,
    "order_total_amount": 37.93,
    "rate": 0,
    "shipping": 7.99,
    "tax_source": "destination",
    "taxable_amount": 0
  }
}
```

```ruby
#<Taxjar::Tax:0x00000a @attrs={
  :order_total_amount => 37.93,
  :shipping => 7.99,
  :taxable_amount => 0.0,
  :amount_to_collect => 0.0,
  :rate => 0.0,
  :has_nexus => true,
  :freight_taxable => false,
  :tax_source => "destination",
  :breakdown => #<Taxjar::Breakdown:0x00000a @attrs={
    :taxable_amount => 0.0,
    :tax_collectable => 0.0,
    :combined_tax_rate => 0.0,
    :state_taxable_amount => 0.0,
    :state_tax_rate => 0.0,
    :state_tax_collectable => 0.0,
    :county_taxable_amount => 0.0,
    :county_tax_rate => 0.0,
    :county_tax_collectable => 0.0,
    :city_taxable_amount => 0.0,
    :city_tax_rate => 0.0,
    :city_tax_collectable => 0.0,
    :special_district_taxable_amount => 0.0,
    :special_tax_rate => 0.0,
    :special_district_tax_collectable => 0.0,
    :line_items => [
      #<Taxjar::BreakdownLineItem:0x00000a @attrs={
        :id => "1",
        :taxable_amount => 0.0,
        :tax_collectable => 0.0,
        :combined_tax_rate => 0.0,
        :state_taxable_amount => 0.0,
        :state_sales_tax_rate => 0.0,
        :state_amount => 0.0,
        :county_taxable_amount => 0.0,
        :county_tax_rate => 0.0,
        :county_amount => 0.0,
        :city_taxable_amount => 0.0,
        :city_tax_rate => 0.0,
        :city_amount => 0.0,
        :special_district_taxable_amount => 0.0,
        :special_tax_rate => 0.0,
        :special_district_amount => 0.0
      }>,
      #<Taxjar::BreakdownLineItem:0x00000a @attrs={
        :id => "2",
        :taxable_amount => 0.0,
        :tax_collectable => 0.0,
        :combined_tax_rate => 0.0,
        :state_taxable_amount => 0.0,
        :state_sales_tax_rate => 0.0,
        :state_amount => 0.0,
        :county_taxable_amount => 0.0,
        :county_tax_rate => 0.0,
        :county_amount => 0.0,
        :city_taxable_amount => 0.0,
        :city_tax_rate => 0.0,
        :city_amount => 0.0,
        :special_district_taxable_amount => 0.0,
        :special_tax_rate => 0.0,
        :special_district_amount => 0.0
      }>
    ]
  }>
}>
```

```python
<TaxJarTax {
  'breakdown': <TaxJarBreakdown {
    'special_district_taxable_amount': 0.0,
    'city_tax_rate': 0.0,
    'county_tax_collectable': 0.0,
    'county_taxable_amount': 0.0,
    'special_district_tax_collectable': 0.0,
    'line_items': [
      <TaxJarBreakdownLineItem {
        'special_district_taxable_amount': 0.0,
        'city_tax_rate': 0.0,
        'county_taxable_amount': 0.0,
        'special_district_amount': 0.0,
        'state_sales_tax_rate': 0.0,
        'state_amount': 0.0,
        'city_taxable_amount': 0.0,
        'taxable_amount': 0.0,
        'special_tax_rate': 0.0,
        'state_taxable_amount': 0.0,
        'combined_tax_rate': 0.0,
        'county_tax_rate': 0.0,
        'city_amount': 0.0,
        'county_amount': 0.0,
        'id': '1',
        'tax_collectable': 0.0
      }>,
      <TaxJarBreakdownLineItem {
        'special_district_taxable_amount': 0.0,
        'city_tax_rate': 0.0,
        'county_taxable_amount': 0.0,
        'special_district_amount': 0.0,
        'state_sales_tax_rate': 0.0,
        'state_amount': 0.0,
        'city_taxable_amount': 0.0,
        'taxable_amount': 0.0,
        'special_tax_rate': 0.0,
        'state_taxable_amount': 0.0,
        'combined_tax_rate': 0.0,
        'county_tax_rate': 0.0,
        'city_amount': 0.0,
        'county_amount': 0.0,
        'id': '2',
        'tax_collectable': 0.0
      }>
    ],
    'taxable_amount': 0.0,
    'state_taxable_amount': 0.0,
    'combined_tax_rate': 0.0,
    'state_tax_collectable': 0.0,
    'state_tax_rate': 0.0,
    'city_tax_collectable': 0.0,
    'county_tax_rate': 0.0,
    'special_tax_rate': 0.0,
    'city_taxable_amount': 0.0,
    'tax_collectable': 0.0
  }>,
  'has_nexus': True,
  'tax_source': 'destination',
  'shipping': 7.99,
  'taxable_amount': 0.0,
  'rate': 0.0,
  'freight_taxable': False,
  'amount_to_collect': 0.0,
  'order_total_amount': 37.93
}>
```

> Response Scenario: Other Exemptions

```json
{
  "tax": {
    "amount_to_collect": 1.58,
    "breakdown": {
      "city_tax_collectable": 0.41,
      "city_tax_rate": 0.023,
      "city_taxable_amount": 17.94,
      "combined_tax_rate": 0.088,
      "county_tax_collectable": 0,
      "county_tax_rate": 0,
      "county_taxable_amount": 0,
      "line_items": [
        {
          "city_amount": 0,
          "city_tax_rate": 0,
          "city_taxable_amount": 0,
          "combined_tax_rate": 0,
          "county_amount": 0,
          "county_tax_rate": 0,
          "county_taxable_amount": 0,
          "id": "1",
          "special_district_amount": 0,
          "special_district_taxable_amount": 0,
          "special_tax_rate": 0,
          "state_amount": 0,
          "state_sales_tax_rate": 0,
          "state_taxable_amount": 0,
          "tax_collectable": 0,
          "taxable_amount": 0
        },
        {
          "city_amount": 0.23,
          "city_tax_rate": 0.023,
          "city_taxable_amount": 9.95,
          "combined_tax_rate": 0.088,
          "county_amount": 0,
          "county_tax_rate": 0,
          "county_taxable_amount": 0,
          "id": "2",
          "special_district_amount": 0,
          "special_district_taxable_amount": 0,
          "special_tax_rate": 0,
          "state_amount": 0.65,
          "state_sales_tax_rate": 0.065,
          "state_taxable_amount": 9.95,
          "tax_collectable": 0.88,
          "taxable_amount": 9.95
        }
      ],
      "shipping": {
        "city_amount": 0.18,
        "city_tax_rate": 0.023,
        "city_taxable_amount": 7.99,
        "combined_tax_rate": 0.088,
        "county_amount": 0,
        "county_tax_rate": 0,
        "county_taxable_amount": 0,
        "special_district_amount": 0,
        "special_tax_rate": 0,
        "special_taxable_amount": 0,
        "state_amount": 0.52,
        "state_sales_tax_rate": 0.065,
        "state_taxable_amount": 7.99,
        "tax_collectable": 0.7,
        "taxable_amount": 7.99
      },
      "special_district_tax_collectable": 0,
      "special_district_taxable_amount": 0,
      "special_tax_rate": 0,
      "state_tax_collectable": 1.17,
      "state_tax_rate": 0.065,
      "state_taxable_amount": 17.94,
      "tax_collectable": 1.58,
      "taxable_amount": 17.94
    },
    "freight_taxable": true,
    "has_nexus": true,
    "order_total_amount": 37.93,
    "rate": 0.088,
    "shipping": 7.99,
    "tax_source": "destination",
    "taxable_amount": 17.94
  }
}
```

```ruby
#<Taxjar::Tax:0x00000a @attrs={
  :order_total_amount => 37.93,
  :shipping => 7.99,
  :taxable_amount => 17.94,
  :amount_to_collect => 1.58,
  :rate => 0.088,
  :has_nexus => true,
  :freight_taxable => true,
  :tax_source => "destination",
  :breakdown => #<Taxjar::Breakdown:0x00000a @attrs={
    :taxable_amount => 17.94,
    :tax_collectable => 1.58,
    :combined_tax_rate => 0.088,
    :state_taxable_amount => 17.94,
    :state_tax_rate => 0.065,
    :state_tax_collectable => 1.17,
    :county_taxable_amount => 0.0,
    :county_tax_rate => 0.0,
    :county_tax_collectable => 0.0,
    :city_taxable_amount => 17.94,
    :city_tax_rate => 0.023,
    :city_tax_collectable => 0.41,
    :special_district_taxable_amount => 0.0,
    :special_tax_rate => 0.0,
    :special_district_tax_collectable => 0.0,
    :shipping => {
      :taxable_amount => 7.99,
      :tax_collectable => 0.7,
      :combined_tax_rate => 0.088,
      :state_taxable_amount => 7.99,
      :state_sales_tax_rate => 0.065,
      :state_amount => 0.52,
      :county_taxable_amount => 0.0,
      :county_tax_rate => 0.0,
      :county_amount => 0.0,
      :city_taxable_amount => 7.99,
      :city_tax_rate => 0.023,
      :city_amount => 0.18,
      :special_taxable_amount => 0.0,
      :special_tax_rate => 0.0,
      :special_district_amount => 0.0
    },
    :line_items => [
      #<Taxjar::BreakdownLineItem:0x00000a @attrs={
        :id => "1",
        :taxable_amount => 0.0,
        :tax_collectable => 0.0,
        :combined_tax_rate => 0.0,
        :state_taxable_amount => 0.0,
        :state_sales_tax_rate => 0.0,
        :state_amount => 0.0,
        :county_taxable_amount => 0.0,
        :county_tax_rate => 0.0,
        :county_amount => 0.0,
        :city_taxable_amount => 0.0,
        :city_tax_rate => 0.0,
        :city_amount => 0.0,
        :special_district_taxable_amount => 0.0,
        :special_tax_rate => 0.0,
        :special_district_amount => 0.0
      }>,
      #<Taxjar::BreakdownLineItem:0x00000a @attrs={
        :id => "2",
        :taxable_amount => 9.95,
        :tax_collectable => 0.88,
        :combined_tax_rate => 0.088,
        :state_taxable_amount => 9.95,
        :state_sales_tax_rate => 0.065,
        :state_amount => 0.65,
        :county_taxable_amount => 0.0,
        :county_tax_rate => 0.0,
        :county_amount => 0.0,
        :city_taxable_amount => 9.95,
        :city_tax_rate => 0.023,
        :city_amount => 0.23,
        :special_district_taxable_amount => 0.0,
        :special_tax_rate => 0.0,
        :special_district_amount => 0.0
      }>
    ]
  }>
}>
```

```python
<TaxJarTax {
  'breakdown': <TaxJarBreakdown {
    'special_district_taxable_amount': 0.0,
    'city_tax_rate': 0.023,
    'county_tax_collectable': 0.0,
    'county_taxable_amount': 0.0,
    'special_district_tax_collectable': 0.0,
    'line_items': [
      <TaxJarBreakdownLineItem {
        'special_district_taxable_amount': 0.0,
        'city_tax_rate': 0.0,
        'county_taxable_amount': 0.0,
        'special_district_amount': 0.0,
        'state_sales_tax_rate': 0.0,
        'state_amount': 0.0,
        'city_taxable_amount': 0.0,
        'taxable_amount': 0.0,
        'special_tax_rate': 0.0,
        'state_taxable_amount': 0.0,
        'combined_tax_rate': 0.0,
        'county_tax_rate': 0.0,
        'city_amount': 0.0,
        'county_amount': 0.0,
        'id': '1',
        'tax_collectable': 0.0
      }>,
      <TaxJarBreakdownLineItem {
        'special_district_taxable_amount': 0.0,
        'city_tax_rate': 0.023,
        'county_taxable_amount': 0.0,
        'special_district_amount': 0.0,
        'state_sales_tax_rate': 0.065,
        'state_amount': 0.65,
        'city_taxable_amount': 9.95,
        'taxable_amount': 9.95,
        'special_tax_rate': 0.0,
        'state_taxable_amount': 9.95,
        'combined_tax_rate': 0.088,
        'county_tax_rate': 0.0,
        'city_amount': 0.23,
        'county_amount': 0.0,
        'id': '2',
        'tax_collectable': 0.88
      }>
    ],
    'shipping': {
      'city_tax_rate': 0.023,
      'county_taxable_amount': 0.0,
      'special_district_amount': 0.0,
      'state_sales_tax_rate': 0.065,
      'state_amount': 0.52,
      'special_taxable_amount': 0.0,
      'city_amount': 0.18,
      'taxable_amount': 7.99,
      'state_taxable_amount': 7.99,
      'combined_tax_rate': 0.088,
      'county_tax_rate': 0.0,
      'special_tax_rate': 0.0,
      'county_amount': 0.0,
      'city_taxable_amount': 7.99,
      'tax_collectable': 0.7
    },
    'taxable_amount': 17.94,
    'state_taxable_amount': 17.94,
    'combined_tax_rate': 0.088,
    'state_tax_collectable': 1.17,
    'state_tax_rate': 0.065,
    'city_tax_collectable': 0.41,
    'county_tax_rate': 0.0,
    'special_tax_rate': 0.0,
    'city_taxable_amount': 17.94,
    'tax_collectable': 1.58
  }>,
  'has_nexus': True,
  'tax_source': 'destination',
  'shipping': 7.99,
  'taxable_amount': 17.94,
  'rate': 0.088,
  'freight_taxable': True,
  'amount_to_collect': 1.58,
  'order_total_amount': 37.93
}>
```

> Response Scenario: No Nexus

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

```ruby
#<Taxjar::Tax:0x00000a @attrs={
  :taxable_amount => 0.0,
  :amount_to_collect => 0.0,
  :rate => 0.0,
  :has_nexus => false,
  :freight_taxable => false,
  :tax_source => nil
}>
```

```python
<TaxJarTax {
  'has_nexus': False,
  'taxable_amount': 0.0,
  'rate': 0.0,
  'freight_taxable': False,
  'amount_to_collect': 0.0
}>
```

Shows the sales tax that should be collected for a given order.

#### Request

POST https://api.taxjar.com/v2/taxes

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
from_country | string | optional | Two-letter ISO country code of the country where the order shipped from. <span class="usage-note" data-tooltip="Either an address on file, `nexus_addresses` parameter, or `from_` parameters are required to perform tax calculations." data-tooltip-position="top center">View Note</span>
from_zip | string | optional | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | optional | Two-letter ISO state code where the order shipped from.
from_city | string | optional | City where the order shipped from.
from_street | string | optional | Street address where the order shipped from.
to_country | string | required | Two-letter ISO country code of the country where the order shipped to.
to_zip | string | <span class="conditional" data-tooltip="If `to_country` is 'US', `to_zip` is required." data-tooltip-position="top center">conditional</span> | Postal code where the order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | <span class="conditional" data-tooltip="If `to_country` is 'US' or 'CA', `to_state` is required." data-tooltip-position="top center">conditional</span> | Two-letter ISO state code where the order shipped to.
to_city | string | optional | City where the order shipped to.
to_street | string | optional | Street address where the order shipped to.
amount | long | optional | Total amount of the order, **excluding shipping**. <span class="usage-note" data-tooltip="Either `amount` or `line_items` parameters are required to perform tax calculations." data-tooltip-position="top center">View Note</span>
shipping | long | required | Total amount of shipping for the order.
customer_id | string | optional | Unique identifier of the given customer for exemptions.
nexus_addresses[][id] | string | optional | Unique identifier of the given nexus address. <span class="usage-note" data-tooltip="Either an address on file, `nexus_addresses` parameter, or `from_` parameters are required to perform tax calculations." data-tooltip-position="top center">View Note</span>
nexus_addresses[][country] | string | <span class="conditional" data-tooltip="If providing `nexus_addresses`, country is required." data-tooltip-position="top center">conditional</span> | Two-letter ISO country code of the country for the nexus address.
nexus_addresses[][zip] | string | <span class="conditional" data-tooltip="If providing `nexus_addresses`, zip is required." data-tooltip-position="top center">conditional</span> | Postal code for the nexus address.
nexus_addresses[][state] | string | <span class="conditional" data-tooltip="If providing `nexus_addresses`, state is required." data-tooltip-position="top center">conditional</span> | State for the nexus address.
nexus_addresses[][city] | string | optional | City for the nexus address.
nexus_addresses[][street] | string | optional | Street address for the nexus address.
line_items[][id] | string | optional | Unique identifier of the given line item. <span class="usage-note" data-tooltip="Either `amount` or `line_items` parameters are required to perform tax calculations." data-tooltip-position="top center">View Note</span>
line_items[][quantity] | integer | optional | Quantity for the item.
line_items[][product_tax_code] | string | optional | Product tax code for the item. If omitted, the item will remain fully taxable.
line_items[][unit_price] | long | optional | Unit price for the item.
line_items[][discount] | long | optional | Total discount (non-unit) for the item.

#### Notes

- *Either `amount` or `line_items` parameters are required to perform tax calculations.*

- *The `to_zip` parameter is required when `to_country` is 'US'.*

- *The `to_state` parameter is required when `to_country` is 'US' or 'CA'.*

- *Either an address on file, `nexus_addresses` parameter, or `from_` parameters are required to perform tax calculations.*

#### Response

Returns a `tax` JSON object with sales tax for a given order. If available, returns a breakdown of rates by jurisdiction at the order, shipping, and line item level.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
order_total_amount | long | Total amount of the order.
shipping | long | Total amount of shipping for the order.
taxable_amount | long | Amount of the order to be taxed.
amount_to_collect | long | Amount of sales tax to collect.
rate | long | Overall sales tax rate of the order (`amount_to_collect` &divide; `taxable_amount`).
has_nexus | bool | Whether or not you have [nexus](https://blog.taxjar.com/sales-tax-nexus-definition/) for the order based on an address on file, `nexus_addresses` parameter, or `from_` parameters.
freight_taxable | bool | Freight taxability for the order.
tax_source | string | [Origin-based or destination-based](https://blog.taxjar.com/charging-sales-tax-rates/) sales tax collection.
breakdown | object | Breakdown of rates by jurisdiction for the order, shipping, and individual line items. If `has_nexus` is false, no breakdown is returned.

<h4 id="us-taxes-breakdown-attributes"><span class="flag-icon flag-icon-us"></span>&nbsp; United States Breakdown Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
taxable_amount | long | Total amount of the order to be taxed.
tax_collectable | long | Total amount of sales tax to collect.
combined_tax_rate | long | Overall sales tax rate of the breakdown which includes state, county, city and district tax for the order and shipping if applicable.
state_taxable_amount | long | Amount of the order to be taxed at the state tax rate.
state_tax_rate | long | State sales tax rate for given location.
state_tax_collectable | long | Amount of sales tax to collect for the state.
county_taxable_amount | long | Amount of the order to be taxed at the county tax rate.
county_tax_rate | long | County sales tax rate for given location.
county_tax_collectable | long | Amount of sales tax to collect for the county.
city_taxable_amount | long | Amount of the order to be taxed at the city tax rate.
city_tax_rate | long | City sales tax rate for given location.
city_tax_collectable | long | Amount of sales tax to collect for the city.
special_district_taxable_amount | long | Amount of the order to be taxed at the special district tax rate.
special_tax_rate | long | Special district sales tax rate for given location.
special_district_tax_collectable | long | Amount of sales tax to collect for the special district.
shipping | object | Breakdown of shipping rates if applicable.
line_items | object | Breakdown of rates by line item if applicable.

<h4 id="canada-taxes-breakdown-attributes"><span class="flag-icon flag-icon-ca"></span>&nbsp; Canada Breakdown Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
gst_taxable_amount | long | Amount of the order to be taxed at the GST rate.
gst_tax_rate | long | Goods and services tax rate for given location.
gst | long | Amount of goods and services tax to collect for given location.
pst_taxable_amount | long | Amount of the order to be taxed at the PST rate.
pst_tax_rate | long | Provincial sales tax rate for given location.
pst | long | Amount of provincial sales tax to collect for given location.
qst_taxable_amount | long | Amount of the order to be taxed at the QST rate.
qst_tax_rate | long | Quebec sales tax rate for given location.
qst | long | Amount of Quebec sales tax to collect for given location.
shipping | object | Breakdown of shipping rates if applicable.
line_items | object | Breakdown of rates by line item if applicable.

<h4 id="international-taxes-breakdown-attributes"><span class="flag-icon flag-icon-eu"></span> <span class="flag-icon flag-icon-au"></span>&nbsp; International Breakdown Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
country_taxable_amount | long | Amount of the order to be taxed at the country tax rate.
country_tax_rate | long | Country sales tax rate for given location
country_tax_collectable | long | Amount of sales tax to collect for the country.
shipping | object | Breakdown of shipping rates if applicable.
line_items | object | Breakdown of rates by line item if applicable.

## Transactions

Manage your transactions for automated sales tax reporting and filing in TaxJar. These endpoints only affect orders and refunds created specifically through the API, *not* transactions from other channels.

We currently support reporting and filing in the United States.

### <span class="badge badge--get">get</span> List order transactions

> Definition

```ruby
client.list_orders
```

```python
client.list_orders
```

```javascript
client.listOrders();
```

```php?start_inline=1
$client->listOrders();
```

```csharp
client.ListOrders();
```

```java
client.listOrders();
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

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

orders = client.list_orders({
  'from_transaction_date': '2015/05/01',
  'to_transaction_date': '2015/05/31'
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.listOrders({
  from_transaction_date: '2015/05/01',
  to_transaction_date: '2015/05/31'
}).then(res => {
  res.orders; // Array of orders
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$orders = $client->listOrders([
  'from_transaction_date' => '2015/05/01',
  'to_transaction_date' => '2015/05/31'
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var orders = client.ListOrders(new {
    from_transaction_date = "2015/05/01",
    to_transaction_date = "2015/05/31"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.OrdersResponse;
import java.util.HashMap;
import java.util.Map;

public class ListOrdersExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, String> params = new HashMap<>();
            params.put("from_transaction_date", "2015/05/01");
            params.put("to_transaction_date", "2015/05/31");
            OrdersResponse res = client.listOrders(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl -G https://api.taxjar.com/v2/transactions/orders \
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

```python
['20', '21', '22']
```

Lists existing order transactions created through the API.

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

#### Response

Returns an `orders` JSON object with an array of order IDs created through the API.

### <span class="badge badge--get">get</span> Show an order transaction

> Definition

```ruby
client.show_order
```

```python
client.show_order
```

```javascript
client.showOrder();
```

```php?start_inline=1
$client->showOrder();
```

```csharp
client.ShowOrder();
```

```java
client.showOrder();
```

```shell
GET https://api.taxjar.com/v2/transactions/orders/:transaction_id
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

order = client.show_order('123')
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

order = client.show_order('123')
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.showOrder('123').then(res => {
  res.order;
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order = $client->showOrder('123');
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var order = client.ShowOrder("123");
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.OrderResponse;

public class ShowOrderExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            OrderResponse res = client.showOrder("123");
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/transactions/orders/123 \
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
    "amount": "17.0",
    "shipping": "2.0",
    "sales_tax": "0.95",
    "line_items": [
      {
        "id": "1",
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
#<Taxjar::Order:0x00000a @attrs={
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
  :amount => 17,
  :shipping => 2,
  :sales_tax => 0.95,
  :line_items => [
    {
      :id => "1",
      :quantity => 1,
      :product_identifier => "12-34243-0",
      :product_tax_code => nil,
      :description => "Heavy Widget",
      :unit_price => 15,
      :discount => 0,
      :sales_tax => 0.95
    }
  ]
}>
```

```python
<TaxJarOrder {
  'from_state': 'CA',
  'line_items': [<TaxJarLineItem {
    'description': 'Heavy Widget',
    'unit_price': 15,
    'discount': 0,
    'product_identifier': '12-34243-0',
    'sales_tax': 0.95,
    'product_tax_code': None,
    'id': 1,
    'quantity': 1
  }>],
  'user_id': 1,
  'to_zip': '90002',
  'from_street': '1218 State St',
  'from_city': 'SANTA BARBARA',
  'from_zip': '93107',
  'to_country': 'US',
  'shipping': 2,
  'from_country': 'US',
  'to_city': 'LOS ANGELES',
  'to_street': '123 Palm Grove Ln',
  'transaction_date': '2016-03-10T00:00:00.000Z',
  'transaction_reference_id': None,
  'sales_tax': 0.95,
  'amount': 17,
  'transaction_id': '123',
  'to_state': 'CA'
}>
```

Shows an existing order transaction created through the API.

#### Request

GET https://api.taxjar.com/v2/transactions/orders/:transaction_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | Unique identifier of the given order transaction.

#### Response

Returns an `order` JSON object with details of a given order transaction created through the API.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
transaction_id | string | Unique identifier of the given order transaction.
user_id | integer | Unique identifier of the user who created the order transaction.
transaction_date | datetime | The date/time the transaction was originally recorded.
from_country | string | Two-letter ISO country code of the country where the order shipped from.
from_zip | string | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | Two-letter ISO state code where the order shipped from.
from_city | string | City where the order shipped from.
from_street | string | Street address where the order shipped from.
to_country | string | Two-letter ISO country code of the country where the order shipped to.
to_zip | string | Postal code where the order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | Two-letter ISO state code where the order shipped to.
to_city | string | City where the order shipped to.
to_street | string | Street address where the order shipped to.
amount | long | Total amount of the order with shipping, **excluding sales tax**.
shipping | long | Total amount of shipping for the order.
sales_tax | long | Total amount of sales tax collected for the order.
line_items[][id] | string | Unique identifier of the given line item.
line_items[][quantity] | integer | Quantity for the item.
line_items[][product_identifier] | string | Product identifier for the item.
line_items[][description] | string  | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | Product tax code for the item.
line_items[][unit_price] | long | Unit price for the item in dollars.
line_items[][discount] | long | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | long | Total sales tax collected (non-unit) for the item in dollars.

### <span class="badge badge--post">post</span> Create an order transaction

> Definition

```ruby
client.create_order
```

```python
client.create_order
```

```javascript
client.createOrder();
```

```php?start_inline=1
$client->createOrder();
```

```csharp
client.CreateOrder();
```

```java
client.createOrder();
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
  :amount => 16.5,
  :shipping => 1.5,
  :sales_tax => 0.95,
  :line_items => [
    {
      :quantity => 1,
      :product_identifier => '12-34243-9',
      :description => 'Fuzzy Widget',
      :unit_price => 15,
      :sales_tax => 0.95
    }
  ]
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

order = client.create_order({
  'transaction_id': '123',
  'transaction_date': '2015/05/14',
  'to_country': 'US',
  'to_zip': '90002',
  'to_state': 'CA',
  'to_city': 'Los Angeles',
  'to_street': '123 Palm Grove Ln',
  'amount': 16.5,
  'shipping': 1.5,
  'sales_tax': 0.95,
  'line_items': [
    {
      'quantity': 1,
      'product_identifier': '12-34243-9',
      'description': 'Fuzzy Widget',
      'unit_price': 15,
      'sales_tax': 0.95
    }
  ]
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.createOrder({
  transaction_id: '123',
  transaction_date: '2015/05/14',
  to_country: 'US',
  to_zip: '90002',
  to_state: 'CA',
  to_city: 'Los Angeles',
  to_street: '123 Palm Grove Ln',
  amount: 16.5,
  shipping: 1.5,
  sales_tax: 0.95,
  line_items: [
    {
      quantity: 1,
      product_identifier: '12-34243-9',
      description: 'Fuzzy Widget',
      unit_price: 15,
      sales_tax: 0.95
    }
  ]
}).then(res => {
  res.order; // Order object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order = $client->createOrder([
  'transaction_id' => '123',
  'transaction_date' => '2015/05/14',
  'to_country' => 'US',
  'to_zip' => '90002',
  'to_state' => 'CA',
  'to_city' => 'Los Angeles',
  'to_street' => '123 Palm Grove Ln',
  'amount' => 16.5,
  'shipping' => 1.5,
  'sales_tax' => 0.95,
  'line_items' => [
    [
      'quantity' => 1,
      'product_identifier' => '12-34243-9',
      'description' => 'Fuzzy Widget',
      'unit_price' => 15,
      'sales_tax' => 0.95
    ]
  ]
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var order = client.CreateOrder(new {
  transaction_id = "123",
  transaction_date = "2015/05/04",
  to_country = "US",
  to_zip = "90002",
  to_city = "Los Angeles",
  to_street = "123 Palm Grove Ln",
  amount = 16.5,
  shipping = 1.5,
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
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.OrderResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CreateOrderExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("transaction_id", "123");
            params.put("transaction_date", "2015/05/04");
            params.put("to_country", "US");
            params.put("to_zip", "90002");
            params.put("to_city", "Los Angeles");
            params.put("to_street", "123 Palm Grove Ln");
            params.put("amount", 16.5);
            params.put("shipping", 1.5);
            params.put("sales_tax", 0.95);

            List<Map> lineItems = new ArrayList();
            Map<String, Object> lineItem = new HashMap<>();
            lineItem.put("quantity", 1);
            lineItem.put("product_identifier", "12-34243-0");
            lineItem.put("description", "Heavy Widget");
            lineItem.put("unit_price", 15);
            lineItem.put("sales_tax", 0.95);
            lineItems.add(lineItem);

            params.put("line_items", lineItems);

            OrderResponse res = client.createOrder(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/transactions/orders \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "transaction_id": "123",
    "transaction_date": "2015/05/14",
    "to_street": "123 Palm Grove Ln",
    "to_city": "Los Angeles",
    "to_state": "CA",
    "to_zip": "90002",
    "to_country": "US",
    "amount": 16.5,
    "shipping": 1.5,
    "sales_tax": 0.95,
    "line_items": [
      {
        "quantity": 1,
        "product_identifier": "12-34234-9",
        "description": "Fuzzy Widget",
        "unit_price": 15,
        "sales_tax": 0.95
      }
    ]
  }'
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
    "amount": "16.5",
    "shipping": "1.5",
    "sales_tax": "0.95",
    "line_items": [
      {
        "id": "1",
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
#<Taxjar::Order:0x00000a @attrs={
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
  :amount => 16.5,
  :shipping => 1.5,
  :sales_tax => 0.95,
  :line_items => [
    {
      :id => "1",
      :quantity => 1,
      :product_identifier => "12-34243-9",
      :product_tax_code => nil,
      :description => "Fuzzy Widget",
      :unit_price => 15,
      :discount => 0,
      :sales_tax => 0.95
    }
  ]
}>
```

```python
<TaxJarOrder {
  'from_state': 'CA',
  'line_items': [<TaxJarLineItem {
    'description': 'Fuzzy Widget',
    'unit_price': 15,
    'discount': 0,
    'product_identifier': '12-34243-9',
    'sales_tax': 0.95,
    'product_tax_code': None,
    'id': 1,
    'quantity': 1
  }>],
  'user_id': 11836,
  'to_zip': '90002',
  'from_street': '1218 State St',
  'from_city': 'SANTA BARBARA',
  'from_zip': '93101',
  'to_country': 'US',
  'shipping': 1.5,
  'from_country': 'US',
  'to_city': 'LOS ANGELES',
  'to_street': '123 Palm Grove Ln',
  'transaction_date': '2015-05-14T00:00:00Z',
  'transaction_reference_id': None,
  'sales_tax': 0.95,
  'amount': 16.5,
  'transaction_id': '20',
  'to_state': 'CA'
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
from_country | string | optional | Two-letter ISO country code of the country where the order shipped from. <span class="usage-note" data-tooltip="Either an address on file or `from_` parameters are required to create order transactions." data-tooltip-position="top center">View Note</span>
from_zip | string | optional | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | optional | Two-letter ISO state code where the order shipped from.
from_city | string | optional | City where the order shipped from.
from_street | string | optional | Street address where the order shipped from.
to_country | string | required | Two-letter ISO country code of the country where the order shipped to.
to_zip | string | required | Postal code where the order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | required | Two-letter ISO state code where the order shipped to.
to_city | string | optional | City where the order shipped to.
to_street | string | optional | Street address where the order shipped to.
amount | long | required | Total amount of the order with shipping, **excluding sales tax** in dollars.
shipping | long | required | Total amount of shipping for the order in dollars.
sales_tax | long | required | Total amount of sales tax collected for the order in dollars.
customer_id | string | optional | Unique identifier of the given customer for exemptions.
line_items[][id] | string | optional | Unique identifier of the given line item.
line_items[][quantity] | integer | optional | Quantity for the item.
line_items[][product_identifier] | string | optional | Product identifier for the item.
line_items[][description] | string | optional | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | optional | Product tax code for the item. If omitted, the item will remain fully taxable.
line_items[][unit_price] | long | optional | Unit price for the item in dollars.
line_items[][discount] | long | optional | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | long | optional | Total sales tax collected (non-unit) for the item in dollars.

#### Notes

- *Either an address on file or `from_` parameters are required to create order transactions.*

- *The `transaction_date` may be a date '2015-05-25', an ISO UTC date/time '2015-05-25T13:05:45', or an ISO date/time with zone offset '2015-05-25T13:05:45-05:00'.*

#### Response

Returns an `order` JSON object with details of the new order transaction.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
transaction_id | string | Unique identifier of the given order transaction.
user_id | integer | Unique identifier of the user who created the order transaction.
transaction_date | datetime | The date/time the transaction was originally recorded.
from_country | string | Two-letter ISO country code of the country where the order shipped from.
from_zip | string | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | Two-letter ISO state code where the order shipped from.
from_city | string | City where the order shipped from.
from_street | string | Street address where the order shipped from.
to_country | string | Two-letter ISO country code of the country where the order shipped to.
to_zip | string | Postal code where the order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | Two-letter ISO state code where the order shipped to.
to_city | string | City where the order shipped to.
to_street | string | Street address where the order shipped to.
amount | long | Total amount of the order with shipping, **excluding sales tax**.
shipping | long | Total amount of shipping for the order.
sales_tax | long | Total amount of sales tax collected for the order.
line_items[][id] | string | Unique identifier of the given line item.
line_items[][quantity] | integer | Quantity for the item.
line_items[][product_identifier] | string | Product identifier for the item.
line_items[][description] | string  | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | Product tax code for the item.
line_items[][unit_price] | long | Unit price for the item in dollars.
line_items[][discount] | long | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | long | Total sales tax collected (non-unit) for the item in dollars.

### <span class="badge badge--put">put</span> Update an order transaction

> Definition

```ruby
client.update_order
```

```python
client.update_order
```

```javascript
client.updateOrder();
```

```php?start_inline=1
$client->updateOrder();
```

```csharp
client.UpdateOrder();
```

```java
client.updateOrder();
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
  :amount => 17,
  :shipping => 2,
  :line_items => [
    {
      :quantity => 1,
      :product_identifier => '12-34243-0',
      :description => 'Heavy Widget',
      :unit_price => 15,
      :discount => 0,
      :sales_tax => 0.95
    }
  ]
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

order = client.update_order('123', {
  'transaction_id': '123',
  'amount': 17,
  'shipping': 2,
  'line_items': [
    {
      'quantity': 1,
      'product_identifier': '12-34243-0',
      'description': 'Heavy Widget',
      'unit_price': 15,
      'discount': 0,
      'sales_tax': 0.95
    }
  ]
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.updateOrder({
  transaction_id: '123',
  amount: 17,
  shipping: 2,
  line_items: [
    {
      quantity: 1,
      product_identifier: '12-34243-0',
      description: 'Heavy Widget',
      unit_price: 15,
      discount: 0,
      sales_tax: 0.95
    }
  ]
}).then(res => {
  res.order; // Order object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$order = $client->updateOrder([
  'transaction_id' => '123',
  'amount' => 17,
  'shipping' => 2,
  'line_items' => [
    [
      'quantity' => 1,
      'product_identifier' => '12-34243-0',
      'description' => 'Heavy Widget',
      'unit_price' => 15,
      'discount' => 0,
      'sales_tax' => 0.95
    ]
  ]
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var order = client.UpdateOrder(new
{
  transaction_id = "123",
  amount = 17,
  shipping = 2,
  line_items = new[] {
    new {
      quantity = 1,
      product_identifier = "12-34243-0",
      description = "Heavy Widget",
      unit_price = 15,
      discount = 0,
      sales_tax = 0.95
    }
  }
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.OrderResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UpdateOrderExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("transaction_id", "123");
            params.put("amount", 17);
            params.put("shipping", 2);

            List<Map> lineItems = new ArrayList();
            Map<String, Object> lineItem = new HashMap<>();
            lineItem.put("quantity", 1);
            lineItem.put("product_identifier", "12-34243-0");
            lineItem.put("description", "Heavy Widget");
            lineItem.put("unit_price", 15);
            lineItem.put("discount", 0);
            lineItem.put("sales_tax", 0.95);
            lineItems.add(lineItem);

            params.put("line_items", lineItems);

            OrderResponse res = client.updateOrder("123", params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/transactions/orders/123 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "transaction_id": "123",
    "amount": 17,
    "shipping": 2,
    "line_items": [
      {
        "quantity": 1,
        "product_identifier": "12-34234-0",
        "unit_price": 15,
        "discount": 0,
        "sales_tax": 0.95
      }
    ]
  }' \
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
    "amount": "17.0",
    "shipping": "2.0",
    "sales_tax": "0.95",
    "line_items": [
      {
        "id": "1",
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
#<Taxjar::Order:0x00000a @attrs={
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
  :amount => 17.0,
  :shipping => 2.0,
  :sales_tax => 0.95,
  :line_items => [
    {
      :id => "1",
      :quantity => 1,
      :product_identifier => "12-34243-0",
      :product_tax_code => nil,
      :description => "Heavy Widget",
      :unit_price => 15,
      :discount => 0,
      :sales_tax => 0.95
    }
  ]
}>
```

```python
<TaxJarOrder {
  'from_state': 'CA',
  'line_items': [<TaxJarLineItem {
    'description': 'Heavy Widget',
    'unit_price': 15,
    'discount': 0,
    'product_identifier': '12-34243-0',
    'sales_tax': 0.95,
    'product_tax_code': None,
    'id': 0,
    'quantity': 1
  }>,
  'user_id': 11836,
  'to_zip': '90002',
  'from_street': '1218 State St',
  'from_city': 'SANTA BARBARA',
  'from_zip': '93101',
  'to_country': 'US',
  'shipping': 2,
  'from_country': 'US',
  'to_city': 'LOS ANGELES',
  'to_street': '123 Palm Grove Ln',
  'transaction_date': '2015-05-14T00:00:00Z',
  'transaction_reference_id': None,
  'sales_tax': 0.95,
  'amount': 17,
  'transaction_id': '123',
  'to_state': 'CA'
}>
```

Updates an existing order transaction created through the API.

#### Request

PUT https://api.taxjar.com/v2/transactions/orders/:transaction_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | Unique identifier of the given order transaction.
transaction_date | datetime | optional | The date/time the transaction was originally recorded. <span class="usage-note" data-tooltip="The `transaction_date` may be a date '2015-05-25', an ISO UTC date/time '2015-05-25T13:05:45', or an ISO date/time with zone offset '2015-05-25T13:05:45-05:00'." data-tooltip-position="top center">View Note</span>
from_country | string | optional | Two-letter ISO country code of the country where the order shipped from. <span class="usage-note" data-tooltip="Either an address on file or `from_` parameters are required to update order transactions." data-tooltip-position="top center">View Note</span>
from_zip | string | optional | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | optional | Two-letter ISO state code where the order shipped from.
from_city | string | optional | City where the order shipped from.
from_street | string | optional | Street address where the order shipped from.
to_country | string | optional | Two-letter ISO country code of the country where the order shipped to.
to_zip | string | optional | Postal code where the order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | optional | Two-letter ISO state code where the order shipped to.
to_city | string | optional | City where the order shipped to.
to_street | string | optional | Street address where the order shipped to.
amount | long | optional | Total amount of the order with shipping, **excluding sales tax** in dollars.
shipping | long | optional | Total amount of shipping for the order in dollars.
sales_tax | long | optional | Total amount of sales tax collected for the order in dollars.
customer_id | string | optional | Unique identifier of the given customer for exemptions.
line_items[][id] | string | optional | Unique identifier of the given line item.
line_items[][quantity] | integer | optional | Quantity for the item.
line_items[][product_identifier] | string | optional | Product identifier for the item.
line_items[][description] | string | optional | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | optional | Product tax code for the item. If omitted, the item will remain fully taxable.
line_items[][unit_price] | long | optional | Unit price for the item in dollars.
line_items[][discount] | long | optional | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | long | optional | Total sales tax collected (non-unit) for the item in dollars.

#### Notes

- *Either an address on file or `from_` parameters are required to update order transactions.*

- *The `transaction_date` may be a date '2015-05-25', an ISO UTC date/time '2015-05-25T13:05:45', or an ISO date/time with zone offset '2015-05-25T13:05:45-05:00'.*

#### Response

Returns an `order` JSON object with details of the updated order transaction.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
transaction_id | string | Unique identifier of the given order transaction.
user_id | integer | Unique identifier of the user who created the order transaction.
transaction_date | datetime | The date/time the transaction was originally recorded.
from_country | string | Two-letter ISO country code of the country where the order shipped from.
from_zip | string | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | Two-letter ISO state code where the order shipped from.
from_city | string | City where the order shipped from.
from_street | string | Street address where the order shipped from.
to_country | string | Two-letter ISO country code of the country where the order shipped to.
to_zip | string | Postal code where the order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | Two-letter ISO state code where the order shipped to.
to_city | string | City where the order shipped to.
to_street | string | Street address where the order shipped to.
amount | long | Total amount of the order with shipping, **excluding sales tax**.
shipping | long | Total amount of shipping for the order.
sales_tax | long | Total amount of sales tax collected for the order.
line_items[][id] | string | Unique identifier of the given line item.
line_items[][quantity] | integer | Quantity for the item.
line_items[][product_identifier] | string | Product identifier for the item.
line_items[][description] | string  | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | Product tax code for the item.
line_items[][unit_price] | long | Unit price for the item in dollars.
line_items[][discount] | long | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | long | Total sales tax collected (non-unit) for the item in dollars.

### <span class="badge badge--delete">delete</span> Delete an order transaction

> Definition

```ruby
client.delete_order
```

```python
client.delete_order
```

```javascript
client.deleteOrder();
```

```php?start_inline=1
$client->deleteOrder();
```

```csharp
client.DeleteOrder();
```

```java
client.deleteOrder();
```

```shell
DELETE https://api.taxjar.com/v2/transactions/orders/:transaction_id
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

client.delete_order('123')
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

client.delete_order('123')
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.deleteOrder('123').then(res => {
  res.order; // Order object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$client->deleteOrder('123');
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var order = client.DeleteOrder("123");
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.OrderResponse;

public class DeleteOrderExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            OrderResponse res = client.deleteOrder("123");
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/transactions/orders/123 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -X DELETE
```

> Response Example

```json
{
  "order": {
    "transaction_id": "123",
    "user_id": 10649,
    "transaction_date": null,
    "transaction_reference_id": null,
    "from_country": null,
    "from_zip": null,
    "from_state": null,
    "from_city": null,
    "from_street": null,
    "to_country": null,
    "to_zip": null,
    "to_state": null,
    "to_city": null,
    "to_street": null,
    "amount": null,
    "shipping": null,
    "sales_tax": null,
    "line_items": []
  }
}
```

```ruby
#<Taxjar::Order:0x00000a @attrs={
  :transaction_id => "123",
  :user_id => 10649,
  :transaction_date => nil,
  :transaction_reference_id => nil,
  :from_country => nil,
  :from_zip => nil,
  :from_state => nil,
  :from_city => nil,
  :from_street => nil,
  :to_country => nil,
  :to_zip => nil,
  :to_state => nil,
  :to_city => nil,
  :to_street => nil,
  :amount => nil,
  :shipping => nil,
  :sales_tax => nil,
  :line_items => []
}>
```

```python
<TaxJarOrder {
  'from_state': None,
  'line_items': [],
  'user_id': 10649,
  'to_zip': None,
  'from_street': None,
  'from_city': None,
  'from_zip': None,
  'to_country': None,
  'shipping': None,
  'from_country': None,
  'to_city': None,
  'to_street': None,
  'transaction_date': None,
  'transaction_reference_id': None,
  'sales_tax': None,
  'amount': None,
  'transaction_id': '123',
  'to_state': None
}>
```

Deletes an existing order transaction created through the API.

#### Request

DELETE https://api.taxjar.com/v2/transactions/orders/:transaction_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | Unique identifier of the given order transaction.

#### Response

Returns an `order` JSON object with the deleted order transaction identifiers.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
transaction_id | string | Unique identifier of the given order transaction.
user_id | integer | Unique identifier of the user who created the order transaction.

### <span class="badge badge--get">get</span> List refund transactions

> Definition

```ruby
client.list_refunds
```

```python
client.list_refunds
```

```javascript
client.listRefunds();
```

```php?start_inline=1
$client->listRefunds();
```

```csharp
client.ListRefunds();
```

```java
client.listRefunds();
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

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

refunds = client.list_refunds({
  'from_transaction_date': '2015/05/01',
  'to_transaction_date': '2015/05/31'
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.listRefunds({
  from_transaction_date: '2015/05/01',
  to_transaction_date: '2015/05/31'
}).then(res => {
  res.refunds; // Array of refunds
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$refunds = $client->listRefunds([
  'from_transaction_date' => '2015/05/01',
  'to_transaction_date' => '2015/05/31'
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var refunds = client.ListRefunds(new
{
  from_transaction_date = "2015/05/01",
  to_transaction_date = "2015/05/31"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.RefundsResponse;
import java.util.HashMap;
import java.util.Map;

public class ListRefundsExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, String> params = new HashMap<>();
            params.put("from_transaction_date", "2015/05/01");
            params.put("to_transaction_date", "2015/05/31");
            RefundsResponse res = client.listRefunds(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl -G https://api.taxjar.com/v2/transactions/refunds \
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

```python
['203', '204', '205']
```

Lists existing refund transactions created through the API.

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

#### Response

Returns a `refunds` JSON object with an array of refund IDs created through the API.

### <span class="badge badge--get">get</span> Show a refund transaction

> Definition

```ruby
client.show_refund
```

```python
client.show_refund
```

```javascript
client.showRefund();
```

```php?start_inline=1
$client->showRefund();
```

```csharp
client.ShowRefund();
```

```java
client.showRefund();
```

```shell
GET https://api.taxjar.com/v2/transactions/refunds/:transaction_id
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

refund = client.show_refund('321')
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

refund = client.show_refund('321')
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.showRefund('321').then(res => {
  res.refund;
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$refund = $client->showRefund('321');
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var refund = client.ShowRefund("321");
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.RefundResponse;

public class ShowRefundExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            RefundResponse res = client.showRefund("321");
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/transactions/refunds/321 \
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
    "amount": "-17.0",
    "shipping": "-2.0",
    "sales_tax": "-0.95",
    "line_items": [
      {
        "id": "1",
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
#<Taxjar::Refund:0x00000a @attrs={
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
  :amount => -17.0,
  :shipping => -2.0,
  :sales_tax => -0.95,
  :line_items => [
    {
      :id => "1",
      :quantity => 1,
      :product_identifier => "12-34243-0",
      :product_tax_code => nil,
      :description => "Heavy Widget",
      :unit_price => 15,
      :discount => 0,
      :sales_tax => 0.95
    }
  ]
}>
```

```python
<TaxJarRefund {
  'from_state': 'CA',
  'line_items': [<TaxJarLineItem {
    'description': 'Heavy Widget',
    'unit_price': 15,
    'discount': 0,
    'product_identifier': '12-34243-0',
    'sales_tax': 0.95,
    'product_tax_code': None,
    'id': 0,
    'quantity': 1
  }>],
  'user_id': 11836,
  'to_zip': '90002',
  'from_street': '1218 State St',
  'from_city': 'SANTA BARBARA',
  'from_zip': 93107,
  'to_country': 'US',
  'shipping': -2,
  'from_country': 'US',
  'to_city': 'LOS ANGELES',
  'to_street': '123 Palm Grove Ln',
  'transaction_date': '2015-06-14T00:00:00Z',
  'transaction_reference_id': '123',
  'sales_tax': -0.95,
  'amount': -17,
  'transaction_id': '321',
  'to_state': 'CA'
}>
```

Shows an existing refund transaction created through the API.

#### Request

GET https://api.taxjar.com/v2/transactions/refunds/:transaction_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | Unique identifier of the given refund transaction.

#### Response

Returns a `refund` JSON object with details of a given refund transaction created through the API.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
transaction_id | string | Unique identifier of the given refund transaction.
user_id | integer | Unique identifier of the user who created the refund transaction.
transaction_date | datetime | The date/time the transaction was originally recorded.
from_country | string | Two-letter ISO country code of the country where the order shipped from.
from_zip | string | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | Two-letter ISO state code where the order shipped from.
from_city | string | City where the order shipped from.
from_street | string | Street address where the order shipped from.
to_country | string | Two-letter ISO country code of the country where the order shipped to.
to_zip | string | Postal code where the order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | Two-letter ISO state code where the order shipped to.
to_city | string | City where the order shipped to.
to_street | string | Street address where the order shipped to.
amount | long | Total amount of the refunded order with shipping, **excluding sales tax**.
shipping | long | Total amount of shipping for the refunded order.
sales_tax | long | Total amount of sales tax collected for the refunded order.
line_items[][id] | string | Unique identifier of the given line item.
line_items[][quantity] | integer | Quantity for the item.
line_items[][product_identifier] | string | Product identifier for the item.
line_items[][description] | string  | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | Product tax code for the item.
line_items[][unit_price] | long | Unit price for the item in dollars.
line_items[][discount] | long | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | long | Total sales tax collected (non-unit) for the item in dollars.

### <span class="badge badge--post">post</span> Create a refund transaction

> Definition

```ruby
client.create_refund
```

```python
client.create_refund
```

```javascript
client.createRefund();
```

```php?start_inline=1
$client->createRefund();
```

```csharp
client.CreateRefund();
```

```java
client.createRefund();
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
  :amount => 16.5,
  :shipping => 1.5,
  :sales_tax => 0.95,
  :line_items => [
    {
      :quantity => 1,
      :product_identifier => '12-34243-9',
      :description => 'Fuzzy Widget',
      :unit_price => 15,
      :sales_tax => 0.95
    }
  ]
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

refund = client.create_refund({
  'transaction_id': '321',
  'transaction_date': '2016-05-14',
  'transaction_reference_id': '123',
  'from_state': 'CA',
  'from_city': 'Santa Barbara',
  'from_street': '1218 State St',
  'from_country': 'US',
  'from_zip': '93101',
  'to_country': 'US',
  'to_state': 'CA',
  'to_city': 'Los Angeles',
  'to_street': '123 Palm Grove Ln',
  'to_zip': '90002',
  'amount': 16.5,
  'shipping': 1.5,
  'sales_tax': 0.95,
  'line_items': [
    {
      'quantity': 1,
      'product_identifier': '12-34243-9',
      'description': 'Fuzzy Widget',
      'unit_price': 15,
      'sales_tax': 0.95
    }
  ]
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.createRefund({
  transaction_id: '123',
  transaction_date: '2015/05/14',
  transaction_reference_id: '123',
  to_country: 'US',
  to_zip: '90002',
  to_state: 'CA',
  to_city: 'Los Angeles',
  to_street: '123 Palm Grove Ln',
  amount: 16.5,
  shipping: 1.5,
  sales_tax: 0.95,
  line_items: [
    {
      quantity: 1,
      product_identifier: '12-34243-9',
      description: 'Fuzzy Widget',
      unit_price: 15,
      sales_tax: 0.95
    }
  ]
}).then(res => {
  res.refund; // Refund object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$refund = $client->createRefund([
  'transaction_id' => '321',
  'transaction_date' => '2015/05/14',
  'transaction_reference_id' => '123',
  'to_country' => 'US',
  'to_zip' => '90002',
  'to_state' => 'CA',
  'to_city' => 'Los Angeles',
  'to_street' => '123 Palm Grove Ln',
  'amount' => 16.5,
  'shipping' => 1.5,
  'sales_tax' => 0.95,
  'line_items' => [
    [
      'quantity' => 1,
      'product_identifier' => '12-34243-9',
      'description' => 'Fuzzy Widget',
      'unit_price' => 15,
      'sales_tax' => 0.95
    ]
  ]
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var refund = client.CreateRefund(new
{
  transaction_id = "321",
  transaction_date = "2015/05/04",
  transaction_reference_id = "123",
  to_country = "US",
  to_zip = "90002",
  to_city = "Los Angeles",
  to_street = "123 Palm Grove Ln",
  amount = 16.5,
  shipping = 1.5,
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
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.RefundResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CreateRefundExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("transaction_id", "321");
            params.put("transaction_date", "2015/05/04");
            params.put("to_country", "US");
            params.put("to_zip", "90002");
            params.put("to_city", "Los Angeles");
            params.put("to_street", "123 Palm Grove Ln");
            params.put("amount", 16.5);
            params.put("shipping", 1.5);
            params.put("sales_tax", 0.95);

            List<Map> lineItems = new ArrayList();
            Map<String, Object> lineItem = new HashMap<>();
            lineItem.put("quantity", 1);
            lineItem.put("product_identifier", "12-34243-0");
            lineItem.put("description", "Heavy Widget");
            lineItem.put("unit_price", 15);
            lineItem.put("sales_tax", 0.95);
            lineItems.add(lineItem);

            params.put("line_items", lineItems);

            RefundResponse res = client.createRefund(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/transactions/refunds \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "transaction_id": "123",
    "transaction_date": "2015/05/14",
    "transaction_reference_id": "123",
    "to_street": "123 Palm Grove Ln",
    "to_city": "Los Angeles",
    "to_state": "CA",
    "to_zip": "90002",
    "to_country": "US",
    "amount": 16.5,
    "shipping": 1.5,
    "sales_tax": 0.95,
    "line_items": [
      {
        "quantity": 1,
        "product_identifier": "12-34234-9",
        "description": "Fuzzy Widget",
        "unit_price": 15,
        "sales_tax": 0.95
      }
    ]
  }'
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
    "amount": "-16.5",
    "shipping": "-1.5",
    "sales_tax": "-0.95",
    "line_items": [
      {
        "id": "1",
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
#<Taxjar::Refund:0x00000a @attrs={
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
  :amount => -16.5,
  :shipping => -1.5,
  :sales_tax => -0.95,
  :line_items => [
    {
      :id => "1",
      :quantity => 1,
      :product_identifier => "12-34243-0",
      :product_tax_code => nil,
      :description => "Heavy Widget",
      :unit_price => 15,
      :discount => 0,
      :sales_tax => 0.95
    }
  ]
}>
```

```python
<TaxJarRefund {
  'from_state': 'CA',
  'line_items': [<TaxJarLineItem {
    'description': 'Heavy Widget',
    'unit_price': 15,
    'discount': 0,
    'product_identifier': '12-34243-0',
    'sales_tax': 0.95,
    'product_tax_code': None,
    'id': 0,
    'quantity': 1
  }>],
  'user_id': 11836,
  'to_zip': '90002',
  'from_street': '1218 State St',
  'from_city': 'SANTA BARBARA',
  'from_zip': 93107,
  'to_country': 'US',
  'shipping': -1.5,
  'from_country': 'US',
  'to_city': 'LOS ANGELES',
  'to_street': '123 Palm Grove Ln',
  'transaction_date': '2015-06-14T00:00:00Z',
  'transaction_reference_id': '123',
  'sales_tax': -0.95,
  'amount': -16.5,
  'transaction_id': '321',
  'to_state': 'CA'
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
from_country | string | optional | Two-letter ISO country code of the country where the order shipped from. <span class="usage-note" data-tooltip="Either an address on file or `from_` parameters are required to create refund transactions." data-tooltip-position="top center">View Note</span>
from_zip | string | optional | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | optional | Two-letter ISO state code where the order shipped from.
from_city | string | optional | City where the order shipped from.
from_street | string | optional | Street address where the order shipped from.
to_country | string | required | Two-letter ISO country code of the country where the order shipped to.
to_zip | string | required | Postal code where the order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | required | Two-letter ISO state code where the order shipped to.
to_city | string | optional | City where the order shipped to.
to_street | string | optional | Street address where the order shipped to.
amount | long | required | Total amount of the refunded order with shipping, **excluding sales tax** in dollars.
shipping | long | required | Total amount of shipping for the refunded order in dollars.
sales_tax | long | required | Total amount of sales tax collected for the refunded order in dollars.
customer_id | string | optional | Unique identifier of the given customer for exemptions.
line_items[][id] | string | optional | Unique identifier of the given line item.
line_items[][quantity] | integer | optional | Quantity for the item.
line_items[][product_identifier] | string | optional | Product identifier for the item.
line_items[][description] | string | optional | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | optional | Product tax code for the item. If omitted, the item will remain fully taxable.
line_items[][unit_price] | long | optional | Unit price for the item in dollars.
line_items[][discount] | long | optional | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | long | optional | Total sales tax collected (non-unit) for the item in dollars.

#### Notes

- *Either an address on file or `from_` parameters are required to create refund transactions.*

- *The `transaction_date` may be a date '2015-05-25', an ISO UTC date/time '2015-05-25T13:05:45', or an ISO date/time with zone offset '2015-05-25T13:05:45-05:00'.*

#### Response

Returns a `refund` JSON object with details of the new refund transaction.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
transaction_id | string | Unique identifier of the given refund transaction.
user_id | integer | Unique identifier of the user who created the refund transaction.
transaction_date | datetime | The date/time the transaction was originally recorded.
from_country | string | Two-letter ISO country code of the country where the order shipped from.
from_zip | string | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | Two-letter ISO state code where the order shipped from.
from_city | string | City where the order shipped from.
from_street | string | Street address where the order shipped from.
to_country | string | Two-letter ISO country code of the country where the order shipped to.
to_zip | string | Postal code where the order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | Two-letter ISO state code where the order shipped to.
to_city | string | City where the order shipped to.
to_street | string | Street address where the order shipped to.
amount | long | Total amount of the refunded order with shipping, **excluding sales tax**.
shipping | long | Total amount of shipping for the refunded order.
sales_tax | long | Total amount of sales tax collected for the refunded order.
line_items[][id] | string | Unique identifier of the given line item.
line_items[][quantity] | integer | Quantity for the item.
line_items[][product_identifier] | string | Product identifier for the item.
line_items[][description] | string  | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | Product tax code for the item.
line_items[][unit_price] | long | Unit price for the item in dollars.
line_items[][discount] | long | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | long | Total sales tax collected (non-unit) for the item in dollars.

### <span class="badge badge--put">put</span> Update a refund transaction

> Definition

```ruby
client.update_refund
```

```python
client.update_refund
```

```javascript
client.updateRefund();
```

```php?start_inline=1
$client->updateRefund();
```

```csharp
client.UpdateRefund();
```

```java
client.updateRefund();
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
  :amount => 17,
  :shipping => 2,
  :sales_tax => 0.95,
  :line_items => [
    {
      :quantity => 1,
      :product_identifier => '12-34243-0',
      :description => 'Heavy Widget',
      :unit_price => 15,
      :sales_tax => 0.95
    }
  ]
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

refund = client.update_refund('321', {
  'transaction_id': '321',
  'amount': 17,
  'shipping': 2,
  'sales_tax': 0.95,
  'line_items': [
    {
      'quantity': 1,
      'product_identifier': '12-34243-0',
      'description': 'Heavy Widget',
      'unit_price': 15,
      'sales_tax': 0.95
    }
  ]
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.updateRefund({
  transaction_id: '123',
  amount: 17,
  shipping: 2,
  line_items: [
    {
      quantity: 1,
      product_identifier: '12-34243-0',
      description: 'Heavy Widget',
      unit_price: 15,
      sales_tax: 0.95
    }
  ]
}).then(res => {
  res.refund; // Refund object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$refund = $client->updateRefund([
  'transaction_id' => '321',
  'amount' => 17,
  'shipping' => 2,
  'line_items' => [
    [
      'quantity' => 1,
      'product_identifier' => '12-34243-0',
      'description' => 'Heavy Widget',
      'unit_price' => 15,
      'sales_tax' => 0.95
    ]
  ]
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var refund = client.UpdateRefund(new
{
  transaction_id = "321",
  amount = 17,
  shipping = 2,
  line_items = new[] {
    new {
      quantity = 1,
      product_identifier = "12-34243-0",
      description = "Heavy Widget",
      unit_price = 15,
      discount = 0,
      sales_tax = 0.95
    }
  }
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.RefundResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UpdateRefundExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("transaction_id", "321");
            params.put("amount", 17);
            params.put("shipping", 2);

            List<Map> lineItems = new ArrayList();
            Map<String, Object> lineItem = new HashMap<>();
            lineItem.put("quantity", 1);
            lineItem.put("product_identifier", "12-34243-0");
            lineItem.put("description", "Heavy Widget");
            lineItem.put("unit_price", 15);
            lineItem.put("discount", 0);
            lineItem.put("sales_tax", 0.95);
            lineItems.add(lineItem);

            params.put("line_items", lineItems);

            RefundResponse res = client.updateRefund("321", params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/transactions/refunds/321 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "transaction_id": "321",
    "amount": 17,
    "shipping": 2,
    "sales_tax": 0.95,
    "line_items": [
      {
        "quantity": 1,
        "product_identifier": "12-34234-0",
        "description": "Heavy Widget",
        "unit_price": 15,
        "sales_tax": 0.95
      }
    ]
  }' \
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
    "amount": "-17.0",
    "shipping": "-2.0",
    "sales_tax": "-0.95",
    "line_items": [
      {
        "id": "1",
        "quantity": 1,
        "product_identifier": "12-34243-0",
        "description": "Heavy Widget",
        "unit_price": 15,
        "discount": 0,
        "sales_tax": 0.95
      }
    ]
  }
}
```

```ruby
#<Taxjar::Refund:0x00000a @attrs={
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
  :amount => -17.0,
  :shipping => -2.0,
  :sales_tax => -0.95,
  :line_items => [
    {
      :id => "1",
      :quantity => 1,
      :product_identifier => "12-34243-9",
      :product_tax_code => nil,
      :description => "Heavy Widget",
      :unit_price => 15,
      :discount => 0,
      :sales_tax => 0.95
    }
  ]
}>
```

```python
<TaxJarRefund {
  'from_state': 'CA',
  'line_items': [<TaxJarLineItem {
    'description': 'Heavy Widget',
    'unit_price': 15,
    'discount': 0,
    'product_identifier': '12-34243-9',
    'sales_tax': 0.95,
    'product_tax_code': None,
    'id': 0,
    'quantity': 1
  }>],
  'user_id': 1,
  'to_zip': '90002',
  'from_street': '1218 State St',
  'from_city': 'SANTA BARBARA',
  'from_zip': 93107,
  'to_country': 'US',
  'shipping': -2,
  'from_country': 'US',
  'to_city': 'LOS ANGELES',
  'to_street': '123 Palm Grove Ln',
  'transaction_date': '2016-03-10T00:00:00.000Z',
  'transaction_reference_id': '123',
  'sales_tax': -0.95,
  'amount': -17,
  'transaction_id': '321',
  'to_state': 'CA'
}>
```

Updates an existing refund transaction created through the API.

#### Request

PUT https://api.taxjar.com/v2/transactions/refunds/:transaction_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | Unique identifier of the given transaction.
transaction_reference_id | string | required | Unique identifier of the corresponding order transaction for the refund.
transaction_date | datetime | optional | The date/time the transaction was originally recorded.
from_country | string | optional | Two-letter ISO country code of the country where the order shipped from. <span class="usage-note" data-tooltip="Either an address on file or `from_` parameters are required to update refund transactions." data-tooltip-position="top center">View Note</span>
from_zip | string | optional | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | optional | Two-letter ISO state code where the order shipped from.
from_city | string | optional | City where the order shipped from.
from_street | string | optional | Street address where the order shipped from.
to_country | string | optional | Two-letter ISO country code of the country where the refunded order shipped to.
to_zip | string | optional | Postal code where the refunded order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | optional | Two-letter ISO state code where the refunded order shipped to.
to_city | string | optional | City where the refunded order shipped to.
to_street | string | optional | Street address where the refunded order shipped to.
amount | long | optional | Total amount of the refunded order with shipping, **excluding sales tax** in dollars.
shipping | long | optional | Total amount of shipping for the refunded order in dollars.
sales_tax | long | optional | Total amount of sales tax collected for the refunded order in dollars.
customer_id | string | optional | Unique identifier of the given customer for exemptions.
line_items[][id] | string | optional | Unique identifier of the given line item.
line_items[][quantity] | integer | optional | Quantity for the item.
line_items[][product_identifier] | string | optional | Product identifier for the item.
line_items[][description] | string | optional | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | optional | Product tax code for the item. If omitted, the item will remain fully taxable.
line_items[][unit_price] | long | optional | Unit price for the item in dollars.
line_items[][discount] | long | optional | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | long | optional | Total sales tax collected (non-unit) for the item in dollars.

#### Notes

- *Either an address on file or `from_` parameters are required to update refund transactions.*

- *The `transaction_date` may be a date '2015-05-25', an ISO UTC date/time '2015-05-25T13:05:45', or an ISO date/time with zone offset '2015-05-25T13:05:45-05:00'.*

#### Response

Returns a `refund` JSON object with details of the updated refund transaction.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
transaction_id | string | Unique identifier of the given refund transaction.
user_id | integer | Unique identifier of the user who created the refund transaction.
transaction_date | datetime | The date/time the transaction was originally recorded.
from_country | string | Two-letter ISO country code of the country where the order shipped from.
from_zip | string | Postal code where the order shipped from (5-Digit ZIP or ZIP+4).
from_state | string | Two-letter ISO state code where the order shipped from.
from_city | string | City where the order shipped from.
from_street | string | Street address where the order shipped from.
to_country | string | Two-letter ISO country code of the country where the order shipped to.
to_zip | string | Postal code where the order shipped to (5-Digit ZIP or ZIP+4).
to_state | string | Two-letter ISO state code where the order shipped to.
to_city | string | City where the order shipped to.
to_street | string | Street address where the order shipped to.
amount | long | Total amount of the refunded order with shipping, **excluding sales tax**.
shipping | long | Total amount of shipping for the refunded order.
sales_tax | long | Total amount of sales tax collected for the refunded order.
line_items[][id] | string | Unique identifier of the given line item.
line_items[][quantity] | integer | Quantity for the item.
line_items[][product_identifier] | string | Product identifier for the item.
line_items[][description] | string  | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | Product tax code for the item.
line_items[][unit_price] | long | Unit price for the item in dollars.
line_items[][discount] | long | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | long | Total sales tax collected (non-unit) for the item in dollars.

### <span class="badge badge--delete">delete</span> Delete a refund transaction

> Definition

```ruby
client.delete_refund
```

```python
client.delete_refund
```

```javascript
client.deleteRefund();
```

```php?start_inline=1
$client->deleteRefund();
```

```csharp
client.DeleteRefund();
```

```java
client.deleteRefund();
```

```shell
DELETE https://api.taxjar.com/v2/transactions/refunds/:transaction_id
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

client.delete_refund('321')
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

client.delete_refund('321')
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.deleteRefund('321').then(res => {

});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$client->deleteRefund('321');
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var refund = client.DeleteRefund("321");
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.RefundResponse;

public class DeleteOrderExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            OrderResponse res = client.deleteRefund("321");
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/transactions/refunds/321 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -X DELETE
```

> Response Example

```json
{
  "refund": {
    "transaction_id": "321",
    "user_id": 10649,
    "transaction_date": null,
    "transaction_reference_id": null,
    "from_country": null,
    "from_zip": null,
    "from_state": null,
    "from_city": null,
    "from_street": null,
    "to_country": null,
    "to_zip": null,
    "to_state": null,
    "to_city": null,
    "to_street": null,
    "amount": null,
    "shipping": null,
    "sales_tax": null,
    "line_items": []
  }
}
```

```ruby
#<Taxjar::Refund:0x00000a @attrs={
  :transaction_id => "321",
  :user_id => 11836,
  :transaction_date => nil,
  :transaction_reference_id => nil,
  :from_country => nil,
  :from_zip => nil,
  :from_state => nil,
  :from_city => nil,
  :from_street => nil,
  :to_country => nil,
  :to_zip => nil,
  :to_state => nil,
  :to_city => nil,
  :to_street => nil,
  :amount => nil,
  :shipping => nil,
  :sales_tax => nil,
  :line_items => []
}>
```

```python
<TaxJarRefund {
  'from_state': None,
  'line_items': [],
  'user_id': 11836,
  'to_zip': None,
  'from_street': None,
  'from_city': None,
  'from_zip': None,
  'to_country': None,
  'shipping': None,
  'from_country': None,
  'to_city': None,
  'to_street': None,
  'transaction_date': None,
  'transaction_reference_id': None,
  'sales_tax': None,
  'amount': None,
  'transaction_id': '321',
  'to_state': None
}>
```

Deletes an existing refund transaction created through the API.

#### Request

DELETE https://api.taxjar.com/v2/transactions/refunds/:transaction_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
transaction_id | string | required | Unique identifier of the given refund transaction.

#### Response

Returns a `refund` JSON object with the deleted refund transaction identifiers.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
transaction_id | string | Unique identifier of the given refund transaction.
user_id | integer | Unique identifier of the user who created the refund transaction.

## Customers

Manage your exempt customers (wholesale, government, etc) for sales tax calculations, reporting, and filing in TaxJar. After creating a new customer, pass in the `customer_id` to our [tax](#taxes) and [transaction](#transactions) endpoints to fully exempt them from sales tax.

### <span class="badge badge--get">get</span> List customers

> Definition

```ruby
client.list_customers
```

```python
client.list_customers
```

```javascript
client.listCustomers();
```

```php?start_inline=1
$client->listCustomers();
```

```csharp
client.ListCustomers();
```

```java
client.listCustomers();
```

```shell
GET https://api.taxjar.com/v2/customers
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

customers = client.list_customers
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

customers = client.list_customers()
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$customers = $client->listCustomers();
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.listCustomers().then(res => {
  res.customers; // Array of customers
});
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var customers = client.ListCustomers();
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.OrdersResponse;
import java.util.HashMap;
import java.util.Map;

public class ListCustomersExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            CustomersResponse res = client.listCustomers();
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/customers \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"
```

> Response Example

```ruby
["123", "124", "125"]
```

```json
{
  "customers": [
    "123",
    "456"
  ]
}
```

Lists existing customers created through the API.

#### Request

GET https://api.taxjar.com/v2/customers

#### Response

Returns a `customers` JSON object with an array of customer IDs created through the API.

### <span class="badge badge--get">get</span> Show a customer

> Definition

```ruby
client.show_customer
```

```python
client.show_customer
```

```javascript
client.showCustomer();
```

```php?start_inline=1
$client->showCustomer();
```

```csharp
client.ShowCustomer();
```

```java
client.showCustomer();
```

```shell
GET https://api.taxjar.com/v2/customers/:customer_id
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

customer = client.show_customer('123')
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

customer = client.show_customer('123')
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$customer = $client->showCustomer('123');
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.showCustomer('123').then(res => {
  res.customer;
});
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var customer = client.ShowCustomer("123");
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.OrdersResponse;
import java.util.HashMap;
import java.util.Map;

public class ShowCustomerExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            CustomerResponse res = client.showCustomer("123");
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/customers/123 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"
```

> Response Example

```ruby
#<Taxjar::Customer @attrs={
  :customer_id => "123",
  :exemption_type => "wholesale",
  :exempt_regions => [
    [0] {
      :country => "US",
      :state => "FL"
    },
    [1] {
      :country => "US",
      :state => "PA"
    }
  ],
  :name => "Dunder Mifflin Paper Company",
  :country => "US",
  :state => "PA",
  :zip => "18504",
  :city => "Scranton",
  :street => "1725 Slough Avenue"
}>
```

```json
{
  "customer": {
    "customer_id": "123",
    "exemption_type": "wholesale",
    "exempt_regions": [
      {
        "country": "US",
        "state": "FL"
      },
      {
        "country": "US",
        "state": "PA"
      }
    ],
    "name": "Dunder Mifflin Paper Company",
    "country": "US",
    "state": "PA",
    "zip": "18504",
    "city": "Scranton",
    "street": "1725 Slough Avenue"
  }
}
```

Shows an existing customer created through the API.

#### Request

GET https://api.taxjar.com/v2/customers/:customer_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
customer_id | string | required | Unique identifier of the given customer.

#### Response

Returns a `customer` JSON object with details of a customer created through the API.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
customer_id | string | Unique identifier of the given customer.
exemption_type | string | Type of customer exemption: `wholesale`, `government`, `other`, or `non_exempt`.
exempt_regions[][country] | string | Two-letter ISO country code where the customer is exempt.
exempt_regions[][state] | string | Two-letter ISO state code where the customer is exempt.
name | string | Name of the customer.
country | string | Two-letter ISO country code of the customer's primary address.
state | string | Two-letter ISO state code of the customer's primary address.
zip | string | Postal code of the customer's primary address.
city | string | City of the customer's primary address.
street | string | Street address of the customer's primary address.

### <span class="badge badge--post">post</span> Create a customer

> Definition

```ruby
client.create_customer
```

```python
client.create_customer
```

```javascript
client.createCustomer();
```

```php?start_inline=1
$client->createCustomer();
```

```csharp
client.CreateCustomer();
```

```java
client.createCustomer();
```

```shell
POST https://api.taxjar.com/v2/customers
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

customer = client.create_customer({
  :customer_id => '123',
  :exemption_type => 'wholesale',
  :name => 'Dunder Mifflin Paper Company',
  :exempt_regions => [
    {
      :country => 'US',
      :state => 'FL'
    },
    {
      :country => 'US',
      :state => 'PA'
    }
  ],
  :country => 'US',
  :state => 'PA',
  :zip => '18504',
  :city => 'Scranton',
  :street => '1725 Slough Avenue'
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

customer = client.create_customer({
  'customer_id': '123',
  'exemption_type': 'wholesale',
  'name': 'Dunder Mifflin Paper Company',
  'exempt_regions': [
    {
      'country': 'US',
      'state': 'FL'
    },
    {
      'country': 'US',
      'state': 'PA'
    }
  ],
  'country': 'US',
  'state': 'PA',
  'zip': '18504',
  'city': 'Scranton',
  'street': '1725 Slough Avenue'
})
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$customer = $client->createCustomer([
  'customer_id' => '123',
  'exemption_type' => 'wholesale',
  'name' => 'Dunder Mifflin Paper Company',
  'exempt_regions' => [
    [
      'country' => 'US',
      'state' => 'FL'
    ],
    [
      'country' => 'US',
      'state' => 'PA'
    ]
  ],
  'country' => 'US',
  'state' => 'PA',
  'zip' => '18504',
  'city' => 'Scranton',
  'street' => '1725 Slough Avenue'
]);
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.createCustomer({
  customer_id: '123',
  exemption_type: 'wholesale',
  name: 'Dunder Mifflin Paper Company',
  exempt_regions: [
    {
      country: 'US',
      state: 'FL'
    },
    {
      country: 'US',
      state: 'PA'
    }
  ],
  country: 'US',
  state: 'PA',
  zip: '18504',
  city: 'Scranton',
  street: '1725 Slough Avenue'
}).then(res => {
  res.customer;
});
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var customer = client.CreateCustomer(new {
  customer_id = "123",
  exemption_type = "wholesale",
  name = "Dunder Mifflin Paper Company",
  exempt_regions = new[] {
    new {
      country = "US",
      state = "FL"
    },
    new {
      country = "US",
      state = "PA"
    }
  },
  country = "US",
  state = "PA",
  zip = "18504",
  city = "Scranton",
  street = "1725 Slough Avenue"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.OrdersResponse;
import java.util.HashMap;
import java.util.Map;

public class CreateCustomerExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("customer_id", "123");
            params.put("exemption_type", "wholesale");
            params.put("name", "Dunder Mifflin Paper Company");
            params.put("country", "US");
            params.put("state", "PA");
            params.put("zip", "18504");
            params.put("city", "Scranton");
            params.put("street", "1725 Slough Avenue");

            List<Map> exemptRegions = new ArrayList();
            Map<String, Object> exemptRegion = new HashMap<>();
            Map<String, Object> exemptRegion2 = new HashMap<>();

            exemptRegion.put("country", "US");
            exemptRegion.put("state", "FL");
            exemptRegions.add(exemptRegion);

            exemptRegion.put("country", "US");
            exemptRegion.put("state", "PA");
            exemptRegions.add(exemptRegion2);

            params.put("exempt_regions", exemptRegions);

            CustomerResponse res = client.createCustomer(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/customers \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_id": "123",
    "exemption_type": "wholesale",
    "name": "Dunder Mifflin Paper Company",
    "exempt_regions": [
      {
        "country": "US",
        "state": "FL"
      },
      {
        "country": "US",
        "state": "PA"
      }
    ],
    "country": "US",
    "state": "PA",
    "zip": "18504",
    "city": "Scranton",
    "street": "1725 Slough Avenue"
  }'
```

> Response Example

```ruby
#<Taxjar::Customer @attrs={
  :customer_id => "123",
  :exemption_type => "wholesale",
  :exempt_regions => [
    [0] {
      :country => "US",
      :state => "FL"
    },
    [1] {
      :country => "US",
      :state => "PA"
    }
  ],
  :name => "Dunder Mifflin Paper Company",
  :country => "US",
  :state => "PA",
  :zip => "18504",
  :city => "Scranton",
  :street => "1725 Slough Avenue"
}>
```

```json
{
  "customer": {
    "customer_id": "123",
    "exemption_type": "wholesale",
    "exempt_regions": [
      {
        "country": "US",
        "state": "FL"
      },
      {
        "country": "US",
        "state": "PA"
      }
    ],
    "name": "Dunder Mifflin Paper Company",
    "country": "US",
    "state": "PA",
    "zip": "18504",
    "city": "Scranton",
    "street": "1725 Slough Avenue"
  }
}
```

Creates a new customer.

#### Request

POST https://api.taxjar.com/v2/customers

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
customer_id | string | required | Unique identifier of the given customer.
exemption_type | string | required | Type of customer exemption: `wholesale`, `government`, `other`, or `non_exempt`.
exempt_regions[][country] | string | required | Two-letter ISO country code where the customer is exempt.
exempt_regions[][state] | string | required | Two-letter ISO state code where the customer is exempt.
name | string | required | Name of the customer.
country | string | optional | Two-letter ISO country code of the customer's primary address.
state | string | optional | Two-letter ISO state code of the customer's primary address.
zip | string | optional | Postal code of the customer's primary address.
city | string | optional | City of the customer's primary address.
street | string | optional | Street address of the customer's primary address.

#### Response

Returns a `customer` JSON object with details of the new customer.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
customer_id | string | Unique identifier of the given customer.
exemption_type | string | Type of customer exemption: `wholesale`, `government`, `other`, or `non_exempt`.
exempt_regions[][country] | string | Two-letter ISO country code where the customer is exempt.
exempt_regions[][state] | string | Two-letter ISO state code where the customer is exempt.
name | string | Name of the customer.
country | string | Two-letter ISO country code of the customer's primary address.
state | string | Two-letter ISO state code of the customer's primary address.
zip | string | Postal code of the customer's primary address.
city | string | City of the customer's primary address.
street | string | Street address of the customer's primary address.

### <span class="badge badge--put">put</span> Update a customer

> Definition

```ruby
client.update_customer
```

```python
client.update_customer
```

```javascript
client.updateCustomer();
```

```php?start_inline=1
$client->updateCustomer();
```

```csharp
client.UpdateCustomer();
```

```java
client.updateCustomer();
```

```shell
PUT https://api.taxjar.com/v2/customers/:customer_id
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

customer = client.update_customer({
  :customer_id => '123',
  :exemption_type => 'wholesale',
  :name => 'Sterling Cooper',
  :exempt_regions => [
    {
      :country => 'US',
      :state => 'NY'
    }
  ],
  :country => 'US',
  :state => 'NY',
  :zip => '10010',
  :city => 'New York',
  :street => '405 Madison Ave'
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

customer = client.update_customer({
  'customer_id': '123',
  'exemption_type': 'wholesale',
  'name': 'Sterling Cooper',
  'exempt_regions': [
    {
      'country': 'US',
      'state': 'NY'
    }
  ],
  'country': 'US',
  'state': 'NY',
  'zip': '10010',
  'city': 'New York',
  'street': '405 Madison Ave'
})
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$customer = $client->updateCustomer([
  'customer_id' => '123',
  'exemption_type' => 'wholesale',
  'name' => 'Sterling Cooper',
  'exempt_regions' => [
    [
      'country' => 'US',
      'state' => 'NY'
    ]
  ],
  'country' => 'US',
  'state' => 'NY',
  'zip' => '10010',
  'city' => 'New York',
  'street' => '405 Madison Ave'
]);
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.updateCustomer({
  customer_id: '123',
  exemption_type: 'wholesale',
  name: 'Sterling Cooper',
  exempt_regions: [
    {
      country: 'US',
      state: 'NY'
    }
  ],
  country: 'US',
  state: 'NY',
  zip: '10010',
  city: 'New York',
  street: '405 Madison Ave'
}).then(res => {
  res.customer;
});
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var customer = client.UpdateCustomer(new {
  customer_id = "123",
  exemption_type = "wholesale",
  name = "Sterling Cooper",
  exempt_regions = new[] {
    new {
      country = "US",
      state = "NY"
    }
  },
  country = "US",
  state = "NY",
  zip = "10010",
  city = "New York",
  street = "405 Madison Ave"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.OrdersResponse;
import java.util.HashMap;
import java.util.Map;

public class UpdateCustomerExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("customer_id", "123");
            params.put("exemption_type", "wholesale");
            params.put("name", "Sterling Cooper");
            params.put("country", "US");
            params.put("state", "NY");
            params.put("zip", "10010");
            params.put("city", "New York");
            params.put("street", "405 Madison Ave");

            List<Map> exemptRegions = new ArrayList();
            Map<String, Object> exemptRegion = new HashMap<>();

            exemptRegion.put("country", "US");
            exemptRegion.put("state", "NY");
            exemptRegions.add(exemptRegion);

            params.put("exempt_regions", exemptRegions);

            CustomerResponse res = client.updateCustomer(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/customers/123 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_id": "123",
    "exemption_type": "wholesale",
    "name": "Sterling Cooper",
    "exempt_regions": [
      {
        "country": "US",
        "state": "NY"
      }
    ],
    "country": "US",
    "state": "NY",
    "zip": "10010",
    "city": "New York",
    "street": "405 Madison Ave"
  }' \
  -X PUT
```

> Response Example

```ruby
#<Taxjar::Customer @attrs={
  :customer_id => "123",
  :exemption_type => "wholesale",
  :exempt_regions => [
    [0] {
      :country => "US",
      :state => "NY"
    }
  ],
  :name => "Sterling Cooper",
  :country => "US",
  :state => "NY",
  :zip => "10010",
  :city => "New York",
  :street => "405 Madison Ave"
}>
```

```json
{
  "customer": {
    "customer_id": "123",
    "exemption_type": "wholesale",
    "exempt_regions": [
      {
        "country": "US",
        "state": "NY"
      }
    ],
    "name": "Sterling Cooper",
    "country": "US",
    "state": "NY",
    "zip": "10010",
    "city": "New York",
    "street": "405 Madison Ave"
  }
}
```

Updates an existing customer created through the API.

#### Request

PUT https://api.taxjar.com/v2/customers/:customer_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
customer_id | string | required | Unique identifier of the given customer.
exemption_type | string | required | Type of customer exemption: `wholesale`, `government`, `other`, or `non_exempt`.
exempt_regions[][country] | string | required | Two-letter ISO country code where the customer is exempt.
exempt_regions[][state] | string | required | Two-letter ISO state code where the customer is exempt.
name | string | required | Name of the customer.
country | string | optional | Two-letter ISO country code of the customer's primary address.
state | string | optional | Two-letter ISO state code of the customer's primary address.
zip | string | optional | Postal code of the customer's primary address.
city | string | optional | City of the customer's primary address.
street | string | optional | Street address of the customer's primary address.

#### Response

Returns a `customer` JSON object with details of the updated customer.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
customer_id | string | Unique identifier of the given customer.
exemption_type | string | Type of customer exemption: `wholesale`, `government`, `other`, or `non_exempt`.
exempt_regions[][country] | string | Two-letter ISO country code where the customer is exempt.
exempt_regions[][state] | string | Two-letter ISO state code where the customer is exempt.
name | string | Name of the customer.
country | string | Two-letter ISO country code of the customer's primary address.
state | string | Two-letter ISO state code of the customer's primary address.
zip | string | Postal code of the customer's primary address.
city | string | City of the customer's primary address.
street | string | Street address of the customer's primary address.

### <span class="badge badge--delete">delete</span> Delete a customer

> Definition

```ruby
client.delete_customer
```

```python
client.delete_customer
```

```javascript
client.deleteCustomer();
```

```php?start_inline=1
$client->deleteCustomer();
```

```csharp
client.DeleteCustomer();
```

```java
client.deleteCustomer();
```

```shell
DELETE https://api.taxjar.com/v2/customers/:customer_id
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

customer = client.delete_customer('123')
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

customer = client.delete_customer('123')
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$customer = $client->deleteCustomer('123');
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.deleteCustomer('123').then(res => {
  res.customer;
});
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var customer = client.DeleteCustomer("123");
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.OrderResponse;

public class DeleteCustomerExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            CustomerResponse res = client.deleteCustomer("123");
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/customers/123 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -X DELETE
```

> Response Example

```ruby
#<Taxjar::Customer @attrs={
  :customer_id => "123",
  :exemption_type => "wholesale",
  :exempt_regions => [
    [0] {
      :country => "US",
      :state => "FL"
    },
    [1] {
      :country => "US",
      :state => "PA"
    }
  ],
  :name => "Dunder Mifflin Paper Company",
  :country => "US",
  :state => "PA",
  :zip => "18504",
  :city => "Scranton",
  :street => "1725 Slough Avenue"
}>
```

```json
{
  "customer": {
    "customer_id": "123",
    "exemption_type": "wholesale",
    "exempt_regions": [
      {
        "country": "US",
        "state": "FL"
      },
      {
        "country": "US",
        "state": "PA"
      }
    ],
    "name": "Dunder Mifflin Paper Company",
    "country": "US",
    "state": "PA",
    "zip": "18504",
    "city": "Scranton",
    "street": "1725 Slough Avenue"
  }
}
```

Deletes an existing customer created through the API.

#### Request

DELETE https://api.taxjar.com/v2/customers/:customer_id

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
customer_id | string | required | Unique identifier of the given customer.

#### Response

Returns a `customer` JSON object with the deleted customer identifiers.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
customer_id | string | Unique identifier of the given customer.

## Nexus

### <span class="badge badge--get">get</span> List nexus regions

> Definition

```ruby
client.nexus_regions
```

```python
client.nexus_regions
```

```javascript
client.nexusRegions();
```

```php?start_inline=1
$client->nexusRegions();
```

```csharp
client.NexusRegions();
```

```java
client.nexusRegions();
```

```shell
GET https://api.taxjar.com/v2/nexus/regions
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

nexus_regions = client.nexus_regions
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

nexus_regions = client.nexus_regions()
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.nexusRegions().then(res => {
  res.regions; // Array of nexus regions
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$nexus_regions = $client->nexusRegions();
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var nexusRegions = client.NexusRegions();
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.nexus.RegionResponse;

public class NexusRegionsExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            RegionResponse res = client.nexusRegions();
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/nexus/regions \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"
```

> Response Example

```json
{
  "regions": [
    {
      "country_code": "US",
      "country": "United States",
      "region_code": "CA",
      "region": "California"
    },
    {
      "country_code": "US",
      "country": "United States",
      "region_code": "NY",
      "region": "New York"
    },
    {
      "country_code": "US",
      "country": "United States",
      "region_code": "WA",
      "region": "Washington"
    }
  ]
}
```

```ruby
[
  #<Taxjar::NexusRegion:0x00000a @attrs={
    :country_code => "US",
    :country => "United States",
    :region_code => "CA",
    :region => "California"
  }>,
  #<Taxjar::NexusRegion:0x00000a @attrs={
    :country_code => "US",
    :country => "United States",
    :region_code => "NY",
    :region => "New York"
  }>,
  #<Taxjar::NexusRegion:0x00000a @attrs={
    :country_code => "US",
    :country => "United States",
    :region_code => "WA",
    :region => "Washington"
  }>
]
```

```python
[
  <TaxJarRegion {
    'country_code': 'US',
    'country': 'United States',
    'region_code': 'CA',
    'region': 'California'
  }>,
  <TaxJarRegion {
    'country_code': 'US',
    'country': 'United States',
    'region_code': 'NY',
    'region': 'New York'
  }>,
  <TaxJarRegion {
    'country_code': 'US',
    'country': 'United States',
    'region_code': 'WA',
    'region': 'Washington'
  }>
]
```

Lists existing nexus locations for a TaxJar account.

#### Request

GET https://api.taxjar.com/v2/nexus/regions

#### Response

Returns a `regions` JSON object with an array of nexus regions sorted alphabetically.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
country_code | string | Two-letter ISO country code for nexus region.
country | string | Country name for nexus region.
region_code | string | Two-letter ISO region code for nexus region.
region | string | Region name for nexus region.

## Validations

### <span class="badge badge--get">get</span> Validate a VAT number

Validates an existing VAT identification number against [VIES](http://ec.europa.eu/taxation_customs/vies/).

> Definition

```ruby
client.validate
```

```python
client.validate
```

```javascript
client.validate();
```

```php?start_inline=1
$client->validate();
```

```csharp
client.Validate();
```

```java
client.validate();
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

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

validation = client.validate({
  'vat': 'FR40303265045'
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.validate({
  vat: 'FR40303265045'
}).then(res => {
  res.validation; // Validation object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$validation = $client->validate([
  'vat' => 'FR40303265045'
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var validation = client.Validate(new {
  vat = "FR40303265045"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.validations.ValidationResponse;
import java.util.HashMap;
import java.util.Map;

public class ValidateExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, String> params = new HashMap<>();
            params.put("vat", "FR40303265045");

            ValidationResponse res = client.validate(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl -G https://api.taxjar.com/v2/validation \
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
#<Taxjar::Validation:0x00000a @attrs={
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

```python
<TaxJarValidation {
  'valid': True,
  'exists': True,
  'vies_available': True,
  'vies_response': <TaxJarViesResponse {
    'country_code': 'FR',
    'vat_number': '40303265045',
    'request_date': '2016-02-10',
    'valid': True,
    'name': 'SA SODIMAS',
    'address': "11 RUE AMPERE\n26600 PONT DE L ISERE"
  }>
}>
```

#### Request

GET https://api.taxjar.com/v2/validation

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
vat | string | required | VAT identification number to validate. Country code should precede number, e.g. GB980780684.

#### Response

Returns a `validation` JSON object declaring if the VAT number is valid and exists along with data returned by VIES.

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

```python
client.summary_rates
```

```javascript
client.summaryRates();
```

```php?start_inline=1
$client->summaryRates();
```

```csharp
client.SummaryRates();
```

```java
client.summaryRates();
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

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

summarized_rates = client.summary_rates()
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.summaryRates().then(res => {
  res.summary_rates; // Array of summarized rates
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$summarized_rates = $client->summaryRates();
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var summaryRates = client.SummaryRates();
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.summarized_rates.SummaryRateResponse;

public class SummarizedRatesExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            SummaryRateResponse res = client.summaryRates();
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/summary_rates \
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
  #<Taxjar::SummaryRate:0x00000a @attrs={
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
  }>,
  #<Taxjar::SummaryRate:0x00000a @attrs={
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
  }>,
  #<Taxjar::SummaryRate:0x00000a @attrs={
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
  }>
]
```

```python
[
  <TaxJarSummaryRate {
    'average_rate': {
      'rate': 0.0827,
      'label': 'Tax'
    },
    'region_code': 'CA',
    'minimum_rate': {
      'rate': 0.065,
      'label': 'State Tax'
    },
    'country': 'US',
    'region': 'California',
    'country_code': 'US'
  }>,
  <TaxJarSummaryRate {
    'average_rate': {
      'rate': 0.12,
      'label': 'PST'
    },
    'region_code': 'BC',
    'minimum_rate': {
      'rate': 0.05,
      'label': 'GST'
    },
    'country': 'Canada',
    'region': 'British Columbia',
    'country_code': 'CA'
  }>,
  <TaxJarSummaryRate {
    'average_rate': {
      'rate': 0.2,
      'label': 'VAT'
    },
    'region_code': None,
    'minimum_rate': {
      'rate': 0.2,
      'label': 'VAT'
    },
    'country': 'United Kingdom',
    'region': None,
    'country_code': 'UK'
  }>
]
```

#### Request

GET https://api.taxjar.com/v2/summary_rates

#### Response

Returns a `summary_rates` JSON object with an array of summarized rates for each region/state.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
country_code | string | Country code for summarized region.
country | string | Country name for summarized region.
region_code | string | Region code for summarized region.
region | string | Region name for summarized region.
minimum_rate | object | Region/state-only sales tax rate with label.
average_rate | object | Average rate for region/state and local sales tax across all postal codes in the summarized region with label.
