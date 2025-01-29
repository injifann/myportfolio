export default function SkillCard(prop)
{

  return <div className="container">
         <div className="skill-and-percent">
          <h3>{prop.skill}</h3> <h3>{prop.percent}%</h3>
         </div>
         <div className="progress-bar">
          <div style={{width:`${prop.percent}%`}}>
          </div>
        
         </div>
  </div>
}