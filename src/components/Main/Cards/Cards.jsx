import Card from "../Card/Card";
import SelectedCricketers from "../Selected/SelectedCricketers";

const Cards = ({
  cricketers,
  isSelected,
  isAvailable,
  handleCricketersSelection,
  selectedCricketersList,
  handleDeleteCricketer,
}) => {
  //   console.log(cricketers);

  return (
    <div className="w-11/12 mx-auto pt-5 pb-[300px]">
      {(() => {
        // selected players section
        if (isSelected) {
          return (
            <div className=" flex-col justify-center gap-6 flex">
              {selectedCricketersList.map((selectedCricketer, i) => (
                <SelectedCricketers
                  key={i}
                  id={i}
                  selectedCricketer={selectedCricketer}
                  handleDeleteCricketer={handleDeleteCricketer}
                />
              ))}

              {/* add more button */}
              <div className="border border-black rounded-xl bg-[rgba(255,255,255,.05)] self-start">
                <button className="font-bold px-5 py-3 bg-[rgba(231,254,41,1)] rounded-xl m-2 text-base">
                  Add More Player
                </button>
              </div>
            </div>
          );
        }
        // all players section
        if (isAvailable) {
          return (
            <div className="grid grid-cols-3 gap-6">
              {cricketers.map((cricketer, i) => (
                <Card
                  key={i}
                  cricketer={cricketer}
                  handleCricketersSelection={handleCricketersSelection}
                />
              ))}
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Cards;
