import Card from "../Card/Card";
import SelectedCricketers from "../Selected/SelectedCricketers";

const Cards = ({ cricketers }) => {
  //   console.log(cricketers);

  return (
    <div className="w-11/12 mx-auto py-5">
      {/* all players */}
      {/* <div className="grid grid-cols-3 gap-6">
        {cricketers.map((cricketer, i) => (
          <Card cricketer={cricketer} key={i} />
        ))}
      </div> */}

      {/* selected players */}
      <div className="flex flex-col justify-center gap-6 ">
        {cricketers.map((cricketer, i) => (
          <SelectedCricketers key={i} cricketer={cricketer} />
        ))}

        {/* add more button */}
        <div className="border border-black rounded-xl bg-[rgba(255,255,255,.05)] self-start">
          <button className="font-bold px-5 py-3 bg-[rgba(231,254,41,1)] rounded-xl m-2 text-base">
            Add More Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
