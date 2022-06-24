import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Popular.css";

const Popular = () => {
  const [popular, setpopular] = useState([]);
  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
    );
    const data = await api.json();
    // localStorage.setItem("popular", JSON.stringify(data.recipes));
    console.log(data);
    setpopular(data.recipes);
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div className="wrapper">
      <h3 className="heading">Popular Picks</h3>
      <div className="slide">
        {popular?.map((recipe) => {
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
