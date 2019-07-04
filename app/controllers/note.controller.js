const Note = require('../models/note.model.js');

//CREATE A NEW  NOTE
exports.create = (req, res) => {
     if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    const note = new Note({
        title: req.body.title || "Untitled Note", 
        content: req.body.content
    });

    note.save()
    .then(data => {
        console.log(`addded!! \n ${data}`);
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

//LIST ALL NOTES
exports.findAll = (req, res) => {
    Note.find()
    .then(data =>{
        console.log(`data found \n`);
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Error occurred"
        });
    });
};

//FIND A PARTICULAR NOTE
exports.findOne = (req, res) => {
Note.find({_id:req.params.noteId})
.then(data=>{
    if(!data) {
        return res.status(404).send({
            message: "Note not found with id " + req.params.noteId
        });            
    }
    res.send(data);
})
.catch(err=>{
    res.status(500).send({
        message: err.message || "Error"
    });
})
};

//UPDARE A NEW NOTE
exports.update = (req, res) => {
    console.log(req.body.content)
    Note.findByIdAndUpdate({_id:req.params.noteId}, {
        title:req.body.title || "Untitled",
        content: req.body.content
    },{new:true})
    .then(data => {
        if(!data){
            res.status(404).send({ message: "Note not found" });
        }
        res.send(data);

    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error"
        });
    })
};

