                                             //Tailwind css Improved 

import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="w-full max-w-3xl bg-slate-800/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-slate-700">

          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            About Class Component
          </h1>

          <p className="text-slate-400 text-center mb-8">
            Built using React Class Components & Context API
          </p>

          {/* Logged in user section */}
          <div className="bg-slate-900 rounded-xl p-6 mb-8 flex items-center justify-between border border-slate-700">
            <div>
              <p className="text-sm text-slate-400">Logged In User</p>

              <UserContext.Consumer>
                {({ loggedInUser }) => (
                  <h2 className="text-xl font-semibold text-emerald-400 mt-1">
                    {loggedInUser}
                  </h2>
                )}
              </UserContext.Consumer>
            </div>

            <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
              U
            </div>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-6 items-center">

            {/* Left info */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">
                Namaste React 👋
              </h2>

              <p className="text-slate-400 leading-relaxed">
                This page demonstrates how class based components work along
                with React Context for sharing global data like the logged in
                user.
              </p>
            </div>

            {/* Right card */}
            <div className="bg-slate-900 rounded-xl p-5 border border-slate-700 shadow-lg">
              <UserClass
                name={"Tarang (Class)"}
                location={"Dehradun (class)"}
              />
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default About;

// import { Component } from "react";
// import UserContext from "../utils/UserContext";

// class About extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeFeature: null };
//   }

//   componentDidMount() {}

//   render() {
//     const features = [
//       {
//         icon: "🍕",
//         title: "1000+ Restaurants",
//         desc: "Discover local favourites and popular chains near you.",
//       },
//       {
//         icon: "⚡",
//         title: "Lightning Delivery",
//         desc: "Hot food at your door in 30 minutes or less, guaranteed.",
//       },
//       {
//         icon: "🎯",
//         title: "Smart Filters",
//         desc: "Filter by cuisine, rating, price, and delivery time instantly.",
//       },
//       {
//         icon: "🛡️",
//         title: "Secure Payments",
//         desc: "UPI, cards, wallets — all transactions fully encrypted.",
//       },
//     ];

//     return (
//       <div
//         style={{ fontFamily: "'Syne', sans-serif" }}
//         className="min-h-screen bg-[#0f0e0c] text-white overflow-x-hidden"
//       >
//         {/* Google Font */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap"
//           rel="stylesheet"
//         />

//         {/* Ambient background blobs */}
//         <div className="fixed inset-0 pointer-events-none z-0">
//           <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full bg-orange-500/10 blur-[120px]" />
//           <div className="absolute bottom-[-60px] right-[-60px] w-[380px] h-[380px] rounded-full bg-amber-400/8 blur-[100px]" />
//         </div>

//         <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">

//           {/* Hero Section */}
//           <div className="text-center mb-20">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/25 rounded-full px-4 py-1.5 mb-8">
//               <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
//               <span className="text-orange-400 text-xs font-semibold uppercase tracking-widest">
//                 About Food Buddy
//               </span>
//             </div>

//             {/* Headline */}
//             <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
//               <span className="text-white">Hunger?</span>
//               <br />
//               <span
//                 style={{
//                   background:
//                     "linear-gradient(90deg, #f97316, #fbbf24, #f97316)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundSize: "200%",
//                 }}
//               >
//                 Solved. 🍔
//               </span>
//             </h1>

//             <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
//               Food Buddy is your go-to food delivery app — a Swiggy-inspired
//               platform built to bring restaurant-quality meals straight to your
//               doorstep.
//             </p>
//           </div>

//           {/* Logged-in User Card */}
//           <div className="mb-16 bg-[#1a1915] border border-orange-500/15 rounded-2xl p-6 flex items-center justify-between shadow-xl">
//             <div>
//               <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">
//                 Logged In As
//               </p>
//               <UserContext.Consumer>
//                 {({ loggedInUser }) => (
//                   <p className="text-xl font-bold text-orange-400">
//                     {loggedInUser}
//                   </p>
//                 )}
//               </UserContext.Consumer>
//             </div>
//             <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-lg">
//               🧑
//             </div>
//           </div>

//           {/* Mission */}
//           <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-white mb-4 leading-snug">
//                 Our Mission
//               </h2>
//               <p className="text-slate-400 leading-relaxed mb-4">
//                 We believe great food should be accessible to everyone. Food
//                 Buddy connects you with hundreds of local and national
//                 restaurants, making it ridiculously easy to order what you love
//                 — in minutes.
//               </p>
//               <p className="text-slate-400 leading-relaxed">
//                 Built as a pixel-perfect Swiggy clone using{" "}
//                 <span className="text-orange-400 font-semibold">React</span>,{" "}
//                 <span className="text-orange-400 font-semibold">Tailwind</span>
//                 , and the{" "}
//                 <span className="text-orange-400 font-semibold">
//                   Swiggy API
//                 </span>
//                 , this project showcases real-world frontend development at its
//                 finest.
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { num: "1000+", label: "Restaurants" },
//                 { num: "30 min", label: "Avg. Delivery" },
//                 { num: "50K+", label: "Happy Users" },
//                 { num: "4.8★", label: "App Rating" },
//               ].map((stat) => (
//                 <div
//                   key={stat.label}
//                   className="bg-[#1a1915] border border-slate-700/50 rounded-xl p-5 text-center"
//                 >
//                   <p className="text-2xl font-extrabold text-orange-400 mb-1">
//                     {stat.num}
//                   </p>
//                   <p className="text-slate-500 text-sm">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Features */}
//           <div className="mb-16">
//             <h2 className="text-3xl font-bold text-white mb-8 text-center">
//               Why Food Buddy?
//             </h2>
//             <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
//               {features.map((f) => (
//                 <div
//                   key={f.title}
//                   className="bg-[#1a1915] border border-slate-700/40 hover:border-orange-500/40 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/5 cursor-default"
//                 >
//                   <div className="text-3xl mb-3">{f.icon}</div>
//                   <h3 className="text-white font-semibold mb-2">{f.title}</h3>
//                   <p className="text-slate-500 text-sm leading-relaxed">
//                     {f.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Tech Stack */}
//           <div className="bg-[#1a1915] border border-slate-700/40 rounded-2xl p-8 text-center">
//             <h2 className="text-2xl font-bold text-white mb-2">
//               Built With ❤️ Using
//             </h2>
//             <p className="text-slate-500 text-sm mb-6">
//               Modern frontend technologies powering Food Buddy
//             </p>
//             <div className="flex flex-wrap justify-center gap-3">
//               {[
//                 "React 18",
//                 "Tailwind CSS",
//                 "React Router",
//                 "Redux Toolkit",
//                 "Swiggy API",
//                 "Parcel",
//               ].map((tech) => (
//                 <span
//                   key={tech}
//                   className="bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-medium px-4 py-1.5 rounded-full"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     );
//   }
// }

// export default About;