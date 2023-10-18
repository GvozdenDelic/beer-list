import { Link } from "react-router-dom";
import Header from "./Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <h2>Oops! You seem to be lost.</h2>
      <Link to="/" className="button">
        Show me the beers
      </Link>
    </>
  );
}
