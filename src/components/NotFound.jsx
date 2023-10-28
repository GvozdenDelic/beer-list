import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="error-page">
        {" "}
        <h2>Oops! You seem to be lost.</h2>
        <Link to="/" className="button">
          Show me the beers
        </Link>
      </div>
      <Footer />
    </>
  );
}
