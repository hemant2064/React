// import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Cart from "./components/Cart";
// import Error from "./components/Error";
// import RestaurantMenu from "./components/RestaurantMenu";
// import CartProvider from "./utils/CartContext";
// import { Provider } from "react-redux";
// import Login from "./components/Login";

// const stylecard = {
//   backgroundColor: "#f0f0f0",
// };
// const Applayout = () => {
//   return (
//     // <Provider store={appStore}>
//       <div className="app">
//         <Header />
//         <Outlet />
//       </div>
//     // {/* </Provider> */}
//   );
// };
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Applayout />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//       {
//         path: "/restaurants/:resId",
//         element: <RestaurantMenu />,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);
// // without cart content
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<RouterProvider router={appRouter} />);

// // with cart content
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <CartProvider>
//     <RouterProvider router={appRouter} />
//   </CartProvider>,
// );

import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";

import CartProvider from "./utils/CartContext";
import appStore from "./utils/Appstore";
import Signup from "./components/signUp";
import { Provider } from "react-redux";

import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import Signup from "./components/signUp";
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>

  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

     {
  path: "/cart",
  element: (
    <ProtectedRoute>
      <Cart />
    </ProtectedRoute>
  ),
},
      {
  path: "/restaurants/:resId",
  element: (
    <ProtectedRoute>
      <RestaurantMenu />
    </ProtectedRoute>
  ),
},
    ],

    errorElement: <Error />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={appStore}>
    <CartProvider>
      <RouterProvider router={appRouter} />
    </CartProvider>
  </Provider>,
);
