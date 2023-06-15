import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSaving: true,
  messageSave: "",
  notes: [],
  active: null,
};

const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    addNewEmptyNote: (state, action) => {},
    setActiveNote  : (state, action) => {},
    setNotes       : (state, action) => {},
    setSaving      : (state, action) => {},
    updateNote     : (state, action) => {},
    deleteNodeById : (state, action) => {},
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNodeById,
} = journalSlice.actions;

export default journalSlice;
