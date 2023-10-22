import tst from "../../assests/toplefticon.png";
import rahiq from "../../assests/rahiq2.png";
import tailwinf from "../../assests/Tailwind_CSS_logo.svg.png";
import gg from "../../assests/google.png";

const Brand = () => {
  return (
    <div className=" the-brands mt-8 lg:px-24 px-8 w-full sm:h-8 h-4 flex justify-center sm:gap-12 gap-4">
      <img src={tst} alt="tst" className="sm:h-9" />
      <img src={rahiq} alt="rahiq" />
      <img src={tailwinf} alt="tailwinf" className="sm:h-7" />
      <img src={gg} alt="gg" />
    </div>
  );
};
export default Brand;
