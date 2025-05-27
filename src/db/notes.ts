import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    author:{type:String,required:true},
    created_at:{type:Date},
    updated_at:{type:Date}
});

export const NoteModel = mongoose.model('Note', NoteSchema);

export const getNotes = () => NoteModel.find();
export const createNote = (values: Record <string,any>)=>new NoteModel(values).save().then((note) => note.toObject());
export const updateNoteById = (id: string,values: Record<string,any>)=> NoteModel.findByIdAndUpdate(id,values);
export const deleteNoteById = (id: string)=>NoteModel.findOneAndDelete({_id:id});
export const getNoteById = (id: string) => NoteModel.findById(id);
export const getNoteByContentAuthor = (content: string,author: string,title:string) => NoteModel.findOne({ content,author,title });