const router = require('express').Router();
const {
  getUsers,
  getCurrentUser,
  updateUserProfile,
  updateAvatar,
  getUserInfo,
} = require('../controllers/users');
const {
  getCurrentUserValidation,
  updateUserProfileValidation,
  updateAvatarValidation,
} = require('../routeValidation/users');

router.get('/', getUsers);

router.get('/me', getUserInfo);

router.patch(
  '/me', updateUserProfileValidation, updateUserProfile);

router.patch(
  '/me/avatar', updateAvatarValidation, updateAvatar);

router.get(
  '/:userId', getCurrentUserValidation, getCurrentUser);

module.exports = router;
