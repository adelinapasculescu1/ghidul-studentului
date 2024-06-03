import { HashRouter  as Router, Route, Routes} from "react-router-dom";
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import HomePage from './pages/HomePage';
import UPTPage from './pages/UPTPage';
import FacultiesPage from './pages/FacultiesPage';
import BenefitsPage from './pages/BenefitsPage';
import CampusPage from './pages/CampusPage';
import StudentLifePage from './pages/StudentLifePage';
import VolunteeringPage from './pages/VolunteeringPage';


function App() {
  return (
    <Router>
      <div className="container">
          <Navbar/>
          <main>
          <Routes>
            <Route path="/" exact element={<HomePage/>}/>
            <Route path="/upt" exact element={<UPTPage/>}/>
            <Route path="/facultatea-mea" exact element={<FacultiesPage/>} />
            <Route path="/beneficii-si-servicii" exact element={<BenefitsPage/>}/>
            <Route path="/campusul-universitar" exact element={<CampusPage/>} />
            <Route path="/student-life" exact element={<StudentLifePage/>}/>
            <Route path="/voluntariat" exact element={<VolunteeringPage/>} />
          </Routes>
          </main>
          <Footer/>
      </div>
        
    </Router>
  );
}

export default App;
