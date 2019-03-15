## Validations

### <span class="badge badge--post">post</span> Validate an address

> Definition

```ruby
client.validate_address
```

```python
client.validate_address
```

```javascript
client.validateAddress();
```

```php?start_inline=1
$client->validateAddress();
```

```csharp
client.ValidateAddress();
```

```java
client.validateAddress();
```

```shell
POST https://api.taxjar.com/v2/addresses/validate
```

> <span data-default="Single Address Match">Request Example</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

addresses = client.validate_address({
  :country => 'US',
  :state => 'AZ',
  :zip => '85297',
  :city => 'Gilbert',
  :street => '3301 South Greenfield Rd'
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

addresses = client.validate_address({
  'country': 'US',
  'state': 'AZ',
  'zip': '85297',
  'city': 'Gilbert',
  'street': '3301 South Greenfield Rd'
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.validateAddress({
  country: 'US',
  state: 'AZ',
  zip: '85297',
  city: 'Gilbert',
  street: '3301 South Greenfield Rd'
}).then(res => {
  res.addresses; // Addresses object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$addresses = $client->validateAddress([
  'country' => 'US',
  'state' => 'AZ',
  'zip' => '85297',
  'city' => 'Gilbert',
  'street' => '3301 South Greenfield Rd'
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var addresses = client.ValidateAddress(new {
  country = "US",
  state = "AZ",
  zip = "85297",
  city = "Gilbert",
  street = "3301 South Greenfield Rd"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.validations.AddressResponse;
import java.util.HashMap;
import java.util.Map;

public class ValidateAddressExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("country", "US");
            params.put("state", "AZ");
            params.put("zip", "85297");
            params.put("city", "Gilbert");
            params.put("street", "3301 South Greenfield Rd");

            AddressResponse res = client.validateAddress(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/addresses/validate \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "country": "US",
    "state": "AZ",
    "zip": "85297",
    "city": "Gilbert",
    "street": "3301 South Greenfield Rd"
  }'
```

> <span class="scenario">Request Scenario: Multiple Address Matches</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

addresses = client.validate_address({
  :state => 'AZ',
  :city => 'Phoenix',
  :street => '1109 9th'
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

addresses = client.validate_address({
  'state': 'AZ',
  'city': 'Phoenix',
  'street': '1109 9th'
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.validateAddress({
  state: 'AZ',
  city: 'Phoenix',
  street: '1109 9th'
}).then(res => {
  res.addresses; // Addresses object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$addresses = $client->validateAddress([
  'state' => 'AZ',
  'city' => 'Phoenix',
  'street' => '1109 9th'
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var addresses = client.ValidateAddress(new {
  state = "AZ",
  city = "Phoenix",
  street = "1109 9th"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.validations.AddressResponse;
import java.util.HashMap;
import java.util.Map;

public class ValidateAddressExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("state", "AZ");
            params.put("city", "Phoenix");
            params.put("street", "1109 9th");

            AddressResponse res = client.validateAddress(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/addresses/validate \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "state": "AZ",
    "city": "Phoenix",
    "street": "1109 9th"
  }'
```

> <span class="scenario">Request Scenario: Zip-Only Address Validation</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

addresses = client.validate_address({
  :zip => '98122'
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

addresses = client.validate_address({
  'zip': '98122'
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.validateAddress({
  zip: '98122'
}).then(res => {
  res.addresses; // Addresses object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$addresses = $client->validateAddress([
  'zip' => '98122'
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var addresses = client.ValidateAddress(new {
  zip = "98122"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.validations.AddressResponse;
import java.util.HashMap;
import java.util.Map;

public class ValidateAddressExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("zip", "98122");

            AddressResponse res = client.validateAddress(params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/addresses/validate \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "Content-Type: application/json" \
  -d '{
    "zip": "98122"
  }'
```

> Response Example

```json
{
  "addresses": [
    {
      "zip": "85297-2176",
      "street": "3301 S Greenfield Rd",
      "state": "AZ",
      "country": "US",
      "city": "Gilbert"
    }
  ]
}
```

```ruby
[
  #<Taxjar::Address:0x00000a @attrs={
    :zip => "85297-2176",
    :street => "3301 S Greenfield Rd",
    :state => "AZ",
    :country => "US",
    :city => "Gilbert"
  }>
]
```

```python
[
  <TaxJarAddress {
    'zip': '85297-2176',
    'street': '3301 S Greenfield Rd',
    'state': 'AZ',
    'country': 'US',
    'city': 'Gilbert'
  }>
]
```

> Response Scenario: Multiple Address Matches

```json
{
  "addresses": [
    {
      "zip": "85007-3646",
      "street": "1109 S 9th Ave",
      "state": "AZ",
      "country": "US",
      "city": "Phoenix"
    },
    {
      "zip": "85006-2734",
      "street": "1109 N 9th St",
      "state": "AZ",
      "country": "US",
      "city": "Phoenix"
    }
  ]
}
```

```ruby
[
  #<Taxjar::Address:0x00000a @attrs={
    :zip => "85007-3646",
    :street => "1109 S 9th Ave",
    :state => "AZ",
    :country => "US",
    :city => "Phoenix"
  }>,
  #<Taxjar::Address:0x00000a @attrs={
    :zip => "85006-2734",
    :street => "1109 N 9th St",
    :state => "AZ",
    :country => "US",
    :city => "Phoenix"
  }>
]
```

```python
[
  <TaxJarAddress {
    'zip': '85007-3646',
    'street': '1109 S 9th Ave',
    'state': 'AZ',
    'country': 'US',
    'city': 'Phoenix'
  }>,
  <TaxJarAddress {
    'zip': '85006-2734',
    'street': '1109 N 9th St',
    'state': 'AZ',
    'country': 'US',
    'city': 'Phoenix'
  }>
]
```

> Response Scenario: Zip-Only Address Validation

```json
{
  "addresses": [
    {
      "zip": "98122",
      "state": "WA",
      "country": "US",
      "city": "Seattle"
    }
  ]
}
```

```ruby
[
  #<Taxjar::Address:0x00000a @attrs={
    :zip => "98122",
    :state => "WA",
    :country => "US",
    :city => "Seattle"
  }>
]
```

```python
[
  <TaxJarAddress {
    'zip': '98122',
    'state': 'WA',
    'country': 'US',
    'city': 'Seattle'
  }>
]
```

Validates a customer address and returns back a collection of address matches. **Address validation requires a [TaxJar Plus](https://www.taxjar.com/plus/) subscription.**

<a href="https://www.taxjar.com/plus/" target="_blank"><img src="https://www.taxjar.com/img/lander/plus_temp/plus_logo.png" alt="TaxJar Plus" width="100"></a>

#### Request

POST https://api.taxjar.com/v2/addresses/validate

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
country | string | optional | Two-letter ISO country code of the customer's address. **At this time only US addresses can be validated.**
state | string | <span class="conditional" data-tooltip="Required in street + city + state combination for full address validation." data-tooltip-position="top center">conditional</span> | Two-letter ISO state code of the customer's address.
zip | string | <span class="conditional" data-tooltip="Required for zip-only address validation or street + zip combination for full address validation." data-tooltip-position="top center">conditional</span> | Postal code of the customer's address (5-Digit ZIP or ZIP+4).
city | string | <span class="conditional" data-tooltip="Required in street + city + state combination for full address validation." data-tooltip-position="top center">conditional</span> | City of the customer's address.
street | string | <span class="conditional" data-tooltip="Required for full address validation." data-tooltip-position="top center">conditional</span> | Street address of the customer's address or the entire address as "freeform" input.

#### Response

Returns an `addresses` JSON object with an array of address matches. If no addresses are found, a 404 response is returned.

#### Full Address Attributes

Parameter | Type | Description
--------- | ------- | -----------
country | string | Two-letter ISO country code of the customer's address.
state | string | Two-letter ISO state code of the customer's address.
zip | string | Postal code of the customer's address (ZIP+4).
city | string | City of the customer's address.
street | string | Street address of the customer's address.

#### Zip-only Address Attributes

Parameter | Type | Description
--------- | ------- | -----------
country | string | Two-letter ISO country code of the customer's address.
state | string | Two-letter ISO state code of the customer's address.
zip | string | Postal code of the customer's address.
city | string | City of the customer's address.

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
client.ValidateVat();
```

```java
client.validateVat();
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

var validation = client.ValidateVat(new {
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

            ValidationResponse res = client.validateVat(params);
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
