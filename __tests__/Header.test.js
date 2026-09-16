import react from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/Appstore";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "../utils/CartContext";
import "@testing-library/jest-dom";
import { login } from "../utils/userSlice";

it("should load header with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <CartProvider>
          <Header />
        </CartProvider>
      </Provider>
    </BrowserRouter>,
  );

  //OPTION 1
  //   const loginButton = screen.getByRole("button", {
  //     name: /login/i,
  //   });
  //OPTION 2
  //   const loginButton = screen.getByText(/login/i);
  // expect(loginButton).toBeInTheDocument();

  const cartItems = screen.getByText(/Cart\s*\(\s*0\s*\)/i);
  expect(cartItems).toBeInTheDocument();
});

it("should logout and redirect to login page", () => {
  // Make Redux think the user is logged in
  appStore.dispatch(
    login({
      user: {
        name: "Test User",
        email: "test@gmail.com",
      },
      token: "fake-token",
    }),
  );

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <CartProvider>
          <Header />
        </CartProvider>
      </Provider>
    </BrowserRouter>,
  );

  // Login should NOT be shown initially
  expect(screen.queryByText(/login/i)).not.toBeInTheDocument();

  // Logout should be shown
  const logoutButton = screen.getByText(/logout/i);

  expect(logoutButton).toBeInTheDocument();

  // Click Logout
  fireEvent.click(logoutButton);

  // Login should appear after logout
  const loginButton = screen.getByText(/login/i);

  expect(loginButton).toBeInTheDocument();
});
