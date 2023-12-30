import PropTypes from "prop-types";

const Skill = ({ skill }) => {
  return (
    <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
      {skill}
    </span>
  );
};

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default Skill;
