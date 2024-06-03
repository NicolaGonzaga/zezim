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

  it('renders the "Voltar ao topo" link correctly', () => {
    const topLink = screen.queryByText("Voltar ao topo");
    expect(topLink).not.toBeNull();
    expect(topLink.closest("a").getAttribute("href")).toBe("#");
  });

  it("renders the copyright text correctly", () => {
    const copyright = screen.queryByText("© 2024 Zézim");
    expect(copyright).not.toBeNull();
  });
});
