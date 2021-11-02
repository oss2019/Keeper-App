// routes for notes
const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const noteValidation = require('../../validations/note.validation');
const noteController = require('../../controllers/note.controller');

const router = express.Router();

// route for patch  note with user id and note id as params

router.route('/:userId').post(auth('getUsers'),validate(noteValidation.createNote),noteController.createNote)
.get(auth('getUsers'),validate(noteValidation.getNotes),noteController.getNotes)                                                            
.delete(auth('manageUsers'),validate(noteValidation.deleteNote),noteController.deleteNoteById)
.patch(auth('mamageUsers'), validate(noteValidation.updateNote), noteController.updateNote);
module.exports = router;
