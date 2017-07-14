---
title: Sales Tax API Guide for Java
description: "How to use SmartCalcs with our official Java client."
preferred_url: https://developers.taxjar.com/api/guides/java/
---

# Java Quickstart

Ready to dive into our sales tax API with Java? In this guide we'll show you how to set up TaxJar's official Java client, authenticate with your API token, and start calculating sales tax right away. If you get stuck don't panic... [shoot us an email](mailto:support@taxjar.com) or [open an issue on GitHub](https://github.com/taxjar/taxjar-api-docs/issues/new). Now let's go!

## Getting Started

```xml
<dependency>
    <groupId>com.taxjar</groupId>
    <artifactId>taxjar-java</artifactId>
    <version>1.0.0</version>
</dependency>
```

First let's install `taxjar-java` via [Maven](https://maven.apache.org/what-is-maven.html) or [Gradle](https://gradle.org/), whichever you prefer. You can also [download the JARs manually](https://github.com/taxjar/taxjar-java#manual-installation). For Maven, add the dependency on the right to your project's `pom.xml` file &rarr;

Afterwards, run `mvn install` on the command line or use your IDE of choice (such as IntelliJ IDEA) to install the required dependencies. If you prefer Gradle, update your `build.gradle` file:

`compile "com.taxjar:taxjar-java:1.0.0"`

Swoosh! You now have the TaxJar Java client inside your project.

## Authentication

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;

public class AuthenticationExample {

    public static void main(String[] args) {
        // Method A: Use `System.getenv` to retrieve an environment variable with your TaxJar API token
        Taxjar client = new Taxjar(System.getenv("TAXJAR_API_KEY"));

        // Method B: Useful for quick testing
        Taxjar client = new Taxjar("[Your TaxJar API Key]");
    }

}
```

In order to make requests to our [sales tax API](https://www.taxjar.com/smartcalcs/) and get data back, you'll need to pass your TaxJar API token. If you don't already have a TaxJar account, [sign up to get your token](https://app.taxjar.com/api_sign_up/).

We recommend using an environment variable for the TaxJar API token to keep sensitive credentials outside of your code.

# Sales Tax Calculations

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.taxes.TaxResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TaxExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar(System.getenv("TAXJAR_API_KEY"));

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("from_country", "US");
            params.put("from_zip", "92093");
            params.put("from_state", "CA");
            params.put("from_city", "San Diego");
            params.put("to_country", "US");
            params.put("to_zip", "90002");
            params.put("to_state", "CA");
            params.put("to_city", "Los Angeles");
            params.put("amount", 16.5);
            params.put("shipping", 1.5);

            List<Map> lineItems = new ArrayList();
            Map<String, Object> lineItem = new HashMap<>();
            lineItem.put("id", 1);
            lineItem.put("product_tax_code", "31000");
            lineItem.put("unit_price", 15);
            lineItems.add(lineItem);

            params.put("line_items", lineItems);

            TaxResponse res = client.taxForOrder(params);

            res.tax.getAmountToCollect();
            res.tax.getRate();
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

> Truncated Response

```json
{
  "tax": {
    "order_total_amount": 16.5,
    "shipping": 1.5,
    "taxable_amount": 15.0,
    "amount_to_collect": 1.35,
    "rate": 0.09,
    "has_nexus": true,
    "freight_taxable": true,
    "tax_source": "destination",
    "breakdown": {}
  }
}
```

Now that we've set up the Java client, let's calculate some sales tax. In the example to the right, we're passing the following:

- **From Address**: The address you're shipping from, such as a warehouse or business location.
- **To Address**: The buyer's shipping address. The destination of the order. You get the idea.
- **Amount**: Total amount of the order, **excluding shipping**. Shipping is included separately.
- **Shipping**: Total amount of shipping for the order.
- **Line Items**: A nested array of items being purchased in the order.

You can learn more about the parameters passed to our tax endpoint in the [API reference](/api/reference/?java#post-calculate-sales-tax-for-an-order). If you're passing a [product tax code](/api/guides#product-exemptions) for specific line items, refer to our [category list](/api/reference/?java#categories) to determine which code to use.

After calling `taxForOrder`, you'll get a response back. Check it out with your IDE debugger of choice. To access a specific attribute in the response, use Java's dot notation syntax with a getter method: `res.tax.getAmountToCollect()`.

If you just need the rate for a given location, use the [/v2/rates](/api/reference/?java#get-show-tax-rates-for-a-location) endpoint. You can also take advantage of our [summarized rates endpoint](/api/reference/?java#get-summarize-tax-rates-for-all-regions) as a backup to store in your database.

# Sales Tax Reporting

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.OrderResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CreateOrderExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar(System.getenv("TAXJAR_API_KEY"));

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("transaction_id", "123");
            params.put("transaction_date", "2015/05/04");
            params.put("to_country", "US");
            params.put("to_zip", "90002");
            params.put("to_city", "Los Angeles");
            params.put("to_street", "123 Palm Grove Ln");
            params.put("amount", 17);
            params.put("shipping", 2);
            params.put("sales_tax", 0.95);

            List<Map> lineItems = new ArrayList();
            Map<String, Object> lineItem = new HashMap<>();
            lineItem.put("quantity", 1);
            lineItem.put("product_identifier", "12-34243-0");
            lineItem.put("description", "Heavy Widget");
            lineItem.put("unit_price", 15);
            lineItem.put("sales_tax", 0.95);
            lineItems.add(lineItem);

            params.put("line_items", lineItems);

            OrderResponse res = client.createOrder(params);

            res.order.getTransactionId();
            res.order.getSalesTax();
        } catch (TaxjarException e) {
            e.printStackTrace();
        }
    }

}
```

