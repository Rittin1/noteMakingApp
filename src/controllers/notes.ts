import express from 'express';
import { createNote,getNoteByContentAuthor,getNotes,getNoteById, deleteNoteById, NoteModel } from '../db/notes';

export const add = async (req:express.Request,res:express.Response)=>{
    try{
        const {author,title,content} = req.body;
        if(!author || !title ||!content){
            return res.sendStatus(400);
        }
        const existingNote = await getNoteByContentAuthor(content,author,title);
        if(existingNote){
            return res.sendStatus(400);
        }
        const created_at = new Date();
        const note = await createNote({
            author,
            title,
            content,
            created_at
        });
        return res.status(200).json(note).end();
    }
    catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
};

export const getAllNotes = async(req:express.Request,res:express.Response)=>{
    try{
        const notes = await getNotes();
        return res.status(200).json(notes);
    }
    catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
};

export const update = async(req:express.Request,res:express.Response)=>{
    try{
        const {id} = req.params;
        if(!id){
            return res.sendStatus(400);
        }
        const {title,author,content} = req.body;
        if(!title || !author || !content){
            return res.sendStatus(400);
        }
        const note = await getNoteById(id);
        note.title = title;
        note.author = author;
        note.content = content;
        note.updated_at = new Date();
        await note.save();
        return res.status(200).json(note).end();
    }
    catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
};


export const deleteNote = async(req:express.Request,res:express.Response)=>{
    try{
        const {id} = req.params;
        const deletedNote = await deleteNoteById(id);
        return res.json(deletedNote);
    }
    catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
};