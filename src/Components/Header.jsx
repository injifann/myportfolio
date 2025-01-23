import '../assets/Style/header.css'
function Header()
{

  return (
    <header className='header'>
      
      <nav>
        <div className='portfolio-container'>
            <p>MY PORTIFOLIO</p>
            <div className="menu-btn-container">
                <div className="menu-btn">
                </div>
            </div>
        </div>

        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Service</a></li>
          <li><a href="">About Me</a></li>
          <li><a href="">Certificates</a></li>
          <li><a href="">Testimonals</a></li>
          <li><a href="">ContactMe</a></li>
        </ul>
      </nav>

    </header>
  )
}
export default Header;