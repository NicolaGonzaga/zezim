import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../../components/Page/Home/Home";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Home", () => {
  it("should render the title and subtitle", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const title = screen.getByRole("heading", { name: /Bebida rápida/i });
    const subtitle = screen.getByRole("heading", {
      name: /O Zézim entrega tudo/i,
    });

    expect(title).not.toBeNull();
    expect(subtitle).not.toBeNull();
  });

  it("should render the input field and search button", () => {
    const input = screen.getByPlaceholderText("Digite seu endereço");
    const button = screen.getByRole("button", { name: /Buscar Produtos/i });

    expect(input).not.toBeNull();
    expect(button).not.toBeNull();
  });

  it("shows an error message when the input is empty and the button is clicked", () => {
    const button = screen.getByRole("button", { name: /Buscar Produtos/i });
    fireEvent.click(button);
    expect(screen.getByText("Por favor, digite seu endereço.")).not.toBeNull();
  });

  it("clears the error message when typing in the input", () => {
    const input = screen.getByPlaceholderText("Digite seu endereço");
    const button = screen.getByRole("button", { name: /Buscar Produtos/i });

    fireEvent.click(button);
    expect(screen.getByText("Por favor, digite seu endereço.")).not.toBeNull();

    fireEvent.change(input, { target: { value: "Rua ABC" } });
    expect(screen.queryByText("Por favor, digite seu endereço.")).toBeNull();
  });

  it("navigates to /products on successful search", async () => {
    const input = screen.getByPlaceholderText("Digite seu endereço");
    fireEvent.change(input, { target: { value: "Rua XYZ" } });

    const button = screen.getByRole("button", { name: /Buscar Produtos/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/products", {
        state: { endereco: "Rua XYZ" },
      });
    });
  });
});
