import { Outlet } from "react-router-dom";
import Layout from "../ui/Layout";

function Note() {
  return (
    <div className="flex">
      <Layout />
      <Outlet />
    </div>
  );
}

export default Note;
