const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Correctly formatted data
app.get('/data', (req, res) => {
  const data = {
    message: 'Hello',
    data: {
      name: 'John Doe',
      age: 30,
    }
  };
  res.json(data);
});
//Error Handling for other cases
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});