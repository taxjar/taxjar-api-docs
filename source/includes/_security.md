# Security

> TLS 1.2 Test Snippet

```ruby
asdf
```

```python
asdf
```

In order to secure customer data, TLS 1.2 is required for all requests to TaxJar. The TLS protocol is used to encrypt your servers’ communications with TaxJar, so it’s important that you use the latest version. (TLS 1.2 is much more secure than previous versions.)

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
