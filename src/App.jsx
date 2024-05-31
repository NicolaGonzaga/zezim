import { Route, Routes } from "react-router-dom";
import Home from "./components/Page/Home/Home";
import Products from "./components/Page/Products/Products";
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
