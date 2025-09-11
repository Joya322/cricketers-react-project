import "./App.css";
import Banner from "./components/Header/Banner";
import NavBar from "./components/Header/NavBar";
import SelectionToggler from "./components/Main/SelectionToggler/SelectionToggler";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <SelectionToggler/>
    </>
  );
}

export default App;
