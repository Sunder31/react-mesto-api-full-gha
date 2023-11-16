const router = require('express').Router();
const {
  createCard,
  getCards,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const {
  cardCreateValidation,
  cardDeleteValidation,
  cardDislikeValidation,
  cardLikeValidation,
} = require('../routeValidation/cards');


router.get('/', getCards);

router.post(
  '/', cardCreateValidation, createCard);

router.delete(
  '/:cardId', cardDeleteValidation, deleteCard);

router.put(
  '/:cardId/likes', cardLikeValidation, likeCard);

router.delete(
  '/:cardId/likes', cardDislikeValidation, dislikeCard);

module.exports = router;
