const router = require('express').Router();
const cardsRouter = require('./cards');
const usersRouter = require('./users');
const authRouter = require('./auth');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.use('/', authRouter);

router.use(auth);

router.use('/users', usersRouter);

router.use('/cards', cardsRouter);

router.use('*', (req, res, next) => next(new NotFoundError('Страница не найдена')));

module.exports = router;
