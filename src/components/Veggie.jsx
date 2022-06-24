import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Popular.css";

const Popular = () => {
  const [veggie, setveggie] = useState([]);
  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setveggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      console.log(data);
      setveggie(data.recipes);
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <div className="wrapper">
      <h3 className="heading">Our Vegetarian Picks</h3>
      <div className="slide">
        {veggie?.map((recipe) => {
          return (
            <Link to={"/recipe/" + recipe.id}>
              <div className="card">
                <p>{recipe.title}</p>
                <img src={recipe.image} alt="image" />
                <div className="gradient"></div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
