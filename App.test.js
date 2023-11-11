import { render, screen } from "@testing-library/react";
import App from "./src/App";

test("should render hello world", () => {
  render(<App />);
  const element = screen.getByText(/hello world/i);
  expect(element).toBeInTheDocument();
});
