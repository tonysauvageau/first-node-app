var http = require('http');
var fs = require('fs');

var port = 8080;

http.createServer( function ( request, response) {
    
    fs.readFile('inde.html', function(err, content) {

        if ( err ) {
            response.writeHead(404, {'Content-Type': 'text/html'});

            fs.readFile('404.html', function(err, content) {
                response.end(content);
            });

        }else{

            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(content);
            
        }
        
    });

}).listen(port);

console.log('server running on port '+port);