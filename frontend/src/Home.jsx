import React from "react";
import MyCaro from "./MyCaro";
import MyCards from "./MyCards";

function Home() {
  const cardItems = [
    {
      img: "https://static.vecteezy.com/system/resources/previews/034/961/022/non_2x/a-pet-food-free-png.png",
      name: "Pet Food",
      path: "/food",
    },
    {
      img: "https://clipart-library.com/2023/Dog_Care_pet-toy-puppy-goods-512.png",
      name: "Pet Toys",
      path: "/toys",
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/pet-shop-33/512/PetShop_ok_30-512.png",
      name: "Accessories",
      path: "/access",
    },
  ];

  return (
    <div>
      <MyCaro />
      <MyCards cardItems={cardItems} />
    </div>
  );
}

export default Home;
