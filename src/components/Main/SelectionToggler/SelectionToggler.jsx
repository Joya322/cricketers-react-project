const SelectionToggler = ({
  cricketers,
  handleSelectedCricketers,
  handleAvailableCricketers,
  isAvailable,
  isSelected,
  totalSelectedCricketers,
}) => {
  return (
    <div className="w-11/12 mx-auto mt-16 mb-10 flex items-center justify-between ">
      <h3 id="available-cricketers-title" className="font-bold text-3xl">
        Available Players
      </h3>
      <h3 id="selected-cricketers-title" className="font-bold text-3xl hidden">
        Selected Player ({totalSelectedCricketers}/{cricketers.length})
      </h3>
      <div className="border border-[rgba(19,19,19,0.1)] rounded-xl">
        <button
          onClick={handleAvailableCricketers}
          className={`px-5 py-3 text-black ${
            isAvailable
              ? "bg-[rgba(231,254,41,1)] font-bold"
              : "bg-none opacity-60"
          } rounded-l-xl`}
        >
          Available
        </button>
        <button
          onClick={handleSelectedCricketers}
          className={`px-5 py-3 text-black rounded-r-xl ${
            isSelected
              ? "bg-[rgba(231,254,41,1)] font-bold"
              : "bg-none opacity-60"
          }`}
        >
          Selected ({totalSelectedCricketers})
        </button>
      </div>
    </div>
  );
};

export default SelectionToggler;
