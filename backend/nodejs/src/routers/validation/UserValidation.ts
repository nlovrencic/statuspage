import { Joi } from 'celebrate';

export const loginOrRegisterUserValidator = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
