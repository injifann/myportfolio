import pic from '../../../assets/Images/homepicture.jpg'
import '../../../assets/Style/about.css'

function AboutMe()
{
return <section className="about"> 
 <h1 className="section-title">About Me</h1>
  <div>
    <div className="about-container">
      {/* <img src={pic} alt="" /> */}
      {/* <p className="self-intro">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ex ad at repellendus corrupti dolore. Laboriosam rerum quo temporibus, architecto placeat eos natus, distinctio consequuntur dolor, animi rem quod nulla!
      </p> */}
       <div className="personal-info">
        <p>Name</p> <span>kabe gutema</span>
        <p>Education level</p> <span>bachelor degree in computer science</span>
        <p>Email</p> <span>kabegutema36@gmail.com</span>
        <p>address</p> <address>6 kilo,addis ababa Ethiopia</address>
        <p>Specialization</p> <span>frontend development with React</span>
        <p>Experiance</p> <span>3years</span>
       </div>
    </div>
  </div>
</section>
}
export default AboutMe;