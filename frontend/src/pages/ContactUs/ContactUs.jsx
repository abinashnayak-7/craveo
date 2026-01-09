import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-zinc-50 min-h-screen">
      <div className="px-4 sm:px-6 lg:px-10 py-20 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-800 mb-4">
            Contact Us
          </h1>
          <p className="text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base">
            Have questions, feedback, or need support? Our team is here to help
            you anytime.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-zinc-800 mb-3">
                Get in Touch
              </h2>
              <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
                Reach out to us through the details below. We usually respond
                within 24 hours.
              </p>

              <div className="space-y-4 text-sm">
                <p className="text-zinc-700">
                  <span className="font-medium text-zinc-900">Email:</span>{" "}
                  support@craveo.com
                </p>
                <p className="text-zinc-700">
                  <span className="font-medium text-zinc-900">Phone:</span> +91
                  98765 43210
                </p>
                <p className="text-zinc-700">
                  <span className="font-medium text-zinc-900">Address:</span>{" "}
                  IGIT, Sarang, Odisha, India
                </p>
              </div>
            </div>

            <p className="mt-8 text-xs text-zinc-400">
              © {new Date().getFullYear()} Craveo. All rights reserved.
            </p>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-xl font-semibold text-zinc-800 mb-6">
              Send us a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-zinc-300 px-4 py-2.5
                             focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-zinc-300 px-4 py-2.5
                             focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full rounded-lg border border-zinc-300 px-4 py-2.5
                             resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-orange-500 text-white
                           font-semibold hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
