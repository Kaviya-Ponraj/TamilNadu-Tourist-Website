import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../App.css';

const TimeOoty = () => {
    const [show, setShow] = useState(false);
    const [style, setStyle] = useState(false);

 const handleClose = () => {
   return  setShow(false);
} 
 const handleShow = () => {
   return setShow(true);
 }

 const handleClick = () => {
   setStyle(!style)
 }
  return (
    <Container className='text-center ' style={{marginTop:'6rem'}}>
        
    
    <h6 className='fw-bold text-start h4'>04. Ooty</h6>
    <Row className='mt-4'>
    
     <Col lg={6}>
     <Card style={{ width: '33rem' }} >
    <div onClick={handleClick} className={`${(style === true) ? 'class-modal' : "hide-modal"}`}>
    
    
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem'}}>
        <Modal.Title className='text-capitalize ms-1 fw-bold'>More about best time to travel to <br /> Ooty</Modal.Title>
        <CloseButton aria-label="Hide" onClick={handleClose}/>
        </div>
        
    <   hr />
        
      <div style={{display:'flex', gap: '1.2rem', justifyContent:'center'}}>
      
        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/ooty1.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Mountain <br /> Railway <br /> Source </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/ooty2.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Ooty Lake <br /> Source  </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/ooty3.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Trekking Ooty  <br /> Source </Card.Text>
        </div>

      </div>

      <hr />

      <div style={{display:'flex', gap:'0.5rem', justifyContent:'flex-end'}} className='me-3 mb-3'>
      <Button style={{backgroundColor:'grey'}} variant="primary" onClick={handleClose}>close</Button>
      {/* <Button variant="primary"></Button> */}
      <Button variant="primary" onClick={handleShow} className="me-2">
        Save Changes
      </Button>
      
      </div>
      </div>
      <div className='canvas-modal'>
       <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{position:'relative', left:'22%'}} className=''>Best Time To Visit <br /> <span style={{position:'relative', left:'4rem'}} >Ooty</span> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 >Ooty in Summer (March - June)</h6>
        <p style={{textAlign:'justify',textIndent:'4rem'}}> 
        Ooty experiences an average temperature:
that ranges between 23 degree Celsius and 31
cegree Ceisus, which is perfect for you to explore
the sheer beauty of this place n ull Swing.
          </p>
          <h6 className='mt-5'>
          Ooty in Winter (October - March)
          </h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}} >
            
      
With temperatures that stay below 15
cegree Celsius, winters n Ooty are perfect o have
2 gala time. Each year, during January or February,
Department of Tourism in Tamil Nadu hosts Tre Tea
and Tourism Festival fo three days. A vast range of
tes leaves are splayed, 3nd rows of tea stalls are
put up for tasting and buying a wide varity of tea.
In agiton to ts, these three days are packed with
cultura shows 3nd performances, which reverberate
with the heritage ofthe Nilgrs.
          </p>

          <h6 className='mt-5'>Ooty in Monsoon (July - September)</h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}}>
        
People who love rainfall and green grass
beds [219 over mountains can pack their bags and
head straight to Ooty during the monsoon months,
which lasts between June and September. Even
though you are unlikely to experience the bright.
warm sunshine, you wil have a great tme
nevertheless.

          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
    </Card>
    
    
    
    </Col> 
    
    <Col lg={6}>
    
    
    <p className='fw-bold text-start mt-2'>What is the best time to visit :</p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    The best time to visit Ooty is

throughout the year as the weather is pleasant and great for sightseeing. The
temperature usually ranges from 5-15 degrees throughout the year with
colder nights. However, the peak season is from October to June when the
weather is pleasant and you can get involved in outdoor activities. Ooty can
be visited during monsoons (if you don't mind the rain) when the freshly
washed surroundings give Ooty an ethereal charm. The annual Tea and
Tourism Festival attracts crowds in huge numbers to visit the place and have
a great time in this wonderful place.
    </p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    The poised and elegant ‘Queen of Hil
Stations’ welcomes you to the kingdom in the clouds. Individuals travel far
and wide to partake in the awe-inspiring wonders of one of India's most
beloved hill stations — Ootacamund or Ooty. Here, history and culture form a
sweet medley, while nature sings to its own symphony. Colonial churches,
Hindu temples, tribal museums and libraries brand the plains with stories.
    </p>
    </Col>
    </Row>
    </Container>
  )
}

export default TimeOoty