#Module that lets the Vector Apps and streams run in the browser.

Installation:
* npm install -g browserify
* npm install -g http-server
* npm install vectorwatch-sdk (or clone it form https://github.com/VectorWatch/vectorwatch-sdk)
* Move all files except for sample.js, sample-bunde.js and sample.html under node_modules/vectorwatch-browser/

Usage:
* browserify sample.js -o sample-bundle.js
* http-server .
* Open http://localhost:8080/sample.html in your browser
* Open the console, click the two buttons
