# isSecure

Test if a HTTP Request is secure, taking into account x-fowarded-proto and related.

## Usage

```
var isSecure = require('is-secure');

http.createServer(function(req, res) {
  if (isSecure(req)) {
    res.end('Horray! Security achieved, here's the secret stuff: you are awesome');
  } else {
    res.end('Connection is not secure! *sad face*')
  }
}).listen(process.env.PORT || 8000);
```
