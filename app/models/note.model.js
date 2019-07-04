const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const NoteSchema = mongoose.Schema({
    _id: Number,
    title: String,
    content: String
}, {
    timestamps: true,
    _id:false
}
);

NoteSchema.plugin(autoIncrement);
module.exports = mongoose.model('Note', NoteSchema);