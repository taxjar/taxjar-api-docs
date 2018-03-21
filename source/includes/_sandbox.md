# Sandbox Environment

> Configuring Your API Client for Sandbox

```ruby
require 'taxjar'
client = Taxjar::Client.new(
  api_key: 'YOUR_SANDBOX_API_KEY',
  api_url: 'https://api.sandbox.taxjar.com'
)
```

```python
import taxjar
client = taxjar.Client(
  api_key='YOUR_SANDBOX_API_KEY',
  api_url='https://api.sandbox.taxjar.com'
)
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: process.env.TAXJAR_SANDBOX_API_KEY,
  apiUrl: 'https://api.sandbox.taxjar.com'
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey($_ENV['TAXJAR_SANDBOX_API_KEY']);
$client->setApiConfig('api_url', TaxJar\Client::SANDBOX_API_URL);
```

TaxJar provides a sandbox environment for automated testing and development on all [TaxJar Plus](https://www.taxjar.com/plus/) plans. After generating a sandbox API token, point your API client to the sandbox environment:

`https://api.sandbox.taxjar.com`

For sales tax calculations, you’ll get the exact same results you would expect from our production API. Transaction endpoints for orders and refunds return stubbed responses. You can pass transactions to our sandbox to validate your data and ensure it will be accepted by TaxJar.

To mock specific [error response codes](#errors), pass a custom `X-TJ-Expected-Response` header using the `setApiConfig` or `set_api_config` method available in our API clients.
