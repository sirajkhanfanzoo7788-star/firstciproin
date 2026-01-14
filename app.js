const http = require('http');

http.createServer((req, res) => {
  res.write('CI Project Working Successfully!');
  res.end();
}).listen(3000);

console.log('Server running on port 3000');
console.log('alhumdulillah i have complete a enkins docker github ci proect ' + new Date());

