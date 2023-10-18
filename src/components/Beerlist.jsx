import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Beer from "./Beer";
import Loader from "./Loader";

export default function Beerlist({ beers, setBeers }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("https://api.punkapi.com/v2/beers?per_page=24");
      const json = await resp.json();
      setBeers(json);
    };
    getData().then(setIsLoading(false));
  }, [setBeers]);

  return (
    <>
      {isLoading ? (
        <section className="beer-list">
          <Loader />
        </section>
      ) : (
        <section className="beer-list">
          {beers.map((beer) => {
            return (
              <Beer
                key={beer.id}
                id={beer.id}
                title={beer.name}
                posterURL={beer.image_url}
              />
            );
          })}
        </section>
      )}
    </>
  );
}

Beerlist.propTypes = {
  beers: PropTypes.array,
  setBeers: PropTypes.function,
};
