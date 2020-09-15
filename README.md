# App request

Http client that allows you to send requests to the specified url.
Requests are saved and displayed in the log, they can be resubmitted.
The client also allows you to establish a websocket connection and receive data from there.

### Installation

#### npm
```sh
$ cd app-request
$ npm install
```
#### yarn
```sh
$ cd app-request
$ yarn install
```

### Development
#### npm
Dev:
```sh
$ npm start
```
Test:
```sh
$ npm test
```

Production:
```sh
$ npm run build
```

#### yarn
Dev:
```sh
$ yarn start
```
Test:
```sh
$ yarn test
```

Production:
```sh
$ yarn build
```

### Testing the application

#### json-server
json-server for testing requests https://github.com/typicode/json-server
#### Run server
```sh
$ cd ./server
$ npm json-server --watch server.json --port 3004
```
#### Run server with delay
```sh
$ cd ./server
$ json-server --watch server.json --port 3004 --delay 3000
```
#### Requests
```sh
GET url: http://localhost:3004/users	
POST url: http://localhost:3004/users body: {"name":"boris","location":"Russia"}
PUT url: http://localhost:3004/users/1 body: {"name":"Ivan","location":"Russia"}		
DELETE url: http://localhost:3004/users/1
```
#### Websocket
Coincap for tetsing websocket https://docs.coincap.io/
```sh
url: wss://ws.coincap.io/prices?assets=ALL
```





