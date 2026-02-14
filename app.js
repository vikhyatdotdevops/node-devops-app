const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Dockerized Node.js DevOps App 🚀');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
