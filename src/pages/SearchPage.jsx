import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import "../styles/pages/searchPage.css";
import "../styles/components/searchbox.css";
import { FaSearch } from "react-icons/fa";

import { Heading, VStack } from "@chakra-ui/react";

const categories = [
  "Televisions",
  "SmartPhones",
  "Laptops",
  "Machines",
  "Sounds",
  "Camera",
  "Remotes",
  "Other",
];

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchingOn, setSearchingOn] = useState(0);

  useEffect(() => {
    const searchQuery = `https://dummyjson.com/products/search?q=${searchTerm}`;

    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(searchQuery);
        setProducts(data.products);

        const catogoryResults = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        setCategories(catogoryResults.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [searchingOn]);

  const fetchCategoryProducts = async (category) => {
    const searchCategory = `https://dummyjson.com/products/category/${category}`;
    console.log(category);
    try {
      const { data } = await axios.get(searchCategory);
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="searchPage">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="searchBox">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search a Product"
            />
            <FaSearch onClick={() => setSearchingOn(searchingOn + 1)} />
          </div>
          <div className="main">
            <div className="filterPage">
              <div className="category">
                <p className="categoryHeading">Category</p>
                <ul className="categoryBox">
                  {categories.map((category) => (
                    <li
                      className="category-link"
                      id={`${category} ? tomato : gray`}
                      key={category}
                      onClick={() => {
                        fetchCategoryProducts(category);
                      }}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h2 className="searchHeading">Products</h2>
            <div className="searchProductContainer">
              {products && products.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <VStack h={"45vh"} justifyContent={"center"}>
                  <Heading>NO Products Found 🔎</Heading>
                </VStack>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
