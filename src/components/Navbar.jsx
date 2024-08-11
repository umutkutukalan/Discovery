import { navLists } from "../constants";
import { searchImg, worldImg } from "../utils";
const Navbar = () => {
  return (
    <header className="w-full px-5 py-5 sm:px-10 flex-between">
      <nav className="w-full flex screen-max-width">
        <img
          src={worldImg}
          alt="world"
          width={25}
          height={20}
          className="image-hover"
        />
        <div className="flex-center flex-1 max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="item hover:text-white">
              {nav}
            </div>
          ))}
        </div>
        <div className="mx-sm-rightButtons image-hover">
          <img src={searchImg} alt="search" width={25} height={20}/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
