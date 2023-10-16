import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

const NavItem = ({ item }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "border-b-2 border-b-[#560E26] text-xl font-medium max-[799px]:hidden"
          : "text-[#560E26] leading-normal text-xl font-medium max-[799px]:hidden"
      )}
    >
      {item.label}
    </Link>
  );
};

export default NavItem;
