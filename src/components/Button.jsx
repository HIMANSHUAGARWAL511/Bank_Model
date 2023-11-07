import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 bg-blue-gradient font-poppins font-medium ${styles} tex-[18px] text-primary outline-none mt-5 rounded-[10px]  `}
  >
    Get Started
  </button>
);

export default Button;
