import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CodeIcon from "@mui/icons-material/Code";

function SocialMedia() {
  return (
    <div className="md:flex md:justify-center md:items-center gap-2 dark:text-white">
      <GitHubIcon />
      <LinkedInIcon />
      <MailOutlineIcon />
      <CodeIcon />
    </div>
  );
}

export default SocialMedia;
