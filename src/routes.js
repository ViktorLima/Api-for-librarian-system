const express = require('express');
const router = express.Router();

const LibrarianController = require('./controllers/LibrarianController')

router.get('/Librariansystem',LibrarianController.BuscarTodos);
router.get('/Librariansystemforid/:id',LibrarianController.BuscarporId);
router.post('/Librariansysteminsertion',LibrarianController.Insertion);
router.put('/Librariansystemupdate/:id',LibrarianController.Update);
router.delete('/Librariansystemdelete/:id',LibrarianController.Delete);

module.exports = router;