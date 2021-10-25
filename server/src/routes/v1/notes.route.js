// routes for notes
const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const noteValidation = require('../../validations/note.validation');
const noteController = require('../../controllers/note.controller');

const router = express.Router();

router.route('/:userId').post(auth('manageUsers'),validate(noteValidation.createNote),noteController.createNote)
        .get(auth('getUsers'),validate(noteValidation.getNotes),noteController.getNotes)
        .delete(auth('manageUsers'),validate(noteValidation.deleteNote),noteController.deleteNoteById);

module.exports = router;
