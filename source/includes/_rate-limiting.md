# Rate Limiting

We limit API requests to 10,000 per minute for [TaxJar Professional](https://www.taxjar.com/request-demo/) plans. Our [TaxJar Premium](https://www.taxjar.com/request-demo/) plans include an increased limit of 25,000 per minute.

If you're exceeding this rate and encountering 429 errors, review the following:

* Only make calculation requests in states / regions where you have nexus.
* Cache responses if the order details haven't changed since the last calculation at checkout.
* Use our [summarized rates](#summarized-rates) endpoint as a fallback to ensure sales tax is collected.
