import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Beer from "./Beer";
import Loader from "./Loader";
import ReactPaginate from "react-paginate";
import ContentWrapper from "./ContentWrapper";
import "./scss/beerlist.scss";
import "./scss/pagination.scss";

export default function Beerlist({
  beers,
  setBeers,
  favoriteList,
  setFavoriteList,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("https://api.punkapi.com/v2/beers?per_page=24");
      const json = await resp.json();
      setBeers(json);
    };
    getData()
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
  }, [setBeers]);

  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentBeers = beers.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(beers.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % beers.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ContentWrapper>
            {currentBeers.map((beer) => {
              return (
                <Beer
                  key={beer.id}
                  id={beer.id}
                  title={beer.name}
                  posterURL={beer.image_url}
                  favoriteList={favoriteList}
                  setFavoriteList={setFavoriteList}
                />
              );
            })}
          </ContentWrapper>
          <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </>
  );
}

Beerlist.propTypes = {
  beers: PropTypes.array,
  setBeers: PropTypes.func,
  favoriteList: PropTypes.array,
  setFavoriteList: PropTypes.func,
};
