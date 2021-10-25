const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { noteService, userService } = require('../services');

const createNote = catchAsync(async (req, res) => {
    const note = await noteService.createNote(req.body,req.params.userId);
    res.status(httpStatus.CREATED).send(note);
});

const getNotes = catchAsync(async (req, res) => {
    const authorId = req.params.userId;
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await noteService.getNotes(authorId, options);
    res.send(result);
  });

const deleteNoteById = catchAsync(async (req,res)=> {
    const noteId = req.body.noteId;
    await noteService.deleteNoteById(noteId);
    res.status(httpStatus.NO_CONTENT).send();
})

module.exports = {
    createNote,
    getNotes,
    deleteNoteById
}