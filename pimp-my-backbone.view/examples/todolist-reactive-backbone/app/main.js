require.config({
    deps: ["main"],
    paths: {
        jquery: "../lib/jquery-1.9.1",
        lodash: "../lib/lodash.compat",
        backbone: "../lib/backbone",
        jsx: "../lib/jsx",
        JSXTransformer: '../lib/JSXTransformer',
        react: '../lib/react'
    },
    shim: {
        backbone: {
            deps: ["lodash", "jquery"],
            exports: "Backbone"
        }
    }
});

require(['app', 'jsx!router'], function(app, Router) {
    app.router = new Router();
    app.run();
});
