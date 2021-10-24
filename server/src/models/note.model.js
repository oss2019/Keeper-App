// db model for notes.
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const noteSchema = mongoose.Schema(
    {
        title: String,
        content: String
    },
    {
        timestamps: true
    }
);

// add plugin that converts mongoose to json
noteSchema.plugin(toJSON);
noteSchema.plugin(paginate);

const Note = mongoose.model('note', noteSchema);

module.exports = Note;
