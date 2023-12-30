import { Card } from "./ui";

function Experience() {
  return (
    <Card>
      <div className="p-6 dark:text-gray-200">
        <h2 className="text-xl font-semibold mb-4">Software Engineer</h2>

        <div className="flex justify-between text-gray-600 mb-4 dark:text-blue-400">
          <span>Ginims · Full-time</span>
          <span>Feb 2022 - Present · 1 yr 11 mos</span>
          <span>Bengaluru, Karnataka, India · On-site</span>
        </div>

        <ul className="list-disc list-inside mb-6">
          <li>
            Implemented{" "}
            <span className="font-semibold text-blue-400">Subscription</span>{" "}
            feature from scratch to final product,{" "}
            <span className="font-semibold text-blue-400">
              Controlling the app a/q subscription plan.
            </span>
          </li>
          <li>
            Implemented{" "}
            <span className="font-semibold text-blue-400">Payment Gateway</span>{" "}
            from scratch to the final product, Created{" "}
            <span className="font-semibold text-blue-400">
              failure-based design of PG . Split functionality{" "}
            </span>{" "}
            and calculation (who will get what and how much.) were also
            important in PG.
          </li>
          <li>
            Fixed more than{" "}
            <span className="font-semibold text-blue-400">200 major bugs</span>{" "}
            and almost covered{" "}
            <span className="font-semibold text-blue-400">95%</span> of the bugs
            that were stopping to{" "}
            <span className="font-semibold text-blue-400">go project Live</span>
            .
          </li>
          <li>
            Actively engaged with clients and potential customers as the lead
            developer, providing technical guidance and support to drive
            customer success which increased product adoption by over{" "}
            <span className="font-semibold text-blue-400">30%</span>.
          </li>
          <li>
            Managing{" "}
            <span className="font-semibold text-blue-400">Git and GitHub</span>{" "}
            of all the projects and actively manual deployments using GCP.
          </li>
          <li>
            Enhanced Folder structure of the project to support more{" "}
            <span className="font-semibold text-blue-400">
              extensible codebase
            </span>
            . Created separate modules for each independent functionality like
            PG, PDF download, Subscription.{" "}
            <span className="font-semibold text-blue-400">
              Cleaned codebase almost 80 to 90%
            </span>
            .
          </li>
          <li>
            Implemented{" "}
            <span className="font-semibold text-blue-400">reports</span>{" "}
            functionality throughout the project and,{" "}
            <span className="font-semibold text-blue-400">
              multisearch filter, downloading PDF generic modules.
            </span>{" "}
            After this all features project usability enhanced by{" "}
            <span className="font-semibold text-blue-400">90%</span> (reports
            are important for booking apps)
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2 text-black">
          <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
            Mean Stack
          </span>
          <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
            Angular
          </span>
          <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
            TypeScript
          </span>
          <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
            Firebase
          </span>
          <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
            Git
          </span>
          <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
            JavaScript
          </span>
          <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
            Express.js
          </span>
          <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
            Node.js
          </span>
          <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
            MongoDB
          </span>
        </div>
      </div>
      <div className="p-6 dark:text-gray-200">
        <h2 className="text-xl font-semibold mb-4">Software Engineer Intern</h2>

        <div className="flex justify-between text-gray-600 mb-4 dark:text-blue-400">
          <span>Stepupify Labs · Internship</span>
          <span>Oct 2020 - Mar 2022 · 1 yr 6 mos</span>
          <span>Bhagalpur, Bihar, India · Remote</span>
        </div>

        <ul className="list-disc list-inside mb-6">
          <li>
            Worked as a{" "}
            <span className="font-semibold text-blue-400">
              Full stack developer
            </span>
          </li>
          <li>Developed website for listing their products</li>
          <li>
            Involved in more then{" "}
            <span className="font-semibold text-blue-400">10 IOT</span> products
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2 text-black">
          <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
            Mean Stack
          </span>
          <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
            Ful-Stack Development
          </span>
          <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
            Git
          </span>
          <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
            React.js
          </span>
          <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
            Node.js
          </span>
          <span className="bg-gray-200 dark:bg-gray-300 px-3 py-1 rounded-md">
            MongodDB
          </span>
        </div>
      </div>
    </Card>
  );
}

export default Experience;
