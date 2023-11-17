const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { JWT_SECRET } = require('../config');

// eslint-disable-next-line consistent-return
const auth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return next(new UnauthorizedError('Необходимо авторизоваться'));
  }

  let playload;

  try {
    playload = jwt.verify(token, JWT_SECRET);
  } catch {
    return next(new UnauthorizedError('Необходимо авторизоваться'));
  }

  req.user = playload;

  next();
};

module.exports = auth;
