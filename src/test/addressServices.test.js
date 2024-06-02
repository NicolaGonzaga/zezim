import { searchAddress } from "../services/addressService";
import { vi, it, expect, describe } from "vitest";

describe("searchAddress", () => {
    it("should throw an error if the address is empty", async () => {
        await expect(searchAddress("")).rejects.toThrowError("Por favor, digite seu endereço.");
    });

    it("should fetch data from the API with a valid address", async () => {
        const mockResponse = {
            ok: true,
            json: () => Promise.resolve({ endereco: "Rua ABC", id: 101 })
        };

        const fetchMock = vi.spyOn(global, "fetch").mockResolvedValue(mockResponse);

        const result = await searchAddress("Rua ABC");
        expect(result).toEqual({ endereco: "Rua ABC", id: 101 });

        fetchMock.mockRestore();
    });

    it("should throw an error if the API request fails", async () => {
        const fetchMock = vi.spyOn(global, "fetch").mockResolvedValue({
            ok: false,
            json: () => Promise.resolve({}),
        });

        await expect(searchAddress("Rua ABC")).rejects.toThrowError("Ocorreu um erro ao fazer a requisição para a API.");

        fetchMock.mockRestore();
    });
});
