/**
 * Servidor simples para a aplicação de clima
 * Execute com: node server.js
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // Redireciona para index.html se acessar a raiz
  let filePath = req.url === '/' ? '/public/index.html' : req.url;
  filePath = path.join(__dirname, filePath);

  const ext = path.extname(filePath).toLowerCase();
  const mimeType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Arquivo não encontrado
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 - Página não encontrada</h1>');
    } else {
      // Arquivo encontrado
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║   🌤️  AuréWeather                       ║
║                                        ║
║  Servidor rodando em:                  ║
║  http://localhost:${PORT}              ║
║                                        ║
║  Pressione Ctrl+C para parar           ║
╚════════════════════════════════════════╝
  `);
});
