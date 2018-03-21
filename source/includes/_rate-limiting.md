# Rate Limiting

We limit API requests to 500 per minute for basic plans. Our [TaxJar Plus plans](https://www.taxjar.com/plus/) are limited to 10,000 per minute after [requesting a limit increase](https://www.taxjar.com/contact/).

If you're exceeding this rate and encountering 429 errors, review the following:

* Only make calculation requests in states / regions where you have nexus.
* Cache responses if the order details haven't changed since the last calculation at checkout.
* Use our [summarized rates](#summarized-rates) endpoint as a fallback to ensure sales tax is collected.

For peak volumes during holiday or promotional periods, make sure you [contact us](https://www.taxjar.com/contact/) in advance to request a limit increase.
