# Security

> TLS 1.2 Test Snippet

```shell
# Run the following command and ensure that your system is using
# cURL version 7.34.0 or higher
curl --version
# Additionally, check that your OpenSSL version is 1.0.1 or higher with
openssl version -a
```

```ruby
require 'taxjar'
client = Taxjar::Client.new(api_key: '[YOUR TAXJAR TOKEN]')

begin
  client.categories
  puts 'TLS 1.2 supported, no upgrade required'
rescue OpenSSL::SSL::SSLError
  puts 'TLS 1.2 is not supported, you will need to upgrade'
end
```

```python
import taxjar
client = taxjar.Client(api_key='[YOUR TAXJAR TOKEN]')

try:
  client.categories()
  print 'TLS 1.2 supported, no upgrade required'
except requests.exceptions.SSLError:
  print 'TLS 1.2 is not supported, you will need to upgrade'
```

```php
<?php
require __DIR__ . '/vendor/autoload.php';

$client = TaxJar\Client::withApiKey('[YOUR TAXJAR TOKEN]');

try {
  $client->categories();
  echo 'TLS 1.2 supported, no upgrade required'
}
catch (GuzzleHttp\Exception\RequestException $e) {
  echo 'TLS 1.2 not supported, you will need to upgrade'
}
catch (Exception $e) {
  echo 'Unknown error from TaxJar, please try again'
}
?>
```

```javascript
const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: '[YOUR TAXJAR TOKEN]'
});

client.categories().then(() => {
  console.log('TLS 1.2 supported, no upgrade required');
}).catch(e => {
  if (e.error && e.error.code === 'ECONNRESET') {
    console.log('TLS 1.2 not supported, you will need to upgrade');
  } else {
    console.log('Unknown error from TaxJar, please try again');
  }
});
```

```csharp
// If you are using the TaxJar NuGet package and you are targeting
// .NET Framework 4.5, you will need to include the following
// snippet within your application to enable TLS 1.2:

#if NET45
    ServicePointManager.SecurityProtocol = ServicePointManager.SecurityProtocol | SecurityProtocolType.Tls12;
#endif

// For more information on enabling TLS 1.2 support see: https://docs.microsoft.com/en-us/dotnet/framework/network-programming/tls
```

```java
// Check your Java version with `java -version`.
// If your version of Java is v1.8 or above, no change is needed.
// If your version of Java is v1.7, ensure you have v4.0.0
// of taxjar-java installed to enable TLS 1.2 support.
```

```go
// All versions of Go already support TLS 1.2 by default,
// so you will not need to make any changes.
```

In order to secure customer data, TLS 1.2 is required for all requests to TaxJar as of July 1, 2020. The TLS protocol is used to encrypt your servers’ communications with TaxJar, so it’s important that you use the latest version. (TLS 1.2 is much more secure than previous versions.)

To test if your server is using TLS 1.2, run the code snippet for the language of your choice:

- [Ruby](/api/guides/?ruby#security)
- [Python](/api/guides/?python#security)
- [PHP](/api/guides/?php#security)
- [Node](/api/guides/?javascript#security)
- [C#/.NET](/api/guides/?csharp#security)
- [Java](/api/guides/?java#security)
- [Go](/api/guides/?go#security)

If you see the message "TLS 1.2 supported, no upgrade required" print, you're good to go! Otherwise, you will need to upgrade your OpenSSL version:

### Linux

If you are using Linux, you’ll need to know which distribution you are on. You can run `cat /etc/*-release` to find this information.

**Ubuntu**

- 12.04 LTS (Precise), you will need to install package updates. You can do this by running `sudo apt-get update && sudo apt-get install --only-upgrade openssl`, and then restarting your TaxJar application. You may also need to update your `libssl`. You can update this by running `sudo apt-get update && sudo apt-get install --only-upgrade libssl-dev`.

- 10.10 (Maverick), 11.04 (Natty), or 11.10 (Oneiric), you will need to upgrade to at least Ubuntu 12.04 (Precise). The easiest way to do this is to rebuild your server, as upgrading from these non-LTS Ubuntu versions is not supported.

- 10.04 LTS (Lucid), you will need to upgrade to at least Ubuntu 12.04 (Precise). We recommend rebuilding your server, as the upgrade process is risky.

**RedHat Enterprise Linux, or CentOS**

- version 6, you will need to install package updates. You can do this by running `sudo yum update openssl libcurl`, and restarting your TaxJar application.

- version 5, you will need to upgrade to at least Red Hat Enterprise Linux 6. We recommend rebuilding your server, as the upgrade process is risky.

**Debian**

- Upgrade to at least Debian 7.0 (Wheezy).

**Other Linux Variants**

- Ensure that running `openssl version` gives a version of at least `1.0.1`. If it does not, you will need to install package updates, and may need to upgrade to a newer version of your operating system.

### OSX

We recommend that you upgrade your OpenSSL version using [Homebrew](https://brew.sh/). You can run `brew install openssl` to install the latest version of OpenSSL on your machine. You may also need to update the version of your language, i.e., Ruby, Python, PHP, Node, C#/.NET, Java, or Go.

### Windows

If you are using a Windows machine, your development environment is providing your copy of OpenSSL. You can upgrade this by upgrading your development environment itself, i.e., your installation of Ruby, Python, PHP, Node, C#/.NET, Java, or Go.
