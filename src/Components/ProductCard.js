import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  //productDetail페이지로 이동
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/Product/${item.id}`);
  };
  return (
    <div className="ProductCard" onClick={goToDetail}>
      <img src={item?.img} alt="thumNail" />
      <div className="TextWrap">
        <h3 className="SubTitle">
          Conscious choice <span>{item?.tag.join(" & ")}</span>
        </h3>
        <h2 className="Title">{item?.title}</h2>
        <p className="Price">
          ₩&nbsp;
          {item?.price?.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            // maximumFractionDigits: 3,
          })}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
