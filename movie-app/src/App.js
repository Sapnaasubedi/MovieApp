import { Row, Col } from "antd";
import React from "react";
import SearchBox from "./components/SearchBox";
import MovieCard from "./components/MovieCard";

const App = () => {
  return (
    <Row style={{ backgroundColor: "#094887" }}>
      <Col span={4} offset={18}>
        <SearchBox />
      </Col>
      <Col span={24} offset={2}>
        <MovieCard />
      </Col>
    </Row>
  );
};

export default App;
