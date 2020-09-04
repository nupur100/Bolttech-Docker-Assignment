const express = require('express');
const request = require('request');
const clients = require('./utils/clients');
var parser = require('body-parser');
const app = express();
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())
let ejs = require('ejs');
const url = process.env.APP_URL
const port = 8084;

app.set('views', './views')
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
      clients((error, clientsData) => {
          if (error) {
              return res.send({ error });
          }
          res.render('index', {clients: clientsData['clients'], url: url});
      });
});

app.post('/name', (req, res) => {
        const url = process.env.APP_URL  + '/clients/add_clients';
        var client_name = req.body.clientname;
        console.log(client_name);

        request.post(
            url ,
            { json: { clientName: client_name} },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body);
                }
            }
        );
      clients((error, clientsData) => {
          if (error) {
              return res.send({ error });
          }
          res.render('index', {clients: clientsData['clients'], url: url});
      });
});

app.listen(port, () => console.log(`Node app is listening at http://localhost:${port}`))


