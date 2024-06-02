import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Header from "../../components/layout/header/Header";

describe("Header", () => {
  it("renders the logo correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logo = screen.getByAltText("Logo");
    expect(logo).not.toBeNull();
    expect(logo.getAttribute("src")).toBe("logo.png");
  });

  it("renders the logo link correctly", () => {
    const logoLink = screen.queryByAltText("Logo");
    expect(logoLink).not.toBeNull();
    expect(logoLink.closest("a").getAttribute("href")).toBe("/");
  });

  it("renders the button correctly", () => {
    const button = screen.queryByText("Entrar");
    expect(button).not.toBeNull();
    expect(button.classList.contains("button")).toBe(true);
  });
});
