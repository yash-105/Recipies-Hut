import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <div className="list">
      <NavLink className="nav" to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h2>Itallian</h2>
      </NavLink>
      <NavLink className="nav" to={"/cuisine/American"}>
        <FaHamburger />
        <h2>American</h2>
      </NavLink>
      <NavLink className="nav" to={"/cuisine/Chinese"}>
        <GiNoodles />
        <h2>Chinese</h2>
      </NavLink>
      <NavLink className="nav" to={"/cuisine/Indian"}>
        <GiChopsticks />
        <h2> Indian</h2>
      </NavLink>
    </div>
  );
};

export default Category;
