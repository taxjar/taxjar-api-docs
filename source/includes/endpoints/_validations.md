## Validations

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
