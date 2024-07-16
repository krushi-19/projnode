
const http = require('http');
        
        function sayHello(str){
console.log("Hello" + str);
}

http.createServer((req, res) => {
sayHello('World');
res.writeHead(200, {'Content-Type' : 'text/plain'});
res.end('Hello World\n');


}). listen(3000, () => {
        console.log('Server running on port 3000');

});
    
