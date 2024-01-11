const express = require("express");
const { verifyToken } = require("../middlewares/authMiddleware");
const { addNote, getAllNotes, updateNote, deleteNote } = require("../controllers/notes");
const { handleNotedIdParam } = require("../middlewares/noteMiddleware");
const router = express.Router();

router.param("noteId", handleNotedIdParam);

router.post('/add', verifyToken, addNote);
router.get('/getallnotes', verifyToken, getAllNotes);
router.put('/update/:noteId', verifyToken, updateNote);
router.delete('/delete/:noteId', verifyToken, deleteNote);

//Middleware

module.exports = router;