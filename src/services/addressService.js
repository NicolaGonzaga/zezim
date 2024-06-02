export const searchAddress = async (endereco) => {
    if (!endereco.trim()) {
        throw new Error("Por favor, digite seu endereço.");
    }

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ endereco }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });

    if (!response.ok) {
        throw new Error("Ocorreu um erro ao fazer a requisição para a API.");
    }

    const data = response.json();
    return data;
};