import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Beer({ id, title, posterURL, favoriteList, setFavoriteList }) {
  function handleAddToFavorite() {
    if (favoriteList.includes(id)) {
      setFavoriteList(favoriteList.filter((favoriteid) => favoriteid !== id));
    } else {
      setFavoriteList([...favoriteList, id]);
    }
  }

  useEffect(() => {
    if (favoriteList.length > 0) {
      localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
    }
  }, [favoriteList]);

  return (
    <div className="beer-list__item">
      <span className="favorite__icon" onClick={handleAddToFavorite}>
        {favoriteList.includes(id) ? "🧡" : "🤍"}
      </span>
      <Link to={`/beer/${id}`} preventScrollReset={false}>
        <img src={posterURL} alt={title} />
        <p>{title}</p>
        <div className="button">See more</div>
      </Link>
    </div>
  );
}

Beer.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  posterURL: PropTypes.string,
  favoriteList: PropTypes.any,
  setFavoriteList: PropTypes.func,
};

export default Beer;
