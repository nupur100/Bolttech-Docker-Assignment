const express = require('express');
const request = require('request');
const clients = require('./utils/clients');
let ejs = require('ejs');

const app = express();
const port = 8084;

app.set('views', './views')
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
      clients((error, clientsData) => {
          if (error) {
              return res.send({ error });
          }
          console.log(clientsData)
          console.log(clientsData['clients'])
          console.log({clients: clientsData['clients']})
          res.render('index', clientsData['clients']);

      });
});
//[ { clientName: { S: 'Alex' } } ] == clientsData['clients']

app.listen(port, () => console.log(`Node app is listening at http://localhost:${port}`))

