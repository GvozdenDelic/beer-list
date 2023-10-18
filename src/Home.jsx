import { useState } from "react";
import Header from "./components/Header";
import Beerlist from "./components/Beerlist";

export default function App() {
  const [beers, setBeers] = useState([]);

  return (
    <>
      <Header />
      <Beerlist beers={beers} setBeers={setBeers} />
    </>
  );
}
