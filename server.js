// Server em Node :)
import { createServer } from 'http';

const PORT = 4055;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Bem vindo ao meu servidor!</h1></body></html>')
});

server.listen(PORT, () => {
  console.log(`Ta funcionando chefia! 🐍`)
});






//🐍
