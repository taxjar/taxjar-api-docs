## Summarized Rates

### <span class="badge badge--get">get</span> Summarize tax rates for all regions

Retrieve minimum and average sales tax rates by region as a backup.

> Definition

```ruby
client.summary_rates
```

```python
client.summary_rates
```

```javascript
client.summaryRates();
```

```php?start_inline=1
$client->summaryRates();
```

```csharp
client.SummaryRates();
```

```java
client.summaryRates();
```

```shell
GET https://api.taxjar.com/v2/summary_rates
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

summarized_rates = client.summary_rates
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

summarized_rates = client.summary_rates()
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.summaryRates().then(res => {
  res.summary_rates; // Array of summarized rates
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$summarized_rates = $client->summaryRates();
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var summaryRates = client.SummaryRates();
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.summarized_rates.SummaryRateResponse;

public class SummarizedRatesExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            SummaryRateResponse res = client.summaryRates();
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl https://api.taxjar.com/v2/summary_rates \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"
```

> Response Example<br>
> <small>*Summary response shortened for brevity.*</small>

```json
{
  "summary_rates": [
    {
      "country_code": "US",
      "country": "United States",
      "region_code": "CA",
      "region": "California",
      "minimum_rate": {
        "label": "State Tax",
        "rate": 0.065
      },
      "average_rate": {
        "label": "Tax",
        "rate": 0.0827
      }
    },
    {
      "country_code": "CA",
      "country": "Canada",
      "region_code": "BC",
      "region": "British Columbia",
      "minimum_rate": {
        "label": "GST",
        "rate": 0.05
      },
      "average_rate": {
        "label": "PST",
        "rate": 0.12
      }
    },
    {
      "country_code": "UK",
      "country": "United Kingdom",
      "region_code": null,
      "region": null,
      "minimum_rate": {
        "label": "VAT",
        "rate": 0.2
      },
      "average_rate": {
        "label": "VAT",
        "rate": 0.2
      }
    }
  ]
}
```

```ruby
[
  #<Taxjar::SummaryRate:0x00000a @attrs={
    :country_code => "US",
    :country => "United States",
    :region_code => "CA",
    :region => "California",
    :minimum_rate => {
      :label => "State Tax",
      :rate => 0.065
    },
    :average_rate => {
      :label => "Tax",
      :rate => 0.0827
    }
  }>,
  #<Taxjar::SummaryRate:0x00000a @attrs={
    :country_code => "CA",
    :country => "Canada",
    :region_code => "BC",
    :region => "British Columbia",
    :minimum_rate => {
      :label => "GST",
      :rate => 0.05
    },
    :average_rate => {
      :label => "PST",
      :rate => 0.12
    }
  }>,
  #<Taxjar::SummaryRate:0x00000a @attrs={
    :country_code => "UK",
    :country => "United Kingdom",
    :region_code => nil,
    :region => nil,
    :minimum_rate => {
      :label => "VAT",
      :rate => 0.2
    },
    :average_rate => {
      :label => "VAT",
      :rate => 0.2
    }
  }>
]
```

```python
[
  <TaxJarSummaryRate {
    'average_rate': {
      'rate': 0.0827,
      'label': 'Tax'
    },
    'region_code': 'CA',
    'minimum_rate': {
      'rate': 0.065,
      'label': 'State Tax'
    },
    'country': 'US',
    'region': 'California',
    'country_code': 'US'
  }>,
  <TaxJarSummaryRate {
    'average_rate': {
      'rate': 0.12,
      'label': 'PST'
    },
    'region_code': 'BC',
    'minimum_rate': {
      'rate': 0.05,
      'label': 'GST'
    },
    'country': 'Canada',
    'region': 'British Columbia',
    'country_code': 'CA'
  }>,
  <TaxJarSummaryRate {
    'average_rate': {
      'rate': 0.2,
      'label': 'VAT'
    },
    'region_code': None,
    'minimum_rate': {
      'rate': 0.2,
      'label': 'VAT'
    },
    'country': 'United Kingdom',
    'region': None,
    'country_code': 'UK'
  }>
]
```

#### Request

GET https://api.taxjar.com/v2/summary_rates

#### Response

Returns a `summary_rates` JSON object with an array of summarized rates for each region/state.

#### Attributes

Parameter | Type | Description
--------- | ------- | -----------
country_code | string | Country code for summarized region.
country | string | Country name for summarized region.
region_code | string | Region code for summarized region.
region | string | Region name for summarized region.
minimum_rate | object | Region/state-only sales tax rate with label.
average_rate | object | Average rate for region/state and local sales tax across all postal codes in the summarized region with label.