> Truncated Response

```json
{
  "order": {
    "transaction_id": "123",
    "user_id": 10649,
    "transaction_date": "2015-05-04T00:00:00Z",
    "to_country": "US",
    "to_zip": "90002",
    "to_state": "CA",
    "to_city": "LOS ANGELES",
    "to_street": "123 Palm Grove Ln",
    "amount": "17",
    "shipping": "2.0",
    "sales_tax": "0.95",
    "line_items": [
      {
        "id": 1,
        "quantity": 1,
        "product_identifier": "12-34243-0",
        "description": "Heavy Widget",
        "unit_price": "15.0",
        "discount": "0.0",
        "sales_tax": "0.95"
      }
    ]
  }
}
```

To get the full TaxJar experience you'll also want to set up sales tax reporting to file your tax returns later. To push transactions (orders and refunds) into TaxJar, we provide a [collection of endpoints](/api/reference/?java#transactions) that cover your basic CRUD operations. In the example to the right, we're pushing an order into TaxJar. Once imported, it'll appear on the **Transactions** page in the [TaxJar app](https://app.taxjar.com). We're passing the following parameters:

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

```java
import com.taxjar.Taxjar;
import com.taxjar.exception.TaxjarException;
import com.taxjar.model.transactions.OrderResponse;
import java.util.HashMap;
import java.util.Map;

public class ErrorHandlingExample {

    public static void main(String[] args) {
        Taxjar client = new Taxjar(System.getenv("TAXJAR_API_KEY"));

        try {
            Map<String, Object> params = new HashMap<>();
            params.put("transaction_date", "2015/05/04");
            params.put("to_country", "US");
            params.put("to_zip", "90002");
            params.put("to_state", "CA");
            params.put("amount", 17.45);
            params.put("shipping", 1.5);
            params.put("sales_tax", 0.95);

            OrderResponse res = client.createOrder(params);
        } catch (TaxjarException e) {
            // 406 Not Acceptable – transaction_id is missing
            e.getMessage();
            e.getStatusCode();
            e.printStackTrace();
        }
    }

}
```

When invalid data is sent to TaxJar or we encounter an error, we'll throw a `TaxjarException` with the HTTP status code and error message. To catch these exceptions, you can use the example to the right. Here's a list of common [error response classes](/api/reference/?java#errors) for reference:

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

If you have any questions about using our sales tax API for Java, please [contact us](https://www.taxjar.com/contact/) or tweet [@TaxJarDev](https://twitter.com/TaxJarDev). We'll help you out as soon as we can!

- [Java Sales Tax API Reference](/api/reference/?java)
- [General SmartCalcs FAQs](https://support.taxjar.com/knowledge_base/categories/smartcalcs)
- [taxjar-java on GitHub](https://github.com/taxjar/taxjar-java)
- [taxjar-java on The Central Repository](https://search.maven.org/#artifactdetails%7Ccom.taxjar%7Ctaxjar-java%7C1.0.0%7Cjar)
