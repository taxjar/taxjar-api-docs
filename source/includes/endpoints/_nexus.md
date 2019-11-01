## Nexus

### <span class="badge badge--get">get</span> List nexus regions

> Definition

```ruby
client.nexus_regions
```

```python
client.nexus_regions
```

```javascript
client.nexusRegions();
```

```php?start_inline=1
$client->nexusRegions();
```

```csharp
client.NexusRegions();
```

```java
client.nexusRegions();
```

```go
client.NexusRegions()
```

```shell
GET https://api.taxjar.com/v2/nexus/regions
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

nexus_regions = client.nexus_regions
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

nexus_regions = client.nexus_regions()
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.nexusRegions().then(res => {
  res.regions; // Array of nexus regions
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$nexus_regions = $client->nexusRegions();
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var nexusRegions = client.NexusRegions();
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.nexus.RegionResponse;

public class NexusRegionsExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            RegionResponse res = client.nexusRegions();
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

    res, err := client.NexusRegions()
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(res.Regions)
    }
}
```

```shell
$ curl https://api.taxjar.com/v2/nexus/regions \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"
```

> Response Example

```json
{
  "regions": [
    {
      "country_code": "US",
      "country": "United States",
      "region_code": "CA",
      "region": "California"
    },
    {
      "country_code": "US",
      "country": "United States",
      "region_code": "NY",
      "region": "New York"
    },
    {
      "country_code": "US",
      "country": "United States",
      "region_code": "WA",
      "region": "Washington"
    }
  ]
}
```

```ruby
[
  #<Taxjar::NexusRegion:0x00000a @attrs={
    :country_code => "US",
    :country => "United States",
    :region_code => "CA",
    :region => "California"
  }>,
  #<Taxjar::NexusRegion:0x00000a @attrs={
    :country_code => "US",
    :country => "United States",
    :region_code => "NY",
    :region => "New York"
  }>,
  #<Taxjar::NexusRegion:0x00000a @attrs={
    :country_code => "US",
    :country => "United States",
    :region_code => "WA",
    :region => "Washington"
  }>
]
```

```python
[
  <TaxJarRegion {
    'country_code': 'US',
    'country': 'United States',
    'region_code': 'CA',
    'region': 'California'
  }>,
  <TaxJarRegion {
    'country_code': 'US',
    'country': 'United States',
    'region_code': 'NY',
    'region': 'New York'
  }>,
  <TaxJarRegion {
    'country_code': 'US',
    'country': 'United States',
    'region_code': 'WA',
    'region': 'Washington'
  }>
]
```

```go
taxjar.NexusRegionsResponse{
    Regions: []taxjar.NexusRegion{
        {
            CountryCode: "US",
            Country:     "United States",
            RegionCode:  "CA",
            Region:      "California",
        },
        {
            CountryCode: "US",
            Country:     "United States",
            RegionCode:  "NY",
            Region:      "New York",
        },
        {
            CountryCode: "US",
            Country:     "United States",
            RegionCode:  "WA",
            Region:      "Washington",
        },
    },
}
```

Lists existing nexus locations for a TaxJar account.

#### Request

GET https://api.taxjar.com/v2/nexus/regions

#### Response

Returns a `regions` JSON object with an array of nexus regions sorted alphabetically.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
country_code | string | Two-letter ISO country code for nexus region.
country | string | Country name for nexus region.
region_code | string | Two-letter ISO region code for nexus region.
region | string | Region name for nexus region.
