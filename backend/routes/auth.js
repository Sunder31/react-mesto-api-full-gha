const router = require('express').Router();
const { createUser, login } = require('../controllers/auth');
const { signinValidation, signupValidation } = require('../routeValidation/auth');

router.post(
  '/signin', signinValidation, login);

router.post(
  '/signup', signupValidation, createUser);

module.exports = router;
