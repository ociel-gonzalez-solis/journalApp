import journalSlice, {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNodeById,
  savingNewNote,
} from "./journalSlice";
import { startNewNote } from "./thunk";

export {
  journalSlice,
  startNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNodeById,
  savingNewNote,
};
