import React from "react";

function Header(props) {
  return (
    <div className="flex justify-between  items-center mt-16 mb-14">
      <h1
        className={
          "font-bold mr-16 " + (props.helpingText ? "text-8xl" : "text-6xl")
        }
      >
        {props.heading}
      </h1>
      <p className="text-lg self-middle">{props.helpingText}</p>
    </div>
  );
}

export default Header;
