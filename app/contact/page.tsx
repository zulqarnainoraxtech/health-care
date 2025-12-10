
const ContactPage = () => {
  return (
    <div className=" flex items-center justify-center py-20 px-6 bg-gray-100 h-[calc(100vh-72px)]">
      <div className="w-[50%] bg-white  shadow-lg rounded-2xl p-10">
        
        {/* Headings */}
        <h2 className=" text-lg font-semibold tracking-wide text-center">
          Get In Touch
        </h2>
        <h3 className="text-4xl text-darkgreen font-semibold  text-center mt-2">
          Contact Us
        </h3>
        <p className="text-gray-600 text-center mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Form */}
        <form className="mt-10 space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium">First name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-darkgreen"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Last name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-darkgreen"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-darkgreen"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium">Phone number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-darkgreen"
            />
          </div>

          {/* Topic dropdown */}
          <div>
            <label className="block text-gray-700 font-medium">Choose a topic</label>
            <select className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-darkgreen">
              <option>Select one...</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Appointments</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              rows={4}
              placeholder="Type your message..."
              className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-darkgreen"
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-3">
            <input type="checkbox" className="h-4 w-4" />
            <p className="text-gray-700">I accept the terms</p>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-darkgreen text-white py-3 rounded-md text-lg tracking-wide hover:opacity-90"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactPage;
