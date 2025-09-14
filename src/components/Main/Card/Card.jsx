const Card = ({ cricketer, handlePlayerSelection }) => {
  const { name, image, country, bidding_price, batting_bowling_type, role } =
    cricketer;
  return (
    <div className="w-[424px] flex flex-col justify-center gap-6 border border-black/20 p-6 rounded-2xl">
      {/* image */}

      <img
        className="w-full h-[240px] object-cover object-center rounded-2xl"
        src={image}
        alt=""
      />

      {/* name */}
      <div className="flex items-center gap-4">
        <i className="fa-solid fa-circle-user text-2xl text-white bg-black rounded-full"></i>
        <h4 className="text-xl font-semibold">{name}</h4>
      </div>

      {/* country */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 opacity-50">
          <i className="fa-solid fa-flag"></i>
          <p>{country}</p>
        </div>
        <p className="text-sm py-2 p-4 bg-[rgba(19,19,19,0.05)] rounded-lg">
          {role}
        </p>
      </div>

      <hr className="text-black/20" />

      {/* rating */}
      <h5 className="font-bold">Rating</h5>

      {/* type */}
      <div className="flex justify-between items-center">
        <h5 className="font-semibold">{batting_bowling_type.split("/")[0]}</h5>
        <h5 className="opacity-70">{batting_bowling_type.split("/")[1]}</h5>
      </div>

      {/* price */}
      <div className="flex justify-between items-center">
        <p className="font-medium">
          Price: <i className="fa-solid fa-dollar-sign"></i>
          {bidding_price}
        </p>
        <button
          onClick={handlePlayerSelection}
          className="text-sm px-4 py-2 border border-[rgba(19,19,19,0.1)] rounded-lg"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default Card;
