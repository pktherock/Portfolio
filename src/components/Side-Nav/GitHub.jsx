import GitHubIcon from "@mui/icons-material/GitHub";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function GitHub() {
  return (
    <Link
      to="https://github.com/pktherock"
      target="_blank"
      className="absolute flex justify-center items-center bottom-0 py-2 w-full gap-2 border-2 rounded-md bg-orange-300 cursor-pointer hover:bg-blue-400"
    >
      <GitHubIcon />
      <p>GitHub</p>
      <ArrowTopRightOnSquareIcon className="w-7 h-7" />
    </Link>
  );
}

export default GitHub;
