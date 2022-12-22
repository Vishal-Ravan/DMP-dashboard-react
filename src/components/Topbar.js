import React from "react";
import Select from "react-select";
import { BsFillPersonFill } from "react-icons/bs";
const Topbar = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <Select options={options} />
        </div>
        <div className="topbar-right">
          <BsFillPersonFill />
        </div>
      </div>
    </>
  );
};

export default Topbar;
