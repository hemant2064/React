// import { LOGO_URL } from "../utils/constants";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [btnNameReact, setBtnNameReact] = useState("login");
//   return (
//     <div className="header">
//       <div>
//         <img className="logo" src={LOGO_URL} alt="Food Logo" />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about"> About </Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li>
//             <Link to="/cart">Cart</Link>
//           </li>
//           <button
//             className="login-btn"
//             onClick={() => {
//               btnNameReact === "login"
//                 ? setBtnNameReact("logout")
//                 : setBtnNameReact("login");
//             }}
//           >
//             {btnNameReact}
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default Header;
//after cart diplay
// import { LOGO_URL } from "../utils/constants";
// import { useState, useContext } from "react";
// import { CartContext } from "../utils/CartContext";
// import { Link } from "react-router-dom";
// // import { useSelector } from "react-redux";

// const Header = () => {
//   const [btnNameReact, setBtnNameReact] = useState("login");

//   // const { cart } = useContext(CartContext);

//   // const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
//   // const cartItems = useSelector((store) => store.cart.items);

//   return (
//     <div className="flex justify-between  shadow-lg m-1 bg-orange-200 border rounded-2xl p-2">
//       <div>
//         <img
//           className="w-46 border rounded-2xl"
//           src={LOGO_URL}
//           alt="Food Logo"
//         />
//       </div>

//       <div className=" flex flex-row gap-10 m-5 p-6">
//         <ul className="flex items-center gap-10">
//           <li className="">
//             <Link to="/">Home</Link>
//           </li>

//           <li>
//             <Link to="/about">About</Link>
//           </li>

//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>

//           {/* <li>
//             <Link to="/cart">Cart ({cartCount.length})</Link>
//           </li> */}
//           <li>
//             <Link to="/cart">Cart </Link>
//           </li>

//           <button
//             className="px-4 py-2 border rounded"
//             onClick={() =>
//               setBtnNameReact(btnNameReact === "login" ? "logout" : "login")
//             }
//           >
//             {btnNameReact}
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;
// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { LOGO_URL } from "../utils/constants";
// import { CartContext } from "../utils/CartContext";

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const { cart } = useContext(CartContext);

//   // Total number of food items in cart
//   // Example: Pizza × 2 + Burger × 1 = Cart (3)
//   const cartCount = cart.reduce(
//     (total, item) => total + (item.quantity || 0),
//     0,
//   );

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
//       <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-3 sm:h-20 sm:px-5 lg:px-8">
//         {/* Logo */}
//         <Link to="/" onClick={closeMenu} className="flex items-center">
//           <div className="h-14 w-28 overflow-hidden sm:h-16 sm:w-32 md:w-36">
//             <img
//               src={LOGO_URL}
//               alt="FoodRush"
//               className="h-full w-full object-contain"
//             />
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:block">
//           <ul className="flex items-center gap-5 lg:gap-8">
//             <li>
//               <Link
//                 to="/"
//                 className="font-medium text-gray-700 transition hover:text-orange-500"
//               >
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/about"
//                 className="font-medium text-gray-700 transition hover:text-orange-500"
//               >
//                 About
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/contact"
//                 className="font-medium text-gray-700 transition hover:text-orange-500"
//               >
//                 Contact
//               </Link>
//             </li>

//             {/* Cart */}
//             <li>
//               <Link
//                 to="/cart"
//                 className="font-semibold text-gray-800 transition hover:text-orange-500"
//               >
//                 Cart ({cartCount})
//               </Link>
//             </li>

//             {/* Login */}
//             <li>
//               <button
//                 type="button"
//                 onClick={() => setIsLoggedIn((prev) => !prev)}
//                 className="rounded-lg border border-gray-300 px-4 py-2 font-medium transition hover:border-orange-400 hover:bg-orange-50"
//               >
//                 {isLoggedIn ? "Logout" : "Login"}
//               </button>
//             </li>
//           </ul>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           aria-label="Toggle navigation"
//           onClick={() => setMenuOpen((prev) => !prev)}
//           className="rounded-lg border border-gray-300 p-2 text-xl text-gray-700 hover:bg-gray-100 md:hidden"
//         >
//           {menuOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {menuOpen && (
//         <nav className="border-t border-gray-200 bg-white px-3 py-3 shadow-md md:hidden">
//           <ul className="mx-auto flex max-w-7xl flex-col gap-1">
//             <li>
//               <Link
//                 to="/"
//                 onClick={closeMenu}
//                 className="block rounded-lg px-4 py-3 font-medium hover:bg-orange-50 hover:text-orange-600"
//               >
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/about"
//                 onClick={closeMenu}
//                 className="block rounded-lg px-4 py-3 font-medium hover:bg-orange-50 hover:text-orange-600"
//               >
//                 About
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/contact"
//                 onClick={closeMenu}
//                 className="block rounded-lg px-4 py-3 font-medium hover:bg-orange-50 hover:text-orange-600"
//               >
//                 Contact
//               </Link>
//             </li>

