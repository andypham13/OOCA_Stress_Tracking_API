import Joi from 'joi';

export const createUser = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
});
