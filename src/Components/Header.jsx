import '../assets/Style/header.css'
import {useState} from 'react'

import  {useTheme}  from '../ThemeContext.jsx'
import { Link } from 'react-router-dom';
function Header()
{
const [isMenuVisible ,setMenuVisibility]=useState(true);
const { theme, toggleTheme } = useTheme()


const toggleMenu=()=>{
  setMenuVisibility(!isMenuVisible);
}
  return (
    <header className='header'>
      
      <nav>
        <div className='name-container'>
            <p>
              <Link to="/">Kabe</Link>
              </p>
            <div className="menu-btn-container" onClick={toggleMenu}>
                <div className="menu-btn">
                </div>
            </div>
        </div>

        { isMenuVisible&& (
          <ul>




      <li>
       <Link to="/projects">Projects</Link>
       </li>


       <li>
       <Link to="/service">Service</Link>
      
       </li>

       <li>
      <Link to="/skills">Skills</Link>
      </li>
      <li>
      <Link to="/testimonials">Testimonials</Link>
      </li>

      <li>
      <Link to="/about-me">AboutMe</Link>
      </li>
      <li>
      <Link to="/contact-me">ContactMe</Link>
      </li>
          <button onClick={toggleTheme}>
         {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
        </ul>)

        }
      </nav>

    </header>
  )
}
export default Header;