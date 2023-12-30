import { Bars3Icon } from "@heroicons/react/24/solid";
import { useSideNav } from "../../contexts";

function MenuBtn() {
  const { toggleSideNav } = useSideNav();

  return <Bars3Icon className="h-8 w-8" onClick={toggleSideNav} />;
}

export default MenuBtn;
