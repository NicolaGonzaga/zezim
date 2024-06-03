import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchAddress } from "../../../services/addressService";
import "./Home.css";

function Home() {
  const [endereco, setEndereco] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!endereco.trim()) {
      setErro("Por favor, digite seu endereço.");
      return;
    }

    try {
      const data = await searchAddress(endereco);
      setEndereco(data);
      navigate("/products", { state: { endereco: data.endereco } });
    } catch (error) {
      setErro(error.message);
    }
  };

  const handleInputChange = (event) => {
    setEndereco(event.target.value);
    if (event.target.value.trim() && erro) {
      setErro("");
    }
  };

  return (
    <main>
      <div className="container">
        <h1>Bebida rápida, gelada e no precinho?</h1>
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
