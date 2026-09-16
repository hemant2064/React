import Restcard from "../components/Restcard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../__tests__/Mocks/rescardMock.json";

it("should render restcard components with props data", () => {
  render(<Restcard resData={MOCK_DATA} />);
  const name = screen.getByText("Shree Anandhaas");
  expect(name).toBeInTheDocument();
});
