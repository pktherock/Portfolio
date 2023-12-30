import SocialMedia from "./Social-Media/SocialMedia";
import { Card } from "./ui";
import profileImg from "../assets/img/Brand/profile-img2.jpeg";

function Home() {
  return (
    <Card>
      <div className="px-6 py-16 lg:px-8 flex flex-col items-center">
        <div className="w-72 h-72 overflow-hidden rounded-full">
          <img
            src={profileImg}
            alt="about me img"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-blue-600 sm:text-5xl text-center mt-5">
          JavaScript Full Stack Developer
        </h1>
        <div className="mt-5">
          <SocialMedia />
        </div>
      </div>
    </Card>
  );
}

export default Home;
