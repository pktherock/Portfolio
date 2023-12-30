import { Card, FullScreenCarousel } from "../ui";
import Project from "./Project";
import { useState } from "react";

function Projects() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <Card>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <Project
            key={project.id}
            project={project}
            showCarousel={() => {
              setShowCarousel(true);
              setCarouselIndex(index);
            }}
          />
        ))}
      </div>
      {showCarousel && (
        <FullScreenCarousel
          images={projects.map((project) => ({
            original: project.imageUrl,
            thumbnail: project.imageUrl,
          }))}
          handleClose={() => setShowCarousel(false)}
          startIndex={carouselIndex}
        />
      )}
    </Card>
  );
}

export default Projects;

import shadiSolution from "../../assets/img/Project/Shadi-solution.png";
import habitTracker from "../../assets/img/Project/Habit-Tracker.png";
import reactFireAuth from "../../assets/img/Project/React-fire-auth.png";
import reactReduxTodo from "../../assets/img/Project/React-Redux-todo.png";
import reactReduxCartApp from "../../assets/img/Project/React-Redux-CART-App.png";
import photofolioApp from "../../assets/img/Project/Photofolio.png";
import angularFireAuth from "../../assets/img/Project/Angular-fire-auth.png";
import angularNodeAuth from "../../assets/img/Project/Angular-Node-auth.png";
import hospitalApi from "../../assets/img/Project/Hospital-API.png";
import authenticationApp from "../../assets/img/Project/Authentication.png";
import stopwatch from "../../assets/img/Project/Stopwatch.png";
import digitalClock from "../../assets/img/Project/Digital-Clock.png";
import analogClock from "../../assets/img/Project/Analog-Clock.png";
import pageNotFound from "../../assets/img/Project/404-Page.png";

const projects = [
  {
    id: 1,
    name: "Shadi Solution (Next.js)",
    imageUrl: shadiSolution,
    githubLink: "https://github.com/pktherock/Shadi-Solution",
    viewLink: "https://shadi-solution.vercel.app/",
  },
  {
    id: 2,
    name: "React Habit Tracker",
    imageUrl: habitTracker,
    githubLink: "https://github.com/pktherock/React-Habit-Tracking-App",
    viewLink: "https://react-habit-tracking-app.vercel.app/",
  },
  {
    id: 3,
    name: "React Fire Auth",
    imageUrl: reactFireAuth,
    githubLink: "https://github.com/pktherock/React-Fire-Auth",
    viewLink: "https://react-fire-auth.vercel.app/",
  },
  {
    id: 4,
    name: "React Redux Todo App",
    imageUrl: reactReduxTodo,
    githubLink: "https://github.com/pktherock/React-Redux-Todo-App",
    viewLink: "https://react-redux-todo-app-sigma.vercel.app/",
  },
  {
    id: 5,
    name: "React Redux CART App",
    imageUrl: reactReduxCartApp,
    githubLink: "https://github.com/pktherock/BuyBusy-1", // todo
    viewLink: "https://buy-busy-1.vercel.app/", 
  },
  {
    id: 6,
    name: "React Photofolio App",
    imageUrl: photofolioApp,
    githubLink: "https://github.com/pktherock/Phtofolio",
    viewLink: "https://phtofolio.vercel.app/",
  },
  {
    id: 7,
    name: "Angular Fire Auth",
    imageUrl: angularFireAuth,
    githubLink: "https://github.com/pktherock/Angular-Fire-Auth",
    viewLink: "https://angular-firebase-auth-a1fbf.web.app/",
  },
  {
    id: 8,
    name: "Angular Node Auth",
    imageUrl: angularNodeAuth,
    githubLink: "https://github.com/pktherock/Angular-Node-Auth",
    viewLink: "https://angular-node-auth.vercel.app/",
  },
  {
    id: 9,
    name: "Hospital API",
    imageUrl: hospitalApi,
    githubLink: "https://github.com/pktherock/hospital-API",
    viewLink: "https://hospital-api-la56.onrender.com/",
  },
  {
    id: 10,
    name: "Authentication Backend App",
    imageUrl: authenticationApp,
    githubLink: "https://github.com/pktherock/authentication-backend-app",
    viewLink: "https://authentication-backend-app.onrender.com",
  },
  {
    id: 11,
    name: "Stopwatch",
    imageUrl: stopwatch,
    githubLink: "https://github.com/pktherock/Stopwatch",
    viewLink: "https://pktherock.github.io/Stopwatch/",
  },
  {
    id: 12,
    name: "Digital Watch",
    imageUrl: digitalClock,
    githubLink: "https://github.com/pktherock/Digital-Clock---Js",
    viewLink: "https://pktherock.github.io/Digital-Clock---Js/",
  },
  {
    id: 13,
    name: "Analog Watch",
    imageUrl: analogClock,
    githubLink: "https://github.com/pktherock/New-Analog-Clock",
    viewLink: "https://pktherock.github.io/New-Analog-Clock/",
  },
  {
    id: 14,
    name: "404 Page",
    imageUrl: pageNotFound,
    githubLink: "https://github.com/pktherock/404-Aeroplane-page",
    viewLink: "https://pktherock.github.io/404-Aeroplane-page/",
  },
  // Add more project objects as needed
];
