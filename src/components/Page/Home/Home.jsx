import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [endereco, setEndereco] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!endereco.trim()) {
      setErro("Por favor, digite seu endereço.");
      return;
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ endereco }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setEndereco(data);
        navigate("/products", { state: { endereco: data.endereco } });
      })
      .catch((error) => {
        console.error(
          "Ocorreu um erro ao fazer a requisição para a API:",
          error
        );
      });
  };

  const handleInputChange = (event) => {
    setEndereco(event.target.value);
    if (event.target.value.trim()) {
      setErro("");
    }
  };

  return (
    <main>
      <div className="hero">
        <h1>Bebida rápida, gelada e no precinho? </h1>
        <h2>O Zézim entrega tudo.</h2>
        <div className="content">
          <input
            className="form-control"
            type="text"
            placeholder="Digite seu endereço"
            value={endereco}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Buscar Produtos</button>
          {erro && <p className="error">{erro}</p>}
        </div>
      </div>
    </main>
  );
}

export default Home;
