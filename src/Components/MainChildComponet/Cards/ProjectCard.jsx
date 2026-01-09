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
      <div className="img-desc-container">
        <img src={props.image} alt="" />
        
        <div className="project-details">
          <h3 className="project-title">{props.title}</h3>
        <p>
          Lorem ipsum, dolor this is the project  and we are working on this and that at this moment desinged for online mobile selling company
        </p>
        <div className="tech-used">
          <span>react</span>
          <span>java </span>
          <span>css </span>
          <span>html</span>
        </div>
         <div className="demo-and-code-btn">
          <a><img src="" alt="" />Live</a>
          <a> <img src="" alt="" />code</a>
         </div>

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;