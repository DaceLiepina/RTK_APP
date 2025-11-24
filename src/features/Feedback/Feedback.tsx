import { useState, type JSX } from "react";
import MyButton from "../MyButton/MyButton";

export default function feedback(): JSX.Element {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleLDislike() {
    setDislikes(dislikes + 1);
  }
  function handleReset() {
    setLikes(0);
    setDislikes(0);
  }
  return (
    <div style = {{backgroundColor: "#a09a9aff", borderRadius: "10px", marginTop:"50px"}}>
      <h2 style = {{fontWeight: "300",color:"creme"}}>Feedback</h2>
      <div>
        <span style={{ fontSize: "1.2rem" }}>{likes} 👍</span>
        <MyButton onClick={handleLike}>Like</MyButton>

        <MyButton onClick={handleLDislike}>Dislike</MyButton>
        <span style={{ fontSize: "1.2rem" }}>👎 {dislikes}</span>
        <MyButton onClick={handleReset}>Reset Results</MyButton>
      </div>
    </div>
  );
}