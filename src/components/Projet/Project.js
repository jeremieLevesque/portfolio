
import { useRef,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/effect-cards';
import "../../CSS Files/Contact.css"

import  { Col, Row } from 'react-bootstrap';
import "../Projet/project.module.scss"
import terrasseD from "../../assets/images/TERRASSE DIVERSIMMO.png";
import SupraS from "../../assets/images/SUPRA SIGNALISATION.png";


function GroupExample() {

    const [infos] = useState([
      {
        title: 'Terrasse Diversimmo',
        text: 'TESTSTSTT',
        image: terrasseD
      },
      {
        title: 'Supra Signalisation',
        text: 'blgjfdkghj',
        image: SupraS
      },  
      {
        title: 'Refonte fictive Les Savoureux',
        text: 'blgjfGFDDDD',
      },  
      {
        title: 'Megazord',
        text: 'blgjfdkgh',
        IMG:'../'
      },  
   

    ])


  return (
    <section id='Projets' className='section-project'>
         <h1 className='text-center titre-competences'>Projets</h1>
       <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
       
        <SwiperSlide>
          <Row xs={1} md={2}>
            <Col lg="5"  md="6">
             
        <h1 className='description-projet-h1'>Supra Signalisation</h1>
        <p className='description-projet'>Ceci est un exemple de texte car je ne sais pas quoi dire. Un site web statique réalisé avec du simple html css et javascript</p>
            </Col>
            <Col lg="7"  md="6" >
              <div className='box-image'>
             <img className='image-box' src={SupraS} alt="Supra Signalisation"/>
       </div>
       <div className='box-bootstrap'><a>Bootstrap</a></div>
       <div className='box-react'><a>React</a></div>
            </Col>
          </Row>
       

          
        </SwiperSlide>
        <SwiperSlide>


          
        </SwiperSlide>

      
      </Swiper>
   
    </section>
  );
}

export default GroupExample;



//<Container>
//<Row xs={1} md={2} className="g-4">
//{ cards.map((card, i) => (
//<Col key={i}>
 // <Card className='card-project'style={{ backgroundColor:'#00111C' }} >
  //  <Card.Img variant="top" src="holder.js/50px50" src={card.image} />
   // <Card.Body>
    //  <Card.Title>{card.title}</Card.Title>
    //  <Card.Text>
    //    {card.text}
    //  </Card.Text>
   // </Card.Body>
 // </Card>
//</Col>
//))}
//</Row>
//</Container>