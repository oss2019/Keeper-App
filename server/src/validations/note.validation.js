const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createNote = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        content: Joi.string().required(),
      }),
};

module.exports = {
    createNote
}