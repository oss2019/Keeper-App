const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createNote = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        content: Joi.string().required(),
      }),
};

const getNotes = {
    body: Joi.object().keys({
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    })
};

const updateNote = {
    body: Joi.object().keys({
        noteId: Joi.string().custom(objectId),
        title: Joi.string(),
        content: Joi.string(), 
    })
};

const deleteNote = {
    body: Joi.object().keys({
        noteId: Joi.string().required(),
    })
};

module.exports = {
    createNote,
    getNotes,
    deleteNote,
    updateNote
}