const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join (__dirname, 'public');

app.use(express.static(publicPath));

app.get('/*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.set('port', process.env.PORT || 4000);

const server = app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
  });