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
| Admission Services | 19003 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Admission charges associated with entry to an event. |
| Advertising Services | 19001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Services rendered for advertising which do not include the exchange of tangible personal property. |
| Air conditioners - Energy Star | 40101701A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Domestic air conditioning (central or room) systems carrying Energy Star rating. |
| Alkaline Batteries | 26111702A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Single or multi-pack AA, AAA, c, D, 6-volt or 9-volt batteries, excluding automobile or boat batteries. |
| Ammunition | 46101600A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Ammunition for firearms, including bullets, shotgun shells, and gunpowder. |
| Application implementation services | 81111508A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Application implementation services |
| Application programming services | 81111504A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Application programming services |
| Archery Accessories | 49181602A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Archery accessories including quivers, releases, arrow shafts, armguards, hunting belts, bow parts, cleaning products, mounted safety equipment, scopes, sights, hunting slings, string wax, targets, target throwers, etc. |
| Archery Cases | 46101801A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Hard and soft cases designed specifically for archery equipment. |
| Archery Equipment | 49181602A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Primary archery equipment including bows, crossbow, and bow strings. |
| Artificial Ice | 24121512A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Artificial ice, blue ice, ice packs, reusable ice |
| Axes/Hatchets | 27112005A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Axes/Hatchets |
| Bath Mats/rugs | 52101507A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | A small mat/rug used to cover portion of bathroom floor. |
| Bath towels | 52121700A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Towels used for individual drying of persons, including bath towels, beach towels, wash cloths, hand towels, fact towels, sport towels, etc. |
| Bathroom Faucets - WaterSense | 30181702A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | WaterSense labeled bathroom sink faucets and accessories. |
| Bedding | 52121500A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Bedclothes items including sheets, pillow cases, bedspreads, comforters, blankets, throws, duvet covers, pillow shams, bed skirts, mattress pad, mattress toppers, and pillows. |
| Boilers - Energy Star | 40102004A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Domestic gas or oil boilers for space or water heating carrying an Energy Star rating. |
| Bookbags/Backpacks - Student | 53121603A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Bags/packs designed to carry students' books during the school day.  This category does not include backpags for traveling, hiking, camping, etc. |
| Books | 81100 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Books, printed |
| Bottled coffee - containing milk or milk substitute | 50201708A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Ready to drink coffee based beverage containing milk or milk substitute. |
| Bottled coffee - no milk - sweetened | 50201708A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Ready to drink coffee based beverage not containing milk, containing natural or artificial sweetener. |
| Bottled coffee - no milk - unsweetened | 50201708A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Ready to drink coffee based beverage containing neither milk nor natural or artificial sweeteners. |
| Bottled tea - carbonated  - sweetened | 50201712A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Ready to drink carbonated beverage containing tea with natural or artificial sweeteners. |
| Bottled tea - carbonated - unsweetened | 50201712A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Ready to drink carbonated beverage containing tea and without any natural or artificial sweeteners. |
| Bottled tea - non-carbonated  - sweetened | 50201712A0003 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Ready to drink non-carbonated beverage containing tea with natural or artificial sweeteners. |
| Bottled tea - non-carbonated - unsweetened | 50201712A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Ready to drink non-carbonated beverage containing tea without natural or artificial sweeteners. |
| Bottled Water | 40060 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Bottled water for human consumption. |
| Bottled Water | 50202301A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Bottled Water for human consumption, unsweetened, non-carbonated. Does not include distilled water. |
| Bottled Water - Carbonated - Sweetened | 50202301A0004 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Bottled Water for human consumption, containing natural or artificial sweeteners, carbonated. |
| Bottled Water - Carbonated Artificially | 50202301A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Bottled Water for human consumption, unsweetened, carbonated artificially during bottling process.  Includes carbonated waters containing only natural flavors or essences. |
| Bottled Water - Carbonated Naturally | 50202301A0003 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Bottled Water for human consumption, unsweetened, carbonated naturally.  Includes carbonated waters containing only natural flavors or essences. |
| Bottled Water - Flavored | 50202301A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Bottled Water for human consumption, containing natural or artificial sweeteners, non-carbonated. |
| Calculators | 44101807A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Calculators |
| Can opener - manual | 52151605A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-electric can opener |
| Candles | 39112604A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Candles to be used a light source. |
| Candy | 40010 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Candy |
| Carbon Monoxide Detectors | 46191509A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Carbon Monoxide Detectors |
| Ceiling fans - Energy Star | 40101609A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Ceiling Fans carrying an Energy Star rating. |
| Chainsaw accessories | 27112038A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Chainsaw accessories include chains, lubricants, motor oil, chain sharpeners, bars, wrenches, carrying cases, repair parts, safety apparel. |
| Client or server programming services | 81111506A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Client or server programming services |
| Clothes drying machine - Energy Star | 52141602A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Domestic clothes drying appliances carrying Energy Star rating. |
| Clothes Washing Machine - Energy Star | 52141601A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Domestic clothes washing appliances carrying Energy Star rating. |
| Clothing | 20010 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | All human wearing apparel suitable for general use |
| Clothing - Adult diapers | 53102306A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Adult diapers |
| Clothing - Ambulance officers uniforms | 53102709A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Ambulance officers uniforms |
| Clothing - Anti cut gloves | 46181536A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Anti cut gloves |
| Clothing - Anti vibratory gloves | 46181539A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Anti vibratory gloves |
| Clothing - Armbands | 53102508A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Armbands |
| Clothing - Athletic footwear | 53111900A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Athletic footwear |
| Clothing - Athletic supporter | 49161517A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Athletic supporter |
| Clothing - Athletic wear | 53102900A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Athletic wear |
| Clothing - Ballet or tap shoes | 53111900A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Ballet or tap shoes |
| Clothing - Bandannas | 53102511A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Bandannas |
| Clothing - Baseball batting gloves | 49211606A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Baseball batting gloves |
| Clothing - Bath robes | 53102606A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Bath robes |
| Clothing - Belt Buckle | 53102501A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Belt Buckle |
| Clothing - Belts or suspenders | 53102501A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Belts or suspenders |
| Clothing - Bib | 53102521A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Bib |
| Clothing - Body shaping garments | 53102307A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Body shaping garments |
| Clothing - Boots | 53111500A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Boots |
| Clothing - Bowling gloves | 49211606A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Bowling gloves |
| Clothing - Bowling shoes | 53111900A0003 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Bowling shoes |
| Clothing - Boxing gloves | 49171600A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Boxing gloves |
| Clothing - Brassieres | 53102304A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Brassieres |
| Clothing - Bridal Gown | 53101801A0004 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Bridal Gown |
| Clothing - Bullet proof vests | 46181502A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Bullet proof vests |
| Clothing - Buttons | 53141505A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Buttons |
| Clothing - Caps | 53102516A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Caps |
| Clothing - Chemical resistant gloves | 46181541A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Chemical resistant gloves |
| Clothing - Chevrons | 53102518A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Chevrons |
| Clothing - Clasps | 53141507A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Clasps |
| Clothing - Cleanroom apparel | 46181512A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Cleanroom apparel |
| Clothing - Cleanroom footwear | 46181603A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Cleanroom footwear |
| Clothing - Cleated or spiked shoes | 53111900A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Cleated or spiked shoes |
| Clothing - Coats or jackets | 53101800A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Coats or jackets |
| Clothing - Cooling vest | 46181554A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Cooling vest |
| Clothing - Corporate uniforms | 53102710A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Corporate uniforms |
| Clothing - Costume | 60141401A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Costume |
| Clothing - Costume Mask | 60122800A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Costume Mask |
| Clothing - Customs uniforms | 53102702A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Customs uniforms |
| Clothing - Diaper liners | 53102308A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Diaper liners |
| Clothing - Disposable work coat | 53103201A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Disposable work coat |
| Clothing - Disposable youth training pants | 53102311A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Disposable youth training pants |
| Clothing - Doctors coat | 53102707A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Doctors coat |
| Clothing - Dresses or skirts or saris or kimonos | 53102000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Dresses or skirts or saris or kimonos |
| Clothing - Elbow protectors | 46181514A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Elbow protectors |
| Clothing - Eye shield garters | 46181809A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Eye shield garters |
| Clothing - Eye shields | 46181803A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Eye shields |
| Clothing - Fabric dye | 60105810A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Clothing - Fabric dye |
| Clothing - Fabric for use in clothing | 11160000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Fabric for use in clothing |
| Clothing - Face protection kit | 46181709A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Face protection kit |
| Clothing - Facial shields | 46181702A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Facial shields |
| Clothing - Facial shields parts or accessories | 46181707A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Facial shields parts or accessories |
| Clothing - Fire retardant apparel | 46181508A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Fire retardant apparel |
| Clothing - Fire retardant footwear | 46181601A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Fire retardant footwear |
| Clothing - Firefighter uniform | 53102718A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Firefighter uniform |
| Clothing - Folkloric clothing | 53102200A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Folkloric clothing |
| Clothing - Football receiver gloves | 49211606A0004 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Football receiver gloves |
| Clothing - Footwear covers | 46181606A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Footwear covers |
| Clothing - Formal Dress | 53101801A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Formal Dress |
| Clothing - Fur Coat or Jacket | 53101800A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Fur Coat or Jacket |
| Clothing - Fur Ear muffs or scarves | 53102502A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Fur Ear muffs or scarves |
| Clothing - Fur Gloves | 53102503A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Fur Gloves |
| Clothing - Fur Hat | 53102504A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Fur Hat |
| Clothing - Fur Poncho or Cape | 53101806A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Fur Poncho or Cape |
| Clothing - Fur Vest | 53103100A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Fur Vest |
| Clothing - Garters | 53102509A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Garters |
| Clothing - Gloves or mittens | 53102504A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Gloves or mittens |
| Clothing - Goggle protective covers | 46181808A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Goggle protective covers |
| Clothing - Goggles | 46181804A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Goggles |
| Clothing - Golf gloves | 49211606A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Golf gloves |
| Clothing - Golf shoes | 53111900A0004 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Golf shoes |
| Clothing - Gorgets | 53102519A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Gorgets |
| Clothing - Handkerchiefs | 53102512A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Handkerchiefs |
| Clothing - Hard hats | 46181701A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Hard hats |
| Clothing - Hats | 53102503A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Hats |
| Clothing - Hazardous material protective apparel | 46181509A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Hazardous material protective apparel |
| Clothing - Hazardous material protective footwear | 46181602A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Hazardous material protective footwear |
| Clothing - Heat resistant clothing | 46181518A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Heat resistant clothing |
| Clothing - Heel pads | 53112003A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Heel pads |
| Clothing - Helmet parts or accessories | 46181706A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Helmet parts or accessories |
| Clothing - Ice Skates | 49151602A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Ice Skates |
| Clothing - Infant diapers | 53102305A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Infant diapers |
| Clothing - Infant swaddles or buntings or receiving blankets | 53102608A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Infant swaddles or buntings or receiving blankets |
| Clothing - Institutional food preparation or service attire | 53102704A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Institutional food preparation or service attire |
| Clothing - Insulated clothing for cold environments | 46181529A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Insulated clothing for cold environments |
| Clothing - Insulated cold weather shoe | 46181610A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Insulated cold weather shoe |
| Clothing - Insulated gloves | 46181537A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Insulated gloves |
| Clothing - Insulated or flotation suits | 46181517A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Insulated or flotation suits |
| Clothing - Judicial robe | 53102714A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Judicial robe |
| Clothing - Lab coats | 46181532A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Lab coats |
| Clothing - Leg protectors | 46181520A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Leg protectors |
| Clothing - Life vests or preservers | 46161604A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Life vests or preservers |
| Clothing - Military boot | 46181612A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Military boot |
| Clothing - Military uniforms | 53102701A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Military uniforms |
| Clothing - Motorcycle helmets | 46181705A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Motorcycle helmets |
| Clothing - Mountain climbing boot | 46181613A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Mountain climbing boot |
| Clothing - Mouth guards | 42152402A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Mouth guards |
| Clothing - Neck gaitor | 46181549A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Neck gaitor |
| Clothing - Nurses uniforms | 53102708A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Nurses uniforms |
| Clothing - Overalls or coveralls | 53102100A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Overalls or coveralls |
| Clothing - Overshoes | 53112000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Overshoes |
| Clothing - Pajamas or nightshirts or robes | 53102600A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Pajamas or nightshirts or robes |
| Clothing - Panty hose | 53102403A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Panty hose |
| Clothing - Paramedic uniforms | 53102712A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Paramedic uniforms |
| Clothing - Police uniforms | 53102703A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Police uniforms |
| Clothing - Poncho | 53101806A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Poncho |
| Clothing - Prison officer uniform | 53102715A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Prison officer uniform |
| Clothing - Prisoner uniform | 53102716A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Prisoner uniform |
| Clothing - Prom Dress | 53101801A0003 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Prom Dress |
| Clothing - Protective aprons | 46181501A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective aprons |
| Clothing - Protective clogs | 46181607A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective clogs |
| Clothing - Protective coats | 46181533A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective coats |
| Clothing - Protective coveralls | 46181503A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective coveralls |
| Clothing - Protective finger cots | 46181530A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective finger cots |
| Clothing - Protective frock | 46181528A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective frock |
| Clothing - Protective gloves | 46181504A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective gloves |
| Clothing - Protective hair net | 46181708A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective hair net |
| Clothing - Protective hood | 46181710A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective hood |
| Clothing - Protective insole | 46181609A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective insole |
| Clothing - Protective knee pads | 46181505A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective knee pads |
| Clothing - Protective lens | 46181811A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective lens |
| Clothing - Protective mesh jacket | 46181551A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective mesh jacket |
| Clothing - Protective mittens | 46181542A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective mittens |
| Clothing - Protective pants | 46181527A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective pants |
| Clothing - Protective ponchos | 46181506A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective ponchos |
| Clothing - Protective sandals | 46181608A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective sandals |
| Clothing - Protective scarf | 46181550A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective scarf |
| Clothing - Protective shirts | 46181526A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective shirts |
| Clothing - Protective socks or hosiery | 46181535A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective socks or hosiery |
| Clothing - Protective wear dispenser | 46181553A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective wear dispenser |
| Clothing - Protective wristbands | 46181534A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Protective wristbands |
| Clothing - Reflective apparel or accessories | 46181531A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Reflective apparel or accessories |
| Clothing - Roller skates or roller blades | 49221509A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Roller skates or roller blades |
| Clothing - Safety boots | 46181604A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Safety boots |
| Clothing - Safety glasses | 46181802A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Safety glasses |
| Clothing - Safety helmets | 46181704A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Safety helmets |
| Clothing - Safety hoods | 46181522A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Safety hoods |
| Clothing - Safety shoes | 46181605A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Safety shoes |
| Clothing - Safety sleeves | 46181516A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Safety sleeves |
| Clothing - Safety vests | 46181507A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Safety vests |
| Clothing - Salon smocks | 53102711A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Salon smocks |
| Clothing - Sandals | 53111800A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Sandals |
| Clothing - School uniforms | 53102705A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - School uniforms |
| Clothing - Security uniforms | 53102706A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Security uniforms |
| Clothing - Sequins for use in clothing | 60123900A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Sequins for use in clothing |
| Clothing - Shin guards | 49161525A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Shin guards |
| Clothing - Shirts | 53101600A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Shirts |
| Clothing - Shoelaces | 53112002A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Shoelaces |
| Clothing - Shoes | 53111600A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Shoes |
| Clothing - Shoulder boards or epaulettes | 53102520A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Shoulder boards or epaulettes |
| Clothing - Shoulder pads for sports | 46181506A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Shoulder pads for sports |
| Clothing - Shower Cap | 53131601A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Shower Cap |
| Clothing - Ski boots | 53111900A0005 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Ski boots |
| Clothing - Slacks or trousers or shorts | 53101500A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Slacks or trousers or shorts |
| Clothing - Slippers | 53111700A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Slippers |
| Clothing - Slips | 53102302A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Slips |
| Clothing - Snaps | 53141506A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Snaps |
| Clothing - Socks | 53102402A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Socks |
| Clothing - Sport uniform | 53102717A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Sport uniform |
| Clothing - Stockings | 53102401A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Stockings |
| Clothing - Suits | 53101900A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Suits |
| Clothing - Sweat bands | 53102506A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Sweat bands |
| Clothing - Sweaters | 53101700A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Sweaters |
| Clothing - Swim goggles or swim fins | 49141606A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Swim goggles or swim fins |
| Clothing - Swimwear | 20041 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Bathing suits and swim suits |
| Clothing - Swimwear | 53102800A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Swimwear |
| Clothing - Synthetic Fur Coat or Jacket | 53101800A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Synthetic Fur Coat or Jacket |
| Clothing - Synthetic Fur Ear muffs or scarves | 53102502A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Synthetic Fur Ear muffs or scarves |
| Clothing - Synthetic Fur Gloves | 53102503A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Synthetic Fur Gloves |
| Clothing - Synthetic Fur Hat | 53102504A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Synthetic Fur Hat |
| Clothing - Synthetic Fur Poncho or Cape | 53101806A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Synthetic Fur Poncho or Cape |
| Clothing - Synthetic Fur Vest | 53103100A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Synthetic Fur Vest |
| Clothing - T-Shirts | 53103000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - T-Shirts |
| Clothing - Thermal gloves | 46181538A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Thermal gloves |
| Clothing - Ties or scarves or mufflers | 53102502A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Ties or scarves or mufflers |
| Clothing - Tights | 53102404A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Tights |
| Clothing - Tuxedo or Formalwear | 53101801A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Tuxedo or Formalwear |
| Clothing - Underpants | 53102303A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Underpants |
| Clothing - Undershirts | 53102301A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Undershirts |
| Clothing - Ushers uniforms | 53102713A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Ushers uniforms |
| Clothing - Vest or waistcoats | 53103100A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Vest or waistcoats |
| Clothing - Waterproof boot | 46181611A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Waterproof boot |
| Clothing - Waterproof cap | 46181546A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Waterproof cap |
| Clothing - Waterproof cap cover | 46181547A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Waterproof cap cover |
| Clothing - Waterproof jacket or raincoat | 46181543A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Waterproof jacket or raincoat |
| Clothing - Waterproof suit | 46181545A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Waterproof suit |
| Clothing - Waterproof trousers or pants | 46181544A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Waterproof trousers or pants |
| Clothing - Welder bib | 46181548A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Welder bib |
| Clothing - Welder gloves | 46181540A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Welder gloves |
| Clothing - Welders helmet | 46181711A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Welders helmet |
| Clothing - Welding masks | 46181703A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Welding masks |
| Clothing - Wetsuit | 49141506A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Wetsuit |
| Clothing - Yarn | 11151700A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Clothing - Yarn |
| Clothing - Zippers | 53141503A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Clothing - Zippers |
| Cloud-based business process as a service - Business Use | 81162300A9000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Cloud-based business process as a service - Business Use |
| Cloud-based business process as a service - Personal Use | 81162300A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Cloud-based business process as a service |
| Cloud-based infrastructure as a service (IaaS) - Business Use | 81162200A9000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Cloud-based infrastructure as a service (IaaS) - Business Use |
| Cloud-based infrastructure as a service (IaaS) - Personal Use | 81162200A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Cloud-based Infrastructure as a service (IaaS) - Personal Use |
| Cloud-based platform as a service (PaaS) - Business Use | 81162100A9000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Cloud-based platform as a service (PaaS) - Business Use |
| Cloud-based platform as a service (PaaS) - Personal Use | 81162100A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Cloud-based platform as a service (PaaS) - Personal Use |
| Cloud-based software as a service (SaaS) - Business Use | 81162000A9000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Cloud-based software as a service (SaaS) - Business Use |
| Cloud-based software as a service (SaaS) - Personal Use | 81162000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Cloud-based software as a service (SaaS) - Personal Use |
| Co-location service | 81111814A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Co-location service |
| Compact Fluorescent Light Bulbs - Energy Star | 39101619A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Compact Fluorescent light (CFL) bulbs carrying an Energy Star rating. |
| Computer Batteries | 26111711A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Computer Batteries |
| Computer Cables | 43202222A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Cables with industry standard connection and termination configurations used to connect various peripherals and equipment to computers. |
| Computer Drives | 43201800A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Storage drives, hard drives, Zip drives, etc. |
| Computer graphics service | 81111512A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Computer graphics service |
| Computer Keyboards | 43211706A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Computer Keyboards |
| Computer Microphones | 43211719A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Computer Microphones |
| Computer Monitor/Displays | 43211900A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Computer Monitor/Displays |
| Computer Mouse/Pointing Devices | 43211708A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Computer Mouse/Pointing Devices |
| Computer or network or internet security | 81111801A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Computer or network or internet security |
| Computer Printer | 43212100A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Computer Printer |
| Computer programmers | 81111600A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Computer programmers |
| Computer Speakers | 43211607A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Computer Speakers |
| Computer Storage Media | 43202000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Removable storage media such as compact disks, flash drives, thumb drives, flash memory cards. |
| Content or data classification services | 81112009A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Content or data classification services |
| Content or data standardization services | 81112007A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Content or data standardization services |
| Cosmetics - Beautifying | 53131619A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Articles intended to be rubbed, poured, sprinkled, or sprayed on, introduced into, or otherwise applied to the human body or any part thereof for beautifying, promoting attractiveness, or altering the appearance.  This category supports only the following items: Acrylic fingernail glue, Acrylic fingernails, Artificial eyelashes, Blush, Bronzer, Body glitter, Concealer, Eyelash glue, Finger/toenail decorations, Finger/toenail polish, Nail polish remover, Hair coloring, Hair mousse/gel, Hair oil, Hair spray, Hair relaxer, Hair wave treatment, Hair wax, Lip gloss, Lip liner, Lipstick, Liquid foundation, Makeup, Mascara, Nail polish remover, Powder foundation, Cologne, Perfume. |
| Crib bumpers/liners | 56101804A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | A bumper/liner that borders the interior walls/slats of the crib to help protect the baby. |
| Daily Planners | 44112004A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | A calendar based notebook to aid in outlining one's daily appointments, classes, activities, etc. |
| Data center services | 81112003A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Data center services |
| Data conversion service | 81112010A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Data conversion service |
| Data processing or preparation services | 81112002A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Data processing or preparation services |
| Data storage service | 81112006A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Data storage service |
| Database analysis service | 81111806A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Database analysis service |
| Database design | 81111704A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Database design |
| Database information retrieval | 81111901A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Database information retrieval |
| Dehumidifier - Energy Star | 40101902A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Domestic appliance carrying an Energy Star Rating which reduces and maintains the level of humidity in the air. |
| Demining geographical or geospatial information system GIS | 81111709A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Demining geographical or geospatial information system GIS |
| Dictionaries/Thesauruses | 55101526A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Reference printed material commonly used by a student in a course of study as a reference and to learn the subject being taught. |
| Digital Goods | 31000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Digital products transferred electronically, meaning obtained by the purchaser by means other than tangible storage media. |
| Disaster recovery services | 81112004A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Disaster recovery services |
| Dish towels | 52121601A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Dish towels used for kitchenware drying. |
| Dishwashers - Energy Star | 52141505A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Domestic dish washing appliances carrying Energy Star rating. |
| Docking Stations | 43211602A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | A docking station is a hardware frame and set of electrical connection interfaces that enable a notebook computer to effectively serve as a desktop computer. |
| Document scanning service | 81112005A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Document scanning service |
| Dry Cleaning Services | 19006 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Services provided in the cleaning of clothing and/or fabrics. |
| Duct Tape | 31201501A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Duct Tape |
| E-Book Readers | 43211519A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | A portable electronic device for reading digital books and periodicals. |
| Electronic content bundle - Delivered electronically with less than permanent rights of usage and streamed | 55111500A9220 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Electronic content bundle - Delivered electronically with less than permanent rights of usage and streamed |
| Electronic content bundle - Delivered electronically with permanent rights of usage and streamed | 55111500A9210 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Electronic content bundle - Delivered electronically with permanent rights of usage and streamed |
| Electronic data interchange EDI design | 81111703A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Electronic data interchange EDI design |
| Electronic publications and music - Delivered electronically with less than permanent rights of usage | 55111500A1220 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Electronic publications and music - Delivered electronically with less than permanent rights of usage |
| Electronic publications and music - Delivered electronically with permanent rights of usage | 55111500A1210 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Electronic publications and music - Delivered electronically with permanent rights of usage |
| Electronic publications and music - Streamed | 55111500A1500 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Electronic publications and music - Streamed |
| Electronic software documentation or user manuals - Custom, electronic delivery | 55111601A2200 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Electronic software documentation or user manuals - For custom software & delivered electronically |
| Electronic software documentation or user manuals - Custom, load and leave delivery | 55111601A2300 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Electronic software documentation or user manuals - For custom software & delivered by load and leave |
| Electronic software documentation or user manuals - Custom, tangible media | 55111601A2100 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Electronic software documentation or user manuals - For custom software & delivered on tangible media |
| Electronic software documentation or user manuals - Prewritten, electronic delivery | 55111601A1200 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Electronic software documentation or user manuals - For prewritten software & delivered electronically |
| Electronic software documentation or user manuals - Prewritten, load and leave delivery | 55111601A1300 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Electronic software documentation or user manuals - For prewritten software & delivered by load and leave |
| Electronic software documentation or user manuals - Prewritten, tangible media | 55111601A1100 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Electronic software documentation or user manuals - For prewritten software & delivered on tangible media |
| Emergency/rescue ladder | 30191501A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Ladder used for home emergency evacuation. |
| Energy Beverages - Carbonated - with Supplement Facts Label | 50202309A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Carbonated beverages marketed as energy drinks, carrying a Supplement Facts Label, that contain a blend of energy enhancing vitamins, minerals, herbals, stimulants, etc. |
| Energy Beverages - Non-Carbonated - with Supplement Facts Label | 50202309A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-carbonated beverages marketed as energy drinks, carrying a Supplement Facts Label, that contain a blend of energy enhancing vitamins, minerals, herbals, stimulants, etc. |
| ERP or database applications programming services | 81111507A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | ERP or database applications programming services |
| Fire Extinguishers | 46191601A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Fire Extinguishers |
| Firearm Accessories | 46101506A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Firearm accessories including repair parts, cleaning products, holsters, mounted safety equipment, choke tubes, scopes, shooting tripod/bipod/monopod, shooting bags/pouches, sights, etc. |
| Firearms | 46101500A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Firearms, limited to pistols, revolvers, rifles, and shotguns. |
| Food & Groceries | 40030 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food for humans consumption, unprepared |
| Food and Beverage - Alcoholic beverages - Beer/Malt Beverages | 50202201A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Alcoholic beverages - Beer/Malt Beverages |
| Food and Beverage - Alcoholic beverages - Spirits | 50202206A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Alcoholic beverages - Spirits |
| Food and Beverage - Alcoholic beverages - Wine | 50202203A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Wine |
| Food and Beverage - Baby foods and formulas | 42231800A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Baby foods and formulas |
| Food and Beverage - Bread and Flour Products | 50180000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Bread and Flour Products |
| Food and Beverage - Butter, Margarine, Shortening and Cooking Oils | 50151500A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Butter, Margarine, Shortening and Cooking Oils |
| Food and Beverage - Candy | 50161800A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Candy |
| Food and Beverage - Candy containing flour as an ingredient | 50161800A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Candy containing flour as an ingredient |
| Food and Beverage - Cheese | 50131800A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Cheese |
| Food and Beverage - Cocoa and Cocoa products | 50161511A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Cocoa and Cocoa products |
| Food and Beverage - Coffee, coffee substitutes and tea | 50201700A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Coffee, coffee substitutes and tea |
| Food and Beverage - Cooking Ingredients | 50181700A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Cooking Ingredients |
| Food and Beverage - Cooking spices | 50171500A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Cooking spices |
| Food and Beverage - Dried fruit, unsweetened | 50320000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Dried fruit, unsweetened |
| Food and Beverage - Eggs and egg products | 50131600A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Eggs and egg products |
| Food and Beverage - Fish and seafood | 50121500A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Fish and seafood |
| Food and Beverage - Food and Food Ingredients for Home Consumption | 50000000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Food and Food Ingredients for Home Consumption |
| Food and Beverage - Foods for Immediate Consumption | 90100000A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Foods for Immediate Consumption |
| Food and Beverage - Fruit | 50300000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Fruit |
| Food and Beverage - Grains, Rice, Cereal | 50221200A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Grains, Rice, Cereal |
| Food and Beverage - Granola Bars, Cereal Bars, Energy Bars, Protein Bars containing flour | 50221202A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Granola Bars, Cereal Bars, Energy Bars, Protein Bars containing flour |
| Food and Beverage - Granola Bars, Cereal Bars, Energy Bars, Protein Bars containing no flour | 50221202A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Granola Bars, Cereal Bars, Energy Bars, Protein Bars containing no flour |
| Food and Beverage - Honey, Maple Syrup | 50161509A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Honey, Maple Syrup |
| Food and Beverage - Ice Cream, packaged | 50192303A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Ice Cream, packaged |
| Food and Beverage - Ice Cream, sold in container less than one pint | 50192304A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Ice Cream, sold in container less than one pint |
| Food and Beverage - Ice cubes | 50202302A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Ice cubes |
| Food and Beverage - Jams and Jellies | 50192401A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Jams and Jellies |
| Food and Beverage - Jello and pudding mixes | 50192404A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Jello and pudding mixes |
| Food and Beverage - Meat and meat products | 50110000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Meat and meat products |
| Food and Beverage - Meat Sticks, Meat Jerky | 50112000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Meat Sticks, Meat Jerky |
| Food and Beverage - Milk and milk products | 50131700A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Milk and milk products |
| Food and Beverage - Milk Substitutes | 50151515A9000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Milk Substitutes |
| Food and Beverage - Non-Alcoholic Beer, Wine | 50202300A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Non-Alcoholic Beer, Wine |
| Food and Beverage - Nut Butters | 50480000A9000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Nut Butters |
| Food and Beverage - Nuts and seeds | 50101716A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Nuts and seeds |
| Food and Beverage - Nuts and seeds that have been processed or treated by salting, spicing, smoking, roasting, or other means | 50101716A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Processed Nuts and Seeds |
| Food and Beverage - Snack Foods | 50192100A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Snack Foods |
| Food and Beverage - Sugar and Sugar Substitutes | 50161900A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Sugar and Sugar Substitutes |
| Food and Beverage - Vegetables | 50400000A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Vegetables |
| Food and Beverage - Vitamins and Supplements - labeled with nutritional facts | 50501500A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Vitamins and Supplements - labeled with nutritional facts |
| Food and Beverage - Vitamins and Supplements - labeled with supplement facts | 50501500A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Vitamins and Supplements |
| Food and Beverage - Yogurt | 50131800A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food and Beverage - Yogurt |
| Food Storage Cooler | 52152002A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-electric food or beverage cooler. |
| Food/TPP Bundle - with Food 90% or more | 50193400A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food bundle or basket containing food staples combined with tangible personal property, with the food comprising less 90% or more of the overall value of the bundle. |
| Food/TPP Bundle - with Food 90% or more - Food is all Candy | 50193400A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food bundle or basket containing food staples combined with tangible personal property, with the food comprising 90% or more of the overall value of the bundle, where all food consists of candy (not containing flour). |
| Food/TPP Bundle - with Food between 50% and 75% | 50193400A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food bundle or basket containing food staples combined with tangible personal property, with the food comprising between 50% and 75% of the overall value of the bundle. |
| Food/TPP Bundle - with Food between 50% and 75% - Food is all Candy | 50193400A0003 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food bundle or basket containing food staples combined with tangible personal property, with the food comprising between 50% and 75% of the overall value of the bundle, where all food consists of candy (not containing flour). |
| Food/TPP Bundle - with Food between 76% and 89% | 50193400A0004 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food bundle or basket containing food staples combined with tangible personal property, with the food comprising between 76% and 89% of the overall value of the bundle. |
| Food/TPP Bundle - with Food between 76% and 89% - Food is all Candy | 50193400A0005 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food bundle or basket containing food staples combined with tangible personal property, with the food comprising between 76% and 89% of the overall value of the bundle, where all food consists of candy (not containing flour). |
| Food/TPP Bundle - with Food less than 50% | 50193400A0006 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Food/TPP Bundle - with Food less than 50% |
| Freezers- Energy Star | 52141506A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Domestic freezers carrying Energy Star rating. |
| Furnaces - Energy Star | 40101805A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Domestic gas or oil furnaces carrying an Energy Star rating. |
| Garden chainsaw | 27112038A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Gas-powered chainsaw. |
| General Services | 19000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Miscellaneous services which are not subject to a service-specific tax levy. This category will only treat services as taxable if the jurisdiction taxes services generally. |
| Gift Cards | 14111803A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Gift Cards |
| Globes - Student | 60104414A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | A globe that could be used by a student in a course of study as a reference and to learn the subject being taught. |
| Graphing Calculators | 44101808A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | A handheld computer that is capable of plotting graphs, solving simultaneous equations, and performing other tasks with variables. |
| Ground Anchor Systems and Tie-down Kits | 31162108A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Ground anchor systems and tie down kits for securing property against severe weather. |
| Gun Cases | 46101801A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Hard and soft cases designed specifically for firearms equipment |
| Hairdressing Services | 19008 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Services provided to cut and style human hair. |
| Hardware as a service (HaaS) | 81161900A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Hardware as a service (HaaS) |
| Headphones/Earbuds | 52161514A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Headphones/Earbuds |
| Hearing Protection Earmuffs | 46181902A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Protective earmuffs to muffle the sound of gunfire. |
| Heat Pumps - Energy Star | 40101806A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Domestic air source heat pumps carrying Energy Star rating. |
| Incandescent Light Bulbs - Energy Star | 39101612A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Standard incandescent light bulbs carrying an Energy Star rating. |
| Information management system for mine action IMSMA | 81111710A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Information management system for mine action IMSMA |
| Installation Services | 10040 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Installation services separately stated from sales of tangible personal property. |
| Internet cloud storage service | 81111513A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Internet cloud storage service |
| Internet or intranet client application development services | 81111509A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Internet or intranet client application development services |
| Internet or intranet server application development services | 81111510A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Internet or intranet server application development services |
| Irrigation Controls - WaterSense | 21102503A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | WaterSense labeled irrigation controllers, which act like a thermostat for your sprinkler system telling it when to turn on and off, use local weather and landscape conditions to tailor watering schedules to actual conditions on the site. |
| Landscape Soil, Mulch, Compost - Residential | 11121700A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Landscape soil, mulch, compost - residential |
| LED Bulbs - Energy Star | 39101628A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Light emitting diode (LED) bulbs carrying an Energy Star rating. |
| Local area network communications design | 81111702A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Local area network communications design |
| Local area network LAN maintenance or support | 81111803A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Local area network LAN maintenance or support |
| Magazine | 81310 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Periodicals, printed, sold individually |
| Magazines & Subscriptions | 81300 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Periodicals, printed, sold by subscription |
| Mainframe administration services | 81111802A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Mainframe administration services |
| Mainframe software applications design | 81111501A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Mainframe software applications design |
| Maps - Student | 60103410A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | A map that could be used by a student in a course of study as a reference and to learn the subject being taught. |
| Mobile Phone Batteries | 43191501A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Mobile phone batteries |
| Mobile Phone Charging Device/cord | 43191501A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Mobile phone charging device/cord |
| Modems | 43222628A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Modems |
| Motherboards | 43201513A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | A motherboard is the physical component in a computer that contains the computer's basic circuitry and other components |
| Musical instruments - Student | 60130000A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Musical instruments - Student |
| Network planning services | 81111706A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Network planning services |
| Non-Prescription | 51010 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Drugs for human use without a prescription |
| Nutritional Supplement/protein drinks, shakes - contains milk | 50501703A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Ready to drink beverages, containing milk, formulated and labled for their nutritional value, such as increased caloric or protein intake. |
| Nutritional Supplement/protein drinks, shakes - contains no milk | 50501703A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Ready to drink beverages, not containing milk, formulated and labled for their nutritional value, such as increased caloric or protein intake and containing natrual or artificial sweeteners. |
| Online data processing service | 81112001A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Online data processing service |
| Online database information retrieval service | 81111902A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Online database information retrieval service |
| Operating system programming services | 81111505A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Operating system programming services |
| Padlocks - Student | 46171501A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Portable locks used by students in a school setting to prevent use, theft, vandalism or harm. |
| Parking Services | 19002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Service of providing usage of a parking space. |
| Personal computer PC application design | 81111502A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Personal computer PC application design |
| Personal Computers | 43211500A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Personal computers, including laptops, tablets, desktops. |
| Port Replicators | 43211603A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | A port replicator is an attachment for a notebook computer that allows a number of devices such as a printer, large monitor, and keyboard to be simultaneously connected. |
| Portable Fuel Container | 24111808A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Portable fuel container |
| Portable Generator | 26111604A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Portable generator used to provide light or communications or power appliances during a power outage. |
| Portable Light Sources | 39111610A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Portable self-powered or battery powered light sources, including flashlights, lanterns, emergency glow sticks or light sticks. |
| Portable Radios | 43191510A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Portable self-powered or battery powered radio, two-way radio, weatherband radio. |
| Powdered Drink Mixes - to be mixed with milk | 50202311A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Powdered mixes to be reconstituted into a drinkable beverage using milk or a milk substitute. |
| Powdered Drink Mixes - to be mixed with water | 50202311A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Powdered mixes to be reconstituted into a drinkable beverage using water. |
| Power cords | 26121636A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Power cords |
| Prepared Foods | 41000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Ready to eat foods intended to be consumed on site by humans. Foods not considered to be Food & Grocery (not food for home consumption or food which requires further preparation to consume). |
| Prescription | 51020 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Drugs for human use with a prescription |
| Printer Ink | 44103105A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Printer Ink |
| Printer Paper | 14111507A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Printer Paper |
| Printing Services | 19009 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Services provided to apply graphics and/or text to paper or other substrates which do not involve an exchange of tangible personal property. |
| Professional Services | 19005 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Professional services which are not subject to a service-specific tax levy. |
| Programmable Wall Thermostat - Energy Star | 41112209A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | An in home programmable thermostat, such as a WiFi enabled smart thermostat, carrying an Energy Star rating. |
| Proprietary or licensed systems maintenance or support | 81111805A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Proprietary or licensed systems maintenance or support |
| Protein Powder | 50501703A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Nutritional supplement in powder form, dairy based or plant based, focused on increasing ones intake of protein for various benefits. |
| Push pins/tacks | 44122106A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Pins/tacks to secure papers, pictures, calendars, etc. to bulletin boards, walls, etc. |
| Quality assurance services | 81111819A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Quality assurance services |
| Refrigerators - Energy Star | 52141501A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Domestic standard size refrigerators carrying Energy Star rating. |
| Religious books | 81120 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Religious books and manuals, printed |
| Repair Services | 19007 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Services provided to restore tangible personal property to working order or optimal functionality. |
| Ropes and Cords | 31151500A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Ropes and Cords |
| Routers | 43222609A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Routers |
| Scanners | 43211711A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Scanners |
| School Art Supplies | 60121200A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | An item commonly used by a student in a course of study for artwork.  This category is limited to the following items...clay and glazes, paints, paintbrushes for artwork, sketch and drawing pads, watercolors. |
| School Supplies | 44121600A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | An item commonly used by a student in a course of study.  This category is limited to the following items...binders, blackboard chalk, cellophane tape, compasses, composition books, crayons, erasers, folders, glue/paste/glue sticks, highlighters, index cards, index card boxes, legal pads, lunch boxes, markers, notebooks, paper ((copy, graph, tracing, manila, colored, construction, notebook), pencils, pencil boxes, pencil sharpeners, pens, posterboard, protractors, rulers, scissors, writing tablets. |
| Sheet music - Student | 55101514A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Sheet music - Student |
| Shower Curtain or Liner | 30181607A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Shower curtain/liner used to keep water from escaping a showering area. |
| Showerheads - WaterSense | 30181801A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | WaterSense labeled showerheads. |
| Smoke Detectors | 46191501A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Smoke Detectors |
| Soft Drinks | 40050 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Soft drinks. Soda and similar drinks. Does not include water, juice, or milk. |
| Soft Drinks - Carbonated - 1 -9% vegetable juice | 50202306A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 1 - 9% natural vegetable juice.  This does not include flavored carbonated water.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Carbonated - 1-9% fruit juice | 50202306A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 1 - 9% natural fruit juice.  This does not include flavored carbonated water.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Carbonated - 10-24% fruit juice | 50202306A0003 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 10 - 24% natural fruit juice.  This does not include flavored carbonated water.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Carbonated - 10-24% vegetable juice | 50202306A0004 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 10 - 24% natural vegetable juice.  This does not include flavored carbonated water.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Carbonated - 100% fruit or vegetable juice | 50202306A0011 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 100% natural fruit or vegetable juice.  This does not include flavored carbonated water.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Carbonated - 25-50% fruit juice | 50202306A0005 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 25 - 50% natural fruit juice.  This does not include flavored carbonated water.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Carbonated - 25-50% vegetable juice | 50202306A0006 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 25 - 50% natural vegetable juice.  This does not flavored carbonated water.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Carbonated - 51-69% fruit juice | 50202306A0007 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 51 - 69% natural fruit juice.  This does not include flavored carbonated water.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Carbonated - 51-69% vegetable juice | 50202306A0008 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 51 - 69% natural vegetable juice.  This does not include flavored carbonated water.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Carbonated - 70-99% fruit juice | 50202306A0009 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 70 - 99% natural fruit juice.  This does not include flavored carbonated water.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Carbonated - 70-99% vegetable juice | 50202306A0010 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 70 - 99% natural vegetable juice.  This does not include flavored carbonated water.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Carbonated - No fruit or vegetable juice | 50202306A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and zero natural fruit or vegetable juice.  This does not include flavored carbonated water.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Non-Carbonated - 1 -9% vegetable juice | 50202304A0003 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 1 - 9% natural vegetable juice.  This does not include flavored water.  This does include sweetened cocktail mixes that can be combined with alcohol.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Non-Carbonated - 1-9% fruit juice | 50202304A0002 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 1 - 9% natural fruit juice.  This does not include flavored water.  This does include sweetened cocktail mixes that can be combined with alcohol.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Non-Carbonated - 10-24% fruit juice | 50202304A0004 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 10 - 24% natural fruit juice.  This does not include flavored water.  This does include sweetened cocktail mixes that can be combined with alcohol.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Non-Carbonated - 10-24% vegetable juice | 50202304A0005 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 10 - 24% natural vegetable juice.  This does not include flavored water.  This does include sweetened cocktail mixes that can be combined with alcohol.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Non-Carbonated - 100% fruit or vegetable juice | 50202304A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 100% natural fruit or vegetable juice.  This does not include flavored water.  This does include sweetened cocktail mixes that can be combined with alcohol.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Non-Carbonated - 25-50% fruit juice | 50202304A0006 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 25 - 50% natural fruit juice.  This does not include flavored water.  This does include sweetened cocktail mixes that can be combined with alcohol.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Non-Carbonated - 25-50% vegetable juice | 50202304A0007 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 25 - 50% natural vegetable juice.  This does not include flavored water.  This does include sweetened cocktail mixes that can be combined with alcohol.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Non-Carbonated - 51-69% fruit juice | 50202304A0008 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 51 - 69% natural fruit juice.  This does not include flavored water.  This does include sweetened cocktail mixes that can be combined with alcohol.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Non-Carbonated - 51-69% vegetable juice | 50202304A0009 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 51 - 69% natural vegetable juice.  This does not include flavored water.  This does include sweetened cocktail mixes that can be combined with alcohol.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Non-Carbonated - 70-99% fruit juice | 50202304A0010 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 70 - 99% natural fruit juice.  This does not include flavored water.  This does include sweetened cocktail mixes that can be combined with alcohol.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Non-Carbonated - 70-99% vegetable juice | 50202304A0011 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and 70 - 99% natural vegetable juice.  This does not include flavored water.  This does include sweetened cocktail mixes that can be combined with alcohol.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Soft Drinks - Non-Carbonated - No fruit or vegetable juice | 50202304A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-carbonated nonalcoholic beverages that contain natural or artificial sweeteners, and zero natural fruit or vegetable juice.  This does not include flavored water.  This does include sweetened cocktail mixes that can be combined with alcohol.  This does include beverages marketed as energy drinks that carry a Nutrition Facts label and contain a blend of energy enhancing ingredients. |
| Software - Custom, electronic delivery | 43230000A2200 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software - Custom & delivered electronically |
| Software - Custom, electronic delivery - Business Use | 43230000A9201 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software - Custom, electronic delivery - Business Use |
| Software - Custom, load and leave delivery | 43230000A2300 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software - Custom & delivered by load & leave |
| Software - Custom, tangible media | 43230000A2100 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software - Custom & delivered on tangible media |
| Software - Prewritten, delivered by digital keycode printed on tangible media | 43230000A1400 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software - Prewritten & delivered by digital keycode printed on tangible media |
| Software - Prewritten, electronic delivery | 43230000A1200 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software - Prewritten & delivered electronically |
| Software - Prewritten, electronic delivery - Business Use | 43230000A9200 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software - Prewritten, electronic delivery - Business Use |
| Software - Prewritten, Electronic delivery - Non-recreational | 43230000A1102 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Canned software delivered electronically that is used for non-recreational purposes, such as Antivirus, Database, Educational, Financial, Word processing, etc. |
| Software - Prewritten, load and leave delivery | 43230000A1300 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software - Prewritten & delivered by load and leave |
| Software - Prewritten, tangible media | 43230000A1100 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software - Prewritten & delivered on tangible media |
| Software - Prewritten, tangible media - Non-recreational | 43230000A1101 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Canned software on tangible media that is used for non-recreational purposes, such as Antivirus, Database, Educational, Financial, Word processing, etc. |
| Software as a Service | 30070 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Pre-written software, delivered electronically, but access remotely. |
| Software coding service | 81111810A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software coding service |
| Software maintenance and support - Mandatory, custom, electronic delivery | 81112200A2210 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Mandatory maintenance and support charges for custom software including items delivered electronically |
| Software maintenance and support - Mandatory, custom, load and leave delivery | 81112200A2310 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Mandatory maintenance and support charges for custom software including items delivered by load and leave |
| Software maintenance and support - Mandatory, custom, tangible media | 81112200A2110 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Mandatory maintenance and support charges for custom software including items delivered on tangible media |
| Software maintenance and support - Mandatory, prewritten, electronic delivery | 81112200A1210 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Mandatory maintenance and support charges for prewritten software including items delivered electronically |
| Software maintenance and support - Mandatory, prewritten, load and leave delivery | 81112200A1310 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Mandatory maintenance and support charges for prewritten software including items delivered by load and leave |
| Software maintenance and support - Mandatory, prewritten, tangible media | 81112200A1110 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Mandatory maintenance and support charges for prewritten software including items delivered on tangible media |
| Software maintenance and support - Optional maintenance and support charges for custom software including items delivered on tangible media (includes support services only - no updates/upgrades) | 81112200A2122 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Optional maintenance and support charges for custom software including items delivered on tangible media (includes support services only - no updates/upgrades) |
| Software maintenance and support - Optional, custom, electronic delivery (incl. updates/upgrades) | 81112200A2221 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Optional maintenance and support charges for custom software including items delivered electronically (includes software updates/upgrades) |
| Software maintenance and support - Optional, custom, electronic delivery (support services only) | 81112200A2222 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Optional maintenance and support charges for custom software including items delivered electronically (includes support services only - no updates/upgrades) |
| Software maintenance and support - Optional, custom, load and leave delivery (incl. updates/upgrades) | 81112200A2321 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Optional maintenance and support charges for custom software including items delivered by load and leave (includes software updates/upgrades) |
| Software maintenance and support - Optional, custom, load and leave delivery (support services only) | 81112200A2322 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Optional maintenance and support charges for custom software including items delivered by load and leave (includes support services only - no updates/upgrades) |
| Software maintenance and support - Optional, custom, tangible media (incl. updates/upgrades) | 81112200A2121 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Optional maintenance and support charges for custom software including items delivered on tangible media (includes software updates/upgrades) |
| Software maintenance and support - Optional, prewritten, electronic delivery (incl. updates/upgrades) | 81112200A1221 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Optional maintenance and support charges for prewritten software including items delivered electronically (includes software updates/upgrades) |
| Software maintenance and support - Optional, prewritten, electronic delivery (support services only) | 81112200A1222 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Optional maintenance and support charges for prewritten software including items delivered electronically (includes support services only - no updates/upgrades) |
| Software maintenance and support - Optional, prewritten, load and leave delivery (incl. updates/upgrades) | 81112200A1321 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Optional maintenance and support charges for prewritten software including items delivered by load and leave (includes software updates/upgrades) |
| Software maintenance and support - Optional, prewritten, load and leave delivery (support services only) | 81112200A1322 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Optional maintenance and support charges for prewritten software including items delivered by load and leave (includes support services only - no updates/upgrades) |
| Software maintenance and support - Optional, prewritten, tangible media (incl. updates/upgrades) | 81112200A1121 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Optional maintenance and support charges for prewritten software including items delivered on tangible media (includes software updates/upgrades) |
| Software maintenance and support - Optional, prewritten, tangible media (support services only) | 81112200A1122 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Software maintenance and support - Optional maintenance and support charges for prewritten software including items delivered on tangible media (includes support services only - no updates/upgrades) |
| Sound Cards | 43201502A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | A sound card is an expansion component used in computers to receive and send audio. |
| Spray Water Sprinkler Bodies - WaterSense | 21101803A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | WaterSense labeled sprinkler body is the exterior shell that connects to the irrigation system piping and houses the spray nozzle that applies water on the landscape. |
| Staplers/Staples | 44121615A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | A device that joins pages of paper or similar material by fastening a thin metal staple through the sheets and folding the ends underneath. |
| Storm shutters/window protection devices | 30151801A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Plywood, window film, storm shutters, hurricane shutters or other materials specifically designed to protect windows. |
| Supplements | 40020 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-food dietary supplements |
| System analysis service | 81111808A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | System analysis service |
| System installation service | 81111809A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | System installation service |
| System or application programming management service | 81111511A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | System or application programming management service |
| System usability services | 81111820A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | System usability services |
| Systems architecture | 81111705A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Systems architecture |
| Systems integration design | 81111503A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Systems integration design |
| Systems planning services | 81111707A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Systems planning services |
| Tarpaulins and Weatherproof Sheeting | 24141506A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Tarps, plastic sheeting, plastic drop cloths, waterproof sheeting. |
| Technical support or help desk services | 81111811A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Technical support or help desk services |
| Textbook | 81110 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Textbooks, printed |
| Toilets - WaterSense | 30181505A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | WaterSense labeled toilets. |
| Training Services | 19004 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Services provided to educate users on the proper use of a product. |
| Urinals - WaterSense | 30181506A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | WaterSense labeled urinals. |
| Video/Graphics Card | 43201401A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | An expansion card that allows the computer to send graphical information to a video display device such as a monitor, TV, or projector. Video cards are often used by gamers in place of integrated graphics due to their extra processing power and video ram. |
| Water Conserving Products | 21102500A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Water conserving products are for conserving or retaining groundwater; recharging water tables; or decreasing ambient air temperature, and so limiting water evaporation. Examples include soil sufactants, a soaker or drip-irrigation hose, a moisture control for a sprinkler or irrigation system, a rain barrel or an alternative rain and moisture collection system, a permeable ground cover surface that allows water to reach underground basins, aquifers or water collection points. |
| Water heater - Energy Star | 40101825A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Domestic water heater carrying Energy Star rating. |
| Water storage container | 24111810A0001 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Non-electric water container to store water for emergency usage. |
| Web Camera | 45121520A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | A webcam is a video camera that feeds or streams an image or video in real time to or through a computer to a computer network, such as the Internet. Webcams are typically small cameras that sit on a desk, attach to a user's monitor, or are built into the hardware |
| Wide area network communications design | 81111701A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Wide area network communications design |
| Wide area network WAN maintenance or support | 81111804A0000 | <span class="flag-icon flag-icon-us" data-tooltip="United States" data-tooltip-position="top center"></span> | Wide area network WAN maintenance or support |


#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
product_tax_code | string | Tax code of the given product category.
name | string | Name of the given product category.
description | string | Description of the given product category.
