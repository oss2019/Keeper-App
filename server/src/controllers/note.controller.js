const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { noteService, userService } = require('../services');

const createNote = catchAsync(async (req, res) => {
    const note = await noteService.createNote(req.body,req.params.userId);
    res.status(httpStatus.CREATED).send(note);
});

module.exports = {
    createNote
}