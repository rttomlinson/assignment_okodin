const express = require("express");
const expressHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const session = require("express-session");
const url = require('url');

const app = express();


// ----------------------------------------
// Helpers
// ----------------------------------------
const helpers = require("./helpers");

// ----------------------------------------
// Template Engine
// ----------------------------------------

const hbs = expressHbs.create({
    extname: ".hbs",
    partialsDir: "views/",
    defaultLayout: "main",
    helpers: helpers.registered
});
app.set("view engine", "hbs");
app.engine("hbs", hbs.engine);

app.use(bodyParser.urlencoded({
    extended: true
}));

// ----------------------------------------
// Sessions
// ----------------------------------------
app.use(
    session({
        secret: "imasecretshhhhhhh",
        resave: false,
        saveUninitialized: true
    })
);

app.use((req, res, next) => {
    res.locals.session = req.session;
    res.locals.currentUser = req.session.currentUser;
    next();
});

// ----------------------------------------
// Flash Messages
// ----------------------------------------
var flash = require("express-flash-messages");
app.use(flash());

// ----------------------------------------
// Method Override
// ----------------------------------------
app.use((req, res, next) => {
    var method;
    if (req.query._method) {
        method = req.query._method;
        delete req.query._method;
    }
    else if (typeof req.body === "object" && req.body._method) {
        method = req.body._method;
        delete req.body._method;
    }

    if (method) {
        method = method.toUpperCase();
        req.method = method;
    }

    next();
});

// ----------------------------------------
// Logging
// ----------------------------------------
var morgan = require("morgan");
app.use(morgan("tiny"));
app.use((req, res, next) => {
    console.log();
    ["query", "params", "body"].forEach(key => {
        if (req[key]) {
            var capKey = key[0].toUpperCase() + key.substr(1);
            var value = JSON.stringify(req[key], null, 2);
            console.log(`${capKey}: ${value}`);
        }
    });
    next();
});

// ----------------------------------------
// Public
// ----------------------------------------
app.use(express.static(`${__dirname}/public`));

// ----------------------------------------
// Routers
// ----------------------------------------
app.use((req, res, next) => {
    var reqUrl = url.parse(req.url);
    if (!req.session.currentUser &&
        !['/', '/login'].includes(reqUrl.pathname)) {
        res.redirect('/login');
    }
    else {
        next();
    }
});

const indexRouter = require('./routers/index');
const usersRouter = require('./routers/users');
const viewsRouter = require('./routers/views');

app.use('/views', viewsRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

// ----------------------------------------
// Error Handling
// ----------------------------------------
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(err.stack);
});

// ----------------------------------------
// Server
// ----------------------------------------
var port = process.env.PORT || process.argv[2] || 3000;
var host = process.env.IP || "localhost";

var args;
process.env.NODE_ENV === "production" ? (args = [port]) : (args = [port, host]);

args.push(() => {
    console.log(`Listening: http://${host}:${port}`);
});

app.listen.apply(app, args);

module.exports = app;
