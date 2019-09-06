---
title: Sales Tax API Guide for Go
description: "How to use SmartCalcs with our official Go client."
preferred_url: https://developers.taxjar.com/api/guides/go/
---

# Go Quickstart

Ready to dive into our sales tax API with Go? In this guide we'll show you how to set up TaxJar's official Go client, authenticate with your API token, and start calculating sales tax right away. If you get stuck don't panic... [shoot us an email](mailto:support@taxjar.com) or [open an issue on GitHub](https://github.com/taxjar/taxjar-api-docs/issues/new). Now let's go!

## Getting Started

First let's install the `taxjar` package from `github.com/taxjar/taxjar-go`. Go to your project directory in the terminal and enter the following command:

`go get -u github.com/taxjar/taxjar-go`

Ca-ching! You now have the TaxJar Go client inside your project.

## Authentication

```go
package main

import (
	"os"

	"github.com/taxjar/taxjar-go"
)

func main() {
	client := taxjar.NewClient(taxjar.Config{
		APIKey: "48ceecccc8af930bd02597aec0f84a78", // Useful for quick testing
	})
	client := taxjar.NewClient(taxjar.Config{
		APIKey: os.Getenv("TAXJAR_API_KEY"), // Recommended
	})
}
```

In order to make requests to our [sales tax API](https://www.taxjar.com/smartcalcs/) and get data back, you'll need to pass your TaxJar API token. If you don't already have a TaxJar account, [sign up to get your token](https://app.taxjar.com/api_sign_up/).

We recommend using an environment variable such as `TAXJAR_API_KEY` to keep sensitive credentials like API tokens outside of your code.

# Sales Tax Calculations

```go
package main

import (
	"fmt"
	"os"

	"github.com/taxjar/taxjar-go"
)

func main() {
	client := taxjar.NewClient(taxjar.Config{
		APIKey: os.Getenv("TAXJAR_API_KEY"),
	})

	res, err := client.TaxForOrder(taxjar.TaxForOrderParams{
		FromCountry: "US",
		FromZip:     "92093",
		FromState:   "CA",
		FromCity:    "La Jolla",
		FromStreet:  "9500 Gilman Dr",
		ToCountry:   "US",
		ToZip:       "90002",
		ToState:     "CA",
		ToCity:      "Los Angeles",
		ToStreet:    "1727 E 107th St",
		Amount:      15,
		Shipping:    1.5,
		LineItems:   []taxjar.TaxLineItem{
			{
				ID:             "1",
				Quantity:       1,
				ProductTaxCode: "20010",
				UnitPrice:      15,
				Discount:       0,
			},
		},
	})
	if err != nil {
		// handle error
	}
	fmt.Printf("%+v", res.Tax)
	fmt.Println(res.Tax.AmountToCollect)
}
```

> Truncated Response

```go
taxjar.TaxForOrderResponse{
	Tax: taxjar.Tax{
		OrderTotalAmount: 16.5,
		Shipping:         1.5,
		TaxableAmount:    15.0,
		AmountToCollect:  1.43,
		Rate:             0.095,
		HasNexus:         true,
		FreightTaxable:   false,
		TaxSource:        "destination",
		ExemptionType:    "",
		Jurisdictions:    []taxjar.Jurisdictions{},
		Breakdown:        []taxjar.Breakdown{},
	},
}
```

Now that we've set up the Go client, let's calculate some sales tax. In the example to the right, we're passing the following:

- **From Address**: The address you're shipping from, such as a warehouse or business location.
- **To Address**: The buyer's shipping address. The destination of the order. You get the idea.
- **Amount**: Total amount of the order, **excluding shipping**. Shipping is included separately.
- **Shipping**: Total amount of shipping for the order.
- **Line Items**: A nested array of items being purchased in the order.

You can learn more about the parameters passed to our tax endpoint in the [API reference](/api/reference/?go#post-calculate-sales-tax-for-an-order). If you're passing a [product tax code](/api/guides#product-exemptions) for specific line items, refer to our [category list](/api/reference/?go#categories) to determine which code to use.

After calling `TaxForOrder`, you'll get a response back. Check it out with `fmt.Printf("%+v", res.Tax)`. To access a specific attribute in the response, use Go's dot syntax: `res.Tax.AmountToCollect`.

If you just need the rate for a given location, use the [/v2/rates](/api/reference/?go#get-show-tax-rates-for-a-location) endpoint. You can also take advantage of our [summarized rates endpoint](/api/reference/?go#get-summarize-tax-rates-for-all-regions) as a backup to store in your database.

# Sales Tax Reporting

```go
package main

import (
	"fmt"
	"os"

	"github.com/taxjar/taxjar-go"
)

func main() {
	client := taxjar.NewClient(taxjar.Config{
		APIKey: os.Getenv("TAXJAR_API_KEY"),
	})

	res, err := client.CreateOrder(taxjar.CreateOrderParams {
		TransactionID:   "123",
		TransactionDate: "2015/05/14",
		FromCountry:     "US",
		FromZip:         "93101",
		FromState:       "CA",
		FromCity:        "Santa Barbara",
		FromStreet:      "1218 State St",
		ToCountry:       "US",
		ToZip:           "90002",
		ToState:         "CA",
		ToCity:          "Los Angeles",
		ToStreet:        "123 Palm Grove Ln",
		Amount:          16.5,
		Shipping:        1.5,
		SalesTax:        0.95,
		LineItems:       []taxjar.OrderLineItem{
			{
				ID:                "1",
				Quantity:          1,
				ProductIdentifier: "12-34243-9",
				Description:       "Fuzzy Widget",
				ProductTaxCode:    "20010",
				UnitPrice:         15.0,
				SalesTax:          0.95,
			},
		},
	})
	if err != nil {
		// handle error
	}
	fmt.Printf("%+v", res.Order)
	fmt.Println(res.Order.TransactionID)
	fmt.Println(res.Order.SalesTax)
}
```

> Truncated Response

```go
taxjar.CreateOrderResponse{
	Order: taxjar.Order{
		TransactionID:   "123",
		UserID:          11836,
		TransactionDate: "2015-05-14T00:00:00Z",
		Provider:        "api",
		ExemptionType:   "",
		FromCountry:     "US",
		FromZip:         "93101",
		FromState:       "CA",
		FromCity:        "SANTA BARBARA",
		FromStreet:      "1218 State St",
		ToCountry:       "US",
		ToZip:           "90002",
		ToState:         "CA",
		ToCity:          "LOS ANGELES",
		ToStreet:        "123 Palm Grove Ln",
		Amount:          16.5,
		Shipping:        1.5,
		SalesTax:        0.95,
		LineItems:       []taxjar.OrderLineItem{},
	},
}
```

To get the full TaxJar experience you'll also want to set up sales tax reporting to file your tax returns later. To push transactions (orders and refunds) into TaxJar, we provide a [collection of endpoints](/api/reference/?go#transactions) that cover your basic CRUD operations. In the example to the right, we're pushing an order into TaxJar. Once imported, it'll appear on the **Transactions** page in the [TaxJar app](https://app.taxjar.com). We're passing the following parameters:

- **Transaction ID**: A unique identifier for your order.
- **Transaction Date**: The date the transaction was recorded.
- **From Address**: The address you're shipping from, such as a warehouse or business location.
- **To Address**: The buyer's shipping address or destination of the order.
- **Amount**: Total amount of the order, **including shipping** and **excluding sales tax**. Yeah, this is a gotcha we're planning to fix in the next API version.
- **Shipping**: Total amount of shipping for the order.
- **Sales Tax**: Total amount of sales tax collected.
- **Line Items**: A nested array of items purchased in the order. Includes the ID, quantity, product identifier, description, product tax code, unit price, and amount of sales tax collected for the line item.

A successful response will return back the imported order transaction. Nifty!

# Error Handling

```go
package main

import (
	"fmt"
	"os"

	"github.com/pkg/errors"
	"github.com/taxjar/taxjar-go"
)

func main() {
	client := taxjar.NewClient(taxjar.Config{
		APIKey: os.Getenv("TAXJAR_API_KEY"),
	})

	res, err := client.CreateOrder(taxjar.CreateOrderParams{
		TransactionDate: "2015/05/14",
		FromCountry:     "US",
		FromZip:         "93101",
		FromState:       "CA",
		FromCity:        "Santa Barbara",
		FromStreet:      "1218 State St",
		ToCountry:       "US",
		ToZip:           "90002",
		ToState:         "CA",
		ToCity:          "Los Angeles",
		ToStreet:        "123 Palm Grove Ln",
		Amount:          16.5,
		Shipping:        1.5,
		SalesTax:        0.95,
	})
	if err != nil {
		fmt.Println(err) // taxjar: 406 Not Acceptable - transaction_id is missing, transaction_id is empty
	} else {
		fmt.Println(res.Order)
	}
	// or extract more information by asserting to `*taxjar.Error`
	if err := err.(*taxjar.Error); err != nil {
		fmt.Println(err.Status) // 406
		fmt.Println(err.Err) // Not Acceptable
		fmt.Println(err.Detail) // transaction_id is missing, transaction_id is empty
		fmt.Printf("%+v", errors.Wrap(err, "")) // Stack trace:
		// taxjar: 406 Not Acceptable - transaction_id is missing, transaction_id is empty
		//
		// main.main
		//         /Path/to/your/file.go:79
		// runtime.main
		//         /usr/local/go/src/runtime/proc.go:200
		// runtime.goexit
		//         /usr/local/go/src/runtime/asm_amd64.s:1337
	} else {
		fmt.Println(res.Order)
	}
}
```

When invalid data is sent to TaxJar or we encounter an error, we'll return a [`Taxjar.Error`](https://godoc.org/github.com/taxjar/taxjar-go/#Error) as the second return value. To catch these errors, you can use the example to the right. See the API reference for a list of possible [error response codes](/api/reference/?go#errors).

# Resources & Help

If you have any questions about using our sales tax API for Go, please [contact us](https://www.taxjar.com/contact/) or tweet [@TaxJarDev](https://twitter.com/TaxJarDev). We'll help you out as soon as we can!

- [Go Sales Tax API Reference](/api/reference/?go)
- [General SmartCalcs FAQs](https://support.taxjar.com/knowledge_base/categories/smartcalcs)
- [taxjar-go on GitHub](https://github.com/taxjar/taxjar-go)
- [taxjar-go on GoDoc](https://godoc.org/github.com/taxjar/taxjar-go)
