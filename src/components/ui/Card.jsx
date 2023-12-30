import PropTypes from "prop-types";

function Card({ children }) {
  return <div className="p-2 shadow-2xl rounded">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.any,
};
export default Card;
