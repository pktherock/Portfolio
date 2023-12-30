import Logo from "./Logo";
import MenuBtn from "./MenuBtn";
import ThemeBtn from "./ThemeBtn";


function Header() {
  return (
    <div className="flex justify-between items-center bg-blue-400 px-4 py-2 sticky top-0 shadow-lg shadow-blue-400/50 dark:bg-gray-500 dark:text-white">
      <div className="flex ">
        <MenuBtn/>
        <Logo />
      </div>

      <div className="flex">
        <ThemeBtn />
      </div>
    </div>
  );
}


export default Header;
