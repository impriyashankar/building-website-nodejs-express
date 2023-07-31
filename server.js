const express = require('express');

const app = express();

const path = require ('path');

const routes = require('./routes');

const port = 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));



app.use(express.static(path.join(__dirname,'/static')));

// app.get('/', (request, response) => {
//   //response.sendFile(path.join(__dirname, '/static/index.html'));
//   response.render('pages/index', {pageTitle : 'Welcome'});
// });

// app.get('/speakers',(request, response) => {
// response.sendFile(path.join(__dirname, '/static/speakers.html'))
// });
app.use(routes());//equivalent to app.use('/', routes());
app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
