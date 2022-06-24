import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";
import { Navigate, useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setinput] = useState("");
  const navigate = useNavigate();
  const submithandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <form onSubmit={submithandler} className="formstyle">
      <input
        onChange={(e) => {
          setinput(e.target.value);
        }}
        type="text"
        value={input}
      />
      <div className="logo">
        <FaSearch />
      </div>
    </form>
  );
};

export default Search;
