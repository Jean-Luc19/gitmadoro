const path = require('path');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();
const {DATABASE_URL} = require('./config');


mongoose.Promise = global.Promise;
// API endpoints go here!


// *** Middleware *** //
app.use(bodyParser.json())
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
      mongoose.connect(DATABASE_URL, err => {
        if(err) {
          return reject(err);
        }
        console.log('Successfully Connected to DB');

        server = app.listen(port, () => {
            resolve();
        }).on('error', reject);
      });
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        mongoose.connect(DATABASE_URL, err => {})
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
