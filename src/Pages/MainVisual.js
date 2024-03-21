import React from "react";

const MainVisual = () => {
  return (
    <div className="MainVisual">
      <div
        className="slide01"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/MainVisual01.png)`,
        }}
      ></div>
    </div>
  );
};

export default MainVisual;
