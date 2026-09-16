// import React from "react";
// import { render } from "@testing-library/react";
// import Contact from "../components/Contact";
// import "@testing-library/jest-dom";

// test("should load the contact page", () => {
//   render(<Contact />);
//   const heading = screen.getByRole("heading");

//   expect(heading).toBeInTheDocument();
// });
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";

test("should load the contact page", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
