# Authentication

> Example Request With Authentication Headers

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;

public class AuthenticationExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");
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
}
```

```shell
# Authorization headers must be passed for every request
$ curl "API_ENDPOINT" \
  -H "Authorization: Token token="9e0cd62a22f451701f29c3bde214""

or

$ curl "API_ENDPOINT" \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"
```

> Make sure to replace `9e0cd62a22f451701f29c3bde214` with your API key.

TaxJar uses API keys to allow access to the API. If you're new to TaxJar, you'll need to [sign up for an account](https://app.taxjar.com/api_sign_up/) to get your API key. Otherwise, [log in](https://app.taxjar.com) and go to *Account > API Access* to generate a new API token.

TaxJar expects the API key to be included in all API requests to the server using a header like the following:

`Authorization: Token token="9e0cd62a22f451701f29c3bde214"`

or

`Authorization: Bearer 9e0cd62a22f451701f29c3bde214`

<aside class="notice">
You must replace <code>9e0cd62a22f451701f29c3bde214</code> with your personal API key.
</aside>
