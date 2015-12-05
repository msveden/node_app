var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var errorHandler = require('./app/controllers/error')
var path = require('path');
var parent = path.resolve('.');
var installDirName = path.basename(parent);
var https = require('https');
var fs = require('fs');
var siteSettings = require('./app/data/site-settings');

var app = express();

siteSettings.init(init);

function init() {
    initExpress();
}

function initExpress() {

    app.set('port', (process.env[installDirName + '_PORT'] || 5000));
    
    app.use(express.static(path.join(__dirname, 'dist')));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'bower_components')));
    
    // view engine setup
    app.set('views', path.join(__dirname, 'app/views'));        
    app.set('view engine', 'html');
    app.set('layout', 'layout');
    //app.enable('view cache');
    app.engine('html', require('hogan-express'));
    
    // app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use(logger('combined'));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    // Bootstrap routes
    require('./config/routes')(app);
    
    /// catch 404 and forwarding to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    
    /// error handlers
    app.use(errorHandler(app.get('env') === 'development'));    
    console.log(app.get('env'));    
    
    startHttpServer();
}

function startHttpServer() {
    app.listen(app.get('port'), function() {
      console.log('Node app is running on port', app.get('port'));
    });
}

function startHttpsServer() {
    var privateKey = fs.readFileSync( 'privatekey.pem' );
    var certificate = fs.readFileSync( 'certificate.pem' );
    var options = {
        key: privateKey,
        cert: certificate
    };
    
    // or
    // var options = {
    //     pfx: fs.readFileSync('server.pfx')
    // };
    
    https.createServer(options, function (req, res) {
        res.writeHead(200);
        res.end("hello world\n");
    }).listen(8000);
}

module.exports = app;
