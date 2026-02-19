import Projects from "./MainChildComponet/SectionComponent/Projects.jsx";
import Service from "./MainChildComponet/SectionComponent/Service.jsx";
import ContactMe from "./MainChildComponet/SectionComponent/ContactMe.jsx";
import AboutMe from "./MainChildComponet/SectionComponent/AboutMe.jsx";
import Testimonials from "./MainChildComponet/SectionComponent/Testimonials.jsx";
import Home from "./MainChildComponet/SectionComponent/Home.jsx";
import Skill from "./MainChildComponet/SectionComponent/Skill.jsx";
import Pricing from "./MainChildComponet/SectionComponent/Pricing.jsx";
import Blog from "./MainChildComponet/SectionComponent/Blog.jsx";

// Removed: import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Keep only what you actually use:
import { Route, Routes } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <Home />
      <Projects />
      <Service />
      <Skill />
      <Testimonials />
      <AboutMe />
      <ContactMe />
    </>
  );
}

function Main() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/service" element={<Service />} />
      <Route path="/skills" element={<Skill />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/contact-me" element={<ContactMe />} />
      <Route path="/blog" element ={<Blog/>}/>

    </Routes>
  );
}

export default Main;