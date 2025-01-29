import React from 'react'
import { Card } from "antd";

function ItemCard({data}) {
  const { Meta } = Card;
  const containerStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    padding: "20px",
    justifyContent: "center",
  };

  const cardStyle = {
    width: 240,
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
  };

  const imageStyle = {
    padding: "20px",
    height: "200px",
    objectFit: "contain",
    width: "200px",
  };

  const linkStyle = {
    fontSize: "16px",
    color: "#333",
    textDecoration: "none",
    display: "block",
    textAlign: "center",
    padding: "10px 0",
  };
  return (
    <div style={containerStyle}>
      {data &&
        data.map((item, index) => (
          <Card
            key={index}
            hoverable
            style={cardStyle}
            cover={<img alt={item.name} src={item.img} style={imageStyle} />}
          >
            <Meta title={item.name} />
            <Meta title= "Price:" description={item.price}></Meta>
            <Meta title="Ratings:" description={item.rating}></Meta>
          </Card>
        ))}
    </div>
  );
}

export default ItemCard
