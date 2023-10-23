import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Beer({
  id,
  title,
  posterURL,
  favoriteList,
  setFavoriteList,
  loggedIn,
}) {
  function handleAddToFavorite() {
    if (favoriteList.includes(id)) {
      setFavoriteList(favoriteList.filter((favoriteid) => favoriteid !== id));
    } else {
      setFavoriteList([...favoriteList, id]);
    }
  }

  return (
    <div className="beer-list__item">
      {loggedIn && (
        <span className="favorite__icon" onClick={handleAddToFavorite}>
          {favoriteList.includes(id) ? "🧡" : "🤍"}
        </span>
      )}
      <Link to={`/beer/${id}`}>
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
  favoriteList: PropTypes.array,
  setFavoriteList: PropTypes.func,
  loggedIn: PropTypes.bool,
};

export default Beer;
