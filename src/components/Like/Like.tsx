import React, { useState } from "react";

interface LikeProps {
  onClick?: () => void; // onClick is optional
}

const Like: React.FC<LikeProps> = ({ onClick }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    if (onClick) {
      onClick(); // Call the custom onClick handler if provided
    }
  };

  return (
    <button
      onClick={handleLike}
      style={{
        fontSize: "24px",
        color: liked ? "red" : "black",
        background: "none",
        border: "none",
        cursor: "pointer",
        outline: "none",
      }}
    >
      {liked ? "❤️" : "🤍"}
    </button>
  );
};

export default Like;
