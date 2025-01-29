
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'
import { ThemeProvider } from './ThemeContext'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  
  return <Router>
    
   <ThemeProvider>
    <Header />
    <Main />
    <Footer />
  </ThemeProvider>

  </Router>
}

export default App
