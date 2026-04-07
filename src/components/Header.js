// import { Link } from "react-router-dom";
// import { LOGO_URL } from "../utils/constants";
// import { useState} from "react"; 
// import useOnlineStatus from "../utils/useOnlineStatus";


// export const Header = () => {


//   const[btnNameReact ,setBtnNameReact] = useState("Login");
//    const onlineStatus= useOnlineStatus();
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src={LOGO_URL}
//           alt="logo"
//         />
//          <h3>Hungry Foods</h3>
//       </div>
//       <div className="nav-items">
//         <ul>
//          <li className={`status-badge ${onlineStatus ? "online" : "offline"}`}>
//   {onlineStatus ? "Online" : "Offline"}
// </li>
// <li>
//             <Link to="/">Home</Link>
//             </li>
//           <li>
//             <Link to= "/about">About Us</Link>
//             </li>
//           <li>
//             <Link to= "/contact">Contact Us</Link>
//             </li>
//             <li>
//             <Link to= "/grocery">Grocery</Link>
//             </li>

//           <li>Cart</li>
//           <button className="login" 
//           onClick={() =>{
//             btnNameReact === "Login"
//              ? setBtnNameReact("Logout")
//              : setBtnNameReact("Login");

//             console.log(btnNameReact);
//           }}
          
//           >
//             {btnNameReact}
//             </button>
//         </ul>
//       </div>
//     </div>
//   );
// };

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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            className="h-12 w-12 object-contain group-hover:scale-105 transition-transform"
            src={LOGO_URL}
            alt="Hungry Foods"
          />
          <h1 className="text-xl font-bold tracking-wide text-gray-800">
            Hungry<span className="text-orange-500">Foods</span>
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 sm:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>

          <nav
            className={`absolute inset-x-4 top-full z-40 mt-2 overflow-hidden rounded-3xl bg-white/95 p-5 shadow-xl transition-all duration-300 sm:static sm:mt-0 sm:block sm:bg-transparent sm:p-0 sm:shadow-none ${
              menuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 sm:max-h-full sm:opacity-100"
            }`}
          >
            <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700 sm:flex-row sm:items-center sm:gap-8">

              <li className="hidden sm:block">
                <span
                  className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                    onlineStatus
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      onlineStatus ? "bg-green-600" : "bg-red-600"
                    }`}
                  />
                  {onlineStatus ? "Online" : "Offline"}
                </span>
              </li>

              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Grocery", path: "/grocery" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              <li className="relative cursor-pointer hover:text-orange-500 font-bold">
                <Link to="/cart" onClick={() => setMenuOpen(false)}>
                  Cart🛒 -({cartItems.length} items)
                </Link>
              </li>

              <button
                onClick={() =>
                  setBtnNameReact(
                    btnNameReact === "Login" ? "Logout" : "Login"
                  )
                }
                className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-600 hover:shadow-lg transition-all duration-200"
              >
                {btnNameReact}
              </button>

              <li className="px-4 font-bold text-left text-gray-800 sm:px-0">
                {loggedInUser}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


