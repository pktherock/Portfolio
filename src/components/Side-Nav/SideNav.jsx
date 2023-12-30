import { useSideNav } from "../../contexts";
import GitHub from "./GitHub";
import NavItem from "./NavItem";

const navItems = [
  {
    name: "Home",
    slug: "/",
    canShow: true,
  },
  {
    name: "About Me",
    slug: "/about-me",
    canShow: true,
  },
  {
    name: "Experience",
    slug: "/experience",
    canShow: true,
  },
  {
    name: "Projects",
    slug: "/projects",
    canShow: true,
  },
  {
    name: "Skills",
    slug: "/skills",
    canShow: true,
  },
  {
    name: "Educations",
    slug: "/educations",
    canShow: true,
  },
  {
    name: "Resume",
    slug: "/resume",
    canShow: true,
  },
  {
    name: "Contact me",
    slug: "/contact-me",
    canShow: true,
  },
];

function SideNav() {
  const { isOpen } = useSideNav();
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } bg-blue-200 dark:bg-slate-600 px-3 min-h-screen flex flex-col items-center relative w-52 shadow-xl shadow-blue-400/50 h-full top-0 bottom-0`}
    >
      <div className="flex flex-col justify-center items-center gap-3 mt-2 ">
        {navItems.map((nav) =>
          nav.canShow ? <NavItem key={nav.name} navInfo={nav} /> : null
        )}
      </div>
      <GitHub />
    </div>
  );
}

export default SideNav;
