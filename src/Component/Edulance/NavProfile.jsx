import React from "react";
import { IoNotifications } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavProfile = () => {
  return (
    <div className="profile">
      <div className="icons">
        <div className="icon-notify">
          <IoNotifications />
        </div>
        <div className="icon-cart">
          <FaShoppingCart />
        </div>
      </div>
      <div className="profile-logo">
        <div className="img">
          <img src="../Asset/0ca3ac3d979e4c22ef2efb16a6b3e0b0.png" alt="" />
        </div>
        <div className="text">
          <h3>Obi Ego</h3>
        </div>
        <div className="downIcon">
        <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
