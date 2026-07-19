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
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../utils/Cartcontext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");

  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} alt="Food Logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/cart">
              Cart ({cartCount})
            </Link>
          </li>

          <button
            className="login-btn"
            onClick={() =>
              setBtnNameReact(
                btnNameReact === "login" ? "logout" : "login"
              )
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;