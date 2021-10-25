// db model for notes.
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const noteSchema = mongoose.Schema(
    {
        authorId :{
            type: mongoose.Types.ObjectId,
            require : true,
        },
        title: {
           type: String,
           require : true,
        },
        
        content: {
            type : String,
            require : true,
        },
    },
    {
        timestamps: true
    }
);

// add plugin that converts mongoose to json
noteSchema.plugin(toJSON);
noteSchema.plugin(paginate);

/**
 * @typedef Note
 */
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
