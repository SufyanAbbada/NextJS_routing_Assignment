import React from "react";

function Header(props) {
  return (
    <div className="flex justify-between  items-center my-14">
      <h1 className="text-7xl font-bold mr-16">{props.heading}</h1>
      <p className="text-lg self-middle">{props.helpingText}</p>
    </div>
  );
}

export default Header;
