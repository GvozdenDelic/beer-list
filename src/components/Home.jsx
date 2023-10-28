import { useState } from "react";
import Header from "./Header";
import Beerlist from "./Beerlist";
import Footer from "./Footer";

export default function App() {
  const [beers, setBeers] = useState([]);
  const [favoriteList, setFavoriteList] = useState(
    localStorage.getItem("favoriteList")
      ? JSON.parse(localStorage.getItem("favoriteList"))
      : []
  );

  return (
    <>
      <Header favoriteList={favoriteList} />
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
