import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState , useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Animated Brand Logo as Main Attraction */}
        <Link to="/" className="flex items-center gap-3 group hover:opacity-95 transition-opacity">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-orange-400 to-red-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <img
              className="relative h-14 w-14 object-contain drop-shadow-xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
              src={LOGO_URL}
              alt="Food Buddy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tighter text-gray-900 leading-none drop-shadow-sm">
              FOOD<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">BUDDY</span>
            </h1>
            <span className="text-[0.65rem] sm:text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mt-0.5 group-hover:text-orange-400 transition-colors">
              Your Craving Partner
            </span>
          </div>
        </Link>

        {/* Desktop & Mobile Toggle */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-orange-50 hover:text-orange-500 sm:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className={`absolute inset-x-4 top-full z-40 mt-3 overflow-hidden rounded-3xl bg-white/95 p-6 shadow-2xl transition-all duration-300 sm:static sm:mt-0 sm:block sm:bg-transparent sm:p-0 sm:shadow-none ${
              menuOpen ? "max-h-96 opacity-100 border border-gray-100" : "max-h-0 opacity-0 sm:max-h-full sm:opacity-100"
            }`}
          >
            <ul className="flex flex-col gap-5 text-sm font-bold text-gray-700 sm:flex-row sm:items-center sm:gap-7">
              
              {/* Online Status Badge */}
              <li className="hidden sm:block">
                <span className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black tracking-wide border shadow-sm ${
                    onlineStatus ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"
                }`}>
                  <span className={`h-2.5 w-2.5 rounded-full animate-pulse ${onlineStatus ? "bg-green-500" : "bg-red-500"}`} />
                  {onlineStatus ? "ONLINE" : "OFFLINE"}
                </span>
              </li>

              {/* Core Links */}
              {[
                { name: "Home", path: "/", icon: "🏠" },
                { name: "About", path: "/about", icon: "✨" },
                { name: "Contact Us", path: "/contact", icon: "📞" },
                { name: "Grocery", path: "/grocery", icon: "🛒" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-[15px] text-gray-600 relative after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-orange-500 after:to-red-500 after:transition-all hover:after:w-full hover:text-orange-500 transition-colors"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}

              {/* Cart Button */}
              <li className="relative group">
                <Link to="/cart" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-orange-50 transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">🛒</span>
                  <span className="font-extrabold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full shadow-sm">
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                </Link>
              </li>

              {/* Login Button */}
              <button
                onClick={() => setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
                className="rounded-full bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-2.5 text-sm font-bold text-white shadow-md hover:from-orange-500 hover:to-red-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {btnNameReact}
              </button>

              {/* User Profile */}
              <li className="px-4 font-black text-gray-800 sm:px-0 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center border border-orange-200">
                  🧑
                </div>
                {loggedInUser}
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

