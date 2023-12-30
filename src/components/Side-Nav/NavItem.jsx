import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

function NavItem({ navInfo }) {
  return (
    <NavLink
      to={navInfo.slug}
      className={({ isActive }) =>
        `${
          isActive
            ? "text-white border rounded-md bg-blue-400 shadow-lg shadow-blue-400/50"
            : "text-gray-600 hover:text-blue-400 dark:hover:text-blue-500 dark:text-white"
        } py-2 px-6 text-xl font-medium w-full flex justify-center items-center`
      }
    >
      {navInfo.name}
    </NavLink>
  );
}

NavItem.propTypes = {
  navInfo: propTypes.object.isRequired,
  // keyName: propTypes.string.isRequired, // todo
};

export default NavItem;
