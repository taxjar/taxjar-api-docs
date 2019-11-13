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

```go
client.TaxForOrder()
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

    res, err := client.TaxForOrder(taxjar.TaxForOrderParams{
        FromCountry:    "US",
        FromZip:        "92093",
        FromState:      "CA",
        FromCity:       "La Jolla",
        FromStreet:     "9500 Gilman Drive",
        ToCountry:      "US",
        ToZip:          "90002",
        ToState:        "CA",
        ToCity:         "Los Angeles",
        ToStreet:       "1335 E 103rd St",
        Amount:         15,
        Shipping:       1.5,
        NexusAddresses: []taxjar.NexusAddress {
            {
                ID:      "Main Location",
                Country: "US",
                Zip:     "92093",
                State:   "CA",
                City:    "La Jolla",
                Street:  "9500 Gilman Drive",
            },
        },
        LineItems: []taxjar.TaxLineItem {
            {
                ID:             "1",
                Quantity:       1,
                ProductTaxCode: "20010",
                UnitPrice:      15,
                Discount:       0,
            },
        },
    })
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Tax)
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

    res, err := client.TaxForOrder(taxjar.TaxForOrderParams{
        FromCountry:    "CA",
        FromZip:        "V6G 3E2",
        FromState:      "BC",
        FromCity:       "Vancouver",
        FromStreet:     "845 Avison Way",
        ToCountry:      "CA",
        ToZip:          "M5V 2T6",
        ToState:        "ON",
        ToCity:         "Toronto",
        ToStreet:       "301 Front St W",
        Amount:         15,
        Shipping:       1.5,
        NexusAddresses: []taxjar.NexusAddress{
            {
                ID:      "Main Location",
                Country: "US",
                Zip:     "V6G 3E2",
                State:   "BC",
                City:    "Vancouver",
                Street:  "845 Avison Way",
            },
        },
        LineItems: []taxjar.TaxLineItem{
            {
                ID:        "1",
                Quantity:  1,
                UnitPrice: 15,
                Discount:  0,
            },
        },
    })
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Tax)
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

    res, err := client.TaxForOrder(taxjar.TaxForOrderParams{
        FromCountry:    "AU",
        FromZip:        "NSW 2000",
        FromCity:       "Sydney",
        FromStreet:     "483 George St",
        ToCountry:      "AU",
        ToZip:          "VIC 3002",
        ToCity:         "Richmond",
        ToStreet:       "Brunton Ave",
        Amount:         15,
        Shipping:       1.5,
        NexusAddresses: []taxjar.NexusAddress{
            {
                ID:      "Main Location",
                Country: "AU",
                Zip:     "NSW 2000",
                City:    "Sydney",
                Street:  "483 George St",
            },
        },
        LineItem: []taxjar.TaxLineItem {
            {
                ID:        "1",
                Quantity:  1,
                UnitPrice: 15,
                Discount:  0,
            },
        },
    })
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Tax)
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

    res, err := client.TaxForOrder(taxjar.TaxForOrderParams{
        FromCountry:    "FR",
        FromZip:        "75008",
        FromCity:       "Paris",
        FromStreet:     "55 Rue du Faubourg Saint-Honoré",
        ToCountry:      "FR",
        ToZip:          "13281",
        ToCity:         "Marseille",
        ToStreet:       "Rue Fort du Sanctuaire",
        Amount:         15,
        Shipping:       1.5,
        NexusAddresses: []taxjar.NexusAddress{
            {
                ID:      "Main Location",
                Country: "FR",
                Zip:     "75008",
                City:    "Paris",
                Street:  "55 Rue du Faubourg Saint-Honoré",
            },
        },
        LineItems: []taxjar.TaxLineItem{
            {
                ID:        "1",
                Quantity:  1,
                UnitPrice: 15,
                Discount:  0,
            },
        },
    })
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Tax)
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

    res, err := client.TaxForOrder(taxjar.TaxForOrderParams{
        FromCountry:    "US",
        FromZip:        "78701",
        FromState:      "TX",
        FromCity:       "Austin",
        FromStreet:     "1100 Congress Ave",
        ToCountry:      "US",
        ToZip:          "77058",
        ToState:        "TX",
        ToCity:         "Houston",
        ToStreet:       "1601 E NASA Pkwy",
        Amount:         15,
        Shipping:       1.5,
        NexusAddresses: []taxjar.NexusAddress{
            {
                ID:      "Main Location",
                Country: "US",
                Zip:     "78701",
                State:   "TX",
                City:    "Austin",
                Street:  "1100 Congress Ave",
            },
        },
        LineItems: []taxjar.TaxLineItem{
            {
                ID:        "1",
                Quantity:  1,
                UnitPrice: 15,
                Discount:  0,
            },
        },
    })
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Tax)
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

    res, err := client.TaxForOrder(taxjar.TaxForOrderParams{
        FromCountry:    "US",
        FromZip:        "02110",
        FromState:      "MA",
        FromCity:       "Boston",
        FromStreet:     "1 Central Wharf",
        ToCountry:      "US",
        ToZip:          "01608",
        ToState:        "MA",
        ToCity:         "Worcester",
        ToStreet:       "455 Main St",
        Amount:         15,
        Shipping:       1.5,
        NexusAddresses: []taxjar.NexusAddress{
            {
                ID:      "Main Location",
                Country: "US",
                Zip:     "02110",
                State:   "MA",
                City:    "Boston",
                Street:  "1 Central Wharf",
            }
        },
        LineItems: []taxjar.TaxLineItem{
            {
                ID:        "1",
                Quantity:  1,
                UnitPrice: 15,
                Discount:  0,
            },
        },
    })
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Tax)
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

    res, err := client.TaxForOrder(taxjar.TaxForOrderParams{
        FromCountry: "US",
        FromZip:     "12054",
        FromState:   "NY",
        FromCity:    "Delmar",
        ToCountry:   "US",
        ToZip:       "10541",
        ToState:     "NY",
        ToCity:      "Mahopac",
        Amount:      29.94,
        Shipping:    7.99,
        LineItems:   []taxjar.TaxLineItem{
            {
                Quantity:       1,
                UnitPrice:      19.99,
                ProductTaxCode: "20010",
            },
            {
                Quantity:       1,
                UnitPrice:      9.95,
                ProductTaxCode: "20010",
            },
        },
    })
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Tax)
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

    res, err := client.TaxForOrder(taxjar.TaxForOrderParams{
        FromCountry: "US",
        FromZip:     "94133",
        FromState:   "CA",
        FromCity:    "San Francisco",
        ToCountry:   "US",
        ToZip:       "90071",
        ToState:     "CA",
        ToCity:      "Los Angeles",
        Amount:      29.94,
        Shipping:    7.99,
        LineItems:   []taxjar.TaxLineItem{
            {
                Quantity:       1,
                UnitPrice:      19.99,
                ProductTaxCode: "40030",
            },
            {
                Quantity:       1,
                UnitPrice:      9.95,
                ProductTaxCode: "40030",
            },
        },
    })
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Tax)
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

    res, err := client.TaxForOrder(taxjar.TaxForOrderParams{
        FromCountry: "US",
        FromZip:     "33018",
        FromState:   "FL",
        FromCity:    "Miami",
        ToCountry:   "US",
        ToZip:       "97305",
        ToState:     "OR",
        ToCity:      "Portland",
        Amount:      15,
        Shipping:    1.5,
    })
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Tax)
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
    "jurisdictions": {
      "country": "US",
      "state": "CA",
      "county": "LOS ANGELES",
      "city": "LOS ANGELES"
    },
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
  :jurisdictions => #<Taxjar::Jurisdictions:0x00000a @attrs={
    :country => 'US',
    :state => 'CA',
    :county => 'LOS ANGELES',
    :city => 'LOS ANGELES'
  }>,
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
  'jurisdictions': <TaxJarJurisdictions {
    'country': 'US',
    'state': 'CA',
    'county': 'LOS ANGELES',
    'city': 'LOS ANGELES'
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

```go
taxjar.TaxForOrderResponse{
    Tax: taxjar.Tax{
        OrderTotalAmount: 16.5,
        Shipping:         1.5,
        TaxableAmount:    15,
        AmountToCollect:  1.35,
        Rate:             0.09,
        HasNexus:         true,
        FreightTaxable:   false,
        TaxSource:        "destination",
        Jurisdictions:    taxjar.Jurisdictions{
            Country: "US",
            State:   "CA",
            County:  "LOS ANGELES",
            City:    "LOS ANGELES",
        },
        Breakdown: taxjar.Breakdown{
            TaxableAmount:                 15,
            TaxCollectable:                1.35,
            CombinedTaxRate:               0.09,
            StateTaxableAmount:            15,
            StateTaxRate:                  0.0625,
            StateTaxCollectable:           0.94,
            CountyTaxableAmount:           15,
            CountyTaxRate:                 0.0025,
            CountyTaxCollectable:          0.04,
            CityTaxableAmount:             0,
            CityTaxRate:                   0,
            CityTaxCollectable:            0,
            SpecialDistrictTaxableAmount:  15,
            SpecialTaxRate:                0.025,
            SpecialDistrictTaxCollectable: 0.38,
            LineItems:                     []taxjar.LineItemBreakdown{
                {
                    ID:                           "1",
                    TaxableAmount:                15,
                    TaxCollectable:               1.35,
                    CombinedTaxRate:              0.09,
                    StateTaxableAmount:           15,
                    StateSalesTaxRate:            0.0625,
                    StateAmount:                  0.94,
                    CountyTaxableAmount:          15,
                    CountyTaxRate:                0.0025,
                    CountyAmount:                 0.04,
                    CityTaxableAmount:            0,
                    CityTaxRate:                  0,
                    CityAmount:                   0,
                    SpecialDistrictTaxableAmount: 15,
                    SpecialTaxRate:               0.025,
                    SpecialDistrictAmount:       0.38,
                },
            },
        },
    },
}
```

> Response Scenario: Canada

```json
{
  "tax": {
    "order_total_amount": 16.5,
    "shipping": 1.5,
    "taxable_amount": 16.5,
    "amount_to_collect": 2.15,
    "rate": 0.13,
    "has_nexus": true,
    "freight_taxable": true,
    "tax_source": "destination",
    "jurisdictions": {
      "country": "CA",
      "state": "ON",
      "city": "TORONTO"
    },
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
    }
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
  :jurisdictions => #<Taxjar::Jurisdictions:0x00000a @attrs={
    :country => 'CA',
    :state => 'ON',
    :city => 'TORONTO'
  }>,
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
  'jurisdictions': <TaxJarJurisdictions {
    'country': 'CA',
    'state': 'ON',
    'city': 'TORONTO'
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

```go
taxjar.TaxForOrderResponse{
    Tax: taxjar.Tax{
        OrderTotalAmount: 16.5,
        Shipping:         1.5,
        TaxableAmount:    16.5,
        AmountToCollect:  2.15,
        Rate:             0.13,
        HasNexus:         true,
        FreightTaxable:   true,
        TaxSource:        "destination",
        Jurisdictions: taxjar.Jurisdictions{
            Country: "CA",
            State:   "ON",
            City:    "TORONTO",
        },
        Breakdown: taxjar.Breakdown{
            TaxableAmount:    16.5,
            TaxCollectable:   2.15,
            CombinedTaxRate:  0.13,
            GSTTaxableAmount: 16.5,
            GSTTaxRate:       0.05,
            GST:              0.83,
            PSTTaxableAmount: 16.5,
            PSTTaxRate:       0.08,
            PST:              1.32,
            QSTTaxableAmount: 0.0,
            QSTTaxRate:       0.0,
            QST:              0.0,
            Shipping: taxjar.Shipping{
                TaxableAmount:    1.5,
                TaxCollectable:   0.2,
                CombinedTaxRate:  0.13,
                GSTTaxableAmount: 1.5,
                GSTTaxRate:       0.05,
                GST:              0.08,
                PSTTaxableAmount: 1.5,
                PSTTaxRate:       0.08,
                PST:              0.12,
                QSTTaxableAmount: 0.0,
                QSTTaxRate:       0.0,
                QST:              0.0,
            },
            LineItems: []taxjar.LineItemBreakdown{
                {
                    ID:               "1",
                    TaxableAmount:    15.0,
                    TaxCollectable:   1.95,
                    CombinedTaxRate:  0.13,
                    GSTTaxableAmount: 15.0,
                    GSTTaxRate:       0.05,
                    GST:              0.75,
                    PSTTaxableAmount: 15.0,
                    PSTTaxRate:       0.08,
                    PST:              1.2,
                    QSTTaxableAmount: 0.0,
                    QSTTaxRate:       0.0,
                    QST:              0.0,
                },
            },
        },
    },
}
```

> Response Scenario: Australia

```json
{
  "tax": {
    "order_total_amount": 16.5,
    "shipping": 1.5,
    "taxable_amount": 16.5,
    "amount_to_collect": 1.65,
    "rate": 0.1,
    "has_nexus": true,
    "freight_taxable": true,
    "tax_source": "destination",
    "jurisdictions": {
      "country": "AU"
    },
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
    }
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
  :jurisdictions => #<Taxjar::Jurisdictions:0x00000a @attrs={
    :country => 'AU'
  }>,
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
  'jurisdictions': <TaxJarJurisdictions {
    'country': 'AU'
  }>,
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

```go
taxjar.TaxForOrderResponse{
    Tax: taxjar.Tax{
        OrderTotalAmount: 16.5,
        Shipping:         1.5,
        TaxableAmount:    16.5,
        AmountToCollect:  1.65,
        Rate:             0.1,
        HasNexus:         true,
        FreightTaxable:   true,
        TaxSource:        "destination",
        Jurisdictions: taxjar.Jurisdictions{
            Country: "AU",
        },
        Breakdown: taxjar.Breakdown{
            TaxableAmount:         16.5,
            TaxCollectable:        1.65,
            CombinedTaxRate:       0.1,
            CountryTaxableAmount:  16.5,
            CountryTaxRate:        0.1,
            CountryTaxCollectable: 1.65,
            Shipping: taxjar.Shipping{
                TaxableAmount:         1.5,
                TaxCollectable:        0.15,
                CombinedTaxRate:       0.1,
                CountryTaxableAmount:  1.5,
                CountryTaxRate:        0.1,
                CountryTaxCollectable: 0.15,
            },
            LineItems: []taxjar.LineItemBreakdown{
                {
                    ID:                    "1",
                    TaxableAmount:         15.0,
                    TaxCollectable:        1.5,
                    CombinedTaxRate:       0.1,
                    CountryTaxableAmount:  15.0,
                    CountryTaxRate:        0.1,
                    CountryTaxCollectable: 1.5,
                },
            },
        },
    },
}
```

> Response Scenario: European Union

```json
{
  "tax": {
    "order_total_amount": 16.5,
    "shipping": 1.5,
    "taxable_amount": 16.5,
    "amount_to_collect": 3.3,
    "rate": 0.2,
    "has_nexus": true,
    "freight_taxable": true,
    "tax_source": "destination",
    "jurisdictions": {
      "country": "FR",
      "city": "MARSEILLE"
    },
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
    }
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
  :jurisdictions => #<Taxjar::Jurisdictions:0x00000a @attrs={
    :country => 'FR',
    :city => 'MARSEILLE'
  }>,
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
  'jurisdictions': <TaxJarJurisdictions {
    'country': 'FR',
    'city': 'MARSEILLE'
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

```go
taxjar.TaxForOrderResponse{
    Tax: taxjar.Tax{
        OrderTotalAmount: 16.5,
        Shipping:         1.5,
        TaxableAmount:    16.5,
        AmountToCollect:  3.3,
        Rate:             0.2,
        HasNexus:         true,
        FreightTaxable:   true,
        TaxSource:        "destination",
        Jurisdictions: taxjar.Jurisdictions{
            Country: "FR",
            City:    "MARSEILLE",
        },
        Breakdown: taxjar.Breakdown{
            TaxableAmount:         16.5,
            TaxCollectable:        3.3,
            CombinedTaxRate:       0.2,
            CountryTaxableAmount:  16.5,
            CountryTaxRate:        0.2,
            CountryTaxCollectable: 3.3,
            Shipping: taxjar.Shipping{
                TaxableAmount:         1.5,
                TaxCollectable:        0.3,
                CombinedTaxRate:       0.2,
                CountryTaxableAmount:  1.5,
                CountryTaxRate:        0.2,
                CountryTaxCollectable: 0.3,
            },
            LineItems: []taxjar.LineItemBreakdown{
                ID:                    "1",
                TaxableAmount:         15.0,
                TaxCollectable:        3.0,
                CombinedTaxRate:       0.2,
                CountryTaxableAmount:  15.0,
                CountryTaxRate:        0.2,
                CountryTaxCollectable: 3.0,
            },
        },
    },
}
```

> Response Scenario: Origin-Based Sourcing

```json
{
  "tax": {
    "order_total_amount": 16.5,
    "shipping": 1.5,
    "taxable_amount": 16.5,
    "amount_to_collect": 1.36,
    "rate": 0.0825,
    "has_nexus": true,
    "freight_taxable": true,
    "tax_source": "origin",
    "jurisdictions": {
      "country": "US",
      "state": "TX",
      "county": "TRAVIS",
      "city": "AUSTIN"
    },
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
    }
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
  :jurisdictions => #<Taxjar::Jurisdictions:0x00000a @attrs={
    :country => 'US',
    :state => 'TX',
    :county => 'TRAVIS',
    :city => 'AUSTIN'
  }>,
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
  'jurisdictions': <TaxJarJurisdictions {
    'country': 'US',
    'state': 'TX',
    'county': 'TRAVIS',
    'city': 'AUSTIN'
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

```go
taxjar.TaxForOrderResponse{
    Tax: taxjar.Tax{
        OrderTotalAmount: 16.5,
        Shipping:         1.5,
        TaxableAmount:    16.5,
        AmountToCollect:  1.36,
        Rate:             0.0825,
        HasNexus:         true,
        FreightTaxable:   true,
        TaxSource:        "origin",
        Jurisdictions: taxjar.Jurisdictions{
            Country: "US",
            State:   "TX",
            County:  "TRAVIS",
            City:    "AUSTIN",
        },
        Breakdown: taxjar.Breakdown{
            TaxableAmount:                 16.5,
            TaxCollectable:                1.36,
            CombinedTaxRate:               0.0825,
            StateTaxableAmount:            16.5,
            StateTaxRate:                  0.0625,
            StateTaxCollectable:           1.03,
            CountyTaxableAmount:           0.0,
            CountyTaxRate:                 0.0,
            CountyTaxCollectable:          0.0,
            CityTaxableAmount:             16.5,
            CityTaxRate:                   0.01,
            CityTaxCollectable:            0.17,
            SpecialDistrictTaxableAmount:  16.5,
            SpecialTaxRate:                0.01,
            SpecialDistrictTaxCollectable: 0.17,
            Shipping: taxjar.Shipping{
                TaxableAmount:         1.5,
                TaxCollectable:        0.12,
                CombinedTaxRate:       0.0825,
                StateTaxableAmount:    1.5,
                StateSalesTaxRate:     0.0625,
                StateAmount:           0.09,
                CountyTaxableAmount:   0.0,
                CountyTaxRate:         0.0,
                CountyAmount:          0.0,
                CityTaxableAmount:     1.5,
                CityTaxRate:           0.01,
                CityAmount:            0.02,
                SpecialTaxableAmount:  1.5,
                SpecialTaxRate:        0.01,
                SpecialDistrictAmount: 0.02,
            },
            LineItems: []taxjar.LineItemBreakdown{
                {
                    ID:                           "1",
                    TaxableAmount:                15.0,
                    TaxCollectable:               1.24,
                    CombinedTaxRate:              0.0825,
                    StateTaxableAmount:           15.0,
                    StateSalesTaxRate:            0.0625,
                    StateAmount:                  0.94,
                    CountyTaxableAmount:          0.0,
                    CountyTaxRate:                0.0,
                    CountyAmount:                 0.0,
                    CityTaxableAmount:            15.0,
                    CityTaxRate:                  0.01,
                    CityAmount:                   0.15,
                    SpecialDistrictTaxableAmount: 15.0,
                    SpecialTaxRate:               0.01,
                    SpecialDistrictAmount:        0.15,
                },
            },
        },
    },
}
```

> Response Scenario: Shipping Exemptions

```json
{
  "tax": {
    "order_total_amount": 16.5,
    "shipping": 1.5,
    "taxable_amount": 15,
    "amount_to_collect": 0.94,
    "rate": 0.0625,
    "has_nexus": true,
    "freight_taxable": false,
    "tax_source": "destination",
    "jurisdictions": {
      "country": "US",
      "state": "MA",
      "county": "WORCESTER",
      "city": "WORCESTER"
    },
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
    }
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
  :jurisdictions => #<Taxjar::Jurisdictions:0x00000a @attrs={
    :country => 'US',
    :state => 'MA',
    :county => 'WORCESTER',
    :city => 'WORCESTER'
  }>,
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
  'jurisdictions': <TaxJarJurisdictions {
    'country': 'US',
    'state': 'MA',
    'county': 'WORCESTER',
    'city': 'WORCESTER'
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

```go
taxjar.TaxForOrderResponse{
    Tax: taxjar.Tax{
        OrderTotalAmount: 16.5,
        Shipping:         1.5,
        TaxableAmount:    15.0,
        AmountToCollect:  0.94,
        Rate:             0.0625,
        HasNexus:         true,
        FreightTaxable:   false,
        TaxSource:        "destination",
        Jurisdictions: taxjar.Jurisdictions{
            Country: "US",
            State:   "MA",
            County:  "WORCESTER",
            City:    "WORCESTER",
        },
        Breakdown: taxjar.Breakdown{
            TaxableAmount:                 15.0,
            TaxCollectable:                0.94,
            CombinedTaxRate:               0.0625,
            StateTaxableAmount:            15.0,
            StateTaxRate:                  0.0625,
            StateTaxCollectable:           0.94,
            CountyTaxableAmount:           0.0,
            CountyTaxRate:                 0.0,
            CountyTaxCollectable:          0.0,
            CityTaxableAmount:             0.0,
            CityTaxRate:                   0.0,
            CityTaxCollectable:            0.0,
            SpecialDistrictTaxableAmount:  0.0,
            SpecialTaxRate:                0.0,
            SpecialDistrictTaxCollectable: 0.0,
            LineItems: []taxjar.LineItemBreakdown{
                {
                    ID:                           "1",
                    TaxableAmount:                15.0,
                    TaxCollectable:               0.94,
                    CombinedTaxRate:              0.0625,
                    StateTaxableAmount:           15.0,
                    StateSalesTaxRate:            0.0625,
                    StateAmount:                  0.94,
                    CountyTaxableAmount:          0.0,
                    CountyTaxRate:                0.0,
                    CountyAmount:                 0.0,
                    CityTaxableAmount:            0.0,
                    CityTaxRate:                  0.0,
                    CityAmount:                   0.0,
                    SpecialDistrictTaxableAmount: 0.0,
                    SpecialTaxRate:               0.0,
                    SpecialDistrictAmount:        0.0,
                },
            },
        },
    },
}
```

> Response Scenario: Clothing Exemptions

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
    "jurisdictions": {
      "country": "US",
      "state": "NY",
      "county": "PUTNAM",
      "city": "MAHOPAC"
    },
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
    }
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
  :jurisdictions => #<Taxjar::Jurisdictions:0x00000a @attrs={
    :country => 'US',
    :state => 'NY',
    :county => 'PUTNAM',
    :city => 'MAHOPAC'
  }>,
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
  'jurisdictions': <TaxJarJurisdictions {
    'country': 'US',
    'state': 'NY',
    'county': 'PUTNAM',
    'city': 'MAHOPAC'
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

```go
taxjar.TaxForOrderResponse{
    Tax: taxjar.Tax{
        OrderTotalAmount: 37.93,
        Shipping:         7.99,
        TaxableAmount:    37.93,
        AmountToCollect:  1.98,
        Rate:             0.05218,
        HasNexus:         true,
        FreightTaxable:   true,
        TaxSource:        "destination",
        Jurisdictions: taxjar.Jurisdictions{
            Country: "US",
            State:   "NY",
            County   "PUTNAM",
            City:    "MAHOPAC",
        },
        Breakdown: taxjar.Breakdown{
            TaxableAmount:                 37.93,
            TaxCollectable:                1.98,
            CombinedTaxRate:               0.05218,
            StateTaxableAmount:            7.99,
            StateTaxRate:                  0.04,
            StateTaxCollectable:           0.32,
            CountyTaxableAmount:           37.93,
            CountyTaxRate:                 0.04,
            CountyTaxCollectable:          1.52,
            CityTaxableAmount:             0.0,
            CityTaxRate:                   0.0,
            CityTaxCollectable:            0.0,
            SpecialDistrictTaxableAmount:  37.93,
            SpecialTaxRate:                0.00375,
            SpecialDistrictTaxCollectable: 0.14,
            Shipping: taxjar.Shipping{
                TaxableAmount:         7.99,
                TaxCollectable:        0.67,
                CombinedTaxRate:       0.08375,
                StateTaxableAmount:    7.99,
                StateSalesTaxRate:     0.04,
                StateAmount:           0.32,
                CountyTaxableAmount:   7.99,
                CountyTaxRate:         0.04,
                CountyAmount:          0.32,
                CityTaxableAmount:     0.0,
                CityTaxRate:           0.0,
                CityAmount:            0.0,
                SpecialTaxableAmount:  7.99,
                SpecialTaxRate:        0.00375,
                SpecialDistrictAmount: 0.03,
            },
            LineItems: []taxjar.LineItemBreakdown{
                {
                    ID:                           "1",
                    TaxableAmount:                19.99,
                    TaxCollectable:               0.87,
                    CombinedTaxRate:              0.04375,
                    StateTaxableAmount:           0.0,
                    StateSalesTaxRate:            0.0,
                    StateAmount:                  0.0,
                    CountyTaxableAmount:          19.99,
                    CountyTaxRate:                0.04,
                    CountyAmount:                 0.8,
                    CityTaxableAmount:            0.0,
                    CityTaxRate:                  0.0,
                    CityAmount:                   0.0,
                    SpecialDistrictTaxableAmount: 19.99,
                    SpecialTaxRate:               0.00375,
                    SpecialDistrictAmount:        0.07,
                },
                {
                    ID:                           "2",
                    TaxableAmount:                9.95,
                    TaxCollectable:               0.44,
                    CombinedTaxRate:              0.04375,
                    StateTaxableAmount:           0.0,
                    StateSalesTaxRate:            0.0,
                    StateAmount:                  0.0,
                    CountyTaxableAmount:          9.95,
                    CountyTaxRate:                0.04,
                    CountyAmount:                 0.4,
                    CityTaxableAmount:            0.0,
                    CityTaxRate:                  0.0,
                    CityAmount:                   0.0,
                    SpecialDistrictTaxableAmount: 9.95,
                    SpecialTaxRate:               0.00375,
                    SpecialDistrictAmount:        0.04,
                },
            },
        },
    },
}
```

> Response Scenario: Food & Grocery Exemptions

```json
{
  "tax": {
    "order_total_amount": 37.93,
    "shipping": 7.99,
    "taxable_amount": 0,
    "amount_to_collect": 0,
    "rate": 0,
    "has_nexus": true,
    "freight_taxable": false,
    "tax_source": "destination",
    "jurisdictions": {
      "country": "US",
      "state": "CA",
      "county": "LOS ANGELES",
      "city": "LOS ANGELES"
    },
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
    }
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
  :jurisdictions => #<Taxjar::Jurisdictions:0x00000a @attrs={
    :country => 'US',
    :state => 'CA',
    :county => 'LOS ANGELES',
    :city => 'LOS ANGELES'
  }>,
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
  'jurisdictions': <TaxJarJurisdictions {
    'country': 'US',
    'state': 'CA',
    'county': 'LOS ANGELES',
    'city': 'LOS ANGELES'
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

```go
taxjar.TaxForOrderResponse{
    Tax: taxjar.Tax{
        OrderTotalAmount: 37.93,
        Shipping:         7.99,
        TaxableAmount:    0.0,
        AmountToCollect:  0.0,
        Rate:             0.0,
        HasNexus:         true,
        FreightTaxable:   false,
        TaxSource:        "destination",
        Jurisdictions: taxjar.Jurisdictions{
            Country: "US",
            State:   "CA",
            County:  "LOS ANGELES",
            City:    "LOS ANGELES",
        },
        Breakdown: taxjar.Breakdown{
            TaxableAmount:                 0.0,
            TaxCollectable:                0.0,
            CombinedTaxRate:               0.0,
            StateTaxableAmount:            0.0,
            StateTaxRate:                  0.0,
            StateTaxCollectable:           0.0,
            CountyTaxableAmount:           0.0,
            CountyTaxRate:                 0.0,
            CountyTaxCollectable:          0.0,
            CityTaxableAmount:             0.0,
            CityTaxRate:                   0.0,
            CityTaxCollectable:            0.0,
            SpecialDistrictTaxableAmount:  0.0,
            SpecialTaxRate:                0.0,
            SpecialDistrictTaxCollectable: 0.0,
            LineItems: []taxjar.LineItemBreakdown{
                {
                    ID:                           "1",
                    TaxableAmount:                0.0,
                    TaxCollectable:               0.0,
                    CombinedTaxRate:              0.0,
                    StateTaxableAmount:           0.0,
                    StateSalesTaxRate:            0.0,
                    StateAmount:                  0.0,
                    CountyTaxableAmount:          0.0,
                    CountyTaxRate:                0.0,
                    CountyAmount:                 0.0,
                    CityTaxableAmount:            0.0,
                    CityTaxRate:                  0.0,
                    CityAmount:                   0.0,
                    SpecialDistrictTaxableAmount: 0.0,
                    SpecialTaxRate:               0.0,
                    SpecialDistrictAmount:        0.0,
                },
                {
                    ID:                           "2",
                    TaxableAmount:                0.0,
                    TaxCollectable:               0.0,
                    CombinedTaxRate:              0.0,
                    StateTaxableAmount:           0.0,
                    StateSalesTaxRate:            0.0,
                    StateAmount:                  0.0,
                    CountyTaxableAmount:          0.0,
                    CountyTaxRate:                0.0,
                    CountyAmount:                 0.0,
                    CityTaxableAmount:            0.0,
                    CityTaxRate:                  0.0,
                    CityAmount:                   0.0,
                    SpecialDistrictTaxableAmount: 0.0,
                    SpecialTaxRate:               0.0,
                    SpecialDistrictAmount:        0.0,
                },
            },
        },
    },
}
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

```go
taxjar.TaxForOrderResponse{
    Tax: taxjar.Tax{
        TaxableAmount:   0.0,
        AmountToCollect: 0.0,
        Rate:            0.0,
        HasNexus:        false,
        FreightTaxable:  false,
        TaxSource:       "",
    },
}
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
to_street | string | optional | Street address where the order shipped to. <span class="usage-note" data-tooltip="Street address provides more accurate calculations for the following states: AR, AZ, CA, CO, CT, DC, FL, GA, HI, IA, ID, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, NC, ND, NE, NJ, NM, NV, NY, OH, OK, PA, RI, SC, SD, TN, TX, UT, VA, VT, WA, WI, WV, WY" data-tooltip-position="top center">View Note</span>
amount | float | optional | Total amount of the order, **excluding shipping**. <span class="usage-note" data-tooltip="Either `amount` or `line_items` parameters are required to perform tax calculations." data-tooltip-position="top center">View Note</span>
shipping | float | required | Total amount of shipping for the order.
customer_id | string | optional | Unique identifier of the given customer for exemptions.
exemption_type | string | optional | Type of exemption for the order: `wholesale`, `government`, `marketplace`, `other`, or `non_exempt`.  <span class="usage-note" data-tooltip="An `exemption_type` of `wholesale`, `government`, or `other` will result in an order being determined fully exempt. A value of `marketplace` or `non_exempt will return calculated tax amounts in the response, regardless of any potential customer exemption (determined via `customer_id`)." data-tooltip-position="top center">View Note</span>
nexus_addresses[][id] | string | optional | Unique identifier of the given nexus address. <span class="usage-note" data-tooltip="Either an address on file, `nexus_addresses` parameter, or `from_` parameters are required to perform tax calculations." data-tooltip-position="top center">View Note</span>
nexus_addresses[][country] | string | <span class="conditional" data-tooltip="If providing `nexus_addresses`, country is required." data-tooltip-position="top center">conditional</span> | Two-letter ISO country code for the nexus address.
nexus_addresses[][zip] | string | optional | Postal code for the nexus address.
nexus_addresses[][state] | string | <span class="conditional" data-tooltip="If providing `nexus_addresses`, state is required." data-tooltip-position="top center">conditional</span> | Two-letter ISO state code for the nexus address.
nexus_addresses[][city] | string | optional | City for the nexus address.
nexus_addresses[][street] | string | optional | Street address for the nexus address.
line_items[][id] | string | optional | Unique identifier of the given line item. <span class="usage-note" data-tooltip="Either `amount` or `line_items` parameters are required to perform tax calculations." data-tooltip-position="top center">View Note</span>
line_items[][quantity] | integer | optional | Quantity for the item.
line_items[][product_tax_code] | string | optional | Product tax code for the item. If omitted, the item will remain fully taxable.
line_items[][unit_price] | float | optional | Unit price for the item.
line_items[][discount] | float | optional | Total discount (non-unit) for the item.

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
order_total_amount | float | Total amount of the order.
shipping | float | Total amount of shipping for the order.
taxable_amount | float | Amount of the order to be taxed.
amount_to_collect | float | Amount of sales tax to collect.
rate | float | Overall sales tax rate of the order (`amount_to_collect` &divide; `taxable_amount`).
has_nexus | bool | Whether or not you have [nexus](https://blog.taxjar.com/sales-tax-nexus-definition/) for the order based on an address on file, `nexus_addresses` parameter, or `from_` parameters.
freight_taxable | bool | Freight taxability for the order.
tax_source | string | [Origin-based or destination-based](https://blog.taxjar.com/charging-sales-tax-rates/) sales tax collection.
exemption_type | string | Type of exemption for the order: `wholesale`, `government`, `marketplace`, `other`, or `non_exempt`. If no `customer_id` or `exemption_type` is provided, no `exemption_type` is returned in the response.
jurisdictions | object | Jurisdiction names for the order.
breakdown | object | Breakdown of rates by jurisdiction for the order, shipping, and individual line items. If `has_nexus` is false or no line items are provided, no breakdown is returned in the response.

<h4 id="us-taxes-jurisdiction-attributes"><span class="flag-icon flag-icon-us"></span>&nbsp; United States Jurisdiction Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
country | string | Two-letter ISO country code for given location.
state | string | Postal abbreviated state name for given location.
county | string | County name for given location.
city | string | City name for given location.

<h4 id="canada-taxes-jurisdiction-attributes"><span class="flag-icon flag-icon-ca"></span>&nbsp; Canada Jurisdiction Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
country | string | Two-letter ISO country code for given location.
state | string | Postal abbreviated state name for given location.
city | string | City name for given location.

<h4 id="au-taxes-jurisdiction-attributes"><span class="flag-icon flag-icon-au"></span>&nbsp; Australia Jurisdiction Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
country | string | Two-letter ISO country code for given location.

<h4 id="eu-taxes-jurisdiction-attributes"><span class="flag-icon flag-icon-eu"></span>&nbsp; European Union Jurisdiction Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
country | string | Two-letter ISO country code for given location.
city | string | City name for given location.

<h4 id="us-taxes-breakdown-attributes"><span class="flag-icon flag-icon-us"></span>&nbsp; United States Breakdown Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
taxable_amount | float | Total amount of the order to be taxed.
tax_collectable | float | Total amount of sales tax to collect.
combined_tax_rate | float | Overall sales tax rate of the breakdown which includes state, county, city and district tax for the order and shipping if applicable.
state_taxable_amount | float | Amount of the order to be taxed at the state tax rate.
state_tax_rate | float | State sales tax rate for given location.
state_tax_collectable | float | Amount of sales tax to collect for the state.
county_taxable_amount | float | Amount of the order to be taxed at the county tax rate.
county_tax_rate | float | County sales tax rate for given location.
county_tax_collectable | float | Amount of sales tax to collect for the county.
city_taxable_amount | float | Amount of the order to be taxed at the city tax rate.
city_tax_rate | float | City sales tax rate for given location.
city_tax_collectable | float | Amount of sales tax to collect for the city.
special_district_taxable_amount | float | Amount of the order to be taxed at the special district tax rate.
special_tax_rate | float | Special district sales tax rate for given location.
special_district_tax_collectable | float | Amount of sales tax to collect for the special district.
shipping | object | Breakdown of shipping rates if applicable.
line_items | object | Breakdown of rates by line item if applicable.

<h4 id="canada-taxes-breakdown-attributes"><span class="flag-icon flag-icon-ca"></span>&nbsp; Canada Breakdown Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
gst_taxable_amount | float | Amount of the order to be taxed at the GST rate.
gst_tax_rate | float | Goods and services tax rate for given location.
gst | float | Amount of goods and services tax to collect for given location.
pst_taxable_amount | float | Amount of the order to be taxed at the PST rate.
pst_tax_rate | float | Provincial sales tax rate for given location.
pst | float | Amount of provincial sales tax to collect for given location.
qst_taxable_amount | float | Amount of the order to be taxed at the QST rate.
qst_tax_rate | float | Quebec sales tax rate for given location.
qst | float | Amount of Quebec sales tax to collect for given location.
shipping | object | Breakdown of shipping rates if applicable.
line_items | object | Breakdown of rates by line item if applicable.

<h4 id="international-taxes-breakdown-attributes"><span class="flag-icon flag-icon-eu"></span> <span class="flag-icon flag-icon-au"></span>&nbsp; International Breakdown Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
country_taxable_amount | float | Amount of the order to be taxed at the country tax rate.
country_tax_rate | float | Country sales tax rate for given location
country_tax_collectable | float | Amount of sales tax to collect for the country.
shipping | object | Breakdown of shipping rates if applicable.
line_items | object | Breakdown of rates by line item if applicable.
