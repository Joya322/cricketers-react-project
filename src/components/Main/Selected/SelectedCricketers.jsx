const SelectedCricketers = ({ selectedCricketer }) => {
  const { name, image, batting_bowling_type } = selectedCricketer;
  return (
    <div className="flex justify-between items-center p-6 border border-black/10 rounded-2xl">
      <div className="flex justify-center items-center gap-6">
        <img
          className="w-[80px] h-[80px] rounded-2xl object-cover object-center"
          src={image}
          alt=""
        />

        <div className="flex flex-col justify-center gap-2">
          <h4 className="text-2xl font-semibold">{name}</h4>
          <p className="opacity-60">{batting_bowling_type.split("/")[0]}</p>
        </div>
      </div>
      <div>
        <i className="fa-regular fa-trash-can"></i>
      </div>
    </div>
  );
};

export default SelectedCricketers;
