import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import AppProviders from "./providers/AppProviders";
import { SortBy } from "./types/SortBy";
import NoteApp from "./components/NoteApp";

function App() {
  const [sortBy, setSortBy] = useState<SortBy>("latest");
  return (
    <AppProviders>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(value) => setSortBy(value)} />
        <NoteApp sortBy={sortBy} />
      </div>
    </AppProviders>
  );
}

export default App;
