import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSaving   : false,
  messageSave: "",
  notes      : [],
  active     : null,
  // active     : {
  //   title: 'Nota 1',
  //   body : '',
  //   id   : 'asd4ad4a6sd4849d4qd26',
  //   date : 213123213
  // },
};

const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, { payload }) => {
      state.notes.push(payload);
      state.isSaving = false;
    },
    setActiveNote: (state, { payload }) => {
      state.active = payload;
    },
    setNotes: (state, action) => {},
    setSaving: (state, action) => {},
    updateNote: (state, action) => {},
    deleteNodeById: (state, action) => {},
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNodeById,
  savingNewNote,
} = journalSlice.actions;

export default journalSlice;
