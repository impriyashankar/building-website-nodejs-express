const express = require('express');


const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;//equiv. to speakerService = params.speakerService
  router.get('/', async (request, response) => {
    const artwork = await speakerService.getAllArtwork();
    const speakers = await speakerService.getList();
    response.render('layouts', { pageTitle: 'Speakers', template: 'speakers', speakers, artwork });
  });


  router.get('/:shortname', async (request, response) => {
    const speaker = await speakerService.getSpeaker(request.params.shortname);
    const artwork = await speakerService.getArtworkForSpeaker(request.params.shortname);
    response.render('layouts', { pageTitle: 'Speaker', template: 'speakers-detail', speaker, artwork });
  });


  return router;
}
