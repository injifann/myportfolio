import React, { useState } from 'react';

function ProjectCard(props) {

  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  const handleDislike=()=>{
    if(likes<=0)
    {
      return
    }
   else
   {
    setLikes(prevLikes => prevLikes - 1);

   }
    }

  return (
    <div className="projectCard">
      <h2>{props.title}</h2>

      <div className="img-desc-container">
        <img src={props.image} alt="" />
        <desc>
          Lorem ipsum, dolor ...
          <a href="">more</a>
        </desc>
      </div>

      <div>
        <p>What do you think of this project?</p>
        <button onClick={handleLike} className="like-btn">Like</button>
        <button onClick={handleDislike}>Dislike</button>
        <p>Likes: {likes}</p>
      </div>
    </div>
  );
}

export default ProjectCard;