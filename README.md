# api-nodejs
[A-Parser](https://a-parser.com/) API Client Library for Node.js

### Usage
```
const AParserClient = require('a-parser');

const AParser = new AParserClient('http://127.0.0.1:9091/API');

AParser.ping()
    .then(reply => console.log(reply.data))
    .catch(err => console.log(err));


(async () => {
    const reply = await AParser.addTask(...);
})()
```