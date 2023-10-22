import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assests/logo.svg";
import ramoLogo from "../../assests/RAMOaaa.png";
import { useState } from "react";

const Menu = ({ className }) => (
  <ul className={className}>
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#whatisramo">What is Ramo?</a>
    </li>
    <li>
      <a href="#whyramo">Why Ramo?</a>
    </li>
    <li>
      <a href="#possibilitiy">Open Ai</a>
    </li>
    <li>
      <a href="#blog">Library</a>
    </li>
  </ul>
);

const TheLogo = ({ className }) => (
  <div className="mr-8">
    <img src={ramoLogo} alt="logo" className={className} />
  </div>
);

const Navbar = () => {
  const [phoneMenu, setPhoneMenu] = useState(false);

  return (
    <nav className="w-screen h-16 sm:h-[100px] flex items-center sm:block ">
      <div className="sm:flex hidden justify-between items-center py-8 lg:px-24 px-8">
        <div className="flex flex-1 justify-start items-center">
          <TheLogo className="md:w-24 md:h-7 sm:w-16 sm:h-5 mb-3" />
          <Menu className="flex flex-row gap-[3vw] leading-6 capitalize mx-2 cursor-pointer lg:ml-20" />
        </div>
        <div className="flex flex-row justify-end items-center gap-8">
          <p className="cursor-pointer">Sing in</p>
          <button type="button" className="py-2 px-4 rounded-lg bg-[#FF4820]">
            Sing up
          </button>
        </div>
      </div>

      <div className="absolute top-6 right-3 sm:hidden block">
        {phoneMenu ? (
          <RiCloseLine
            className="font-bold h-6 w-6 "
            onClick={() => setPhoneMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="font-bold h-6 w-6 "
            onClick={() => setPhoneMenu(true)}
          />
        )}
      </div>
      {phoneMenu && (
        <div className=" absolute top-0 left-0 opacity-80 w-2/3 h-screen bg-black text-base font-bold smooth-transition z-50">
          <div className="flex justify-between items-center ">
            <div className="flex flec-col justify-start items-center mt-6">
              <ul
                className={
                  "flex flex-col gap-[3vw] leading-6 capitalize mx-2 cursor-pointer lg:ml-20"
                }
              >
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#wgtp3">What is GPT?</a>
                </li>
                <li>
                  <a href="#possibilitiy">Open Ai</a>
                </li>
                <li>
                  <a href="#features">Case Studies</a>
                </li>
                <li>
                  <a href="#blog">Library</a>
                </li>
                <p className="cursor-pointer">Sing in</p>
                <p className="border-b-2 border-yellow-400">Sing up</p>
              </ul>
            </div>
          </div>
        </div>
      )}
      <TheLogo className={"w-20 h-6 sm:hidden ml-8"} />
    </nav>
  );
};
export default Navbar;
