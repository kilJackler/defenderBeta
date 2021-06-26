const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.urlencoded());
app.use(express.json());

app.post('/data', (req, res) => {
    console.log('got something from ' + req.connection.remoteAddress + ', boss!');
    console.log(req.body.data);
    fs.appendFile(__dirname + '/data/' + Date.now().toString() + '.txt', req.connection.remoteAddress + '\n' + req.body.data, function (err) {
        if (err) console.error(err);
        console.log('saved something boss!');
      });
      res.send('200');
});

app.listen('5050', () => {
    console.log('listening dude!');
});
