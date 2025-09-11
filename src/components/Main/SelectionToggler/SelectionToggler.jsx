const SelectionToggler = ({ cricketers }) => {
  return (
    <div className="w-11/12 mx-auto mt-16 mb-10 flex items-center justify-between ">
      <h3 className="font-bold text-3xl">Available Players</h3>
      <h3 className="font-bold text-3xl hidden">Selected Player (0/{cricketers.length})</h3>
      <div className="border border-[rgba(19,19,19,0.1)] rounded-xl">
        <button className="font-bold px-5 py-3 bg-[rgba(231,254,41,1)] rounded-l-xl">
          Available
        </button>
        <button className="text-black opacity-60 px-5 py-3 rounded-b-xl">
          Selected (0)
        </button>
      </div>
    </div>
  );
};

export default SelectionToggler;
