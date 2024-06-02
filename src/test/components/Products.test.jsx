import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Products from "../../components/Page/Products/Products";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Products", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    );
  });
});
