import Joi from 'joi';

export const uploadStressLevels = Joi.object({
    stressLevel: Joi.number().min(0).max(5),
    attachment: Joi.forbidden(),
    description: Joi.string()
});
