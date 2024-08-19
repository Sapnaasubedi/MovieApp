import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBox = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div style={{ margin: 30 }}>
      <Input
        size="large"
        onSearch={onSearch}
        placeholder="search"
        suffix={<SearchOutlined />}
        style={{
          background: "#094887",
          border: "2px solid #0B0770",
          borderRadius: "8",
        }}
      />
    </div>
  );
};

export default SearchBox;
