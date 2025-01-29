
import homepic from '../../../assets/Images/homepicture.jpg'
import '../../../assets/Style/home.css';

export default function Home()
{
  return <section className="home">
    <figure>
      <img src={homepic} alt="" />
    </figure>

    <div className="bio">
      <span>i am</span>
      <h1>kabe gutema</h1>
      <h2>frontend developer</h2>
    </div>
  </section>
}