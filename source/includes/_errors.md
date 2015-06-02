# Errors

The TaxJar API uses the following error codes:

Error Code | Meaning
---------- | -------
400 | Bad Request -- Your request format is bad
401 | Unauthorized -- Your API key is wrong
403 | Forbidden -- The resource requested is not authorized for use
404 | Not Found -- The specified resource could not be found
405 | Method Not Allowed -- You tried to access a resource with an invalid method
406 | Not Acceptable -- You requested a format that isn't json
410 | Gone -- The resource requested has been removed from our servers
422 | Some entity of the resource could not be processed
429 | Too Many Requests -- You're requesting too many resources! Slow down!
500 | Internal Server Error -- We had a problem with our server. Try again later.
503 | Service Unavailable -- We're temporarially offline for maintanance. Please try again later.
