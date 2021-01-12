const express = require('express');
const app = express();

const port = app.get('port') || 3000;

app.get('/', (request, response) => {
  response.status(200).json({hello: 'world'});
});

app.listen(port, () => {
  console.log(`Auth practice BE running on http://localhost:${port}`)
});
