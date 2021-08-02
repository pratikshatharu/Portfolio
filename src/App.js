import './App.css';
import Topbar from './components/Navbar'
import Testimonials from "./components/testimonials/Testimonials.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx"
import Work from "./components/work/Work.jsx"
import Home from "./components/home/Home.jsx"
import Contact from "./components/contact/Contact.jsx"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";




function App() {
  return (
  <>
  <Router>
<div className="app">
 <Topbar/>
 <Header/>
 <div className="sections">
   <switch>
     <Route path="/testimonials">
 <Testimonials/>
 </Route>
 <Route path="/portfolio">
 <Portfolio/>
 </Route>
 <Route path="/work">
 <Work/>
 </Route>
 <Route exact path="/">
 <Home/>
 </Route>
 <Route path="/contact">
 <Contact/>
 </Route>
 </switch>
 </div>
 </div>
 </Router>
</>
 
  );
}

export default App;
