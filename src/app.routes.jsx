import { createBrowserRouter } from "react-router-dom";
import {
  AboutMe,
  ContactMe,
  Educations,
  Error,
  Experience,
  Home,
  Layout,
  Projects,
  Resume,
  Skills,
} from "./components";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "educations",
        element: <Educations />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "contact-me",
        element: <ContactMe />,
      },
    ],
  },
]);

export default appRoutes;
