import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosRemove, IoIosAdd } from "react-icons/io";
import { fetchProducts } from "./../../../services/productsService";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const endereco = location.state?.endereco;

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      {endereco && <p className="endereco">Endereço: {endereco}</p>}
      <div className="products-container">
        {Object.keys(products).map((key) => {
          if (key !== "id") {
            const item = products[key];
            return (
              <div key={key}>
                <div className="card">
                  <h6>{item.title}</h6>
                  <div className="container-icon">
                    <IoIosRemove />
                    <img src={item.imageUrl} alt={item.title} />
                    <IoIosAdd />
                  </div>
                  <p>R${item.price}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}

export default Products;
