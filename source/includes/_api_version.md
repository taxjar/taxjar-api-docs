# API Version

> Example Request Header With An API Version Specified

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

client.set_api_config('headers', {
  'x-api-version' => '2020-08-07'
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

client.set_api_config('headers', {
  'x-api-version': '2020-08-07'
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.setApiConfig('headers', {
  'x-api-version': '2020-08-07'
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$client->setApiConfig('headers', [
  'x-api-version' => '2020-08-07'
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

client.setApiConfig("headers", new Dictionary<string, string> {
  { "x-api-version", "2020-08-07" }
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import java.util.HashMap;
import java.util.Map;

public class ApiVersionExample {

    public static void main(String[] args) {
        Map<String, Object> params = new HashMap<>();
        params.put("x-api-version", "2020-08-07");

        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214", params);

        client.setApiConfig("x-api-version", "2020-08-07");
    }

}
```

```go
package main

import "github.com/taxjar/taxjar-go"

func main() {
    client := taxjar.NewClient(taxjar.Config{
      APIKey: "9e0cd62a22f451701f29c3bde214",
    })

    client.Headers = map[string]interface{}{
      "x-api-version": "2020-08-07",
    }
}
```

```shell
$ curl "API_ENDPOINT" \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -H "x-api-version: 2020-08-07"
```

TaxJar has introduced API versioning to deliver enhanced validations and features. To take advantage of an API version, `'x-api-version'` must be specified in API call request headers.

`'x-api-version'` accepts a date in the form of a string: `'YYYY-MM-DD'`. A valid version must be passed or the `'x-api-version'` value will be ignored.

#### Current API versions
* '2012-01-01'
* '2020-08-07'

For more details, see the [API Changelog](https://developers.taxjar.com/api/reference/#changelog).

<aside class="notice">
Effective July 1, 2021, all new TaxJar accounts will default to version '2020-08-07'.
</aside>
