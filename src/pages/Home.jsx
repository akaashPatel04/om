import { useEffect, useState } from "react";
import "../styles/pages/home.css";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { CgMouse } from "react-icons/cg";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("https://dummyjson.com/products");
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);
  return (
    <>
      <div className="hero">
        <p>
          Find <span>Amazing</span> products.
        </p>
        <h1>Om Electronics</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse className="mouseIcon" />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div id="container">
        {loading ? (
          <Loader />
        ) : (
          products &&
          products.length > 0 && (
            <>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </>
          )
        )}
      </div>
    </>
  );
};

export default Home;
