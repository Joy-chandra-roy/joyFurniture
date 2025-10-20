import React from "react";
import { NavLink } from "react-router";

const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/about", label: "About Us" },
  { path: "/shop", label: "Shop" },
  { path: "/contact", label: "Contact" },
];

const NavItem = () => {
  return (
    <ul className="flex flex-col md:flex-row md:space-x-8 gap-4">
      {navItems.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            className={({ isActive}) =>
               isActive 
                ? "text-primary font-bold" 
                : "hover:text-primary"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavItem;
