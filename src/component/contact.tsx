import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/rocket.json";
function Contact() {
  return (
    <div className="bg-[url('/assets/four.jpg')] bg-cover w-full py-10 px-4 ">
      <div className="text-white text-5xl mb-10 text-center">Get in touch</div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="w-full lg:w-1/2">
          <Lottie
            animationData={animation}
            className="w-full h-[50vh] lg:h-[70vh]"
          />
        </div>

        <form className="w-full lg:w-1/2 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 rounded-md bg-white/20 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 rounded-md bg-white/20 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 rounded-md bg-white/20 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-md bg-white/20 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <textarea
              //   rows="5"
              placeholder="Your note..."
              className="w-full p-3 rounded-md bg-white/20 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
