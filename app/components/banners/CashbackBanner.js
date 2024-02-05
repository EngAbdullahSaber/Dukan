import Image from "next/image";
import React from "react";

const CashbackBanner = ({ img, width, height }) => {
  return (
    <div className="mx-auto container py-3">
      <div className="cashback__banner w-full">
        <Image src={img} alt="banner" width={width} height={height} />
      </div>
    </div>
  );
};

export default CashbackBanner;
