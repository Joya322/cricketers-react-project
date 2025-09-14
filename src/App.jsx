import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Header/Banner";
import NavBar from "./components/Header/NavBar";
import Cards from "./components/Main/Cards/Cards";
import SelectionToggler from "./components/Main/SelectionToggler/SelectionToggler";
import Footer from "./components/Footer/Footer";

function App() {
  const [cricketers, setCricketers] = useState([]);
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    fetch("api.json")
      .then((res) => res.json())
      .then((data) => setCricketers(data));
  }, []);
  // console.log(cricketers);
  // console.log(coin);

  // add coin function
  const handleAddCoin = () => {
    const coinValue = document.getElementById("coin");
    const prevValue = parseFloat(coinValue.innerText);
    const newValue = prevValue + 100000;
    coinValue.innerText = newValue;
  };

  const handleSelectedCricketers = () => {
    setIsSelected(true)
  };

  return (
    <>
      <NavBar />
      <Banner handleAddCoin={handleAddCoin} />
      {/* main */}
      <SelectionToggler
        cricketers={cricketers}
        handleSelectedCricketers={handleSelectedCricketers}
      />
      <Cards cricketers={cricketers} isSelected={isSelected} />
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
