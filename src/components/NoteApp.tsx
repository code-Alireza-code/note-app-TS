import AddNewNote from "./AddNewNote";
import NoteStatus from "./NoteStatus";
import NoteList from "./NoteList";
import { SortBy } from "../types/SortBy";

function NoteApp({ sortBy }: { sortBy: SortBy }) {
  return (
    <div className="note-app">
      <AddNewNote />
      <div className="note-container">
        <NoteStatus />
        <NoteList sortBy={sortBy} />
      </div>
    </div>
  );
}

export default NoteApp;
