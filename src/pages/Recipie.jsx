import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import { Link } from "react-router-dom";

const Recipie = () => {
  const [details, setdetails] = useState({});
  const [saman, setsaman] = useState([]);
  const [activebtn, setactivebtn] = useState("instructions");
  let params = useParams();
  const fetchdetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailsData = await data.json();
    setdetails(detailsData);
    console.log(detailsData);
    console.log(detailsData.diets);
    setsaman(detailsData.extendedIngredients);
    // console.log(setsaman, "hhhhh");
  };

  useEffect(() => {
    fetchdetails();
  }, [params]);

  return (
    <div className="detailwrapper">
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <div className="info">
        <button
          onClick={() => setactivebtn("instructions")}
          className={activebtn === "instructions" ? "active" : ""}
        >
          Instructions
        </button>
        <button
          onClick={() => setactivebtn("ingredients")}
          className={activebtn === "ingredients" ? "active" : ""}
        >
          Ingridients
        </button>

        {activebtn === "ingredients" && (
          <a href={details.sourceUrl}>
            <button className="read">find All ingredients</button>
          </a>
        )}
        {activebtn === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipie;
