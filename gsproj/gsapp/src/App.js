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
import FacultyPage from './pages/Faculties/FacultyPage';


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
            <Route path="/arh" element={<FacultyPage category="arh" title="Facultatea de Arhitectură și Urbanism" />} />
            <Route path="/ac" exact element={<FacultyPage category="ac" title="Facultatea de Automatică și Calculatoare"/>} />
            <Route path="/chimie" exact element={<FacultyPage category="chimie" title="Facultatea de Chimie"/>} />
            <Route path="/ct" exact element={<FacultyPage category="ct" title="Facultatea de Construcții"/>} />
            <Route path="/etcti" exact element={<FacultyPage category="etcti" title="Facultatea de Electronică, Telecomunicații și Tehnologii Informaționale"/>} />
            <Route path="/ee" exact element={<FacultyPage category="ee" title="Facultatea de Electrotehnică și Electroenergetică"/>} />
            <Route path="/mpt" exact element={<FacultyPage category="mpt" title="Facultatea de Management în Producție și Transporturi"/>} />
            <Route path="/mec" exact element={<FacultyPage category="mec" title="Facultatea de Mecanică"/>} />
            <Route path="/sc" exact element={<FacultyPage category="sc" title="Facultatea de Științe ale Comunicării"/>} />
            <Route path="/fih" exact element={<FacultyPage category="fih" title="Facultatea de Inginerie din Hunedoara"/>} />
          </Routes>
          </main>
          <Footer/>
      </div>
        
    </Router>
  );
}

export default App;
