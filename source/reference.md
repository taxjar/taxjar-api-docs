---
title: Sales Tax API Reference
description: "Documentation and code examples for SmartCalcs, TaxJar's sales tax API."
preferred_url: https://developers.taxjar.com/api/reference/

language_tabs:
  - shell: cURL
  - ruby: Ruby
  - python: Python
  - php: PHP
  - javascript: Node
  - csharp: .NET
  - java: Java

toc_header: "API Reference"

toc_footers:
  - <a href='https://www.taxjar.com/api/docs/'>v1 Documentation</a>

includes:
  - authentication
  - billing
  - countries
  - sales_tax_api
  - endpoints/categories
  - endpoints/taxes
  - endpoints/transactions
  - endpoints/customers
  - endpoints/rates
  - endpoints/nexus
  - endpoints/validations
  - endpoints/summarized_rates
  - sandbox
  - rate-limiting
  - errors
  - changelog

search: false
---

# Introduction

> API Endpoint

```
https://api.taxjar.com/v2/
```

> [Sandbox](#sandbox-environment) API Endpoint

```
https://api.sandbox.taxjar.com/v2/
```

Welcome to the TaxJar Sales Tax API! You can use our API to get information on sales tax rates, categories or upload transactions.

We currently provide API clients for the following languages:

- <img class="client-icon" src="../images/clients/ruby-logo.png" width="16"> [Ruby Sales Tax API](https://github.com/taxjar/taxjar-ruby) *via RubyGems as `taxjar-ruby`*
- <img class="client-icon" src="../images/clients/python-logo.png" width="16"> [Python Sales Tax API](https://github.com/taxjar/taxjar-python) *via PyPI as `taxjar`*
- <img class="client-icon" src="../images/clients/php-logo.png" width="16"> [PHP Sales Tax API](https://github.com/taxjar/taxjar-php) *via Composer as `taxjar/taxjar-php`*
- <img class="client-icon" src="../images/clients/node-logo.png" width="16"> [Node Sales Tax API](https://github.com/taxjar/taxjar-node) *via NPM as `taxjar`*
- <img class="client-icon" src="../images/clients/csharp-logo.svg" width="16"> [C# / .NET Sales Tax API](https://github.com/taxjar/taxjar.net) *via NuGet as `TaxJar`*
- <img class="client-icon" src="../images/clients/java-logo.svg" width="16"> [Java Sales Tax API](https://github.com/taxjar/taxjar-java) *via Maven & Gradle as `com.taxjar:taxjar-java`*

Before getting started, you'll need to [sign up for TaxJar](https://app.taxjar.com/api_sign_up/basic/) and get an API key. If you have any questions or would like to request support for a new client language, feel free to [contact us](mailto:support@taxjar.com).
