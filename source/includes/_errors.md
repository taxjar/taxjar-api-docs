# Errors

> &nbsp;

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

begin
  # Invalid request
  order = client.create_order({
    :transaction_date => '2015/05/14',
    :to_country => 'US',
    :to_state => 'CA',
    :to_zip => '90002',
    :amount => 17.45,
    :shipping => 1.5,
    :sales_tax => 0.95
  })
rescue Taxjar::Error => e
  # <Taxjar::Error::NotAcceptable: transaction_id is missing>
  puts e.class.name
  puts e.message
end
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

try:
  order = client.create_order({
    'transaction_date': '2015/05/14',
    'to_country': 'US',
    'to_state': 'CA',
    'to_zip': '90002',
    'amount': 17.45,
    'shipping': 1.5,
    'sales_tax': 0.95
  })
except taxjar.exceptions.TaxJarConnectionError as err:
  print err
except taxjar.exceptions.TaxJarResponseError as err:
  # 406 Not Acceptable – transaction_id is missing
  print err.full_response
```

```javascript
var client = require("taxjar")("9e0cd62a22f451701f29c3bde214");

// Invalid request
taxjar.createOrder({
  transaction_date: '2015/05/14',
  to_country: 'US',
  to_state: 'CA',
  to_zip: '90002',
  amount: 17.45,
  shipping: 1.5,
  sales_tax: 0.95
}).then(function(res) {
  res.order; // Order object
}).catch(function(err) {
  err.detail; // Error detail
  err.status; // Error status code
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

try {
  // Invalid request
  $order = $client->createOrder([
    'transaction_date' => '2015/05/14',
    'to_country' => 'US',
    'to_zip' => '90002',
    'to_state' => 'CA',
    'amount' => 17.45,
    'shipping' => 1.5,
    'sales_tax' => 0.95
  ]);
} catch (TaxJar\Exception $e) {
  // 406 Not Acceptable – transaction_id is missing
  echo $e->getMessage();

  // 406
  echo $e->getStatusCode();
}
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

try
{
  // Invalid request
  var order = client.CreateOrder(new {
    transaction_date = "2015/05/04",
    to_country = "US",
    to_zip = "90002",
    to_state = "CA",
    amount = 17.45,
    shipping = 1.5,
    sales_tax = 0.95
  });
}
catch(TaxjarException e)
{
  // 406 Not Acceptable – transaction_id is missing
  e.TaxjarError.Error;
  e.TaxjarError.Detail;
  e.TaxjarError.StatusCode;
}
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.OrderResponse;
import java.util.HashMap;
import java.util.Map;

public class ErrorHandlingExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("transaction_date", "2015/05/04");
            params.put("to_country", "US");
            params.put("to_zip", "90002");
            params.put("to_state", "CA");
            params.put("amount", 17.45);
            params.put("shipping", 1.5);
            params.put("sales_tax", 0.95);

            OrderResponse res = client.createOrder(params);
        } catch (TaxjarException e) {
            // 406 Not Acceptable – transaction_id is missing
            e.getMessage();
            e.getStatusCode();
            e.printStackTrace();
        }
    }

}
```

The TaxJar API uses the following error codes:

Code | Error Message
---- | ----------------------------------------------------------------------------------
400  | Bad Request -- Your request format is bad.
401  | Unauthorized -- Your API key is wrong.
403  | Forbidden -- The resource requested is not authorized for use.
404  | Not Found -- The specified resource could not be found.
405  | Method Not Allowed -- You tried to access a resource with an invalid method.
406  | Not Acceptable -- Your request is not acceptable.
410  | Gone -- The resource requested has been removed from our servers.
422  | Unprocessable Entity -- Your request could not be processed.
429  | Too Many Requests -- You're requesting too many resources! Slow down!
500  | Internal Server Error -- We had a problem with our server. Try again later.
503  | Service Unavailable -- We're temporarily offline for maintenance. Try again later.

## 400 Bad Request

If you receive the message "No from address, no nexus address, and no address on file", we recommend providing `from_` or `nexus_addresses[]` depending on the endpoint's accepted parameters. Otherwise [sign in](https://app.taxjar.com/sign_in) and provide your [business address and locations](https://app.taxjar.com/account) in TaxJar.

Additionally, we provide specific 400 error messages for invalid data:

- Invalid ZIP and state combinations for `to_zip`, `to_state` and `from_zip`, `from_state`

### Transactions

- `amount` param does not equal sum of `line_items` excluding `shipping`
- `line_items[][description]` param exceeds limit of 255 characters

## 401 Unauthorized

Verify your API token is correct and make sure you're correctly setting the [Authorization header](#authentication).

## 403 Forbidden

Make sure you have an active API token with TaxJar by [reviewing your account](https://app.taxjar.com/account). Your trial or subscription may have expired. If you're still not sure what's wrong, [contact us](https://www.taxjar.com/contact) and we'll investigate.

## 406 Not Acceptable

This error occurs most often when posting form-encoded data with parameters such as `nexus_addresses[]` or `line_items[]`. If your code looks correct, try submitting the request with a `Content-Type: application/json` header. **Data should always be JSON-encoded.**

Additionally, a 406 response will be returned if you provide blank values for required fields when pushing orders or refunds through the `/v2/transactions` endpoints.

## 422 Unprocessable Entity

If you attempt to create an order or refund transaction that already exists in TaxJar, you'll receive a 422 error. As a fallback, make a PUT request instead and [update the existing transaction](#put-update-an-order-transaction).
