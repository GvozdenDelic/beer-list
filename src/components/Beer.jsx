import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Beer({ id, title, posterURL }) {
  return (
    <div className="beer-list__item">
      <aside>
        <img src={posterURL} alt={title} />
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
};

export default Beer;
