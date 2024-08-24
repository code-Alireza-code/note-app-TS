import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { Note } from "../types/Note";

type NotesProviderProps = {
  children: ReactNode;
};

type Action =
  | { type: "add"; payload: Note }
  | { type: "delete"; payload: number }
  | { type: "complete"; payload: number };

type NotesContextType = Note[];
type DispatchContextType = React.Dispatch<Action>;

const NotesContext = createContext({} as NotesContextType);
const NotesDispatchContext = createContext({} as DispatchContextType);

function notesReducer(notes: Note[], action: Action) {
  switch (action.type) {
    case "add": {
      return [...notes, action.payload];
    }
    case "delete": {
      return notes.filter((s) => s.id !== action.payload);
    }
    case "complete": {
      return notes.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new Error("unknown action");
  }
}

export function NotesProvider({ children }: NotesProviderProps) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNotes() {
  return useContext(NotesContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
