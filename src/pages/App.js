import "bootstrap/dist/css/bootstrap.min.css"
import {Routes,Route} from 'react-router-dom';
import { Navibar } from "../components/Navibar";
import { Footer } from "../components/Footer";
import '../assets/Style.css';
import { Home } from "./Home";
import { Skills } from "./Skills";
import {About} from "./About";
import {Zerli} from "./Zerli";
import {Crypt} from "./Crypt";
import { Portfolio } from "./Portfolio";
import {Minesweeper} from "./Minesweeper";
import {Os} from "./Os";
import {RestManag} from "./RestManag";
import {Contact} from "./Contact";


function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Navibar />

      </div>
       
      
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Skills" element={<Skills />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Zerli" element={<Zerli />}/>
          <Route path="/Crypt" element={<Crypt />}/>
          <Route path="/Minesweeper" element={<Minesweeper />}/>
          <Route path="/Os" element={<Os />}/>
          <Route path="/RestManag" element={<RestManag />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Portfolio" element={<Portfolio />}/>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
