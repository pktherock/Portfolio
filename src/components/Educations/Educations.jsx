import { Card } from "../ui";
import EducationItem from "./EducationItem";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech. in Electronics & Communication",
      institution: "Purneal College of Eng. (AKU University)",
      details: "CGPA: 8.02/10",
      date: "Jul 2017 - Aug 2021",
      location: "Purnea, Bihar",
    },
    {
      degree: "Intermediate in Science",
      institution: "PLUS 2 GOVT. HS NAVASTHAPIT",
      details: "Score: 61.6%",
      date: "Apr 2012 - Apr 2015",
      location: "Gaya, Bihar",
    },
    {
      degree: "10th",
      institution: "JRHS SALARPUR",
      details: "Score: 73.4%",
      date: "Apr 2011 - Apr 2012",
      location: "Khagaria, Bihar",
    },
    // Add more education entries if needed
  ];

  return (
    <Card>
      <div className="p-4 dark:text-gray-200">
        {educationData.map((education, index) => (
          <EducationItem key={index} educationDetails={education} />
        ))}
      </div>
    </Card>
  );
};

export default Education;
