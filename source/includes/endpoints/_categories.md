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
|---------------------------|-------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|----------------------------------------------------------------------------------------------------------------------------|
| Installation Services | 10040 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Installation services separately stated from sales of tangible personal property. |
| General Services | 19000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Miscellaneous services which are not subject to a service-specific tax levy. This category will only treat services as taxable if the jurisdiction taxes services generally. |
| Advertising Services | 19001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Services rendered for advertising which do not include the exchange of tangible personal property. |
| Parking Services | 19002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Service of providing usage of a parking space. |
| Admission Services | 19003 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Admission charges associated with entry to an event. |
| Training Services | 19004 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Services provided to educate users on the proper use of a product. |
| Professional Services | 19005 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Professional services which are not subject to a service-specific tax levy. |
| Dry Cleaning Services | 19006 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Services provided in the cleaning of clothing and/or fabrics. |
| Repair Services | 19007 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Services provided to restore tangible personal property to working order or optimal functionality. |
| Hairdressing Services | 19008 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Services provided to cut and style human hair. |
| Printing Services | 19009 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Services provided to apply graphics and/or text to paper or other substrates which do not involve an exchange of tangible personal property. |
| Clothing | 20010 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | All human wearing apparel suitable for general use. |
| Clothing - Swimwear | 20041 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Bathing suits and swim suits. |
| Software as a Service | 30070 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Pre-written software, delivered electronically, but access remotely. |
| Digital Goods | 31000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-eu" data-tooltip="European Union" data-tooltip-position="top center"></span> | Digital products transferred electronically, meaning obtained by the purchaser by means other than tangible storage media. |
| Candy | 40010 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Candy and similar items |
| Supplements | 40020 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-food dietary supplements. |
| Food & Groceries | 40030 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-eu" data-tooltip="European Union" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-au" data-tooltip="Australia" data-tooltip-position="top center"></span> | Food for humans consumption, unprepared. |
| Soft Drinks | 40050 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Soft drinks, soda, and other similar beverages. Does not include fruit juices and water. |
| Bottled Water | 40060 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Bottled, drinkable water for human consumption. |
| Prepared Foods | 41000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Foods intended for on-site consumption. Ex. Restaurant meals. |
| Non-Prescription | 51010 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-eu" data-tooltip="European Union" data-tooltip-position="top center"></span> | Drugs for human use without a prescription. |
| Prescription | 51020 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-eu" data-tooltip="European Union" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-au" data-tooltip="Australia" data-tooltip-position="top center"></span> | Drugs for human use with a prescription. |
| Books | 81100 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-eu" data-tooltip="European Union" data-tooltip-position="top center"></span> | Books, printed. |
| Textbook | 81110 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Textbooks, printed. |
| Religious Books | 81120 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Religious books and manuals, printed. |
| Magazines & Subscriptions | 81300 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-eu" data-tooltip="European Union" data-tooltip-position="top center"></span> | Periodicals, printed, sold by subscription. |
| Magazine | 81310 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> <span class="flag-icon flag-icon-eu" data-tooltip="European Union" data-tooltip-position="top center"></span> | Periodicals, printed, sold individually. |
| Software - Prewritten, electronic delivery | 43230000A1200 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software - Prewritten & delivered electronically |
| Software - Prewritten, load and leave delivery | 43230000A1300 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software - Prewritten & delivered by load and leave |
| Software - Prewritten, delivered by digital keycode printed on tangible media | 43230000A1400 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software - Prewritten & delivered by digital keycode printed on tangible media |
| Software - Custom, tangible media | 43230000A2100 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software - Custom & delivered on tangible media |
| Software - Custom, electronic delivery | 43230000A2200 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software - Custom & delivered electronically |
| Software - Custom, load and leave delivery | 43230000A2300 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software - Custom & delivered by load & leave |
| Electronic publications and music - Delivered electronically with permanent rights of usage | 55111500A1210 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Electronic publications and music - Delivered electronically with permanent rights of usage |
| Electronic publications and music - Delivered electronically with less than permanent rights of usage | 55111500A1220 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Electronic publications and music - Delivered electronically with less than permanent rights of usage |
| Electronic publications and music - Streamed | 55111500A1500 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Electronic publications and music - Streamed |
| Electronic software documentation or user manuals - Prewritten, electronic delivery | 55111601A1200 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Electronic software documentation or user manuals - For prewritten software & delivered electronically |
| Electronic software documentation or user manuals - Prewritten, load and leave delivery | 55111601A1300 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Electronic software documentation or user manuals - For prewritten software & delivered by load and leave |
| Electronic software documentation or user manuals - Custom, tangible media | 55111601A2100 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Electronic software documentation or user manuals - For custom software & delivered on tangible media |
| Electronic software documentation or user manuals - Custom, electronic delivery | 55111601A2200 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Electronic software documentation or user manuals - For custom software & delivered electronically |
| Electronic software documentation or user manuals - Custom, load and leave delivery | 55111601A2300 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Electronic software documentation or user manuals - For custom software & delivered by load and leave |
| Proprietary or licensed systems maintenance or support | 81111805A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Proprietary or licensed systems maintenance or support |
| Cloud-based software as a service (SaaS) | 81162000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Cloud-based software as a service (SaaS) |
| Software - Prewritten, tangible media | 43230000A1100 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software - Prewritten & delivered on tangible media |
| Electronic software documentation or user manuals - Prewritten, tangible media | 55111601A1100 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Electronic software documentation or user manuals - For prewritten software & delivered on tangible media |
| Co location service | 81111814A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Co location service |
| Data center services | 81112003A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Data center services |
| Disaster recovery services | 81112004A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Disaster recovery services |
| Mainframe software applications design | 81111501A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Mainframe software applications design |
| Personal computer PC application design | 81111502A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Personal computer PC application design |
| Systems integration design | 81111503A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Systems integration design |
| Application programming services | 81111504A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Application programming services |
| Operating system programming services | 81111505A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Operating system programming services |
| Client or server programming services | 81111506A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Client or server programming services |
| ERP or database applications programming services | 81111507A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* ERP or database applications programming services |
| Application implementation services | 81111508A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Application implementation services |
| Internet or intranet client application development services | 81111509A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Internet or intranet client application development services |
| Internet or intranet server application development services | 81111510A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Internet or intranet server application development services |
| System or application programming management service | 81111511A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* System or application programming management service |
| Computer graphics service | 81111512A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Computer graphics service |
| Internet cloud storage service | 81111513A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Internet cloud storage service |
| Computer programmers | 81111600A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Computer programmers |
| Wide area network communications design | 81111701A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Wide area network communications design |
| Local area network communications design | 81111702A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Local area network communications design |
| Electronic data interchange EDI design | 81111703A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Electronic data interchange EDI design |
| Database design | 81111704A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Database design |
| Systems architecture | 81111705A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Systems architecture |
| Network planning services | 81111706A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Network planning services |
| Systems planning services | 81111707A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Systems planning services |
| Demining geographical or geospatial information system GIS | 81111709A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Demining geographical or geospatial information system GIS |
| Information management system for mine action IMSMA | 81111710A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Information management system for mine action IMSMA |
| Computer or network or internet security | 81111801A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Computer or network or internet security |
| Mainframe administration services | 81111802A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Mainframe administration services |
| Local area network LAN maintenance or support | 81111803A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Local area network LAN maintenance or support |
| Wide area network WAN maintenance or support | 81111804A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Wide area network WAN maintenance or support |
| Database analysis service | 81111806A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Database analysis service |
| System analysis service | 81111808A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* System analysis service |
| System installation service | 81111809A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* System installation service |
| Software coding service | 81111810A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software coding service |
| Technical support or help desk services | 81111811A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Technical support or help desk services |
| Quality assurance services | 81111819A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Quality assurance services |
| System usability services | 81111820A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* System usability services |
| Database information retrieval | 81111901A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Database information retrieval |
| Online database information retrieval service | 81111902A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Online database information retrieval service |
| Online data processing service | 81112001A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Online data processing service |
| Data processing or preparation services | 81112002A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Data processing or preparation services |
| Document scanning service | 81112005A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Document scanning service |
| Data storage service | 81112006A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Data storage service |
| Content or data standardization services | 81112007A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Content or data standardization services |
| Content or data classification services | 81112009A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Content or data classification services |
| Data conversion service | 81112010A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Data conversion service |
| Software maintenance and support - Mandatory, prewritten, tangible media | 81112200A1110 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Mandatory maintenance and support charges for prewritten software including items delivered on tangible media |
| Software maintenance and support - Optional, prewritten, tangible media (incl. updates/upgrades) | 81112200A1121 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Optional maintenance and support charges for prewritten software including items delivered on tangible media (includes software updates/upgrades) |
| Software maintenance and support - Optional, prewritten, tangible media (support services only) | 81112200A1122 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Optional maintenance and support charges for prewritten software including items delivered on tangible media (includes support services only - no updates/upgrades) |
| Software maintenance and support - Mandatory, prewritten, electronic delivery | 81112200A1210 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Mandatory maintenance and support charges for prewritten software including items delivered electronically |
| Software maintenance and support - Optional, prewritten, electronic delivery (incl. updates/upgrades) | 81112200A1221 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Optional maintenance and support charges for prewritten software including items delivered electronically (includes software updates/upgrades) |
| Software maintenance and support - Optional, prewritten, electronic delivery (support services only) | 81112200A1222 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Optional maintenance and support charges for prewritten software including items delivered electronically (includes support services only - no updates/upgrades) |
| Software maintenance and support - Mandatory, prewritten, load and leave delivery | 81112200A1310 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Mandatory maintenance and support charges for prewritten software including items delivered by load and leave |
| Software maintenance and support - Optional, prewritten, load and leave delivery (incl. updates/upgrades) | 81112200A1321 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Optional maintenance and support charges for prewritten software including items delivered by load and leave (includes software updates/upgrades) |
| Software maintenance and support - Optional, prewritten, load and leave delivery (support services only) | 81112200A1322 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Optional maintenance and support charges for prewritten software including items delivered by load and leave (includes support services only - no updates/upgrades) |
| Software maintenance and support - Mandatory, custom, tangible media | 81112200A2110 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Mandatory maintenance and support charges for custom software including items delivered on tangible media |
| Software maintenance and support - Optional, custom, tangible media (incl. updates/upgrades) | 81112200A2121 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Optional maintenance and support charges for custom software including items delivered on tangible media (includes software updates/upgrades) |
| Software maintenance and support - Optional, custom, tangible media (support services only) | 81112200A2122 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Optional maintenance and support charges for custom software including items delivered on tangible media (includes support services only - no updates/upgrades) |
| Software maintenance and support - Mandatory, custom, electronic delivery | 81112200A2210 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Mandatory maintenance and support charges for custom software including items delivered electronically |
| Software maintenance and support - Optional, custom, electronic delivery (incl. updates/upgrades) | 81112200A2221 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Optional maintenance and support charges for custom software including items delivered electronically (includes software updates/upgrades) |
| Software maintenance and support - Optional, custom, electronic delivery (support services only) | 81112200A2222 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Optional maintenance and support charges for custom software including items delivered electronically (includes support services only - no updates/upgrades) |
| Software maintenance and support - Mandatory, custom, load and leave delivery | 81112200A2310 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Mandatory maintenance and support charges for custom software including items delivered by load and leave |
| Software maintenance and support - Optional, custom, load and leave delivery (incl. updates/upgrades) | 81112200A2321 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Optional maintenance and support charges for custom software including items delivered by load and leave (includes software updates/upgrades) |
| Software maintenance and support - Optional, custom, load and leave delivery (support services only) | 81112200A2322 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Software maintenance and support - Optional maintenance and support charges for custom software including items delivered by load and leave (includes support services only - no updates/upgrades) |
| Cloud-based platform as a service (PaaS) | 81162100A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Cloud-based platform as a service (PaaS) - Personal Use |
| Cloud-based infrastructure as a service (IaaS) | 81162200A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Cloud-based infrastructure as a service (IaaS) - Personal Use |
| Hardware as a service (HaaS) | 81161900A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Hardware as a service (HaaS) |
| Cloud-based business process as a service | 81162300A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Cloud-based business process as a service |
| Cloud-based platform as a service (PaaS) - Business Use | 81162100A9000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Cloud-based platform as a service (PaaS) - Business Use |
| Cloud-based infrastructure as a service (IaaS) - Business Use | 81162200A9000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Cloud-based infrastructure as a service (IaaS) - Business Use |
| Cloud-based business process as a service - Business Use | 81162300A9000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Cloud-based business process as a service - Business Use |
| Cloud-based software as a service (SaaS) - Business Use | 81162000A9000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Cloud-based software as a service (SaaS) - Business Use |
| Gift Cards | 14111803A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Gift Cards |
| Clothing - Lab coats | 46181532A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Lab coats |
| Clothing - Waterproof jacket or raincoat | 46181543A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Waterproof jacket or raincoat |
| Clothing - Waterproof cap | 46181546A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Waterproof cap |
| Clothing - Safety boots | 46181604A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Safety boots |
| Clothing - Safety shoes | 46181605A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Safety shoes |
| Clothing - Protective clogs | 46181607A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective clogs |
| Clothing - Protective sandals | 46181608A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective sandals |
| Clothing - Protective insole | 46181609A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective insole |
| Clothing - Insulated cold weather shoe | 46181610A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Insulated cold weather shoe |
| Clothing - Waterproof boot | 46181611A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Waterproof boot |
| Clothing - Military boot | 46181612A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Military boot |
| Clothing - Mountain climbing boot | 46181613A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Mountain climbing boot |
| Clothing - Poncho | 53101806A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Poncho |
| Clothing - Undershirts | 53102301A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Undershirts |
| Clothing - Slips | 53102302A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Slips |
| Clothing - Underpants | 53102303A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Underpants |
| Clothing - Brassieres | 53102304A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Brassieres |
| Clothing - Infant diapers | 53102305A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Infant diapers |
| Clothing - Adult diapers | 53102306A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Adult diapers |
| Clothing - Body shaping garments | 53102307A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Body shaping garments |
| Clothing - Diaper liners | 53102308A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Diaper liners |
| Clothing - Disposable youth training pants | 53102311A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Disposable youth training pants |
| Clothing - Stockings | 53102401A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Stockings |
| Clothing - Socks | 53102402A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Socks |
| Clothing - Panty hose | 53102403A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Panty hose |
| Clothing - Tights | 53102404A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Tights |
| Clothing - Belts or suspenders | 53102501A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Belts or suspenders |
| Clothing - Ties or scarves or mufflers | 53102502A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Ties or scarves or mufflers |
| Clothing - Hats | 53102503A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Hats |
| Clothing - Gloves or mittens | 53102504A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Gloves or mittens |
| Clothing - Armbands | 53102508A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Armbands |
| Clothing - Garters | 53102509A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Garters |
| Clothing - Bandannas | 53102511A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Bandannas |
| Clothing - Caps | 53102516A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Caps |
| Clothing - Bib | 53102521A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Bib |
| Clothing - Bath robes | 53102606A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Bath robes |
| Clothing - Infant swaddles or buntings or receiving blankets | 53102608A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Infant swaddles or buntings or receiving blankets |
| Clothing - Disposable work coat | 53103201A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Disposable work coat |
| Clothing - Shoelaces | 53112002A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Shoelaces |
| Clothing - Heel pads | 53112003A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Heel pads |
| Clothing - Slacks or trousers or shorts | 53101500A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Slacks or trousers or shorts |
| Clothing - Shirts | 53101600A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Shirts |
| Clothing - Sweaters | 53101700A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Sweaters |
| Clothing - Coats or jackets | 53101800A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Coats or jackets |
| Clothing - Suits | 53101900A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Suits |
| Clothing - Dresses or skirts or saris or kimonos | 53102000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Dresses or skirts or saris or kimonos |
| Clothing - Overalls or coveralls | 53102100A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Overalls or coveralls |
| Clothing - Folkloric clothing | 53102200A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Folkloric clothing |
| Clothing - Pajamas or nightshirts or robes | 53102600A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Pajamas or nightshirts or robes |
| Clothing - Athletic wear | 53102900A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Athletic wear |
| Clothing - TShirts | 53103000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - TShirts |
| Clothing - Vest or waistcoats | 53103100A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Vest or waistcoats |
| Clothing - Boots | 53111500A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Boots |
| Clothing - Shoes | 53111600A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Shoes |
| Clothing - Slippers | 53111700A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Slippers |
| Clothing - Sandals | 53111800A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Sandals |
| Clothing - Athletic footwear | 53111900A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Athletic footwear |
| Clothing - Overshoes | 53112000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Overshoes |
| Clothing - Swimwear | 53102800A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Swimwear |
| Clothing - Sweat bands | 53102506A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Sweat bands |
| Clothing - Tuxedo or Formalwear | 53101801A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Tuxedo or Formalwear |
| Clothing - Formal Dress | 53101801A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Formal Dress |
| Clothing - Prom Dress | 53101801A0003 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Prom Dress |
| Clothing - Bridal Gown | 53101801A0004 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Bridal Gown |
| Clothing - Protective aprons | 46181501A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective aprons |
| Clothing - Bullet proof vests | 46181502A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Bullet proof vests |
| Clothing - Protective coveralls | 46181503A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective coveralls |
| Clothing - Protective gloves | 46181504A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective gloves |
| Clothing - Protective knee pads | 46181505A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective knee pads |
| Clothing - Protective ponchos | 46181506A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective ponchos |
| Clothing - Safety vests | 46181507A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Safety vests |
| Clothing - Fire retardant apparel | 46181508A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Fire retardant apparel |
| Clothing - Hazardous material protective apparel | 46181509A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Hazardous material protective apparel |
| Clothing - Cleanroom apparel | 46181512A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Cleanroom apparel |
| Clothing - Elbow protectors | 46181514A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Elbow protectors |
| Clothing - Safety sleeves | 46181516A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Safety sleeves |
| Clothing - Insulated or flotation suits | 46181517A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Insulated or flotation suits |
| Clothing - Heat resistant clothing | 46181518A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Heat resistant clothing |
| Clothing - Leg protectors | 46181520A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Leg protectors |
| Clothing - Safety hoods | 46181522A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Safety hoods |
| Clothing - Protective shirts | 46181526A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective shirts |
| Clothing - Protective pants | 46181527A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective pants |
| Clothing - Protective frock | 46181528A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective frock |
| Clothing - Insulated clothing for cold environments | 46181529A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Insulated clothing for cold environments |
| Clothing - Protective finger cots | 46181530A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective finger cots |
| Clothing - Reflective apparel or accessories | 46181531A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Reflective apparel or accessories |
| Clothing - Protective coats | 46181533A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective coats |
| Clothing - Protective wristbands | 46181534A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective wristbands |
| Clothing - Protective socks or hosiery | 46181535A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective socks or hosiery |
| Clothing - Anti cut gloves | 46181536A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Anti cut gloves |
| Clothing - Insulated gloves | 46181537A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Insulated gloves |
| Clothing - Thermal gloves | 46181538A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Thermal gloves |
| Clothing - Anti vibratory gloves | 46181539A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Anti vibratory gloves |
| Clothing - Welder gloves | 46181540A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Welder gloves |
| Clothing - Chemical resistant gloves | 46181541A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Chemical resistant gloves |
| Clothing - Protective mittens | 46181542A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective mittens |
| Clothing - Waterproof trousers or pants | 46181544A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Waterproof trousers or pants |
| Clothing - Waterproof suit | 46181545A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Waterproof suit |
| Clothing - Waterproof cap cover | 46181547A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Waterproof cap cover |
| Clothing - Welder bib | 46181548A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Welder bib |
| Clothing - Neck gaitor | 46181549A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Neck gaitor |
| Clothing - Protective scarf | 46181550A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective scarf |
| Clothing - Protective mesh jacket | 46181551A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective mesh jacket |
| Clothing - Protective wear dispenser | 46181553A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective wear dispenser |
| Clothing - Cooling vest | 46181554A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Cooling vest |
| Clothing - Fire retardant footwear | 46181601A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Fire retardant footwear |
| Clothing - Hazardous material protective footwear | 46181602A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Hazardous material protective footwear |
| Clothing - Cleanroom footwear | 46181603A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Cleanroom footwear |
| Clothing - Footwear covers | 46181606A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Footwear covers |
| Clothing - Hard hats | 46181701A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Hard hats |
| Clothing - Facial shields | 46181702A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Facial shields |
| Clothing - Welding masks | 46181703A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Welding masks |
| Clothing - Safety helmets | 46181704A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Safety helmets |
| Clothing - Motorcycle helmets | 46181705A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Motorcycle helmets |
| Clothing - Helmet parts or accessories | 46181706A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Helmet parts or accessories |
| Clothing - Facial shields parts or accessories | 46181707A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Facial shields parts or accessories |
| Clothing - Protective hair net | 46181708A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective hair net |
| Clothing - Face protection kit | 46181709A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Face protection kit |
| Clothing - Protective hood | 46181710A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective hood |
| Clothing - Welders helmet | 46181711A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Welders helmet |
| Clothing - Safety glasses | 46181802A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Safety glasses |
| Clothing - Eye shields | 46181803A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Eye shields |
| Clothing - Goggles | 46181804A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Goggles |
| Clothing - Goggle protective covers | 46181808A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Goggle protective covers |
| Clothing - Eye shield garters | 46181809A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Eye shield garters |
| Clothing - Protective lens | 46181811A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Protective lens |
| Clothing - Baseball batting gloves | 49211606A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Baseball batting gloves |
| Clothing - Bowling gloves | 49211606A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Bowling gloves |
| Clothing - Boxing gloves | 49171600A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Boxing gloves |
| Clothing - Football receiver gloves | 49211606A0004 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Football receiver gloves |
| Clothing - Swim goggles or swim fins | 49141606A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Swim goggles or swim fins |
| Clothing - Life vests or preservers  | 46161604A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Life vests or preservers  |
| Clothing - Ice Skates | 49151602A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Ice Skates |
| Clothing - Roller skates or roller blades | 49221509A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Roller skates or roller blades |
| Clothing - Shin guards | 49161525A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Shin guards |
| Clothing - Mouth guards | 42152402A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Mouth guards |
| Clothing - Shoulder pads for sports | 46181506A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Shoulder pads for sports |
| Clothing - Wetsuit | 49141506A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Wetsuit |
| Clothing - Golf gloves | 49211606A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Golf gloves |
| Clothing - Ballet or tap shoes | 53111900A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Ballet or tap shoes |
| Clothing - Cleated or spiked shoes | 53111900A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Cleated or spiked shoes |
| Clothing - Bowling shoes | 53111900A0003 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Bowling shoes |
| Clothing - Golf shoes | 53111900A0004 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Golf shoes |
| Clothing - Ski boots | 53111900A0005 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Ski boots |
| Clothing - Athletic supporter | 49161517A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Athletic supporter |
| Clothing - Chevrons | 53102518A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Chevrons |
| Clothing - Military uniforms | 53102701A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Military uniforms |
| Clothing - Customs uniforms | 53102702A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Customs uniforms |
| Clothing - Police uniforms | 53102703A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Police uniforms |
| Clothing - Institutional food preparation or service attire | 53102704A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Institutional food preparation or service attire |
| Clothing - School uniforms | 53102705A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - School uniforms |
| Clothing - Security uniforms | 53102706A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Security uniforms |
| Clothing - Doctors coat | 53102707A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Doctors coat |
| Clothing - Nurses uniforms | 53102708A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Nurses uniforms |
| Clothing - Ambulance officers uniforms | 53102709A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Ambulance officers uniforms |
| Clothing - Corporate uniforms | 53102710A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Corporate uniforms |
| Clothing - Salon smocks | 53102711A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Salon smocks |
| Clothing - Paramedic uniforms | 53102712A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Paramedic uniforms |
| Clothing - Ushers uniforms | 53102713A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Ushers uniforms |
| Clothing - Judicial robe | 53102714A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Judicial robe |
| Clothing - Prison officer uniform | 53102715A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Prison officer uniform |
| Clothing - Prisoner uniform | 53102716A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Prisoner uniform |
| Clothing - Firefighter uniform | 53102718A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Firefighter uniform |
| Clothing - Sport uniform | 53102717A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Sport uniform |
| Clothing - Costume | 60141401A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Costume |
| Clothing - Costume Mask | 60122800A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Costume Mask |
| Clothing - Handkerchiefs | 53102512A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Handkerchiefs |
| Clothing - Shower Cap | 53131601A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Shower Cap |
| Clothing - Gorgets | 53102519A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Gorgets |
| Clothing - Zippers | 53141503A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Zippers |
| Clothing - Buttons | 53141505A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Buttons |
| Clothing - Snaps | 53141506A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Snaps |
| Clothing - Clasps | 53141507A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Clasps |
| Clothing - Fabric for use in clothing | 11160000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Fabric for use in clothing |
| Clothing - Yarn | 11151700A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Clothing - Yarn |
| Clothing - Fabric dye | 60105810A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Clothing - Fabric dye |
| Clothing - Sequins for use in clothing | 60123900A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Sequins for use in clothing |
| Clothing - Belt Buckle | 53102501A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Belt Buckle |
| Clothing - Shoulder boards or epaulettes | 53102520A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Shoulder boards or epaulettes |
| Clothing - Fur Coat or Jacket | 53101800A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Fur Coat or Jacket |
| Clothing - Fur Ear muffs or scarves | 53102502A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Fur Ear muffs or scarves |
| Clothing - Fur Gloves | 53102503A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Fur Gloves |
| Clothing - Fur Hat | 53102504A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Fur Hat |
| Clothing - Fur Vest | 53103100A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Fur Vest |
| Clothing - Fur Poncho or Cape | 53101806A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Fur Poncho or Cape |
| Clothing - Synthetic Fur Coat or Jacket | 53101800A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Synthetic Fur Coat or Jacket |
| Clothing - Synthetic Fur Ear muffs or scarves | 53102502A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Synthetic Fur Ear muffs or scarves |
| Clothing - Synthetic Fur Gloves | 53102503A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Synthetic Fur Gloves |
| Clothing - Synthetic Fur Hat | 53102504A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Synthetic Fur Hat |
| Clothing - Synthetic Fur Vest | 53103100A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Synthetic Fur Vest |
| Clothing - Synthetic Fur Poncho or Cape | 53101806A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | \*(PLUS ONLY)\* Clothing - Synthetic Fur Poncho or Cape |


#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
product_tax_code | string | Tax code of the given product category.
name | string | Name of the given product category.
description | string | Description of the given product category.
