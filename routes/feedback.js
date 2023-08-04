const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const validations = [
  check('name')
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage('A name is required'),
  check('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('A valid email is required'),
  check('title')
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage('A title is required'),
  check('message')
    .trim()
    .isLength({ min: 5 })
    .escape()
    .withMessage('A message is required')];
module.exports = (params) => {
  const { feedbackService } = params;


  router.get('/', async (request, response) => {
    const feedback = await feedbackService.getList();

    const errors = request.session.feedback ? request.session.feedback.errors : false;
    const successMessage = request.session.feedback ? request.session.feedback.message : false;

    request.session.feedback = {};
    response.render('layouts', { pageTitle: 'Feedback', template: 'feedback', feedback, errors, successMessage });
  });

  router.post('/',
    validations,
    async (request, response) => {
      const errors = validationResult(request);

      if (!errors.isEmpty()) {
        request.session.feedback = {
          errors: errors.array()

        }
        return response.redirect('/feedback');
      }
      const { name, email, title, message } = request.body;
      await feedbackService.addEntry(name, email, title, message);
      request.session.feedback = {
        message: "Thank you for your feedback"
      }
      return response.redirect('/feedback');
    });

  router.post('/api', validations, async (request, response, next) => {
    try {
      const errors = validationResult(request);

      if (!errors.isEmpty()) {

        return response.json({ errors: errors.array() });//not redirecting to feedback as we are not on the browser on this route
      }
      const { name, email, title, message } = request.body;
      await feedbackService.addEntry(name, email, title, message);
      const feedback = await feedbackService.getList();
      return response.json({ feedback, successMessage: "Thank you for your feedback" })
    }
    catch (err) {
      return next(err);
    }
  });
  return router;
}
