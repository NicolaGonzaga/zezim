import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
