import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";
import { Card } from "./ui";
import { Link } from "react-router-dom";

function Resume() {
  const handleDownload = async () => {
    const pdfFilePath = "pdf/Prashant-Resume.pdf";
    try {
      const response = await fetch(pdfFilePath); // Replace with the correct direct file URL
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Prashant-Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <Card>
      <div className="p-4 flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0">
        <Link
          to="/pdf/Prashant-Resume.pdf"
          target="_blank"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline flex justify-center items-center text-lg"
        >
          View Resume
          <ArrowTopRightOnSquareIcon className="px-2 w-10 h-10" />
        </Link>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline flex justify-center items-center text-lg"
          onClick={handleDownload}
        >
          Download Resume
          <ArrowDownTrayIcon className="px-2 w-10 h-10" />
        </button>
      </div>
    </Card>
  );
}

export default Resume;
