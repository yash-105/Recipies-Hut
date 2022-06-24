import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../components/Popular.css";

const Searched = () => {
  const [searchedrecipes, setsearchedrecipes] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setsearchedrecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params]);
  return (
    <div className="slide">
      {searchedrecipes?.map((item) => {
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

export default Searched;
