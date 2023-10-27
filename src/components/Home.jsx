import { useState } from "react";
import Header from "./Header";
import Beerlist from "./Beerlist";
import Footer from "./Footer";

export default function App() {
  const [beers, setBeers] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  return (
    <>
      <Header favoriteList={favoriteList.length} />
      <Beerlist
        beers={beers}
        setBeers={setBeers}
        favoriteList={favoriteList}
        setFavoriteList={setFavoriteList}
      />
      <Footer />
    </>
  );
}
