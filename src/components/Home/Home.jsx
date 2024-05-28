import { useState } from "react";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
  const [address, setAddress] = useState("");

  return (
    <div className="home">
      <Header />
      <main>
        <section>
          <div className="content">
            <h1>Bebida rápida, gelada e no precinho? </h1>
            <h2>O Zézim entrega tudo.</h2>
            <input
              type="text"
              placeholder="Digite seu endereço"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
            />
            <button>Buscar Produtos</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
