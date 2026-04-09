import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);

  const features = [
    {
      icon: "📍",
      title: "1. Browse Local Restaurants",
      desc: "Our app fetches live data from the real world API to show you real restaurants in your area with their current menus and live pricing.",
    },
    {
      icon: "🛒",
      title: "2. Add items to your Cart",
      desc: "Our Redux-powered cart manages your items instantly without any server lag. Adjust quantities seamlessly.",
    },
    {
      icon: "🚀",
      title: "3. Fast Checkout",
      desc: "Experience lightning-fast checkout experiences with automated cost calculations for taxes, delivery, and subtotal fees.",
    },
    {
      icon: "🛡️",
      title: "4. Enjoy Your Food",
      desc: "This is a demonstration app, but if it were real, your food would be there in 30 minutes or less!",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-20 px-6 sm:px-12 text-center rounded-b-3xl shadow-lg relative overflow-hidden">
        {/* Ambient overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Welcome to <span className="text-yellow-300">Food Buddy</span> 🍔
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white/90 max-w-2xl mx-auto">
            A modern, blazing-fast food delivery application built to demonstrate the power of React, Redux, and Tailwind CSS.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* User Greet Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between border-t-4 border-orange-500 transform transition hover:-translate-y-1">
          <div>
            <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-2">
              Viewing as
            </p>
            <p className="text-2xl font-bold text-slate-800">
              {loggedInUser}
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-slate-600 font-medium">Hungry? You're in the right place.</p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            How Food Buddy Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-slate-100 flex flex-col items-center text-center">
                <div className="text-5xl mb-6 bg-orange-50 w-20 h-20 flex flex-col items-center justify-center rounded-full shadow-inner">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack Section */}
        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          
          <div className="relative z-10 w-full">
            <h2 className="text-3xl font-bold mb-4">Built With Modern Tech</h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg space-y-2">
              Food Buddy isn't just about food; it's about seamless performance. Powered by live tracking APIs, Redux-managed states, and automated build tools.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['React.js (v18)', 'Redux Toolkit', 'Tailwind CSS', 'React Router', 'Parcel', 'Context API'].map((tech) => (
                <span key={tech} className="bg-slate-800 border border-slate-700 px-6 py-2 rounded-full font-semibold text-orange-400 shadow-sm hover:scale-105 transition-transform cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;