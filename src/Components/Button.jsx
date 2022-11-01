import React from "react";

const Button = ({ title, callback, disabled}) => {
  return (
    <>
      <button
        onClick={callback}
        style={{
          borderRadius: "5px",
           borderColor: disabled ? "red" : "green",
           margin: "0px 5px"
        }}
      >{title}
      </button>
    </>
  )
}

export default Button;
