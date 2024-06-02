import { fetchProducts } from "../services/productsService";
import { vi, it, expect, describe } from "vitest";

describe("fetchProducts", () => {
    it("should fetch data from the API with a valid products list", async () => {
        const mockResponse = {
            ok: true,
            json: () => Promise.resolve({
                "title": "Brahma 350ml",
                "imageUrl":
                    "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00010266_b3db367a-c484-49e1-bd70-e89ea677a394.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
                "price": "3,39",
                "description": "Brahma Duplo Malte ",
            })
        };

        const fetchMock = vi.spyOn(global, "fetch").mockResolvedValue(mockResponse);

        const result = await fetchProducts("Rua ABC");
        expect(result).toEqual({
            "title": "Brahma 350ml",
            "imageUrl":
                "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00010266_b3db367a-c484-49e1-bd70-e89ea677a394.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
            "price": "3,39",
            "description": "Brahma Duplo Malte ",
        }, { id: 101 });

        fetchMock.mockRestore();
    });
});
