
###Yaap-Express generator for Yeoman
This generator scaffolds a basic web-application with a backend powered by [Wire.js](https://github.com/cujojs/wire) with [Yaap](https://github.com/warmuuh/yaap).
With [yaap-extensions](https://github.com/warmuuh/yaap/blob/master/yaap/docs/annotations.md), a spring-like annotation-based development and dependency-injection is possible. (think @Autowired)
Additionally, the [yaap-express](https://github.com/warmuuh/yaap/blob/master/yaap/docs/express.md) plugin for wire.js allows for easy creation of dynamic services similar to spring mvc.

## Getting Started

To install generator-yaap-express from npm, run:

```
$ npm install -g generator-yaap-express
```

Finally, initiate the generator:

```
$ yo yaap-express
```

## What You Get

This will  be generated for you, if you choose to develop a rest-based service:
```
<root>
│
└───app
    │   app.js (the wiring context is setup here)
    │   config.json (server configurations)
    │   server.js (express server setup)
    │
    ├───controller
    │       dashboard.js (example rest-controller)
    │
    ├───model
    │
    ├───service
    │     messageService.js (service class from service-layer)
    └───public (static content)
        │   index.html (example angular application)
        │
        ├───images
        │       yeoman.png (example static content)
        │
        ├───javascripts
        │   │   application.js (example angular controller)
        │   │
        │   └───lib (3party browser libs go here)
        │       └───angular
        │
        └───stylesheets
```
Alternatively, this generator can create a webapplication with server-side rendering (using [Jade](http://jade-lang.com/)).


## License

MIT
