
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){

    // watch the console for the results 
    var test1 = require('./myModules/test1');
        console.log('TEST1:', test1.doit() );

    var test2 = require('./myModules/test2');
        console.log('TEST2:', test2.doit() );

    var test3 = require('./myModules/test3')('some new value for foo');
        console.log('TEST3:', test3.doit() );

  console.log('Express server listening on port ' + app.get('port'));
});
