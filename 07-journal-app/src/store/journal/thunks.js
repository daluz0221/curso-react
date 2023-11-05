import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActivenote, setSaving, updatedNote } from "./journalSlice";
import { loadNotes } from "../../helpers";
import { fileUpload } from "../../helpers/fileUpload";



export const startNewNote = () => {
  return async (dispatch, getState) => {
    
    dispatch( savingNewNote() );
    const { uid } = getState().auth;

    const newNote = {
        title: '',
        body: '',
        imageUrls: [],
        date: new Date().getTime(),
    }

    const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) )
    await setDoc( newDoc, newNote );

    newNote.id = newDoc.id;
    dispatch( addNewEmptyNote( newNote ) );
    dispatch( setActiveNote( newNote ) );
  }
}

export const startLoadingNotes = (uid = '') => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) {
      throw new Error('el id del user no existe')
    }
    const userNotes = await loadNotes( uid );
    dispatch( setNotes(userNotes) )
  }
}


export const startSaveNote = () => {
  return async (dispatch, getState) => {

    dispatch( setSaving() );
    const { uid } = getState().auth;
    const { active:note } = getState().journal;

    dispatch( updatedNote(note) )

    const noteToFireStore = {...note };
    delete noteToFireStore.id;
    const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}` );
    await setDoc( docRef,noteToFireStore,{merge: true} )
  }
}


export const startUploadingFiles = (files = []) => {
  return async ( dispatch ) => {
    dispatch( setSaving() );

    const fileUploadPromises = [];
    for(let file of files) {
      fileUploadPromises.push( fileUpload( file ) )
    }

    const photosUrls = await Promise.all( fileUploadPromises );

    dispatch( setPhotosToActivenote( photosUrls ) )

  }
}


export const startDeletingNote = () => {
  
  return async( dispatch, getState ) => {
    const { uid } = getState().auth;
    const { active:note } = getState().journal;

    const docref = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
    const resp = await deleteDoc( docref );

    dispatch( deleteNoteById(note.id) )
  }

}