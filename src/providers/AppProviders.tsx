import { ReactNode } from "react";
import { NotesProvider } from "../context/NotesContext.js";

type PropTypes = {
  children: ReactNode;
};

export default function AppProviders({ children }: PropTypes) {
  return <NotesProvider>{children}</NotesProvider>;
}
