
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import "../../CSS Files/Navbar.scss"
import Typewriter from "typewriter-effect/dist/core";
import Pdf from "../../assets/images/CV.pdf";
import PDP from "../../assets/images/moi.jpg";

 


function Navbar() {
    const typewriterRef = useRef(null);
  
    useEffect(() => {
      const typewriter = new Typewriter(typewriterRef.current, {
        strings: [
          "Hey Bonjour toi ! ce portfolio va te montré ce que j'ai réalisé comme projet ",
         
        ],
        autoStart: true,
        loop: true,
        typeSpeed: 10,
        deleteSpeed: 100,
      });
  
      typewriterRef.current.style.display = "flex";
      typewriterRef.current.style.flexWrap = "wrap";
  
      return () => {
        typewriter.stop();
      };
    }, []);
  
   
  
    const onResumeClick = () => {
      window.open(Pdf);
    };
  
    return (
      <section  id='Descript'>
      <nav id="navbar">
        <div className="box">
          <a  className = "Resume" onClick={onResumeClick}>
            cv
          </a>
        </div>
  
        <a href="https://ca.linkedin.com/in/j%C3%A9r%C3%A9mie-l%C3%A9vesque-5ab434222?trk=people-guest_people_search-card" target="_blank" className="icons">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
    
  
        <ul className="nav-links effet">
          <div className="name-box">
           
            <li className="Name">
              JL <span className>.</span>
            </li>
                  
          </div>
          
          <Link to="Descript" smooth={true} duration={500}>
            <li><a>Accueil</a></li>
          </Link>
          <Link to="Projets" smooth={true} duration={500}>
            <li>Projets</li>
          </Link>
          <Link to="Contact" smooth={true} duration={500}>
            <li>Contact</li>
          </Link>
        </ul>
        <div className="Introduction">
        <div className="flex-container">
  <div className="flex-item-left"><h1>Jérémie Lévesque</h1>
          <p className='classwow'ref={typewriterRef}></p></div>
  <div className="flex-item-right"> 
  <img src={PDP} alt="moi"/>
              </div>
</div>
          </div>
          
      </nav>
      </section>
    );
  }
  
  export default Navbar;


