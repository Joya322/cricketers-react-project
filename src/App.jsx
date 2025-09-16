import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Header/Banner";
import NavBar from "./components/Header/NavBar";
import Cards from "./components/Main/Cards/Cards";
import SelectionToggler from "./components/Main/SelectionToggler/SelectionToggler";
import Footer from "./components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [cricketers, setCricketers] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [selectedCricketersList, setSelectedCricketersList] = useState([]);
  const [coin, setCoin] = useState(0);

  const totalSelectedCricketers = selectedCricketersList.length;

  useEffect(() => {
    fetch("api.json")
      .then((res) => res.json())
      .then((data) => setCricketers(data));
  }, []);

  // add coin function
  const handleAddCoin = () => {
    const newValue = coin + 10000000;
    setCoin(newValue);
  };

  // handle available cricketers or selected cricketers on click selected toggler
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

  // handle available cricketers or selected cricketers on click available toggler
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

  // handle available cricketers or selected cricketers on click add moore button
  const handleAddMorePlayerButton = () => {
    setIsAvailable(true);
    setIsSelected(false);
    document
      .getElementById("selected-cricketers-title")
      .classList.add("hidden");
    document
      .getElementById("available-cricketers-title")
      .classList.remove("hidden");
  };

  // choose player button
  const handleCricketersSelection = (newCricketer) => {
    const biddingPrice = parseFloat(newCricketer.bidding_price);

    if (coin <= biddingPrice) {
      toast.warning("You don't have enough coin", {
        position: "top-center",
        closeOnClick: true,
      });
      return;
    }

    const isMatch = selectedCricketersList.includes(newCricketer);

    if (isMatch) {
      toast.warning("Player already selected", {
        position: "top-center",
        closeOnClick: true,
      });
      return;
    }

    if (totalSelectedCricketers >= 6) {
      toast.warning("You already select 6 players", {
        position: "top-center",
        closeOnClick: true,
      });
      return;
    }

    const newCricketerList = [...selectedCricketersList, newCricketer];
    setSelectedCricketersList(newCricketerList);

    // adjust coin after player choose
    const newValue = coin - biddingPrice;
    setCoin(newValue);
  };

  // delete cricketer button
  const handleDeleteCricketer = (id) => {
    const newCricketerList = selectedCricketersList.filter(
      (_, idx) => idx !== id
    );
    setSelectedCricketersList(newCricketerList);
    toast.success("Player removed from selected list", {
      position: "top-center",
      closeOnClick: true,
    });
  };

  return (
    <>
      <ToastContainer />
      <NavBar coin={coin} />
      <Banner handleAddCoin={handleAddCoin} />
      {/* main */}
      <SelectionToggler
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
        selectedCricketersList={selectedCricketersList}
        handleDeleteCricketer={handleDeleteCricketer}
        handleAddMorePlayerButton={handleAddMorePlayerButton}
      />
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
