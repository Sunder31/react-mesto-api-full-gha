const { celebrate, Joi } = require('celebrate');
const regexForURL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const getCurrentUserValidation = celebrate({
    params: Joi.object().keys({
        cardId: Joi.string().length(24).hex().required(),
    }),
});

const updateUserProfileValidation = celebrate({
    body: Joi.object().keys({
        name: Joi.string().min(2).max(30).default('Жак-Ив Кусто').required(),
        about: Joi.string().min(2).max(30).default('Исследователь').required(),
    }),
});

const updateAvatarValidation = celebrate({
    body: Joi.object().keys({
        avatar: Joi.string().default('https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png').regex(regexForURL).required(),
    }),
});

module.exports = {
    getCurrentUserValidation,
    updateUserProfileValidation,
    updateAvatarValidation,
};