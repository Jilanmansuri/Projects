import { useState } from "react";

function LikeButton({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [clicked, setClicked] = useState(false);

  function handleLike() {
    setLikes(likes + 1);
    setClicked(true);
  }

  return (
    <div className="like-box">
      <p className="likes">❤️ Likes: {likes}</p>

      <button
        className="like-btn"
        onClick={handleLike}
        disabled={clicked}
      >
        {clicked ? "Liked" : "Like"}
      </button>
    </div>
  );
}

export default LikeButton;
