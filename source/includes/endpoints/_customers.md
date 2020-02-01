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

```go
client.ListCustomers()
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
import com.taxjar.model.transactions.CustomersResponse;
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

    res, err := client.ListCustomers()
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Customers)
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

```python
['123', '124', '125']
```

```json
{
  "customers": [
    "123",
    "456"
  ]
}
```

```go
taxjar.ListCustomersResponse{
  Customers: []string{
    "123",
    "456",
  },
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

```go
client.ShowCustomer()
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
import com.taxjar.model.transactions.CustomerResponse;

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

    res, err := client.ShowCustomer("123")
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Customer)
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

```python
<TaxJarCustomer {
  'customer_id': '123',
  'exemption_type': 'wholesale',
  'exempt_regions': [<TaxJarExemptRegion {
    'country': 'US',
    'state': 'FL'
  }>, <TaxJarExemptRegion {
    'country': 'US',
    'state': 'PA'
  }>],
  'name': 'Dunder Mifflin Paper Company',
  'country': 'US',
  'state': 'PA',
  'zip': '18504',
  'city': 'Scranton',
  'street': '1725 Slough Avenue'
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

```go
taxjar.ShowCustomerResponse{
    Customer: taxjar.Customer{
        CustomerID:    "123",
        ExemptionType: "wholesale",
        ExemptRegions: []taxjar.ExemptRegion{
            {
                Country: "US",
                State:   "FL",
            },
            {
                Country: "US",
                State:   "PA",
            },
        },
        Name:    "Dunder Mifflin Paper Company",
        Country: "US",
        State:   "PA",
        Zip:     "18504",
        City:    "Scranton",
        Street:  "1725 Slough Avenue",
    },
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

```go
client.CreateCustomer()
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
import com.taxjar.model.customers.CustomerResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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

            Map<String, String> exemptRegion = new HashMap<>();
            exemptRegion.put("country", "US");
            exemptRegion.put("state", "FL");

            Map<String, String> exemptRegion2 = new HashMap<>();
            exemptRegion.put("country", "US");
            exemptRegion.put("state", "PA");

            exemptRegions.add(exemptRegion);
            exemptRegions.add(exemptRegion2);

            params.put("exempt_regions", exemptRegions);

            CustomerResponse res = client.createCustomer(params);
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

    res, err := client.CreateCustomer(taxjar.CreateCustomerParams{
        CustomerID:    "123",
        ExemptionType: "wholesale",
        Name:          "Dunder Mifflin Paper Company",
        ExemptRegions: []taxjar.ExemptRegion{
            {
                Country: "US",
                State:   "FL",
            },
            {
                Country: "US",
                State:   "PA",
            },
        },
        Country: "US",
        State:   "PA",
        Zip:     "18504",
        City:    "Scranton",
        Street:  "1725 Slough Avenue",
    })
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Customer)
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

```python
<TaxJarCustomer {
  'customer_id': '123',
  'exemption_type': 'wholesale',
  'exempt_regions': [<TaxJarExemptRegion {
    'country': 'US',
    'state': 'FL'
  }>, <TaxJarExemptRegion {
    'country': 'US',
    'state': 'PA'
  }>],
  'name': 'Dunder Mifflin Paper Company',
  'country': 'US',
  'state': 'PA',
  'zip': '18504',
  'city': 'Scranton',
  'street': '1725 Slough Avenue'
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

```go
taxjar.CreateCustomerResponse{
    Customer: taxjar.Customer{
        CustomerID:    "123",
        ExemptionType: "wholesale",
        Name:          "Dunder Mifflin Paper Company",
        ExemptRegions: []taxjar.ExemptRegion{
            {
                Country: "US",
                State:   "FL",
            },
            {
                Country: "US",
                State:   "PA",
            },
        },
        Country: "US",
        State:   "PA",
        Zip:     "18504",
        City:    "Scranton",
        Street:  "1725 Slough Avenue",
    },
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
name | string | required | Name of the customer.
exempt_regions[][country] | string | optional | Two-letter ISO country code where the customer is exempt. <span class="usage-note" data-tooltip="If no exempt regions are provided, the customer will be treated as exempt or non-exempt everywhere." data-tooltip-position="top center">View Note</span>
exempt_regions[][state] | string | optional | Two-letter ISO state code where the customer is exempt.
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

```go
client.UpdateCustomer()
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

customer = client.update_customer('123', {
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
import com.taxjar.model.customers.CustomerResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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

            Map<String, String> exemptRegion = new HashMap<>();
            exemptRegion.put("country", "US");
            exemptRegion.put("state", "NY");

            exemptRegions.add(exemptRegion);

            params.put("exempt_regions", exemptRegions);

            CustomerResponse res = client.updateCustomer("123", params);
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

    res, err := client.UpdateCustomer(taxjar.UpdateCustomerParams{
        CustomerID:    "123",
        ExemptionType: "wholesale",
        Name:          "Sterling Cooper",
        ExemptRegions: []taxjar.ExemptRegion{
            {
                Country: "US",
                State:   "NY",
            },
        },
        Country: "US",
        State:   "NY",
        Zip:     "10010",
        City:    "New York",
        Street:  "405 Madison Ave",
    })
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Customer)
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

```python
<TaxJarCustomer {
  'customer_id': '123',
  'exemption_type': 'wholesale',
  'exempt_regions': [<TaxJarExemptRegion {
    'country': 'US',
    'state': 'NY'
  }>],
  'name': 'Sterling Cooper',
  'country': 'US',
  'state': 'NY',
  'zip': '10010',
  'city': 'New York',
  'street': '405 Madison Ave'
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

```go
taxjar.UpdateCustomerResponse{
    Customer: taxjar.Customer{
        CustomerID:    "123",
        ExemptionType: "wholesale",
        Name:          "Sterling Cooper",
        ExemptRegions: []taxjar.ExemptRegion{
            {
                Country: "US",
                State:   "NY",
            },
        },
        Country: "US",
        State:   "NY",
        Zip:     "10010",
        City:    "New York",
        Street:  "405 Madison Ave",
    },
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
name | string | required | Name of the customer.
exempt_regions[][country] | string | optional | Two-letter ISO country code where the customer is exempt. <span class="usage-note" data-tooltip="If no exempt regions are provided, the customer will be treated as exempt or non-exempt everywhere." data-tooltip-position="top center">View Note</span>
exempt_regions[][state] | string | optional | Two-letter ISO state code where the customer is exempt.
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

```go
client.DeleteCustomer()
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
import com.taxjar.model.customers.CustomerResponse;

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

    res, err := client.DeleteCustomer("123")
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Customer)
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

```python
<TaxJarCustomer {
  'customer_id': '123',
  'exemption_type': 'wholesale',
  'exempt_regions': [<TaxJarExemptRegion {
    'country': 'US',
    'state': 'FL'
  }>, <TaxJarExemptRegion {
    'country': 'US',
    'state': 'PA'
  }>],
  'name': 'Dunder Mifflin Paper Company',
  'country': 'US',
  'state': 'PA',
  'zip': '18504',
  'city': 'Scranton',
  'street': '1725 Slough Avenue'
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

```go
taxjar.DeleteCustomerResponse{
    Customer: taxjar.Customer{
        CustomerID:    "123",
        ExemptionType: "wholesale",
        Name:          "Dunder Mifflin Paper Company",
        ExemptRegions: []taxjar.ExemptRegion{
            {
                Country: "US",
                State:   "FL",
            },
            {
                Country: "US",
                State:   "PA",
            },
        },
        Country: "US",
        State:   "PA",
        Zip:     "18504",
        City:    "Scranton",
        Street:  "1725 Slough Avenue",
    },
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
