import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constant";
import { AppContext } from "../context/contextApi";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu, setMobileMenu } =
    useContext(AppContext);
  const navigate = useNavigate();
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  return (
    <div
      className={`${
        mobileMenu ? "translate-x-0 " : "translate-x-[-240px]"
      } customScroll md:block w-[240px] overflow-auto h-full py-4 bg-black absolute md:relative z-10  md:translate-x-0 transition-all`}
    >
      <div className="flex px-5 flex-col ">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                  setMobileMenu(false);
                }}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">Clone by Suraj Roy</div>
      </div>
    </div>
  );
};

export default LeftNav;
