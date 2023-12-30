import SkillsList from "./SkillsList";
import { Card } from "../ui";

const Skills = () => {
  const skillsData = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML/CSS"],
    },
    {
      title: "Frameworks and Libraries",
      skills: [
        "Angular",
        "React",
        "NodeJS",
        "ExpressJS",
        "Redux",
        "Context API",
        "Tailwind CSS",
      ],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "Firebase"],
    },
    {
      title: "Version Control",
      skills: ["Git"],
    },
    {
      title: "Developer Tools",
      skills: ["VS Code", "Postman", "IntelliJ IDEA"],
    },
    {
      title: "Other Skills",
      skills: [
        "Swagger",
        "REST API",
        "Leadership",
        "Problem Solving",
        "Teamwork",
      ],
    },
  ];

  return (
    <Card>
      <div className="p-4 dark:text-gray-200">
        {skillsData.map((section, index) => (
          <SkillsList
            key={index}
            title={section.title}
            skills={section.skills}
          />
        ))}
      </div>
    </Card>
  );
};

export default Skills;
