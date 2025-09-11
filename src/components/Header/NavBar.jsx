import "./Header.css";
const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/50">
      <nav className="w-11/12 mx-auto py-6 flex justify-between items-center">
        <div id="logo">
          <img src="../../../public/images/logo.png" alt="" />
        </div>
        <div
          id="menus"
          className="flex justify-center items-center gap-6 text-[rgba(19,19,19)] opacity-70"
        >
          <a href="">Home</a>
          <a href="">Fixture</a>
          <a href="">Teams</a>
          <a href="">Schedules</a>
          <div className="font-semibold border border-[rgba(19,19,19,0.1)] rounded-lg px-5 py-4">
            <span>0</span> <span>Coin</span>{" "}
            <i className="fa-solid fa-coins"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
