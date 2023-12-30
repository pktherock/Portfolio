import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CodeIcon from "@mui/icons-material/Code";
import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <div className="md:flex md:justify-center md:items-center gap-2 dark:text-white">
      <Link to="https://github.com/pktherock" target="_blank">
        <GitHubIcon />
      </Link>
      <Link to="https://www.linkedin.com/in/pktherock/" target="_blank">
        <LinkedInIcon />
      </Link>
      <a href="mailto:prashantkumarjs72@gmail.com" rel="noopener noreferrer">
        <MailOutlineIcon />
      </a>
      <Link to="https://leetcode.com/pktherock00/" target="_blank">
        <CodeIcon />
      </Link>
    </div>
  );
}

export default SocialMedia;
