// const Contact =() =>{
//     return(
//         <div>
//             <h1 className="font-bold text-3xl p-4 m-4">Contact US Page </h1>
//             <form>
//        <input type="text" className="border border-black p-2 m-2" placeholder="name">

//        </input  >
//        <input className="border border-black p-2 m-2" placeholder="message">
//        </input>
//             </form>

//             <button className="border border-black p-2 m-2">Submit</button>
//             </div>
//     )
// }
// export default Contact;

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-6">

      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-8 border border-gray-200">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Get in Touch
          </h1>
          <p className="text-gray-500 mt-2">
            We'd love to hear from you 👋
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-4 mb-8 text-center">
          <div className="p-4 rounded-xl bg-orange-50 hover:shadow-md transition">
            <p className="font-semibold text-gray-700">📞 Phone</p>
            <p className="text-gray-600 text-sm mt-1">+91 8392045671</p>
          </div>

          <div className="p-4 rounded-xl bg-orange-50 hover:shadow-md transition">
            <p className="font-semibold text-gray-700">📧 Email</p>
            <p className="text-gray-600 text-sm mt-1">
              foodbuddy@gmail.com
            </p>
          </div>

          <div className="p-4 rounded-xl bg-orange-50 hover:shadow-md transition">
            <p className="font-semibold text-gray-700">📍 Address</p>
            <p className="text-gray-600 text-sm mt-1">
              FoodBuddy, Near 80 ft Road, Ratlam
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />

          <textarea
            rows="4"
            placeholder="Your Message..."
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          ></textarea>

          <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-300 shadow-md">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;