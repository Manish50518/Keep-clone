import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Note from "./Components/notes/Note";
import AddNote from "./Components/notes/AddNote";
import Archive from "./Components/archive/Archive";
import Bin from "./Components/bin/Bin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Note />}>
          <Route index element={<AddNote />} />
          <Route path="/notes" s element={<AddNote />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/bin" element={<Bin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
