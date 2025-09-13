import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Header/Banner";
import NavBar from "./components/Header/NavBar";
import Cards from "./components/Main/Cards/Cards";
import SelectionToggler from "./components/Main/SelectionToggler/SelectionToggler";
import Footer from "./components/Footer/Footer";

function App() {
  const [cricketers, setCricketers] = useState([]);

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

  }

  return (
    <>
      <NavBar />
      <Banner handleAddCoin={handleAddCoin} />
      {/* main */}
      <SelectionToggler cricketers={cricketers} />
      <Cards cricketers={cricketers} />
      {/* footer */}
      <Footer/>
    </>
  );
}

export default App;
