import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Loader from "./Loader";
import Footer from "./Footer";

export default function Beerdetail({ favoriteList }) {
  const beerId = useParams().beerId;
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDetail = async () => {
      const resp = await fetch(
        `https://api.punkapi.com/v2/beers?ids=${beerId}`
      );
      const beerDetail = await resp.json();
      setDetail(beerDetail[0]);
    };
    getDetail().then(setIsLoading(false));
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
            <h2>{detail.name}</h2>
            <div className="beer-list__item-details__text">
              {detail.description}
            </div>
            <div className="beer-list__item-details__stats">
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
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

Beerdetail.propTypes = {
  favoriteList: PropTypes.array,
};
