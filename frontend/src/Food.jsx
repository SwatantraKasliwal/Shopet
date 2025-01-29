import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";

function Food() {
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/food")
      .then((res) => setFoodItem(res.data))
      .catch((err) => console.log(err));
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <h1>Pet Food</h1>
      <ItemCard data={foodItem} />
    </div>
  );
}

export default Food;
