import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import CartProvider from "./utils/CartContext";
import { Provider } from "react-redux";

const stylecard = {
  backgroundColor: "#f0f0f0",
};
const Applayout = () => {
  return (
    // <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    // {/* </Provider> */}
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
// without cart content
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);

// with cart content
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CartProvider>
    <RouterProvider router={appRouter} />
  </CartProvider>,
);
