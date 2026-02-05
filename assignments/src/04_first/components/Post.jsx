import LikeButton from "./likebutton";

function Post() {
  return (
    <div className="post">
      <h3 className="title">My First Post</h3>
      <p className="desc">This is a simple post.</p>

      <LikeButton initialLikes={10} />
    </div>
  );
}

export default Post;
