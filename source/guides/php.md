---
title: Sales Tax API Guide for PHP
description: "How to use SmartCalcs with our official PHP client."
preferred_url: https://developers.taxjar.com/api/guides/php/
---

# PHP Quickstart

Ready to dive into our sales tax API with PHP? In this guide we'll show you how to set up TaxJar's official PHP client, authenticate with your API token, and start calculating sales tax right away. If you get stuck don't panic... [shoot us an email](mailto:support@taxjar.com) or [open an issue on GitHub](https://github.com/taxjar/taxjar-api-docs/issues/new). Now let's go!

## Getting Started

> composer.json

```
{
  "require": {
    "taxjar/taxjar-php": "^1.4"
  }
}
```

Download [Composer](https://getcomposer.org/doc/00-intro.md) if you don't already have it. Composer is the de-facto package manager for PHP. For ease of use, you'll probably want to [access Composer globally from the command line](https://getcomposer.org/doc/00-intro.md#globally). The example below assumes Composer is available via `composer`.

From there you can install `taxjar/taxjar-php`. Go to your project directory in the terminal. Enter the following command:

`composer require taxjar/taxjar-php`

Boom! You now have the TaxJar PHP client inside your project. You'll also notice a new or updated `composer.json` file in your root directory.

## Authentication

```php
<?php
require __DIR__ . '/vendor/autoload.php';

$taxjar = TaxJar\Client::withApiKey('YOUR API TOKEN'); // Useful for quick testing
$taxjar = TaxJar\Client::withApiKey($_ENV['TAXJAR_API_KEY']); // Recommended
```

Using Composer's [autoloading](https://getcomposer.org/doc/01-basic-usage.md#autoloading) functionality, we can automatically include the TaxJar client anywhere. If you're using a PHP framework such as [Laravel](https://laravel.com), `vendor/autoload.php` should already be included.

### Passing Your API Token

In order to make requests to our [sales tax API](https://www.taxjar.com/smartcalcs/) and get data back, you'll need to pass your TaxJar API token. If you don't already have a TaxJar account, [sign up to get your token](https://app.taxjar.com/api_sign_up/).

We recommend using a `.env` file with a library such as [PHP dotenv](https://github.com/vlucas/phpdotenv) to keep sensitive credentials like API tokens outside of your code.

# Sales Tax Calculations

```php
<?php
require __DIR__ . '/vendor/autoload.php';

$taxjar = TaxJar\Client::withApiKey($_ENV['TAXJAR_API_KEY']);

$tax = $taxjar->taxForOrder([
  'from_country' => 'US',
  'from_zip' => '07102',
  'from_state' => 'NJ',
  'from_city' => 'Newark',
  'from_street' => '49 Washington St',
  'to_country' => 'US',
  'to_zip' => '07306',
  'to_state' => 'NJ',
  'to_city' => 'Jersey City',
  'to_street' => '54 Journal Square Plaza',
  'amount' => 15,
  'shipping' => 1.5,
  'line_items' => [
    [
      'quantity' => 1,
      'unit_price' => 15
    ]
  ]
]);

/*
Truncated Response:

object(stdClass)#38 (9) {
  ["order_total_amount"] => float(16.5)
  ["shipping"] => float(1.5)
  ["taxable_amount"] => float(16.5)
  ["amount_to_collect"] => float(1.16)
  ["rate"] => float(0.07)
  ["has_nexus"] => bool(true)
  ["freight_taxable"] => bool(true)
  ["tax_source"] => string(11) "destination"
  ["breakdown"] => object(stdClass)#36 {
      ...
  }
}
*/

echo $tax->amount_to_collect;
echo $tax->rate;
```

Now that we've set up the PHP client, let's calculate some sales tax. In the example to the right, we're passing the following:

- **From Address**: The address you're shipping from, such as a warehouse or business location.
- **To Address**: The buyer's shipping address. The destination of the order. You get the idea.
- **Amount**: Total amount of the order, **excluding shipping**. Shipping is included separately.
- **Shipping**: Total amount of shipping for the order.
- **Line Items**: A nested array of items being purchased in the order.

You can learn more about the parameters passed to our tax endpoint in the [API reference](/api/reference/?php#post-calculate-sales-tax-for-an-order). If you're passing a [product tax code](/api/guides#product-exemptions) for specific line items, refer to our [category list](/api/reference/?php#categories) to determine which code to use.

After calling `taxForOrder`, you'll get a response back. Check it out with your debugger or `var_dump($tax)`. To access a specific attribute in the response, just use the `->` object operator: `$tax->amount_to_collect`.

If you just need the rate for a given location, use the [/v2/rates](/api/reference/?php#get-show-tax-rates-for-a-location) endpoint. You can also take advantage of our [summarized rates endpoint](/api/reference/?php#get-summarize-tax-rates-for-all-regions) as a backup to store in your database.

# Sales Tax Reporting

```php
<?php
require __DIR__ . '/vendor/autoload.php';

$taxjar = TaxJar\Client::withApiKey($_ENV['TAXJAR_API_KEY']);

$order = $client->createOrder([
  'transaction_id' => '123',
  'transaction_date' => '2015/05/14',
  'from_country' => 'US',
  'from_zip' => '94111',
  'from_state' => 'CA',
  'from_city' => 'San Francisco',
  'from_street' => '600 Montgomery St',
  'to_country' => 'US',
  'to_zip' => '90002',
  'to_state' => 'CA',
  'to_city' => 'Los Angeles',
  'to_street' => '123 Palm Grove Ln',
  'amount' => 16.5,
  'shipping' => 1.5,
  'sales_tax' => 0.95,
  'line_items' => [
    [
      'quantity' => 1,
      'product_identifier' => '12-34243-9',
      'description' => 'Fuzzy Widget',
      'unit_price' => 15.0,
      'sales_tax' => 0.95
    ]
  ]
]);

/*
Truncated Response:

object(stdClass)#38 (18) {
  ["transaction_id"] => string(8) "123"
  ["user_id"] => int(99999)
  ["transaction_date"] => string(24) "2015-05-14T00:00:00.000Z"
  ["transaction_reference_id"] => NULL
  ["from_country"] => string(2) "US"
  ["from_zip"] => string(5) "94111"
  ["from_state"] => string(2) "CA"
  ["from_city"] => string(13) "SAN FRANCISCO"
  ["from_street"] => string(17) "600 Montgomery St"
  ...
}
*/
```

To get the full TaxJar experience you'll also want to set up sales tax reporting to file your tax returns later. To push transactions (orders and refunds) into TaxJar, we provide a [collection of endpoints](/api/reference/?php#transactions) that cover your basic CRUD operations. In the example to the right, we're pushing an order into TaxJar. Once imported, it'll appear on the **Transactions** page in the [TaxJar app](https://app.taxjar.com). We're passing the following parameters:

- **Transaction ID**: A unique identifier for your order.
- **Transaction Date**: The date the transaction was recorded.
- **From Address**: The address you're shipping from, such as a warehouse or business location.
- **To Address**: The buyer's shipping address or destination of the order.
- **Amount**: Total amount of the order, **including shipping** and **excluding sales tax**. Yeah, this is a gotcha we're planning to fix in the next API version.
- **Shipping**: Total amount of shipping for the order.
- **Sales Tax**: Total amount of sales tax collected.
- **Line Items**: A nested array of items purchased in the order. Includes the product ID, description, and amount of sales tax collected for the line item.

A successful response will return back the imported order transaction. Nifty!

# Error Handling

```php
<?php
require __DIR__ . '/vendor/autoload.php';

$taxjar = TaxJar\Client::withApiKey($_ENV['TAXJAR_API_KEY']);

try {
  // Invalid request
  $order = $client->createOrder([
    'transaction_date' => '2015/05/14',
    'to_country' => 'US',
    'to_zip' => '90002',
    'to_state' => 'CA',
    'amount' => 16.5,
    'shipping' => 1.5,
    'sales_tax' => 0.95
  ]);
} catch (Exception $e) {
  // 406 Not Acceptable – transaction_id is missing
  echo $e->getMessage();
}
```

When invalid data is sent to TaxJar or we encounter an error, we'll throw a `TaxJar\Exception` with the HTTP status code and error message. To catch these exceptions, you can use the example to the right. Here's a list of common [error response codes](/api/reference/?php#errors) for reference:

Error Code | Meaning
---------- | -------
400 | Bad Request -- Your request format is bad.
401 | Unauthorized -- Your API key is wrong.
403 | Forbidden -- The resource requested is not authorized for use.
404 | Not Found -- The specified resource could not be found.
405 | Method Not Allowed -- You tried to access a resource with an invalid method.
406 | Not Acceptable -- Your request is not acceptable.
410 | Gone -- The resource requested has been removed from our servers.
422 | Unprocessable Entity -- Your request could not be processed.
429 | Too Many Requests -- You're requesting too many resources! Slow down!
500 | Internal Server Error -- We had a problem with our server. Try again later.
503 | Service Unavailable -- We're temporarily offline for maintenance. Try again later.


# Resources & Help

If you have any questions about using our sales tax API for PHP, please [contact us](https://www.taxjar.com/contact/) or tweet [@TaxJarDev](https://twitter.com/TaxJarDev). We'll help you out as soon as we can!

- [PHP Sales Tax API Reference](/api/reference/?php)
- [General SmartCalcs FAQs](https://support.taxjar.com/knowledge_base/categories/smartcalcs)
- [taxjar/taxjar-php on GitHub](https://github.com/taxjar/taxjar-php)
- [taxjar/taxjar-php on Packagist](https://packagist.org/packages/taxjar/taxjar-php)
