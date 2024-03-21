import React, { useState, useEffect } from "react";
import { useParams } from "react-router"; // useParams 훅을 가져옴
import db from '../db.json'; // db.json 파일을 가져옴

const ProductDetail = () => {
  // 상품 정보를 상태로 관리
  const [product, setProduct] = useState(null);
  // URL 파라미터에서 상품 ID를 가져옴
  const { id } = useParams();

  // 컴포넌트가 마운트되거나 URL 파라미터가 변경될 때마다 실행
  useEffect(() => {
    // URL 파라미터로 받은 상품 ID에 해당하는 상품을 db.json에서 찾아 설정
    const selectedProduct = db.products.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]); // id가 변경될 때마다 useEffect가 실행

  // 상품 정보가 없을 경우 로딩 메시지를 출력
  if (!product) {
    return <div>Loading...</div>;
  }

  // 상품 정보가 있을 경우 상품 상세 정보를 출력
  return (
    <div className="ProductDetail">
      <div className="DetailInner">
        {/* 상품 이미지를 출력 */}
        <img src={product.img} alt="image" />
        <form className="DetailContent">
          {/* 상품 제목을 출력 */}
          <h2 className="Title">{product.title}</h2>
          {/* 상품 가격을 출력 */}
          <p className="Price">
            ₩&nbsp;
            {/* 상품 가격을 toLocaleString 형식으로 표시 */}
            {product.price.toLocaleString(undefined, {
              minimumFractionDigits: 0,
            })}
          </p>
          {/* 셀렉트 박스 */}
          <select name="size" id="size">
            <option value="-1">사이즈 선택</option>
            {product.size.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <br />
          {/* 장바구니 추가 버튼을 출력 */}
          <p>장바구니 추가</p>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
