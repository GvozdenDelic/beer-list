import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Footer from "./Footer";
import "./scss/beerdetail.scss";

export default function Beerdetail() {
  const beerId = useParams().beerId;
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const favoriteList = localStorage.getItem("favoriteList")
    ? JSON.parse(localStorage.getItem("favoriteList"))
    : [];

  useEffect(() => {
    const getDetail = async () => {
      const resp = await fetch(`http://localhost:8000/beers?id=${beerId}`);
      const beerDetail = await resp.json();
      setDetail(beerDetail[0]);
    };
    getDetail()
      .catch((error) => console.log(error))
      .finally(
        (window.onload = () => {
          setIsLoading(false);
        })
      );
  }, [beerId, setDetail]);

  return (
    <>
      <Header favoriteList={favoriteList} />
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={`beer-list__item beer-list__item--detail loading-animation ${
            !isLoading && "loading-animation--loaded"
          }`}
        >
          <aside>
            <img src={detail.image_url} alt={detail.name} />
          </aside>
          <div className="beer-list__item-details">
            <small>
              <Link to={`/`}>Beer list</Link> / {detail.tagline}
            </small>
            <h1>{detail.name}</h1>
            <section className="beer-list__item-details__text">
              {detail.description}
            </section>
            <section className="beer-list__item-details__stats">
              <ul>
                <li>
                  <strong>Ibu:</strong> {detail.ibu} <strong>Ph:</strong>{" "}
                  {detail.ph} <strong>Attentuation level:</strong>
                  {detail.attenuation_level}
                </li>
                <li>
                  <strong>Brewers tips: </strong>
                  {detail.brewers_tips} <br />{" "}
                  <i>-- contributed by {detail.contributed_by}</i>
                </li>
              </ul>
            </section>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
