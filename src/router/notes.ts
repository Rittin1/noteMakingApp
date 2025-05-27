import express from 'express';
import {add,getAllNotes,update,deleteNote} from '../controllers/notes';
export default(router:express.Router)=>{
    router.post('/notes',add);
    router.get('/notes',getAllNotes);
    router.put('/notes/:id',update);
    router.delete('/notes/:id',deleteNote);
};