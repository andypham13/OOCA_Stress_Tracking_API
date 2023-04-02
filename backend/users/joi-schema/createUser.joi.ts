import Joi from 'joi';

export const uploadStressLevels = Joi.object({
    stressLevels: Joi.number().required(),
    userId: Joi.string().required(),
    attachment: Joi.string(),
});
