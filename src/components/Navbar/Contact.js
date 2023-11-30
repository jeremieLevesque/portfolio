import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../Navbar/content_option"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import "../../CSS Files/Contact.css"
function Contact() {
  return (
    <section id='Contact' className='section-contact'>
      <Container className='contact'>
     
     <Row>

       <Col lg="7" md="12" className="mb-5 align-items-center ">
       <p className='description-contact'>{contactConfig.description}<a className='linked'>{contactConfig.linkedin}</a></p>
       
           <strong><FontAwesomeIcon icon={faEnvelope} style={{color: "#ff0000",}} size="2x" />

           <a className='courriel' href={`mailto:${contactConfig.YOUR_EMAIL}`}>
            {contactConfig.YOUR_EMAIL} 
           </a>
          
           </strong>
           <br />
           <br />
           {contactConfig.hasOwnProperty("YOUR_FONE") ? (
             <p className='description-contact'>
               <strong>Téléphone:</strong> {contactConfig.YOUR_FONE}
             </p>
           ) : (
             ""
           )}
       
        
       </Col>
       <Col lg="5"  md="6" className="d-flex align-items-center">
         <form  className="contact__form w-100">
           <Row>
             <Col lg="6" className="form-group">
               <input
                 className="form-control my-30"
                 id="name"
                 name="name"
                 placeholder="Name" 
                 type="text"
                 required 
               />
             </Col>
             <Col lg="6"  md="6" className="form-group">
               <input
                 className="form-control  my-30"
                 id="email"
                 name="email"
                 placeholder="Email"
                 type="email" 
                 required 
               />
             </Col>
           </Row>
           <textarea
             className="form-control"
             id="message"
             name="message"
             placeholder="Message"
             rows="5" 
             required
           ></textarea>
           <br />
           <Row>
             <Col lg="12"  md="6"  sm="2" className="form-group">
               <button className="btn ac_btn" type="submit"> 
               Send
               </button>
             </Col>
           </Row>
         </form>
       </Col>
     </Row>
    
   </Container>
    </section>
  );
}

export default Contact;  

//<section  id='Contact'>
//<div className='content'>
//<div className='block'>
 // <p>POUR ME CONTACTER. </p>
 // <p> C'EST FACILE, ENVOIE MOI UN MAIL</p> 
 // <p>OU TROUVE MOI SUR <a>LINKEDIN</a></p>
 // </div>
//</div>
//</section>