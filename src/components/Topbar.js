import React from "react";
import Dropdown from "react-dropdown";
import { BsFillPersonFill } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
const Topbar = () => {
  const options = ["Publisher's Site 1", "two", "three"];
  const defaultOption = options[0];

  const handlesubmit = () => {
    localStorage.clear();
    window.location.reload();
  };
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
          <div class="dropdown">
            <button class="dropbtn">
              <BsFillPersonFill />
            </button>
            <div class="dropdown-content">
              <Link>
                {" "}
                <MdPassword /> Forgot Password
              </Link>
              <Link onClick={handlesubmit}>
                {" "}
                <ImExit /> Sign Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
