import { useState } from "react";
import {
  MapPinIcon,
  PhoneArrowDownLeftIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import { Card } from "../ui";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [disable, setDisable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    const body = `
    <div>
      <p>Name: ${formData.name}</p>
      <p>Email: ${formData.email}</p>
      <p>Message: ${formData.message}</p>
    </div>
    `;
    console.log(body);
    alert("I am working on it will be fixed very soon!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setDisable(false);
  };

  return (
    <Card>
      <div className="container mx-auto mt-8 flex flex-col lg:flex-row md:justify-between p-5 dark:text-gray-200 text-black">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl font-semibold mb-4">Contact Me</h1>
          <form onSubmit={handleSubmit} className="max-w-md">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-500 dark:text-black"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-500 dark:text-black"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-500 dark:text-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500 dark:text-black"
              disabled={disable}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="text-lg">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p>
              I enjoy working with dedicated businesses that make the world
              beautiful. We can do so much together!
            </p>
            <p className="mt-4 flex items-center">
              <MapPinIcon className="w-8 h-8 pr-2" /> Darshalli, Bangalore
            </p>
            <p className="mt-4 flex items-center">
              <PhoneArrowDownLeftIcon className="w-8 h-8 pr-2" /> (+91)
              7765811317
            </p>
            <p className="mt-4 flex items-center">
              <PhoneArrowDownLeftIcon className="w-8 h-8 pr-2" /> (+91)
              8877996333
            </p>

            <p className="mt-4 flex items-center">
              {" "}
              <EnvelopeIcon className="w-8 h-8 pr-2" />{" "}
              prashantkumarjs72@gmail.com
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContactMe;
