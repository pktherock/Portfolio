import CopyrightIcon from "@mui/icons-material/Copyright";
import SocialMedia from "../Social-Media/SocialMedia";

function Footer() {
  return (
    <div className="bg-blue-400 dark:bg-slate-600 dark:text-white w-full py-2 px-3 md:flex md:justify-evenly text-black shadow-2xl">
      <p>
        Copyright <CopyrightIcon /> 2024 Pktherock
      </p>
      <SocialMedia />
    </div>
  );
}

export default Footer;
