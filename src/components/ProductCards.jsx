import { useEffect, useState } from "react";
import { PRODUCT_API } from "../constant/apiConstant";
import axios from "axios";
import "../css/ProductCards.css"

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState([])
  const [filteredProducts, setFilteredProducts] = useState("")

  useEffect(() => {
    axios
      .get(PRODUCT_API)
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response?.data)
        console.log(response.data, "<====response.data");
      })
      .catch((error) => {
        console.error(`Error in fetching`, error);
      });
  }, []);

  useEffect(() => {
    if (typeof searchText === "string" && searchText.trim() === "") {
      setFilteredProducts(products); // Show all products when searchText is empty
    }
  }, [searchText, products]);
  const imageSize = { width: "150px", height: "150px" };

  const handlesearch = () => {
    if (typeof searchText === "string") {
      const filteredData = products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filteredData)
      console.log("filteredData", filteredData)
    }
  }
  return (
    <>
      <input type="text"

        className="search-input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handlesearch}>Search</button>

      <div className="cardWrapper">

        {filteredProducts.length === 0 ? (<h1>No Products Found</h1>) : (
          filteredProducts?.map((product, index) => {
            return (
              <div key={index} className="mainCard">
                <img src={product.image} alt="" style={imageSize} />
                <h2>{product.title}</h2>
                <h4>{product?.price}</h4>
                <div>
                  <span>{product?.rating.rate}</span>
                </div>
              </div>
            )
          })
        )}

        {
          // products?.map((product, index) => (
          //   <div key={index} className="mainCard">
          //     <img src={product.image} alt="" style={imageSize} />
          //     <h2>{product.title}</h2>
          //     <h4>{product?.proce}</h4>
          //     <div>
          //       <span>{product?.rating.rate}</span>
          //     </div>
          //   </div>

          // ))
        }
      </div>
    </>
  );
};
export default ProductCards;