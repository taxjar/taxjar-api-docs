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

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
product_tax_code | string | Tax code of the given product category.
name | string | Name of the given product category.
description | string | Description of the given product category.
