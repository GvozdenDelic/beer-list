import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function NotFound() {
  const favoriteList = localStorage.getItem("favoriteList")
    ? JSON.parse(localStorage.getItem("favoriteList"))
    : [];
  return (
    <>
      <Header favoriteList={favoriteList} />
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
