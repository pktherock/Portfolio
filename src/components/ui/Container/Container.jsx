import propTypes from "prop-types";
function Container({ children }) {
  return <div className="w-full px-5 py-4">{children}</div>;
}

Container.propTypes = {
  children: propTypes.any, // todo
};

export default Container;
