import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 text-white bg-blue-500">
      <ul className="flex h-12">
        <li className="h-full">
          <Link
            to="/home"
            className="inline-flex items-center h-full px-2 hover:bg-blue-600"
          >
            Home
          </Link>
        </li>
        <li className="h-full">
          <Link
            to="/events"
            className="inline-flex items-center h-full px-2 hover:bg-blue-600"
          >
            Events
          </Link>
        </li>
        <li className="h-full">
          <Link
            to="/friends"
            className="inline-flex items-center h-full px-2 hover:bg-blue-600"
          >
            Friends
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
