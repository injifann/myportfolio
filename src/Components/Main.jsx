import Projects from "./MainChildComponet/SectionComponent/Projects.jsx";
import Service from "./MainChildComponet/SectionComponent/Service.jsx";
import ContactMe from "./MainChildComponet/SectionComponent/ContactMe.jsx";
import AboutMe from "./MainChildComponet/SectionComponent/AboutMe.jsx";
import Certificates from "./MainChildComponet/SectionComponent/Certificates.jsx";
import Testimonals from "./MainChildComponet/SectionComponent/Testimonals.jsx";
import Home from "./MainChildComponet/SectionComponent/Home.jsx";
import Skill from "./MainChildComponet/SectionComponent/Skill.jsx";

function Main()
{
  return <>
  <Home/>
  <Projects/>
  <Service />
  <Certificates/>
  {/* <Skill/> */}
  <Testimonals/>
  <AboutMe/>
  <ContactMe/>
  </>
}
export default Main;
