import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TableClients from "./TableClients";
import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.get("/greeting", (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("TableClients component", () => {
  it("renders table headers", () => {
    render(<TableClients />);
    expect(screen.getByText("Client's name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(
      screen.getByText("Points / month in last 3 months")
    ).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
  });
});

// An error occurred
