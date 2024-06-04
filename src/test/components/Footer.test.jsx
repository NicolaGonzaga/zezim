import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../../components/Layout/Footer/Footer";

describe("Footer", () => {
  it("renders the footer correctly", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).not.toBeNull();
  });

  it("renders the copyright text correctly", () => {
    const copyright = screen.queryByText("© 2024 Zézim");
    expect(copyright).not.toBeNull();
  });
});
