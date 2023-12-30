import PropTypes from "prop-types";

const EducationItem = ({ educationDetails }) => {
const {degree, institution, details, date, location} = educationDetails;
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">{degree}</h2>
      <p className="text-lg font-medium">{institution}</p>
      <p className="text-sm">{details}</p>
      <p className="text-sm">{date}</p>
      <p className="text-sm">{location}</p>
    </div>
  );
};

EducationItem.propTypes = {
  educationDetails: PropTypes.object.isRequired
}

export default EducationItem;
