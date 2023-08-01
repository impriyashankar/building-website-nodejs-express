const express = require('express');


const router = express.Router();

module.exports = (params) => {
  const {speakerService} = params;//equiv. to speakerService = params.speakerService
  router.get('/',async(request, response) => {
    const speakers = await speakerService.getList();
    return response.json(speakers);
  });

  router.get('/:speakername',(request, response) => {
    response.send(`Speaker details for ${request.params.speakername}`);
  });


  return router;
}
