const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
