---
title: API Reference

language_tabs:
  - shell
  - ruby
  - python

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>

includes:
  - errors

search: true
---

# Introduction

Welcome to the TaxJar API! You can use our API to access TaxJar API endpoints, which can get information on sales tax rates, categories or upload receipts.

We have language bindings in Shell, Ruby, and Python! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.


# Authentication

> To authorize, use this code:

```ruby
require 'taxjar'

api = TaxJar::APIClient.authorize!('9e0cd62a22f451701f29c3bde214c041')
```

```python
import taxjar

api = taxjar.authorize('9e0cd62a22f451701f29c3bde214c041')
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: Token token=\"9e0cd62a22f451701f29c3bde214c041\""

or 

curl "api_endpoint_here"
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214c041"
  
```

> Make sure to replace `9e0cd62a22f451701f29c3bde214c041` with your API key.

TaxJar uses API keys to allow access to the API. You can register a new TaxJar API key at our [developer portal](http://taxjar.com/developers).

TaxJar expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: Token="9e0cd62a22f451701f29c3bde214c041"`

or

`Authorization: Bearer 9e0cd62a22f451701f29c3bde214c041`

<aside class="notice">
You must replace <code>9e0cd62a22f451701f29c3bde214c041</code> with your personal API key.
</aside>

# Endpoints

The details of all API endpoints follow:

# Enhanced Receipts

## Create an order receipt

```ruby
require 'taxjar'

api = TaxJar::APIClient.authorize!('9e0cd62a22f451701f29c3bde214c041')
api.enhanced.receipts.orders.post(...)
```

```python
import taxjar

api = taxjar.authorize('9e0cd62a22f451701f29c3bde214c041')
api.enhanced.receipts.orders.post(...)
```

```shell
curl -X POST "http://api.taxjar.com/v2/enhanced/receipts/orders"
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214c041"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Isis",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint creates a new order receipt.

### HTTP Request

`POST http://example.com/enhanced/receipts/orders`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
amount |  | The total amount of the order.
sales_tax |  | The total sales tax collected for the order.

<aside class="success">
Remember — orders good, refunds bad!
</aside>

## Update an order receipt

```ruby
require 'taxjar'

api = TaxJar::APIClient.authorize!('9e0cd62a22f451701f29c3bde214c041')
api.enhanced.receipts.orders.put(1234,...)
```

```python
import taxjar

api = taxjar.authorize('9e0cd62a22f451701f29c3bde214c041')
api.enhanced.receipts.orders.put(1234,...)
```

```shell
curl -X PUT "http://taxjar.com/v2/enhanced/receipts/orders/1234"
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214c041"
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Isis",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint updates a specific order receipt.

<aside class="warning">If you're not using an administrator API key, note that some endpoints will return 403 Forbidden if they are hidden for admins only.</aside>

### HTTP Request

`PUT http://example.com/enhanced/receipts/orders/<transaction_id>`

### URL Parameters

Parameter | Description
--------- | -----------
transaction_id | The transaction id of the order receipt to update

