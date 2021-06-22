import './App.css';
import Topbar from './components/Navbar'
import Testimonials from "./components/testimonials/Testimonials.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx"
import Work from "./components/work/Work.jsx"
import Intro from "./components/intro/Intro.jsx"
import Contact from "./components/contact/Contact.jsx"




function App() {
  return (
  <>
<div className="app">
 <Topbar/>
 <div className="sections">
 <Testimonials/>
 <Portfolio/>
 <Work/>
 <Intro/>
 <Contact/>
 </div>
 </div>
 
</>
 
  );
}

export default App;
