const Footer = () => {
  return (
    <div className="bg-black relative">
      {/* footer body */}
      <div className="w-11/12 mx-auto py-6">
        {/* white body */}
        <div className="bg-white/10 rounded-3xl absolute -top-[158px] left-1/2 -translate-x-1/2 z-50 p-6 border border-white">
          {/* white body content */}
          <div className="bg-white rounded-3xl">
            <div className="flex flex-col justify-center items-center gap-6 px-6 py-[60px] rounded-3xl bg-[url(/images/bg-shadow.png)] bg-no-repeat bg-cover text-center">
              <h2 className="text-3xl font-bold">
                Subscribe to our Newsletter
              </h2>
              <p className="text-lg font-medium text-black/70">
                Get the latest updates and news right in your inbox!
              </p>
              <div>
                <input
                  className="text-black/40 py-4 px-5 border border-black/15 rounded-xl md:w-[400px]"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="font-bold bg-linear-to-r from-violet-400 to-amber-400 py-4 px-7 border border-black/15  rounded-xl ml-4">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[200px] pb-6 text-white flex flex-col justify-center items-center">
          <img className="w-[140px]" src="/images/logo.png" alt="" />
          <div className="grid grid-cols-3 mt-7 gap-10">
            <div>
              <h5 className="font-semibold text-lg mb-4">About Us</h5>
              <p className="text-white/60 w-2/3">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-lg mb-4">Quick Links</h5>
              <ul className="text-white/60 list-disc list-inside">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-lg mb-4">Subscribe</h5>
              <p className="text-white/60 mb-5">
                Subscribe to our newsletter for the latest updates.
              </p>
              <div>
                <input
                  className="text-black/40 py-4 px-5 border border-black/15 bg-white rounded-l-xl"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="font-bold bg-linear-to-bl from-violet-400 to-amber-400 py-4 px-7 border border-black/15 text-black rounded-r-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-white/15" />
      <p className="text-white/60 py-8 text-center">
        @2025 JAF All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
