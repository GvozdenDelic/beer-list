import { useState } from "react";
import Header from "./components/Header";
import Beerlist from "./components/Beerlist";
import Footer from "./components/Footer";

export default function App() {
  const [beers, setBeers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);

  return (
    <>
      <Header
        favoriteList={favoriteList}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <Beerlist
        beers={beers}
        setBeers={setBeers}
        favoriteList={favoriteList}
        setFavoriteList={setFavoriteList}
        loggedIn={loggedIn}
      />
      <Footer />
    </>
  );
}
