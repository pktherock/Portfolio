import PropTypes from "prop-types";
import Skill from "./Skill";

const SkillsList = ({ title, skills = [] }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-2 text-black">
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

SkillsList.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default SkillsList;
