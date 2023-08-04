const express = require('express');

const app = express();

const path = require('path');

const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const FeedbackService = require('./services/FeedbackService');
const SpeakerService = require('./services/SpeakerService');

feedbackService = new FeedbackService('./data/feedback.json');//since constructor expects a datafile
speakerService = new SpeakerService('./data/speakers.json');

const routes = require('./routes');

const port = 3000;

app.set('trust proxy', 1);
app.use(cookieSession({
  name: 'session',
  keys: ['GHSDfsdfs345d', 'HJsdw3#']
})
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));



app.use(express.static(path.join(__dirname, '/static')));

app.locals.siteName = 'ROUX Meetups';
app.use(async (request, response, next) => {
  try {
    response.locals.speakerNames = await speakerService.getNames();
    console.log(response.locals);
    return next();
  }
  catch (err) {
    next(err);
  }
})

// app.get('/', (request, response) => {
//   //response.sendFile(path.join(__dirname, '/static/index.html'));
//   response.render('pages/index', {pageTitle : 'Welcome'});
// });

// app.get('/speakers',(request, response) => {
// response.sendFile(path.join(__dirname, '/static/speakers.html'))
// });
app.use(routes({ feedbackService, speakerService }));//equivalent to app.use('/', routes());Also passing the services as objects to routes.
app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
