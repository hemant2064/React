import { sum } from "../components/sum";
test("should first calculate two numbers", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
