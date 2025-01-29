
import SkillCard from "../Cards/SkillCard"
import '../../../assets/Style/skill.css'

export default function Skill()
{
  return(
    <section className="skill">
      <h1 className="section-title">Skills</h1>
     <SkillCard skill="HTML" percent="80"/>
     <SkillCard skill="JAVASCRIPT" percent="70"/>
     <SkillCard skill ="CSS" percent="88"/>
     <SkillCard skill="BOOTSTRAP" percent="65"/>
     <SkillCard skill="REACT" percent="85"/>
     <SkillCard skill="WORLD PRESS" percent="69"/>
     
    </section>
  )
}