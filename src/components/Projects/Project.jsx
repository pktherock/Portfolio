import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Project({ project, showCarousel }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={project.imageUrl}
        alt={`${project.name} img`}
        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px] p-1"
        onClick={showCarousel}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <div className="flex justify-between items-center">
          <Link
            to={project.githubLink}
            target="_blank"
            className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800"
          >
            GitHub
          </Link>
          <Link
            to={project.viewLink}
            target="_blank"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  showCarousel: PropTypes.func.isRequired,
};

export default Project;
