# Sandbox Environment

> Sandbox Example

```ruby
require 'taxjar'
client = Taxjar::Client.new(
  api_key: 'YOUR_SANDBOX_API_KEY',
  api_url: Taxjar::API::Request::SANDBOX_API_URL
)
```

```python
import taxjar
client = taxjar.Client(
  api_key='YOUR_SANDBOX_API_KEY',
  api_url=taxjar.SANDBOX_API_URL
)
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: process.env.TAXJAR_SANDBOX_API_KEY,
  apiUrl: Taxjar.SANDBOX_API_URL
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey($_ENV['TAXJAR_SANDBOX_API_KEY']);
$client->setApiConfig('api_url', TaxJar\Client::SANDBOX_API_URL);
```

```csharp
using Taxjar;
var client = new TaxjarApi("YOUR_SANDBOX_API_KEY", new {
  apiUrl = "https://api.sandbox.taxjar.com"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import java.util.HashMap;
import java.util.Map;

public class SandboxExample {

    public static void main(String[] args) {
        Map<String, String> params = new HashMap<>();
        params.put("apiUrl", Taxjar.SANDBOX_API_URL);

        Taxjar client = new Taxjar("YOUR SANDBOX API TOKEN", params);
    }

}
```

```shell
$ curl https://api.sandbox.taxjar.com/v2/categories \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"
```

TaxJar provides a sandbox environment for automated testing and development on all [TaxJar Plus](https://www.taxjar.com/plus/) plans. After generating a sandbox API token, point your API client to the sandbox environment:

`https://api.sandbox.taxjar.com`

For sales tax calculations, you’ll get the exact same results you would expect from our production API. Transaction endpoints for orders and refunds return stubbed responses. You can pass transactions to our sandbox to validate your data and ensure it will be accepted by TaxJar.

Some of the production API endpoints are [not fully supported](https://support.taxjar.com/article/677-which-sandbox-endpoints-are-currently-supported) in the sandbox environment.

To mock specific [error response codes](#errors), pass a custom `X-TJ-Expected-Response` header using the `setApiConfig` or `set_api_config` method available in our API clients.
