# rest-interceptor-responsetime

[![Greenkeeper badge](https://badges.greenkeeper.io/HiFaraz/rest-interceptor-responsetime.svg)](https://greenkeeper.io/)
Measure response times with rest.js

Use this when you want to measure HTTP response times while using [rest.js](https://www.npmjs.com/package/rest). You can access the response time in `response.time`.

## Installation

```bash
$ npm install rest-interceptor-responsetime
```

## Usage

```javascript
var rest = require('rest');
var responseTime = require('rest-interceptor-responsetime');

rest.wrap('responseTime');

rest('http://someurl').then(function(response){
	console.log(response.time);
}).catch(function(response){
	console.log(response.time); // only exists if the server has responded with an HTTP status, not on internal errors
});
```
## Measurement units

`response.time` is reported in milliseconds.

## Precision

`response.time` has nanosecond precision. You can multiple `response.time` by `1e6` to convert to nanoseconds.