//             {/* Mobile Cart */}
//             <li>
//               <Link
//                 to="/cart"
//                 onClick={closeMenu}
//                 className="flex items-center justify-between rounded-lg px-4 py-3 font-semibold hover:bg-orange-50 hover:text-orange-600"
//               >
//                 <span>Cart</span>

//                 <span className="rounded-full bg-orange-500 px-3 py-1 text-sm text-white">
//                   {cartCount}
//                 </span>
//               </Link>
//             </li>

//             {/* Mobile Login */}
//             <li className="pt-1">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setIsLoggedIn((prev) => !prev);
//                   closeMenu();
//                 }}
//                 className="w-full rounded-lg border border-gray-300 px-4 py-3 text-left font-medium hover:bg-gray-100"
//               >
//                 {isLoggedIn ? "Logout" : "Login"}
//               </button>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;
 

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LOGO_URL } from "../utils/constants";
import { CartContext } from "../utils/CartContext";
import { logout } from "../utils/userSlice";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useContext(CartContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get authentication information from Redux
  const { user, isAuthenticated } = useSelector(
    (store) => store.user
  );

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogin = () => {
    closeMenu();
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(logout());
    closeMenu();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-3 sm:h-20 sm:px-5 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center"
        >
          <div className="h-14 w-28 overflow-hidden sm:h-16 sm:w-32 md:w-36">
            <img
              src={LOGO_URL}
              alt="FoodRush"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-5 lg:gap-8">

            <li>
              <Link
                to="/"
                className="font-medium text-gray-700 transition hover:text-orange-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="font-medium text-gray-700 transition hover:text-orange-500"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="font-medium text-gray-700 transition hover:text-orange-500"
              >
                Contact
              </Link>
            </li>

            {/* Cart */}
            <li>
              <Link
                to="/cart"
                className="font-semibold text-gray-800 transition hover:text-orange-500"
              >
                Cart ({cartCount})
              </Link>
            </li>

            {/* Authentication */}
            <li>
              {isAuthenticated ? (
                <div className="flex items-center gap-3">

                  <span className="font-medium text-gray-700">
                    Hi, {user?.name}
                  </span>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-lg border border-gray-300 px-4 py-2 font-medium transition hover:border-red-400 hover:bg-red-50 hover:text-red-600"
                  >
                    Logout
                  </button>

                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleLogin}
                  className="rounded-lg border border-gray-300 px-4 py-2 font-medium transition hover:border-orange-400 hover:bg-orange-50"
                >
                  Login
                </button>
              )}
            </li>

          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-lg border border-gray-300 p-2 text-xl text-gray-700 hover:bg-gray-100 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="border-t border-gray-200 bg-white px-3 py-3 shadow-md md:hidden">

          <ul className="mx-auto flex max-w-7xl flex-col gap-1">

            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 font-medium hover:bg-orange-50 hover:text-orange-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 font-medium hover:bg-orange-50 hover:text-orange-600"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 font-medium hover:bg-orange-50 hover:text-orange-600"
              >
                Contact
              </Link>
            </li>

            {/* Mobile Cart */}
            <li>
              <Link
                to="/cart"
                onClick={closeMenu}
                className="flex items-center justify-between rounded-lg px-4 py-3 font-semibold hover:bg-orange-50 hover:text-orange-600"
              >
                <span>Cart</span>

                <span className="rounded-full bg-orange-500 px-3 py-1 text-sm text-white">
                  {cartCount}
                </span>
              </Link>
            </li>

            {/* Mobile Authentication */}
            <li className="pt-1">

              {isAuthenticated ? (
                <div className="flex flex-col gap-2">

                  <div className="rounded-lg bg-orange-50 px-4 py-3 font-medium text-orange-600">
                    Hi, {user?.name}
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-left font-medium hover:bg-red-50 hover:text-red-600"
                  >
                    Logout
                  </button>

                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleLogin}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-left font-medium hover:bg-orange-50 hover:text-orange-600"
                >
                  Login
                </button>
              )}

            </li>

          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;