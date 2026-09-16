// import { render } from "@testing-library/react";
// import Body from "../components/Body";
// import { json } from "../jest.config";
// import MOCK_DATA from "../__tests__/Mocks/rescardMock.json";
// import { act } from "react-dom/test-utils";
// import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });
// it("should rendefr the body", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>,
//     ),
//   );

//   const searchBtn = screen.getByRole("button", { name: "Search" });
//   console.log(searchBtn);
//   expect(searchBtn).toBeInTheDocument();
// });

import { render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import MOCK_DATA from "../__tests__/Mocks/rescardMock.json";

const MOCK_API_RESPONSE = {
  data: {
    cards: [MOCK_DATA],
  },
};

global.fetch = jest.fn(() => {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(MOCK_API_RESPONSE),
  });
});

it("should render the body", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>,
  );

  const searchBtn = await screen.findByRole("button", {
    name: "Search",
  });

  expect(searchBtn).toBeInTheDocument();
});