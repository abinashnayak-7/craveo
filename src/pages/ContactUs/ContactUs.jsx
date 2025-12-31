import React from "react";

const ContactUs = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
          Contact Us
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Have questions, feedback, or need support? We’d love to hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Get in Touch
            </h2>
            <p className="text-slate-600">
              Reach out to us through any of the following ways.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-slate-700">
              <span className="font-medium">Email:</span> support@craveo.com
            </p>
            <p className="text-slate-700">
              <span className="font-medium">Phone:</span> +91 98765 43210
            </p>
            <p className="text-slate-700">
              <span className="font-medium">Address:</span> IGIT, Sarang,
              Odisha, India
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-medium py-2 rounded-full hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
