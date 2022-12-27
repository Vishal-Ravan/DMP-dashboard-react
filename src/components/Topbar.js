import React from "react";
import Dropdown from "react-dropdown";
import { BsFillPersonFill } from "react-icons/bs";
const Topbar = () => {
  const options = ["Publisher's Site 1", "two", "three"];
  const defaultOption = options[0];

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <Dropdown
            options={options}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
        <div className="topbar-right">
          <BsFillPersonFill />
        </div>
      </div>
    </>
  );
};

export default Topbar;
