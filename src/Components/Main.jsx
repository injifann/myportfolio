import Projects from "./MainChildComponet/SectionComponent/Projects.jsx";
import Service from "./MainChildComponet/SectionComponent/Service.jsx";
import ContactMe from "./MainChildComponet/SectionComponent/ContactMe.jsx";
import AboutMe from "./MainChildComponet/SectionComponent/AboutMe.jsx";
import Testimonials from "./MainChildComponet/SectionComponent/Testimonials.jsx";
import Home from "./MainChildComponet/SectionComponent/Home.jsx";
import Skill from "./MainChildComponet/SectionComponent/Skill.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Main() {
  return (
    <Routes>
    <Route path="/" element={<><Home /> <Projects />  <Service />  <Skill /> <Testimonials /> <AboutMe />  <ContactMe /> </>} />
    <Route path="/projects" element={<Projects /> } />
    <Route path="/service" element={<Service />} />
    <Route path="/skills" element={<Skill />} />
    <Route path="/testimonials" element={<Testimonials />} />
    <Route path="/about-me" element={<AboutMe />} />
    <Route path="/contact-me" element={<ContactMe />} />
  </Routes>
  );
}

export default Main;