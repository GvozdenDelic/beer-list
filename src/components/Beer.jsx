import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Beer({ id, title, posterURL, favoriteList, setFavoriteList }) {
  function handleAddToFavorite() {
    if (favoriteList.includes(id)) {
      setFavoriteList(favoriteList.filter((favoriteid) => favoriteid !== id));
    } else {
      setFavoriteList([...favoriteList, id]);
    }
  }

  return (
    <div className="beer-list__item">
      <span className="favorite__icon" onClick={handleAddToFavorite}>
        {favoriteList.includes(id) ? "🧡" : "🤍"}
      </span>
      <aside>
        <Link to={`/beer/${id}`}>
          <img src={posterURL} alt={title} />
        </Link>
      </aside>
      <p>{title}</p>
      <Link to={`/beer/${id}`} className="button">
        See more
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
};

export default Beer;
