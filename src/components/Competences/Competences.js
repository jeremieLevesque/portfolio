import React from 'react';
import "../../assets/styles/_competences.scss"
import { Container, Row, Col } from "react-bootstrap";
import "../../CSS Files/Contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact,faSquareJs,faSass,faWordpressSimple} from "@fortawesome/free-brands-svg-icons";


function Competences() {


    return (
      
      <section id='Competences' className='section-competences'>
        
                 <Container>
        <Row className='justify-content-center'>
        <h1 className='text-center titre-competences'>Compétences</h1>
           <Col 
            sm={1}
            className='card_compe'
          >
         <FontAwesomeIcon icon={faReact} style={{color: "#ebecf3",}} />
       
          </Col>
          <Col 
            sm={1}
            className='card_compe'
          >
          <FontAwesomeIcon icon={faSquareJs} style={{color: "#ebecf3",}}  />
          </Col>
               <Col 
            sm={1}
            className='card_compe'
          >
            <FontAwesomeIcon icon={faSass} style={{color: "#ebecf3",}}  />
          </Col>
           <Col 
            sm={1}
            className='card_compe'
          >
            <FontAwesomeIcon icon={faWordpressSimple} style={{color: "#ebecf3",}}  />
          </Col>
          
        </Row>
      </Container>
      </section>
    );
  }
  
  export default Competences;  