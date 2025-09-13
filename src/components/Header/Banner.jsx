const Banner = ({handleAddCoin}) => {
  return (
    <div className="w-11/12 mx-auto bg-[black] rounded-3xl mt-32">
      <div className="bg-[url(/images/bg-shadow.png)] bg-no-repeat bg-cover rounded-3xl flex flex-col justify-center items-center gap-6 py-14 text-center">
        <img src="/images/banner-main.png" alt="" />
        <h2 className="font-bold text-4xl text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="font-medium text-2xl text-white opacity-70">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="border border-[rgba(231,254,41,1)] inline-block rounded-xl bg-[rgba(255,255,255,.1)]">
          <button onClick={handleAddCoin} className="font-bold px-5 py-3 bg-[rgba(231,254,41,1)] rounded-xl m-2">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
