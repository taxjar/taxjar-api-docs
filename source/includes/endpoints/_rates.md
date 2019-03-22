## Rates

### <span class="badge badge--get">get</span> Show tax rates for a location

> Definition

```ruby
client.rates_for_location
```

```python
client.rates_for_location
```

```javascript
client.ratesForLocation();
```

```php?start_inline=1
$client->ratesForLocation();
```

```csharp
client.RatesForLocation();
```

```java
client.ratesForLocation();
```

```shell
GET https://api.taxjar.com/v2/rates/:zip
```

> Request Example

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

# United States (ZIP+4)
rates = client.rates_for_location('90404-3370')

# United States (ZIP w/ Optional Params)
rates = client.rates_for_location('90404', {
  :city => 'Santa Monica',
  :state => 'CA',
  :country => 'US'
})

# United States (ZIP+4 w/ Street Address for Rooftop Accuracy)
rates = client.rates_for_location('05495-2086', {
  :street => '312 Hurricane Lane',
  :city => 'Williston',
  :state => 'VT',
  :country => 'US'
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

# United States (ZIP+4)
rates = client.rates_for_location('90404-3370')

# United States (ZIP w/ Optional Params)
rates = client.rates_for_location('90404', {
  'city': 'Santa Monica',
  'state': 'CA',
  'country': 'US'
})

# United States (ZIP+4 w/ Street Address for Rooftop Accuracy)
rates = client.rates_for_location('05495-2086', {
  'street': '312 Hurricane Lane',
  'city': 'Williston',
  'state': 'VT',
  'country': 'US'
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

// United States (ZIP+4)
client.ratesForLocation('90404-3370').then(res => {
  res.rate; // Rate object
});

// United States (ZIP w/ Optional Params)
client.ratesForLocation('90404', {
  city: 'Santa Monica',
  state: 'CA',
  country: 'US'
}).then(res => {
  res.rate; // Rate object
});

// United States (ZIP+4 w/ Street Address for Rooftop Accuracy)
client.ratesForLocation('05495-2086', {
  street: '312 Hurricane Lane',
  city: 'Williston',
  state: 'VT',
  country: 'US'
}).then(res => {
  res.rate; // Rate object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

// United States (ZIP+4)
$rates = $client->ratesForLocation('90404-3370');

// United States (ZIP w/ Optional Params)
$rates = $client->ratesForLocation('90404', [
  'city' => 'Santa Monica',
  'state' => 'CA',
  'country' => 'US'
]);

// United States (ZIP+4 w/ Street Address for Rooftop Accuracy)
$rates = $client->ratesForLocation('05495-2086', [
  'street' => '312 Hurricane Lane',
  'city' => 'Williston',
  'state' => 'VT',
  'country' => 'US'
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

// United States (ZIP+4)
var rates = client.RatesForLocation("90404-3370");

// United States (ZIP w/ Optional Params)
var rates = client.RatesForLocation("90404", new {
  city = "Santa Monica",
  state = "CA",
  country = "US"
});

// United States (ZIP+4 w/ Street Address for Rooftop Accuracy)
var rates = client.RatesForLocation("05495-2086", new {
  street = "312 Hurricane Lane",
  city = "Williston",
  state = "VT",
  country = "US"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.rates.RateResponse;
import java.util.HashMap;
import java.util.Map;

public class RatesExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            RateResponse res = client.ratesForLocation("90404-3370");

            Map<String, String> params = new HashMap<>();
            params.put("city", "Santa Monica");
            params.put("state", "CA");
            params.put("country", "US");
            RateResponse res = client.ratesForLocation("90404", params);

            Map<String, String> params = new HashMap<>();
            params.put("street", "312 Hurricane Lane");
            params.put("city", "Williston");
            params.put("state", "VT");
            params.put("country", "US");
            RateResponse res = client.ratesForLocation("05495-2086", params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
# United States (ZIP+4)
$ curl https://api.taxjar.com/v2/rates/90404-3370 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214"

# United States (ZIP w/ Optional Params)
$ curl -G https://api.taxjar.com/v2/rates/90404 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d city="Santa%20Monica" \
  -d state="CA" \
  -d country="US"

# United States (ZIP+4 w/ Street Address for Rooftop Accuracy)
$ curl -G https://api.taxjar.com/v2/rates/05495-2086 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d street="312 Hurricane Lane" \
  -d city="Williston" \
  -d state="VT" \
  -d country="US"
```

> <span class="scenario">Request Scenario: Canada</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

rates = client.rates_for_location('V5K0A1', {
  :city => 'Vancouver',
  :state => 'BC',
  :country => 'CA'
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

rates = client.rates_for_location('V5K0A1', {
  'city': 'Vancouver',
  'state': 'BC',
  'country': 'CA'
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.ratesForLocation('V5K0A1', {
  city: 'Vancouver',
  state: 'BC',
  country: 'CA'
}).then(res => {
  res.rate; // Rate object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$rates = $client->ratesForLocation('V5K0A1', [
  'city' => 'Vancouver',
  'state' => 'BC',
  'country' => 'CA'
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.RatesForLocation("V5K0A1", new {
  city = "Vancouver",
  state = "BC",
  country = "CA"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.rates.RateResponse;
import java.util.HashMap;
import java.util.Map;

public class CanadaRatesExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, String> params = new HashMap<>();
            params.put("city", "Vancouver");
            params.put("state", "BC");
            params.put("country", "CA");
            RateResponse res = client.ratesForLocation("V5K0A1", params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl -G https://api.taxjar.com/v2/rates/V5K0A1 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d city="Vancouver" \
  -d state="BC" \
  -d country="CA"
```

> <span class="scenario">Request Scenario: Australia</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

rates = client.rates_for_location('2060', {
  :city => 'Sydney',
  :country => 'AU'
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

rates = client.rates_for_location('2060', {
  'city': 'Sydney',
  'country': 'AU'
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.ratesForLocation('2060', {
  city: 'Sydney',
  country: 'AU'
}).then(res => {
  res.rate; // Rate object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$rates = $client->ratesForLocation('2060', [
  'city' => 'Sydney',
  'country' => 'AU'
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.RatesForLocation("2060", new {
  city = "Sydney",
  country = "AU"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.rates.RateResponse;
import java.util.HashMap;
import java.util.Map;

public class AustraliaRatesExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, String> params = new HashMap<>();
            params.put("city", "Sydney");
            params.put("country", "AU");
            RateResponse res = client.ratesForLocation("2060", params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl -G https://api.taxjar.com/v2/rates/2060 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d city="Sydney" \
  -d country="AU"
```

> <span class="scenario">Request Scenario: European Union</span>

```ruby
require "taxjar"
client = Taxjar::Client.new(api_key: "9e0cd62a22f451701f29c3bde214")

rates = client.rates_for_location('00150', {
  :city => 'Helsinki',
  :country => 'FI'
})
```

```python
import taxjar
client = taxjar.Client(api_key='9e0cd62a22f451701f29c3bde214')

rates = client.rates_for_location('00150', {
  'city': 'Helsinki',
  'country': 'FI'
})
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '9e0cd62a22f451701f29c3bde214'
});

client.ratesForLocation('00150', {
  city: 'Helsinki',
  country: 'FI'
}).then(res => {
  res.rate; // Rate object
});
```

```php?start_inline=1
require __DIR__ . '/vendor/autoload.php';
$client = TaxJar\Client::withApiKey("9e0cd62a22f451701f29c3bde214");

$rates = $client->ratesForLocation('00150', [
  'city' => 'Helsinki',
  'country' => 'FI'
]);
```

```csharp
using Taxjar;
var client = new TaxjarApi("9e0cd62a22f451701f29c3bde214");

var rates = client.RatesForLocation("00150", new {
  city = "Helsinki",
  country = "FI"
});
```

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.rates.RateResponse;
import java.util.HashMap;
import java.util.Map;

public class EuropeanUnionRatesExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar("9e0cd62a22f451701f29c3bde214");

        try {
            Map<String, String> params = new HashMap<>();
            params.put("city", "Helsinki");
            params.put("country", "FI");
            RateResponse res = client.ratesForLocation("00150", params);
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

```shell
$ curl -G https://api.taxjar.com/v2/rates/00150 \
  -H "Authorization: Bearer 9e0cd62a22f451701f29c3bde214" \
  -d city="Helsinki" \
  -d country="FI"
```

> Response Example<br>
> <small>*International requests outside of US/Canada may return different parameters.*</small>

```json
{
  "rate": {
    "zip": "90404",
    "state": "CA",
    "state_rate": "0.0625",
    "county": "LOS ANGELES",
    "county_rate": "0.01",
    "city": "SANTA MONICA",
    "city_rate": "0.0",
    "combined_district_rate": "0.025",
    "combined_rate": "0.0975",
    "freight_taxable": false
  }
}

{
  "rate": {
    "zip": "05495-2086",
    "country": "US",
    "country_rate": "0.0",
    "state": "VT",
    "state_rate": "0.06",
    "county": "CHITTENDEN",
    "county_rate": "0.0",
    "city": "WILLISTON",
    "city_rate": "0.0",
    "combined_district_rate": "0.01",
    "combined_rate": "0.07",
    "freight_taxable": true
  }
}
```

```ruby
#<Taxjar::Rate:0x00000a @attrs={
  :zip => "90404",
  :state => "CA",
  :state_rate => 0.065,
  :county => "LOS ANGELES",
  :county_rate => 0.01,
  :city => "SANTA MONICA",
  :city_rate => 0.005,
  :combined_district_rate => 0.015,
  :combined_rate => 0.095,
  :freight_taxable => false
}>

#<Taxjar::Rate:0x00000a @attrs={
  :zip => "05495-2086",
  :country => "US",
  :country_rate => 0,
  :state => "VT",
  :state_rate => 0.06,
  :county => "CHITTENDEN",
  :county_rate => 0,
  :city => "WILLISTON",
  :city_rate => 0,
  :combined_district_rate => 0.01,
  :combined_rate => 0.07,
  :freight_taxable => true
}>
```

```python
<TaxJarRate {
  'city': 'SANTA MONICA',
  'zip': '90404',
  'combined_district_rate': 0.025,
  'state_rate': 0.0625,
  'city_rate': 0,
  'county': 'LOS ANGELES',
  'state': 'CA',
  'combined_rate': 0.0975,
  'county_rate': 0.01,
  'freight_taxable': False
}>

<TaxJarRate {
  'city': 'WILLISTON',
  'zip': '05495-2086',
  'combined_district_rate': 0.01,
  'state_rate': 0.06,
  'city_rate': 0,
  'country_rate': 0,
  'county': 'CHITTENDEN',
  'state': 'VT',
  'country': 'US',
  'combined_rate': 0.07,
  'county_rate': 0,
  'freight_taxable': True
}>
```

> Response Scenario: Canada

```json
{
  "rate": {
    "zip": "V5K0A1",
    "city": "Vancouver",
    "state": "BC",
    "country": "CA",
    "combined_rate": "0.12",
    "freight_taxable": true
  }
}
```

```ruby
#<Taxjar::Rate:0x00000a @attrs={
  :zip => "V5K0A1",
  :city => "Vancouver",
  :state => "BC",
  :country => "CA",
  :combined_rate => 0.12,
  :freight_taxable => true
}>
```

```python
<TaxJarRate {
  'zip': 'V5K0A1',
  'city': 'Vancouver',
  'state': 'BC',
  'country': 'CA',
  'combined_rate': 0.12,
  'freight_taxable': True
}>
```

> Response Scenario: Australia

```json
{
  "rate": {
    "zip": "2060",
    "country": "AU",
    "country_rate": "0.1",
    "combined_rate": "0.1",
    "freight_taxable": true
  }
}
```

```ruby
#<Taxjar::Rate:0x00000a @attrs={
  :zip => "2060",
  :country => "AU",
  :country_rate => 0.1,
  :combined_rate => 0.1,
  :freight_taxable => true
}>
```

```python
<TaxJarRate {
  'zip': '2060',
  'country': 'AU',
  'country_rate': 0.1,
  'combined_rate': 0.1,
  'freight_taxable': True
}>
```

> Response Scenario: European Union

```json
{
  "rate": {
    "country": "FI",
    "name": "Finland",
    "standard_rate": "0.24",
    "reduced_rate": "0.0",
    "super_reduced_rate": "0.0",
    "parking_rate": "0.0",
    "distance_sale_threshold": "0.0",
    "freight_taxable": true
  }
}
```

```ruby
#<Taxjar::Rate:0x00000a @attrs={
  :country => "FI",
  :name => "Finland",
  :standard_rate => 0.24,
  :reduced_rate => nil,
  :super_reduced_rate => nil,
  :parking_rate => nil,
  :distance_sale_threshold => nil,
  :freight_taxable => true
}>
```

```python
<TaxJarRate {
  'country': 'FI',
  'name': 'Finland',
  'standard_rate': 0.24,
  'reduced_rate': None,
  'super_reduced_rate': None,
  'parking_rate': None,
  'distance_sale_threshold': None,
  'freight_taxable': True
}>
```
Shows the sales tax rates for a given location.</br>
*Please note that this only returns the full combined rate for a given location. During an actual sales tax calculation, you may see differences. Please use our <a href='https://developers.taxjar.com/api/reference/#post-calculate-sales-tax-for-an-order'>/v2/taxes endpoint </a> for actual calculations.*

#### Request

GET https://api.taxjar.com/v2/rates/:zip

#### Parameters

Parameter | Type | Required | Description
--------- | ------- | ------- | -----------
country | string | <span class="conditional" data-tooltip="For international locations outside of US, `country` is required." data-tooltip-position="top center">conditional</span> | Two-letter ISO country code for given location.
zip | string | required | Postal code for given location (5-Digit ZIP or ZIP+4).
state | string | optional | Two-letter ISO state code for given location.
city | string | optional | City for given location.
street | string | optional | Street address for given location. <span class="usage-note" data-tooltip="Street address provides more accurate calculations for the following states: AR, AZ, CA, CO, CT, DC, FL, GA, HI, IA, ID, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, NC, ND, NE, NJ, NM, NV, NY, OH, OK, PA, RI, SC, SD, TN, TX, UT, VA, VT, WA, WI, WV, WY" data-tooltip-position="top center">View Note</span>

#### Response

Returns a `rate` JSON object with rates for a given location broken down by state, county, city, and district. For international requests, returns standard and reduced rates.

<h4 id="us-rate-attributes"><span class="flag-icon flag-icon-us"></span>&nbsp; United States Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
zip | string | Postal code for given location.
country | string | Country for given location if SST state. <span class="usage-note" data-tooltip="Streamlined sales tax project member states include: AR, GA, IN, IA, KS, KY, MI, MN, NE, NV, NJ, NC, ND, OK, RI, SD, UT, VT, WA, WV, WI, WY" data-tooltip-position="top center">View Note</span>
country_rate | decimal | Country sales tax rate for given location if SST state. <span class="usage-note" data-tooltip="Streamlined sales tax project member states include: AR, GA, IN, IA, KS, KY, MI, MN, NE, NV, NJ, NC, ND, OK, RI, SD, UT, VT, WA, WV, WI, WY" data-tooltip-position="top center">View Note</span>
state | string | Postal abbreviated state name for given location.
state_rate | decimal | State sales tax rate for given location.
county | string | County name for given location.
county_rate | decimal | County sales tax rate for given location.
city | string | City name for given location.
city_rate | decimal | City sales tax rate for given location.
combined_district_rate | decimal | Aggregate rate for all city and county sales tax districts effective at the location.
combined_rate | decimal | Overall sales tax rate which includes state, county, city and district tax. This rate should be used to determine how much sales tax to collect for an order.
freight_taxable | bool | Freight taxability for given location.

<h4 id="ca-rate-attributes"><span class="flag-icon flag-icon-ca"></span>&nbsp; Canada Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
zip | string | Postal code for given location.
city | string | City name for given location.
state | string | Postal abbreviated state name for given location.
country | string | Two-letter ISO country code for given location.
combined_rate | decimal | Overall sales tax rate. This rate should be used to determine how much sales tax to collect for an order.
freight_taxable | bool | Freight taxability for given location.

<h4 id="au-rate-attributes"><span class="flag-icon flag-icon-au"></span>&nbsp; Australia Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
zip | string | Postal code for given location.
country | string | Two-letter ISO country code for given location.
country_rate | decimal | Country sales tax rate for given location.
combined_rate | decimal | Overall sales tax rate. This rate should be used to determine how much sales tax to collect for an order.
freight_taxable | bool | Freight taxability for given location.

<h4 id="eu-rate-attributes"><span class="flag-icon flag-icon-eu"></span>&nbsp; European Union Attributes</h4>

Parameter | Type | Description
--------- | ------- | -----------
country | string | Two-letter ISO country code for given location.
name | string | Country name for given location.
standard_rate | decimal | [Standard rate](https://en.wikipedia.org/wiki/European_Union_value_added_tax#VAT_rates) for given location.
reduced_rate | decimal | [Reduced rate](https://en.wikipedia.org/wiki/European_Union_value_added_tax#VAT_rates) for given location.
super_reduced_rate | decimal | Super reduced rate for given location.
parking_rate | decimal | Parking rate for given location.
distance_sale_threshold | decimal | [Distance selling threshold](https://en.wikipedia.org/wiki/European_Union_value_added_tax#Distance_sales) for given location.
freight_taxable | bool | Freight taxability for given location.
