import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FeedbackScreen = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/feedbacks", {
        fullName,
        message,
      })
      .then((res) => {
        console.log(res);
        toast.success("Feedback created Successfully!", { duration: 5000 });
        navigate("/shop");
        setFullName("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="font-poppins">
      <div className="max-w-screen-sm px-4 py-16 sm:px-6 lg:px-8 w-full mx-auto">
        <form
          action="#"
          className="space-y-4 bg-white p-5 rounded"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center py-2 text-2xl">Feedback Form</h1>
          <div>
            <label className="sr-only" htmlFor="name">
              Full Name
            </label>
            <input
              className="w-full rounded border border-gray-200 focus:outline-indigo-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>

            <textarea
              className="w-full rounded-lg border border-gray-200 focus:outline-indigo-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </div>

          <div className="mt-4 pb-4">
            <button
              type="submit"
              className="w-full rounded-lg bg-gray-600 px-5 py-2 font-medium text-white"
            >
              Send Feedback
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FeedbackScreen;
