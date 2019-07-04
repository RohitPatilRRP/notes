module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    app.post('/add', notes.create);

    app.get('/findall', notes.findAll);

    app.get('/findbyid/:noteId', notes.findOne);

    app.put('/update/:noteId', notes.update);

    // app.delete('/notes/:noteId', notes.delete);
}