# api-nodejs
[A-Parser](https://a-parser.com/) API client for Node.js

### Usage
```
const Aparser = require('./aparser');

const serv = new Aparser('http://127.0.0.1:9091/API');

serv.ping()
.then(data => console.log(data))
.catch(err => console.log(err));
```