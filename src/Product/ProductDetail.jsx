import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import "../styles/pages/productDetail.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { toast } from "react-toastify";
import { Box, Img } from "@chakra-ui/react";

const ProductDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  console.log(id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Something went wrong");
      }
    };
    fetchProduct();
  }, []);
  console.log(product);
  return (
    <>
      <div className="ProductDetails">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div>
              <Carousel
                infiniteLoop
                autoPlay
                interval={"2000"}
                showArrows={false}
                showStatus={false}
              >
                {product.images.map((img) => (
                  <Box
                    mx={"auto"}
                    h={["200px", "320px"]}
                    w={["100%", "100%", "75%"]}
                  >
                    <Img
                      h={"100%"}
                      objectFit={"contain"}
                      src={img}
                      alt="product"
                    />
                  </Box>
                ))}
              </Carousel>
            </div>
            <div>
              <div className="detailsBlock-1">
                <h2>{product.title}</h2>
              </div>
              <div className="detailsBlock-2">
                <p>
                  (<b>Brand</b>- {product.brand})
                </p>
              </div>
              <p>
                Stock:{" "}
                <b
                  className={
                    product.stock < 1
                      ? "redColor"
                      : product.stock < 10
                      ? "yellowColor"
                      : "greenColor"
                  }
                >
                  {product.stock < 1 ? "OutOfStock" : product.stock}
                </b>
              </p>
              <div className="detailsBlock-3">
                <h1>{`₹ ${product.price}`}</h1>
              </div>
              <div className="detailsBlock-4">
                <b>Description</b> : <p>{product.description}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
