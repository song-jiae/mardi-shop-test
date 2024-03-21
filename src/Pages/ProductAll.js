import MainVisual from "./MainVisual"; // MainVisual 컴포넌트를 가져옵니다.
import React, { useEffect, useState } from "react"; // React와 관련된 필수 모듈을 가져옵니다.
import ProductCard from "../Components/ProductCard"; // ProductCard 컴포넌트를 가져옵니다.
import { useSearchParams } from "react-router-dom"; // useSearchParams 훅을 가져옵니다.
import db from '../db.json'; // db.json 파일을 가져옵니다.

const ProductAll = () => {
  // productList 상태와 setProductList 함수를 useState 훅을 사용하여 정의합니다.
  const [productList, setProductList] = useState([]);
  // URL 쿼리 파라미터를 다루기 위해 useSearchParams 훅을 사용합니다.
  const [query, setQuery] = useSearchParams();

  // 제품 리스트를 가져오는 비동기 함수입니다.
  const getProducts = async () => {
    // 검색 쿼리를 가져옵니다. 없으면 빈 문자열로 설정됩니다.
    let searchQuery = query.get("q") || "";
    console.log(searchQuery);

    // db.json 파일에서 모든 제품을 가져옵니다.
    const products = db.products;
    // 검색 쿼리를 포함하는 제품들만 필터링합니다.
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
    console.log(filteredProducts);

    // 필터링된 제품 리스트를 상태에 설정합니다.
    setProductList(filteredProducts);
  };

  // 컴포넌트가 마운트되거나 URL 쿼리 파라미터가 변경될 때마다 실행되는 효과입니다.
  useEffect(() => {
    // 제품 리스트를 가져오는 함수를 호출합니다.
    getProducts();
  }, [query]); // query 값이 변경될 때마다 useEffect가 실행됩니다.

  // 제품 리스트를 렌더링합니다.
  return (
    <div className="ProductAll">
      {/* 메인 비주얼 컴포넌트를 렌더링합니다. */}
      <MainVisual />
      <div className="ProductAllInner">
        {/* productList에 있는 각 제품에 대해 ProductCard 컴포넌트를 렌더링합니다. */}
        {productList.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductAll;
