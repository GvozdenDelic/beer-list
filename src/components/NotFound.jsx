import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";

export default function NotFound() {
  const [isLoading, setIsLoading] = useState(true);

  const favoriteList = localStorage.getItem("favoriteList")
    ? JSON.parse(localStorage.getItem("favoriteList"))
    : [];

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };
  }, [isLoading]);

  return (
    <>
      <Header favoriteList={favoriteList} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="error-page">
          {" "}
          <h1>Oops! You seem to be lost.</h1>
          <Link to="/" className="button">
            Show me the beers
          </Link>
        </div>
      )}
      <Footer />
    </>
  );
}
