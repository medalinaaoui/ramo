import people from "../../assests/Group 81.png";
import dg from "../../assests/dgi2.png";

const Header = () => {
  return (
    <div className="py-8 lg:px-24 px-8 flex lg:flex-row flex-col justify-center items-center">
      <div className="flex flex-1 justify-center items-start flex-col">
        <h1 className=" md:text-6xl text-4xl font-semibold bg-that-i-want bg-clip-text  text-transparent  tracking-tighter capitalize">
          Go Viral. It's More Than Just Digital Marketing
        </h1>
        <p className="md:text-base text-sm text-blue-300 ">
          <strong>Ramo</strong> is not a typical digital marketing agency. We're
          a passionate team of creative minds who believe in the power of going
          beyond boundaries to make your brand truly shine in the digital world.
          Our journey began with a vision – to transform ordinary businesses
          into extraordinary success stories through innovative and holistic
          online strategies.
        </p>
        <div className="flex flex-row mx-0 mt-8 mb-4 w-full">
          <input
            type="text"
            placeholder="Your email address"
            className="bg-[#052D56] outline-none grow md:py-4 py-2 px-2 text-[#3D6184] rounded-s-sm"
          />
          <button className="bg-[#FF4820] md:py-4 py-2 px-7 font-semibold text-white rounded-e-sm">
            Get Started
          </button>
        </div>
        <div className="flex justify-start items-center md:gap-3 md:flex-row flex-col w-full">
          <img src={people} alt="people" className="md:h-8 h-6" />
          <p className="md:text-sm text-xs truncate text-white">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div>
        <img
          src={dg}
          alt="ai pic"
          className="thefirstimage sm:h-[20rem]  md:h-[30rem] p-8  "
        />
      </div>
    </div>
  );
};
export default Header;
