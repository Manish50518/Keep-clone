/* eslint-disable react/prop-types */
import { HiBars3 } from "react-icons/hi2";
import { useLocation } from "react-router-dom";

function Header({ setOpenSidebar }) {
  const location = useLocation();
  const routeName = location.pathname;

  let headerText = "";

  if (routeName === "/notes" || routeName === "/") {
    headerText = "Keep";
  } else if (routeName === "/archive") {
    headerText = "Archive";
  } else if (routeName === "/bin") {
    headerText = "Bin";
  } else {
    headerText = routeName;
  }
  return (
    <header className="w-full flex items-center gap-3 p-3 shadow-sm bg-white fixed top-0 left-0">
      <button onClick={() => setOpenSidebar((prev) => !prev)}>
        <HiBars3 className="text-2xl cursor-pointer hover:opacity-80 transition-all" />
      </button>
      <img
        src="keep image.png"
        alt="Keep logo"
        className="h-9 object-contain"
      />

      <p className="text-3xl">{headerText}</p>
    </header>
  );
}

export default Header;
