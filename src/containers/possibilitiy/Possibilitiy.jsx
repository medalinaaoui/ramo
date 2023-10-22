import thatImg from "../../assests/Feature Image.png";

const Possibilitiy = () => {
  return (
    <section
      id="possibilitiy"
      className="py-8 lg:px-24 px-8 flex md:flex-row flex-col gap-8 justify-center items-end"
    >
      <div className="w-fit">
        <img
          src={thatImg}
          alt="img"
          className="sm:h-[24rem] sm:w-[24rem] md:h-[32rem]  md:w-[32rem]"
        />
      </div>
      <div className="flex flex-col gap-8 md:w-[30rem] w-fit mb-8">
        <p className="text-blue-400 sm:text-base text-sm">
          Request Early Access to Get Started
        </p>
        <h1 className="bg-that-i-want bg-clip-text text-transparent font-bold text-4xl capitalize ">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-blue-300 whitespace-normal sm:text-base text-sm">
          We believe that every business has the potential to go viral, and we
          are here to help you make that happen. We are a team of experienced
          and passionate marketers who are committed to helping our clients
          succeed.
        </p>
        <p className="text-red-400 sm:text-base text-sm">
          Request Early Access to Get Started
        </p>
      </div>
    </section>
  );
};
export default Possibilitiy;
