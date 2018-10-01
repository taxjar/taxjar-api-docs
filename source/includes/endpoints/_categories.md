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
