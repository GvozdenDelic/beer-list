import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <h1>
        {" "}
        <Link to={`/`}>🍺 Beer list</Link>
      </h1>
    </header>
  );
}

export default Header;
