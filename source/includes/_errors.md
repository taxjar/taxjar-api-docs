# Errors

The TaxJar API uses the following error codes:

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

## 400 Bad Request

If you receive the message "No from address, no nexus address, and no address on file", we recommend providing `from_` or `nexus_addresses[]` depending on the endpoint's accepted parameters. Otherwise [sign in](https://app.taxjar.com/sign_in) and provide your [business address and locations](https://app.taxjar.com/account) in TaxJar.

## 401 Unauthorized

Verify your API token is correct and make sure you're correctly setting the [Authorization header](#authentication).

## 403 Forbidden

Make sure you have an active API token with TaxJar by [reviewing your account](https://app.taxjar.com/account). Your trial or subscription may have expired. If you're still not sure what's wrong, [contact us](http://www.taxjar.com/contact) and we'll investigate.

## 406 Not Acceptable

This error occurs most often when posting form-encoded data with parameters such as `nexus_addresses[]` or `line_items[]`. If your code looks correct, try submitting the request with a `Content-Type: application/json` header. **Data should always be JSON-encoded.**