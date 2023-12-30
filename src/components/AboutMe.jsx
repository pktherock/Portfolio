import { Card } from "./ui";
import profileImg from "../assets/img/Brand/profile-img.jpeg";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <Card>
      <div className="flex flex-col lg:flex-row px-10 py-5 dark:text-white">
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="w-56 h-72 overflow-hidden rounded-md">
            <img
              src={profileImg}
              alt="about me img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-lg font-semibold pt-4">
            <p>
              Name: <span className="text-gray-500">Prashant Kumar</span>
            </p>
            <p>
              Profile:{" "}
              <span className="text-gray-500">Full Stack Developer</span>
            </p>
            <p className="whitespace-nowrap">
              Email:{" "}
              <span className="text-gray-500">prashantkumarjs72@gmail.com</span>
            </p>
            <p>
              Phone: <span className="text-gray-500">(+91) 7765811317</span>
            </p>
          </div>
        </div>
        <div className="w-full pl-5 font-medium text-gray-500 text-xl">
          <p className="font-semibold text-2xl border-b-4 border-blue-500 text-center text-black dark:text-white">
            About me
          </p>
          <p className="mt-5">
            Hey Reader, I am a{" "}
            <span className="font-bold text-blue-400">
              Javascript Full Stack Developer
            </span>
            . with hands-on experience in software development and frameworks.
            Proficient in
            <span className="font-bold text-blue-400">
              {" "}
              Angular, React, MongoDB, Node, Express, and Firebase
            </span>
            . Strong professional with a bachelor&apos;s of technology in{" "}
            <span className="font-bold text-blue-400">
              Electronics and Communication
            </span>{" "}
            Engineering from Purnea College of Engineering, Purnea( Dept. Of
            Science & Technology, Govt. Of Bihar).
          </p>
          <p className="mt-2">
            Currently working at{" "}
            <span className="font-bold text-blue-400">
              Ginims as a Software Engineer
            </span>
            .
          </p>
          <p className="mt-2">
            Developed one{" "}
            <Link className="text-blue-600" to="https://www.shadisolution.in" target="_blank">
              online platform
            </Link>{" "}
            for my friend, which is basically to take orders for any event and
            provide them with solutions.
          </p>
          <p className="mt-2">
            I also have previous internship experiences with,{" "}
            <span className="font-bold text-blue-400">Stepupify Labs</span>. A
            startup focused on improving the agriculture sector. I have done
            <span className="font-bold text-blue-400">
              {" "}
              front-end development
            </span>{" "}
            and helped to create IOT-based devices as well.
          </p>
        </div>
      </div>
    </Card>
  );
}

export default AboutMe;
