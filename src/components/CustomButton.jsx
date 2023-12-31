import React from "react";

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button type={btnType} className={`${styles} font-epilogue font-semibold tetx-[16px] leading-[26px] text-white min-h-[52px] hover:opacity-90 px-4 rounded-[10px]`} onClick={handleClick}>
      {title}
    </button>
  );
};

export default CustomButton;
