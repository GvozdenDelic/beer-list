import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Beer({
  id,
  title,
  posterURL,
  favoriteList,
  setFavoriteList,
}) {
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
        <img
          src={posterURL}
          alt={title.split(" ")[0] + " image"}
          width="148"
          height="300"
        />
        <p>{title}</p>
      </Link>
    </div>
  );
}

Beer.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  posterURL: PropTypes.string,
  favoriteList: PropTypes.array,
  setFavoriteList: PropTypes.func,
};
