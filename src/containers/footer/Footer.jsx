import ramoLogo from "../../assests/RAMOaaa.png";

const Footer = () => {
  return (
    <footer className="bg-[#031B34] flex flex-col items-center">
      <div className="flex flex-col items-center gap-8 my-20">
        <h4 className="md:text-4xl text-2xl font-bold bg-that-i-want bg-clip-text text-transparent lg:mx-96 mx-20 my-10 text-center">
          Do you want to step in to the future before others
        </h4>
        <button className="w-fi px-8 py-3 text-white border-solid border-2 border-white">
          Request Early Access
        </button>
      </div>

      <div className="flex lg:flex-row flex-col lg:justify-around justify-between items-center gap-16 w-full my-16 ">
        <div>
          <img
            src={ramoLogo}
            alt="ramo logo"
            className="md:w-24 md:h-7 w-16 h-5  mb-3 "
          />
          <p>Marrakech rue 222, All Rights Reserved</p>
        </div>

        <div className="grid  md:grid-cols-3 grid-cols-1 gap-20 md:gap-40">
          <div className="flex flex-col gap-8">
            <h5 className="font-semibold text-base ">Links</h5>
            <ul className="text-sm flex flex-col gap-8">
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h5 className="font-semibold text-base ">Company</h5>
            <ul className="text-sm flex flex-col gap-8">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h5 className="font-semibold text-base ">Get in touch</h5>
            <ul className="text-sm flex flex-col gap-8">
              <li>Marrakech rue 22</li>
              <li>+212613883848</li>
              <li>info@ramo.com</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center my-4 text-sm">
        &copy; {new Date().getFullYear()} Ramo Agency. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
