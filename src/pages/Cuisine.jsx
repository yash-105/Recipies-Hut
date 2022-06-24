import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Cuisine.css";

const Cuisine = () => {
  const [cuisine, setcuisine] = useState([]);
  let params = useParams();
  const getCuisines = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setcuisine(recipes.results);
  };

  useEffect(() => {
    getCuisines(params.type);
    // console.log(params.type);
  }, [params]);

  return (
    <div className="slide">
      {cuisine?.map((item) => {
        return (
          <Link to={"/recipe/" + item.id}>
            <div className="card">
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <div className="gradient"></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Cuisine;
