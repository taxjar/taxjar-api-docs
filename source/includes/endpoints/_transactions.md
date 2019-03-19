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
provider | string | optional | Source of where the transactions were originally recorded. Defaults to "api".

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
    "provider": "api",
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
  :provider => "api",
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
  'to_state': 'CA',
  'provider': 'api'
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
provider | string | Source of where the transaction was originally recorded.
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
amount | decimal | Total amount of the order with shipping, **excluding sales tax**.
shipping | decimal | Total amount of shipping for the order.
sales_tax | decimal | Total amount of sales tax collected for the order.
line_items[][id] | string | Unique identifier of the given line item.
line_items[][quantity] | integer | Quantity for the item.
line_items[][product_identifier] | string | Product identifier for the item.
line_items[][description] | string  | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | Product tax code for the item.
line_items[][unit_price] | decimal | Unit price for the item in dollars.
line_items[][discount] | decimal | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | decimal | Total sales tax collected (non-unit) for the item in dollars.

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
    "provider": "api",
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
  :provider => "api",
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
  'to_state': 'CA',
  'provider': 'api'
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
provider | string | optional | Source of where the transaction was originally recorded. Defaults to "api". <span class="usage-note" data-tooltip="Use this parameter to exempt marketplace transactions or identify transactions across multiple channels. TaxJar currently supports marketplace exemptions for 'amazon', 'ebay', 'etsy', and 'walmart' transactions." data-tooltip-position="top center">View Note</span>
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
amount | decimal | required | Total amount of the order with shipping, **excluding sales tax** in dollars.
shipping | decimal | required | Total amount of shipping for the order in dollars.
sales_tax | decimal | required | Total amount of sales tax collected for the order in dollars.
customer_id | string | optional | Unique identifier of the given customer for exemptions.
line_items[][id] | string | optional | Unique identifier of the given line item.
line_items[][quantity] | integer | optional | Quantity for the item.
line_items[][product_identifier] | string | optional | Product identifier for the item.
line_items[][description] | string | optional | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | optional | Product tax code for the item. If omitted, the item will remain fully taxable.
line_items[][unit_price] | decimal | optional | Unit price for the item in dollars.
line_items[][discount] | decimal | optional | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | decimal | optional | Total sales tax collected (non-unit) for the item in dollars.

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
provider | string | Source of where the transaction was originally recorded.
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
amount | decimal | Total amount of the order with shipping, **excluding sales tax**.
shipping | decimal | Total amount of shipping for the order.
sales_tax | decimal | Total amount of sales tax collected for the order.
line_items[][id] | string | Unique identifier of the given line item.
line_items[][quantity] | integer | Quantity for the item.
line_items[][product_identifier] | string | Product identifier for the item.
line_items[][description] | string  | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | Product tax code for the item.
line_items[][unit_price] | decimal | Unit price for the item in dollars.
line_items[][discount] | decimal | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | decimal | Total sales tax collected (non-unit) for the item in dollars.

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
    "provider": "api",
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
  :provider => 'api',
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
  'to_state': 'CA',
  'provider': 'api'
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
amount | decimal | optional | Total amount of the order with shipping, **excluding sales tax** in dollars.
shipping | decimal | optional | Total amount of shipping for the order in dollars.
sales_tax | decimal | optional | Total amount of sales tax collected for the order in dollars.
customer_id | string | optional | Unique identifier of the given customer for exemptions.
line_items[][id] | string | optional | Unique identifier of the given line item.
line_items[][quantity] | integer | optional | Quantity for the item.
line_items[][product_identifier] | string | optional | Product identifier for the item.
line_items[][description] | string | optional | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | optional | Product tax code for the item. If omitted, the item will remain fully taxable.
line_items[][unit_price] | decimal | optional | Unit price for the item in dollars.
line_items[][discount] | decimal | optional | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | decimal | optional | Total sales tax collected (non-unit) for the item in dollars.

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
provider | string | Source of where the transaction was originally recorded.
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
amount | decimal | Total amount of the order with shipping, **excluding sales tax**.
shipping | decimal | Total amount of shipping for the order.
sales_tax | decimal | Total amount of sales tax collected for the order.
line_items[][id] | string | Unique identifier of the given line item.
line_items[][quantity] | integer | Quantity for the item.
line_items[][product_identifier] | string | Product identifier for the item.
line_items[][description] | string  | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | Product tax code for the item.
line_items[][unit_price] | decimal | Unit price for the item in dollars.
line_items[][discount] | decimal | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | decimal | Total sales tax collected (non-unit) for the item in dollars.

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
    "provider": "api",
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
  :provider => "api",
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
  'to_state': None,
  'provider': 'api'
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
provider | string | optional | Source of where the transactions were originally recorded. Defaults to "api".

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
    "provider": "api",
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
  :provider => "api",
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
  'to_state': 'CA',
  'provider': 'api'
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
provider | string | Source of where the transaction was originally recorded.
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
amount | decimal | Total amount of the refunded order with shipping, **excluding sales tax**.
shipping | decimal | Total amount of shipping for the refunded order.
sales_tax | decimal | Total amount of sales tax collected for the refunded order.
line_items[][id] | string | Unique identifier of the given line item.
line_items[][quantity] | integer | Quantity for the item.
line_items[][product_identifier] | string | Product identifier for the item.
line_items[][description] | string  | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | Product tax code for the item.
line_items[][unit_price] | decimal | Unit price for the item in dollars.
line_items[][discount] | decimal | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | decimal | Total sales tax collected (non-unit) for the item in dollars.

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
    "provider": "api",
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
  :provider => "api",
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
  'to_state': 'CA',
  'provider': 'api'
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
provider | string | optional | Source of where the transaction was originally recorded. Defaults to "api". <span class="usage-note" data-tooltip="Use this parameter to exempt marketplace transactions or identify transactions across multiple channels. TaxJar currently supports marketplace exemptions for 'amazon', 'ebay', 'etsy', and 'walmart' transactions." data-tooltip-position="top center">View Note</span>
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
amount | decimal | required | Total amount of the refunded order with shipping, **excluding sales tax** in dollars.
shipping | decimal | required | Total amount of shipping for the refunded order in dollars.
sales_tax | decimal | required | Total amount of sales tax collected for the refunded order in dollars.
customer_id | string | optional | Unique identifier of the given customer for exemptions.
line_items[][id] | string | optional | Unique identifier of the given line item.
line_items[][quantity] | integer | optional | Quantity for the item.
line_items[][product_identifier] | string | optional | Product identifier for the item.
line_items[][description] | string | optional | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | optional | Product tax code for the item. If omitted, the item will remain fully taxable.
line_items[][unit_price] | decimal | optional | Unit price for the item in dollars.
line_items[][discount] | decimal | optional | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | decimal | optional | Total sales tax collected (non-unit) for the item in dollars.

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
provider | string | Source of where the transaction was originally recorded.
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
amount | decimal | Total amount of the refunded order with shipping, **excluding sales tax**.
shipping | decimal | Total amount of shipping for the refunded order.
sales_tax | decimal | Total amount of sales tax collected for the refunded order.
line_items[][id] | string | Unique identifier of the given line item.
line_items[][quantity] | integer | Quantity for the item.
line_items[][product_identifier] | string | Product identifier for the item.
line_items[][description] | string  | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | Product tax code for the item.
line_items[][unit_price] | decimal | Unit price for the item in dollars.
line_items[][discount] | decimal | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | decimal | Total sales tax collected (non-unit) for the item in dollars.

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
    "provider": "api",
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
  :provider => "api",
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
  'to_state': 'CA',
  'provider': 'api'
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
amount | decimal | optional | Total amount of the refunded order with shipping, **excluding sales tax** in dollars.
shipping | decimal | optional | Total amount of shipping for the refunded order in dollars.
sales_tax | decimal | optional | Total amount of sales tax collected for the refunded order in dollars.
customer_id | string | optional | Unique identifier of the given customer for exemptions.
line_items[][id] | string | optional | Unique identifier of the given line item.
line_items[][quantity] | integer | optional | Quantity for the item.
line_items[][product_identifier] | string | optional | Product identifier for the item.
line_items[][description] | string | optional | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | optional | Product tax code for the item. If omitted, the item will remain fully taxable.
line_items[][unit_price] | decimal | optional | Unit price for the item in dollars.
line_items[][discount] | decimal | optional | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | decimal | optional | Total sales tax collected (non-unit) for the item in dollars.

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
provider | string | Source of where the transaction was originally recorded.
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
amount | decimal | Total amount of the refunded order with shipping, **excluding sales tax**.
shipping | decimal | Total amount of shipping for the refunded order.
sales_tax | decimal | Total amount of sales tax collected for the refunded order.
line_items[][id] | string | Unique identifier of the given line item.
line_items[][quantity] | integer | Quantity for the item.
line_items[][product_identifier] | string | Product identifier for the item.
line_items[][description] | string  | Description of the line item (up to 255 characters).
line_items[][product_tax_code] | string | Product tax code for the item.
line_items[][unit_price] | decimal | Unit price for the item in dollars.
line_items[][discount] | decimal | Total discount (non-unit) for the item in dollars.
line_items[][sales_tax] | decimal | Total sales tax collected (non-unit) for the item in dollars.

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
    "provider": "api",
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
  :provider => "api",
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
  'to_state': None,
  'provider': 'api'
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
