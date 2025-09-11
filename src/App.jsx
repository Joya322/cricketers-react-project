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

  return (
    <>
      <NavBar />
      <Banner />
      {/* main */}
      <SelectionToggler cricketers={cricketers} />
      <Cards cricketers={cricketers} />
      {/* footer */}
      <Footer/>
    </>
  );
}

export default App;
