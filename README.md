# modernmt-translate

Text translations using ModernMT.  
See also: https://www.npmjs.com/package/modernmt-translate-server

Can translate full HTML documents.

### Usage

```
var modernmtTranslate = require("modernmt-translate");
var translate = new modernmtTranslate({key: "<your_api_key_goes_here>"});
translate.languages().then(function(languages) {
  console.log(languages);
}).catch(function(error) {
  console.log(error);
});
translate.translate("This is a test line.", "eng", "swe").then(function(text) {
  console.log(text);
}).catch(function(error) {
  console.log(error);
});
```

### Usage with modernmt-translate-server

```
var modernmtTranslate = require("modernmt-translate");
var translate = new modernmtTranslate({
  server: {
    use: true,
    link: "https://<your_server_name>",
    authorization: "<your_server_authorization_key>"
  }
});
translate.languages().then(function(languages) {
  console.log(languages);
}).catch(function(error) {
  console.log(error);
});
translate.translate("This is a test line.", "eng", "swe").then(function(text) {
  console.log(text);
}).catch(function(error) {
  console.log(error);
});
```

For API key:  
https://www.modernmt.com/pricing/