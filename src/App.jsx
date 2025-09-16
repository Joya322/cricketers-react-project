import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Header/Banner";
import NavBar from "./components/Header/NavBar";
import Cards from "./components/Main/Cards/Cards";
import SelectionToggler from "./components/Main/SelectionToggler/SelectionToggler";
import Footer from "./components/Footer/Footer";

function App() {
  const [cricketers, setCricketers] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [selectedCricketersList, setSelectedCricketersList] = useState([]);

  const totalSelectedCricketers = selectedCricketersList.length;

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
    setIsSelected(true);
    setIsAvailable(false);
    document
      .getElementById("selected-cricketers-title")
      .classList.remove("hidden");
    document
      .getElementById("available-cricketers-title")
      .classList.add("hidden");
  };

  const handleAvailableCricketers = () => {
    setIsAvailable(true);
    setIsSelected(false);
    document
      .getElementById("selected-cricketers-title")
      .classList.add("hidden");
    document
      .getElementById("available-cricketers-title")
      .classList.remove("hidden");
  };

  const handleCricketersSelection = (newCricketer) => {
    const newCricketerList = [...selectedCricketersList, newCricketer];
    setSelectedCricketersList(newCricketerList);
  };

  return (
    <>
      <NavBar />
      <Banner handleAddCoin={handleAddCoin} />
      {/* main */}
      <SelectionToggler
        cricketers={cricketers}
        handleSelectedCricketers={handleSelectedCricketers}
        handleAvailableCricketers={handleAvailableCricketers}
        isSelected={isSelected}
        isAvailable={isAvailable}
        totalSelectedCricketers={totalSelectedCricketers}
      />
      <Cards
        cricketers={cricketers}
        isSelected={isSelected}
        isAvailable={isAvailable}
        handleCricketersSelection={handleCricketersSelection}
      />
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
