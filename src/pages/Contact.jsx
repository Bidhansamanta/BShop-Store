function Contact() {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have any questions? We would love to hear from you.
            Get in touch with our team.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-blue-600 text-white p-8 md:p-10 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="text-blue-100 mb-8 leading-7">
              Feel free to contact us for any questions,
              suggestions, or support.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-blue-100">
                  Kolkata, West Bengal, India
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-blue-100">
                  support@bshop.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-blue-100">
                  +91 9876543210
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form UI */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;