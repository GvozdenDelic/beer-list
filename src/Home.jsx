import { useState } from "react";
import Header from "./components/Header";
import Beerlist from "./components/Beerlist";

export default function App() {
  const [beers, setBeers] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  return (
    <>
      <Header favoriteList={favoriteList} />
      <Beerlist
        beers={beers}
        setBeers={setBeers}
        favoriteList={favoriteList}
        setFavoriteList={setFavoriteList}
      />
    </>
  );
}
