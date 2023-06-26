import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../view";
import { useDispatch, useSelector } from "react-redux";
import {  startNewNote } from "../../store/journal";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving } = useSelector((state) => state.journal);

  const onCLickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {/* <Typography>
        Ea ex adipisicing consectetur nulla labore est velit. Et ea irure
        laboris excepteur dolore duis commodo aliquip labore proident irure sint
        veniam. Esse dolor aliquip Lorem cupidatat excepteur aliqua fugiat
        proident commodo in enim aute proident sunt. Irure ad laboris laboris
        consectetur aliquip anim ut veniam eiusmod minim ea reprehenderit.
      </Typography> */}
      <NothingSelectedView />
      {/* Nothing Selected */}

      {/* Not Viewed */}
      {/* <NoteView /> */}

      <IconButton
        onClick={onCLickNewNote}
        disabled={isSaving}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
