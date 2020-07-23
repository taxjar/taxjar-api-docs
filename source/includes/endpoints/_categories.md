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

```go
client.Categories()
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

```go
package main

import (
    "fmt"

    "github.com/taxjar/taxjar-go"
)

func main() {
    client := taxjar.NewClient(taxjar.Config{
        APIKey: "9e0cd62a22f451701f29c3bde214",
    })

    res, err := client.Categories()
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Categories)
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
      "name": "Installation Services",
      "product_tax_code": "10040",
      "description": "Installation services separately stated from sales of tangible personal property."
    },
    {
      "name": "General Services",
      "product_tax_code": "19000",
      "description": "Miscellaneous services which are not subject to a service-specific tax levy. This category will only treat services as taxable if the jurisdiction taxes services generally."
    },
    {
      "name": "Advertising Services",
      "product_tax_code": "19001",
      "description": "Services rendered for advertising which do not include the exchange of tangible personal property."
    },
    {
      "name": "Parking Services",
      "product_tax_code": "19002",
      "description": "Service of providing usage of a parking space."
    },
    {
      "name": "Admission Services",
      "product_tax_code": "19003",
      "description": "Admission charges associated with entry to an event."
    },
    {
      "name": "Training Services",
      "product_tax_code": "19004",
      "description": "Services provided to educate users on the proper use of a product."
    },
    {
      "name": "Professional Services",
      "product_tax_code": "19005",
      "description": "Professional services which are not subject to a service-specific tax levy."
    },
    {
      "name": "Dry Cleaning Services",
      "product_tax_code": "19006",
      "description": "Services provided in the cleaning of clothing and/or fabrics."
    },
    {
      "name": "Repair Services",
      "product_tax_code": "19007",
      "description": "Services provided to restore tangible personal property to working order or optimal functionality."
    },
    {
      "name": "Hairdressing Services",
      "product_tax_code": "19008",
      "description": "Services provided to cut and style human hair."
    },
    {
      "name": "Printing Services",
      "product_tax_code": "19009",
      "description": "Services provided to apply graphics and/or text to paper or other substrates which do not involve an exchange of tangible personal property."
    },
    {
      "name": "Clothing",
      "product_tax_code": "20010",
      "description": "All human wearing apparel suitable for general use"
    },
    {
      "name": "Clothing - Swimwear",
      "product_tax_code": "20041",
      "description": "Bathing suits and swim suits"
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

```go
taxjar.CategoriesResponse{
    Categories: []taxjar.Category{
        {
            Name:           "Digital Goods",
            ProductTaxCode: "31000",
            Description:    "Digital products transferred electronically, meaning obtained by the purchaser by means other than tangible storage media.",
        },
        {
            Name:           "Clothing",
            ProductTaxCode: "20010",
            Description:    "All human wearing apparel suitable for general use",
        },
        {
            Name:           "Non-Prescription",
            ProductTaxCode: "51010",
            Description:    "Drugs for human use without a prescription",
        },
    },
}
```

Lists all tax categories.

#### Request

GET https://api.taxjar.com/v2/categories

#### Response

Returns a `categories` JSON object with an array of product categories and corresponding tax codes. The following categories are currently supported:

<div class="datatable"></div>

| Category | Code | Countries | Description |
|----------|------|:---------:|-------------|


#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
product_tax_code | string | Tax code of the given product category.
name | string | Name of the given product category.
description | string | Description of the given product category.
