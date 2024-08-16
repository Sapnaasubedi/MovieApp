import React from "react";
import { Card, Space, Typography } from "antd";

const { Text } = Typography;
const MovieCard = () => {
  return (
    <div>
      <Card
        style={{ width: 240, backgroundColor: "#1F316F", border: "none" }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      > <Space><Text style={{ color: "white" }} strong>
      Good girls guid to murder
    </Text>
    <Text style={{ color: "yellow" }} strong>
      4
    </Text></Space>
        
      </Card>
    </div>
  );
};

export default MovieCard;
