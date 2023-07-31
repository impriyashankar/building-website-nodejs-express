const express = require('express');


const router = express.Router();

module.exports = () => {
  router.get('/',(request, response) => {
    response.send('Speakers list');
  });

  router.get('/:speakername',(request, response) => {
    response.send(`Speaker details for ${request.params.speakername}`);
  });


  return router;
}
