import MainVisual from "./MainVisual";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { useSearchParams } from "react-router-dom";
import db from '../db.json'
console.log(db.products)

const ProductAll = () => {
  // const productList = db.products
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log(searchQuery)

    const products = db.products
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    console.log(filteredProducts)
    
    setProductList(filteredProducts);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="ProductAll">
      <MainVisual />
      <div className="ProductAllInner">
        {productList.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductAll;
