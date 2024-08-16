import React from "react";
import { Card } from "antd";
const MovieCard = () => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      ></Card>
    </div>
  );
};

export default MovieCard;
