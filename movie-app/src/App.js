import { Row, Col } from "antd";
import React from "react";
import SearchBox from "./components/SearchBox";

const App = () => {
  return (
   
      <Row style={{ backgroundColor: "#094887" }} >
       
        <Col span={4} offset={18}>
          <SearchBox />
        </Col>
      </Row>
    
  );
};

export default App;
