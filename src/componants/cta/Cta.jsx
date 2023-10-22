const Cta = () => {
  return (
    <section className="  flex flex-col py-8 lg:px-24 px-8   ">
      <div className="yellowcard py-8 lg:px-20 px-8 ">
        <div>
          <p className="text-black text-sm font-semibold">
            Request Early Access to Get Started
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-4 md:gap-0 items-center justify-between">
          <p className="text-2xl font-bold text-black">
            Ready to take your online presence to the next level?
          </p>
          <button className=" w-fit bg-black px-12 py-3 text-white font-semibold  rounded-3xl">
            Join us
          </button>
        </div>
      </div>
    </section>
  );
};
export default Cta;
