export async function fetchProducts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                body: JSON.stringify(getProductsPayload()),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

function getProductsPayload() {
    return [
        {
            title: "Brahma 350ml",
            imageUrl:
                "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00010266_b3db367a-c484-49e1-bd70-e89ea677a394.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
            price: "3,39",
            description: "Brahma Duplo Malte ",
        },
        {
            title: "Corona 330ml",
            imageUrl:
                "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00009870_5684b7f3-d3ee-4e4b-8a29-a19d27e1d704.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
            price: "6,89",
            description: "Corona gelada Extra",
        },
        {
            title: "Skol 300ml",
            imageUrl:
                "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00008725_93914a79-556e-411b-bc91-b2abd08d0b02.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
            price: "2,49",
            description: "Apenas o líquido",
        },
        {
            title: "Skol 269ml",
            imageUrl:
                "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00008502_44662ba8-3132-4791-9326-040e2a251884.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
            price: "2,89",
            description: "Cerveja gelada lata",
        },
        {
            title: "Pepsi 2L",
            imageUrl:
                "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00008885_fab0ed2c-8a92-4ba6-84b5-17899df39542.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
            price: "7,79",
            description: "Pepsi grande família",
        },
        {
            title: "Spaten 350ml",
            imageUrl:
                "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00012884_ba3d68e1-2657-47f9-92fa-8265af7ea630.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
            price: "4,39",
            description: "Cerveja gringa",
        },
        {
            title: "Budweiser 269ml",
            imageUrl:
                "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00008577_8944f101-1f65-4ee7-8a1f-cfcb8e3afb0c.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
            price: "2,89",
            description: "Cerveja aguadinha",
        },
        {
            title: "Guaraná Antarctica",
            imageUrl:
                "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00008884_d47bd359-373f-4ef3-b254-dbce8bbe9f40.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
            price: "8,99",
            description: "Refrigerante família",
        },
        {
            title: "Antarctica Zero 269ml",
            imageUrl:
                "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00008527_92132f76-a5c9-4039-a425-00493a5bed7f.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
            price: "2,89",
            description: "Cerveja filtrada",
        },
        {
            title: "Original 350ml",
            imageUrl:
                "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00009746_a473285e-0edf-4073-842f-2930cb35a570.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
            price: "4,49",
            description: "Cervejinha tradicional",
        },
    ];
}
