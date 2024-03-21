import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  let [product, setProduct] = useState(null);
  let { id } = useParams();
  const getproductDetail = async () => {
    let url = `https://my-json-server.typicode.com/song-jiae/marditest/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getproductDetail();
  }, []);
  return (
    <div className="ProductDetail">
      <div className="DetailInner">
        <img src={product?.img} alt="image" />
        <form className="DetailContent">
          <h2 className="Title">{product?.title}</h2>
          <p className="Price">
            ₩&nbsp;
            {product?.price?.toLocaleString(undefined, {
              minimumFractionDigits: 0,
            })}
          </p>
          <select name="" id="">
            <option value="-1">사이즈 선택</option>
            {product?.size.map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <br />
          <button>장바구니 추가</button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
