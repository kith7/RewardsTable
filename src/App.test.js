import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders clients react h1", () => {
    render(<App />);
    const linkElement = screen.getByText(/clients' rewards table/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("displays the table component", () => {
    render(<App />);
    const tableComponent = screen.getByText(/Client's name/i);
    expect(tableComponent).toBeInTheDocument();
  });
});
