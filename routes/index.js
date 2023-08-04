const express = require('express');

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();



module.exports = (params) => {
  const { speakerService } = params;
  router.get('/', async (request, response) => {
    const artwork = await speakerService.getAllArtwork();
    const topSpeakers = await speakerService.getList();


    // if(!request.session.visitcount){
    //   request.session.visitcount = 0;
    // }
    // request.session.visitcount++;
    // console.log(`Number of visits: ${request.session.visitcount}`);-test for cookie working
    response.render('layouts', { pageTitle: 'Welcome', template: 'index', topSpeakers, artwork });
  });
  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
}
