import React, { useEffect, useState } from "react";
import { Card, Space, Typography } from "antd";

const { Text } = Typography;

const MovieCard = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const collectionId = "your_collection_id"; // Replace with your actual collection ID
      const apiKey = "your_api_key"; // Replace with your actual API key
      const url = `https://api.themoviedb.org/3/collection/${collectionId}/images?api_key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        // Assuming you want the first poster image from the results
        const posterPath = data.posters[0]?.file_path;
        if (posterPath) {
          setImageUrl(`https://image.tmdb.org/t/p/w500${posterPath}`);
        }
      } catch (error) {
        console.error("Error fetching the image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      <Card
        style={{ width: 240, backgroundColor: "#1F316F", border: "none" }}
        cover={
          <img
            alt="cover"
            src={imageUrl}
          />
        }
      >
        <Space>
          <Text style={{ color: "white" }} strong>
            Good girls guide to murder
          </Text>
          <Text style={{ color: "yellow" }} strong>
            4
          </Text>
        </Space>
      </Card>
    </div>
  );
};

export default MovieCard;
