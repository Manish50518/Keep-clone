import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../siderbar/Sidebar";
import Layout from "../ui/Layout";
// import AddNote from "./AddNote";

function Note() {
  return (
    <div className="flex">
      <Layout />
      <Outlet />
    </div>
  );
}

export default Note;
