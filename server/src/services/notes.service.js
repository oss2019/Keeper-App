// services for notes
const httpStatus = require('http-status');
const auth = require('../middlewares/auth');
const { Note } = require('../models')
const ApiError = require('../utils/ApiError');

/**
 * Create a Note
 * @param {Object} noteBody
 * @returns {Promise<Note>}
 */
const createNote = async (noteBody, authorId) =>{
    const note = Object.assign({'authorId':authorId}, noteBody)
    return Note.create(note);
}

/**
 * Query for users
 * @param {string} email - email of user
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 * */
const getNotes = async (authorId, options)=>{
    const notes = await Note.paginate({authorId : authorId},options);
    return notes;
}

const getNoteById = async (id) => {
    return Note.findById(id);
  };

const deleteNoteById = async (noteId)=>{
    const note = await getNoteById(noteId);
    if(!note){
        throw new ApiError(httpStatus.NOT_FOUND, 'Note not found');
    }
    await note.remove();
    return note;
}

module.exports = {
    createNote,
    getNotes,
    getNoteById,
    deleteNoteById
}