
import Contact from "./components/Navbar/Contact";
import Competences from "./components/Competences/Competences";
import Navbar from "./components/Navbar/Navbar";
import GroupExample from "./components/Projet/Project";
import styles from "./App.module.scss"
import "bootstrap/dist/css/bootstrap.min.css";  
import { ParticleBackground } from "./components/ParticlesBackground";
///import { seedRecipes } from "./data/seed";

//seedRecipes();

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
           <ParticleBackground/>
          <Navbar/>
         <GroupExample/>
          <Competences/>
          <Contact/>
           
    </div>
  );
}

export default App;
