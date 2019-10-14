---
title: Sales Tax API Guide for Ruby
description: "How to use SmartCalcs with our official Ruby client."
preferred_url: https://developers.taxjar.com/api/guides/ruby/
---

# Ruby Quickstart

Ready to dive into our sales tax API with Ruby? In this guide we'll show you how to set up TaxJar's official Ruby client, authenticate with your API token, and start calculating sales tax right away. If you get stuck don't panic... [shoot us an email](mailto:support@taxjar.com) or [open an issue on GitHub](https://github.com/taxjar/taxjar-api-docs/issues/new). Now let's go!

## Getting Started

> Gemfile

```ruby
gem 'taxjar-ruby', require: 'taxjar'
```

First let's install the `taxjar-ruby` gem. Add the line to the right in your application's Gemfile and then go to your project directory in the terminal. Enter the following command:

`bundle install`

Ca-ching! You now have the TaxJar Ruby client inside your project.

## Authentication

```ruby
require 'taxjar'
client = Taxjar::Client.new(api_key: '48ceecccc8af930bd02597aec0f84a78') # Useful for quick testing
client = Taxjar::Client.new(api_key: ENV['TAXJAR_API_KEY']) # Recommended
```

In order to make requests to our [sales tax API](https://www.taxjar.com/smartcalcs/) and get data back, you'll need to pass your TaxJar API token. If you don't already have a TaxJar account, [sign up to get your token](https://app.taxjar.com/api_sign_up/).

We recommend using a `.env` file with a gem such as [dotenv](https://github.com/bkeepers/dotenv) to keep sensitive credentials like API tokens outside of your code.

## Sales Tax Calculations

```ruby
require 'taxjar'
client = Taxjar::Client.new(api_key: ENV['TAXJAR_API_KEY'])

tax = client.tax_for_order({
  :to_country => 'US',
  :to_zip => '90002',
  :to_city => 'Los Angeles',
  :to_state => 'CA',
  :from_country => 'US',
  :from_zip => '92093',
  :from_city => 'San Diego',
  :amount => 16.50,
  :shipping => 1.5,
  :line_items => [
    {
      :quantity => 1,
      :unit_price => 15.0,
      :product_tax_code => '31000'
    }
  ]
})

puts tax.amount_to_collect
puts tax.rate
```

> Truncated Response

```ruby
{
  :order_total_amount => 16.5,
  :shipping => 1.5,
  :taxable_amount => 15.0,
  :amount_to_collect => 1.35,
  :rate => 0.09,
  :has_nexus => true,
  :freight_taxable => false,
  :tax_source => "destination",
  :breakdown => {}
}
```

Now that we've set up the Ruby client, let's calculate some sales tax. In the example to the right, we're passing the following:

- **From Address**: The address you're shipping from, such as a warehouse or business location.
- **To Address**: The buyer's shipping address. The destination of the order. You get the idea.
- **Amount**: Total amount of the order, **excluding shipping**. Shipping is included separately.
- **Shipping**: Total amount of shipping for the order.
- **Line Items**: A nested array of items being purchased in the order.

You can learn more about the parameters passed to our tax endpoint in the [API reference](/api/reference/?ruby#post-calculate-sales-tax-for-an-order). If you're passing a [product tax code](/api/guides#product-exemptions) for specific line items, refer to our [category list](/api/reference/?ruby#categories) to determine which code to use.

After calling `tax_for_order`, you'll get a response back. Check it out with [pry](https://github.com/pry/pry), [byebug](https://github.com/deivid-rodriguez/byebug), or simply `p tax`. To access a specific attribute in the response, use Ruby's dot syntax: `tax.amount_to_collect`.

If you just need the rate for a given location, use the [/v2/rates](/api/reference/?ruby#get-show-tax-rates-for-a-location) endpoint. You can also take advantage of our [summarized rates endpoint](/api/reference/?ruby#get-summarize-tax-rates-for-all-regions) as a backup to store in your database.

## Sales Tax Reporting

```ruby
require 'taxjar'
client = Taxjar::Client.new(api_key: ENV['TAXJAR_API_KEY'])

order = client.create_order({
  :transaction_id => '123',
  :transaction_date => '2015/05/14',
  :to_country => 'US',
  :to_zip => '90002',
  :to_state => 'CA',
  :to_city => 'Los Angeles',
  :to_street => '123 Palm Grove Ln',
  :amount => 16.5,
  :shipping => 1.5,
  :sales_tax => 0.95,
  :line_items => [
    {
      :quantity => 1,
      :product_identifier => '12-34243-9',
      :description => 'Fuzzy Widget',
      :unit_price => 15.0,
      :sales_tax => 0.95
    }
  ]
})

puts order.transaction_id
puts order.sales_tax
```

> Truncated Response

```ruby
#<Taxjar::Order:0x007f6d65b252d0 @attrs={
  :transaction_id => 20,
  :user_id => 11836,
  :transaction_date => "2015-05-14T00:00:00Z",
  :transaction_reference_id => nil,
  :from_country => "US",
  :from_zip => 93101,
  :from_state => "CA",
  :from_city => "SANTA BARBARA",
  :from_street => "1218 State St"
}>
```

To get the full TaxJar experience you'll also want to set up sales tax reporting to file your tax returns later. To push transactions (orders and refunds) into TaxJar, we provide a [collection of endpoints](/api/reference/?ruby#transactions) that cover your basic CRUD operations. In the example to the right, we're pushing an order into TaxJar. Once imported, it'll appear on the **Transactions** page in the [TaxJar app](https://app.taxjar.com). We're passing the following parameters:

- **Transaction ID**: A unique identifier for your order.
- **Transaction Date**: The date the transaction was recorded.
- **From Address**: The address you're shipping from, such as a warehouse or business location.
- **To Address**: The buyer's shipping address or destination of the order.
- **Amount**: Total amount of the order, **including shipping** and **excluding sales tax**. Yeah, this is a gotcha we're planning to fix in the next API version.
- **Shipping**: Total amount of shipping for the order.
- **Sales Tax**: Total amount of sales tax collected.
- **Line Items**: A nested array of items purchased in the order. Includes the product ID, description, and amount of sales tax collected for the line item.

A successful response will return back the imported order transaction. Nifty!

## Error Handling

```ruby
require 'taxjar'
client = Taxjar::Client.new(api_key: ENV['TAXJAR_API_KEY'])

begin
  order = client.create_order({
    :transaction_date => '2015/05/14',
    :to_country => 'US',
    :to_state => 'CA',
    :to_zip => '90002',
    :amount => 17.45,
    :shipping => 1.5,
    :sales_tax => 0.95
  })
rescue Taxjar::Error => e
  # <Taxjar::Error::NotAcceptable: transaction_id is missing>
  puts e.class.name
  puts e.message
end
```

When invalid data is sent to TaxJar or we encounter an error, we'll throw a `Taxjar::Error` with the HTTP status code and error message. To catch these exceptions, you can use the example to the right. Here's a list of common [error response classes](/api/reference/?ruby#errors) for reference:

Error Class | Meaning
---------- | -------
Taxjar::Error::BadRequest | Bad Request -- Your request format is bad.
Taxjar::Error::Unauthorized | Unauthorized -- Your API key is wrong.
Taxjar::Error::Forbidden | Forbidden -- The resource requested is not authorized for use.
Taxjar::Error::NotFound | Not Found -- The specified resource could not be found.
Taxjar::Error::MethodNotAllowed | Method Not Allowed -- You tried to access a resource with an invalid method.
Taxjar::Error::NotAcceptable | Not Acceptable -- Your request is not acceptable.
Taxjar::Error::Gone | Gone -- The resource requested has been removed from our servers.
Taxjar::Error::UnprocessableEntity | Unprocessable Entity -- Your request could not be processed.
Taxjar::Error::TooManyRequests | Too Many Requests -- You're requesting too many resources! Slow down!
Taxjar::Error::InternalServerError | Internal Server Error -- We had a problem with our server. Try again later.
Taxjar::Error::ServiceUnavailable | Service Unavailable -- We're temporarily offline for maintenance. Try again later.

## Resources & Help

If you have any questions about using our sales tax API for Ruby, please [contact us](https://www.taxjar.com/contact/) or tweet [@TaxJarDev](https://twitter.com/TaxJarDev). We'll help you out as soon as we can!

- [Ruby Sales Tax API Reference](/api/reference/?ruby)
- [General SmartCalcs FAQs](https://support.taxjar.com/knowledge_base/categories/smartcalcs)
- [taxjar-ruby on GitHub](https://github.com/taxjar/taxjar-ruby)
- [taxjar-ruby on RubyGems](https://rubygems.org/gems/taxjar-ruby)
