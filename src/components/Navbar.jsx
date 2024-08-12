// import { useNavigate } from "react-router-dom";
import { navLists } from "../constants";
import { searchImg, worldImg } from "../utils";
import { handleClick } from "./script";
const Navbar = () => {
  // const navigate = useNavigate();

  const handleHeroClick = () => {
    window.location.href = "#heroPage";
  };

  const handleNavClick = (nav) => {
    if (nav === "Countries") {
      window.location.href = "#highlights";
    } else {
      console.log(`Navigating ${nav}`);
    }
  };
  const handleSearchClick = () => {
    handleClick();
  };
  return (
    <header className="w-full px-5 py-5 sm:px-10 flex-between navbar">
      <nav className="w-full flex screen-max-width">
        <img
          src={worldImg}
          alt="world"
          width={25}
          height={20}
          className="image-hover"
          onClick={() => handleHeroClick()}
        />
        <div className="flex-center flex-1 max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="item hover:text-white"
              onClick={() => handleNavClick(nav)}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="mx-sm-rightButtons image-hover flex align-items gap-7">
          <img
            onClick={handleSearchClick}
            id="searchImg"
            src={searchImg}
            alt="search"
            width={25}
            height={20}
          />
        </div>
        <div className="ml-3">
          <input className="inputSearch" type="text" placeholder="search" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
