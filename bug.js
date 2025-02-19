const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Error: Unexpected token in JSON response
//This happens when sending a JSON response but the data isn't correctly formatted. 
//It can be very hard to debug since the error message isn't very helpful.

app.get('/data', (req, res) => {
  const data = {
    message: 'Hello',
    data: {
      name: 'John Doe',
      age: 30,
    }
  };
  //Unformatted data causing error
  res.json(data);
});