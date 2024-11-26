import Joi from 'joi';

const movieSchema = Joi.object({
    title : Joi.string().required(),
    year : Joi.number().strict().required(),
    director : Joi.string().required(),
    genre : Joi.string().required(),
    length : Joi.number().strict().required()
}); 

export default movieSchema;