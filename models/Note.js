var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
  article_id: {
    title:String
  },
  body: {
    type: String
  }
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
