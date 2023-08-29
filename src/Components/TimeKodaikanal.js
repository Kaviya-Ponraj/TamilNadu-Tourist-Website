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

const TimeKodaikanal = () => {
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
    <>    <Container className='text-center ' style={{marginTop:'7rem'}}>
        
   
    <Row className='my-5' >
    <Col lg={6}>
    
    <h6 className='fw-bold text-start h4'>03. Kodaikanal</h6>
    <p className='fw-bold text-start mt-5'>What is the best time to visit :</p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    The best time to visit Kodaikanal is
from October to June, however, the weather remains a bit chilly during
December and January. Ideal for a vacation in each season, Kodaikanal is the
most colourful in summers and most picturesque in monsoons. If your trip
consists of an itinerary that includes a lot of sights to see, then summer is the
best time to visit this place and those who wish to go for trekking, plan your
trip to Kodaikanal between October and February.
    </p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    Kodaikanal is lovingly referred to as
The Princess of Hill stations. And boy, does it take this title seriously! Built
around an exotic star shaped lake, the region exudes ethereal charm like that
of fairy-tales. The best time to visit Kodaikanal is from October - June,
however, the weather remains a bit chilly during December and January.
    </p>
    </Col>
     <Col lg={6}>
     <Card style={{ width: '34rem' }} className='class-modal'>
    <div onClick={handleClick} className={`${(style === true) ? 'class-modal' : "hide-modal"}`}>
    
    
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem'}}>
        <Modal.Title className='text-capitalize fw-bold'>More about best time to travel to <br /> Kodaikanal</Modal.Title>
        <CloseButton aria-label="Hide" onClick={handleClose}/>
        </div>
        
    <   hr />
        
      <div style={{display:'flex', gap: '1.2rem', justifyContent:'center'}}>
      
        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/kodaikanal1.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Upper Lake  <br /> Source </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/kodaikanal2.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text> Kodaikanal <br /> Lake <br /> Source </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/kodaikanal3.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Pillar Rocks  <br /> Source </Card.Text>
        </div>

      </div>

      <hr />

      <div style={{display:'flex', gap:'0.5rem', justifyContent:'flex-end'}} className='me-3 mb-3'>
      <Button style={{backgroundColor:'grey'}} variant="primary" onClick={handleClose}>close</Button>
      {/* <Button variant="primary"></Button> */}
      <Button variant="primary" onClick={handleShow} >
        Save Changes
      </Button>
      </div>
      </div>
      <div className='canvas-modal'>
       <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{position:'relative', left:'20%'}} className=''>Best Time To Visit <br /> <span style={{position:'relative', left:'15%'}} >Kodaikanal</span> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6>Kodaikanal in Summer ( March-June)</h6>
        <p style={{textAlign:'justify',textIndent:'4rem'}} className='mt-4'>  Winters, the best time to vist
        Summers (March to June) in
Kodaikanal is deal wih comfortable 20 cegree
Celsius 10 32 degree Celsius temperature an0
flowers in full bioom.Tne ten days long Grand
Annual Summer Festival which takes place in
May, atracts many tourists. From elegant frit
exnibitons to enthraling boat races, ower art-
works, chssical cance performances and
melodious musicals, the Summer Festival is 3
platter of different shows. Kodaikanal 350 holds
fantastic festvas ice Panguni Uthiram in March
nd the Annual Horticulture Show in May.

          </p>
          <h6 className='mt-5'>
          Kodaikanal in Winter ( December-February)
          </h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}} className='mt-4'> 
            
          Summers (March to June) in
Kodaikanal is deal wih comfortable 20 cegree
Celsius 10 32 degree Celsius temperature an0
flowers in full bioom.Tne ten days long Grand
Annual Summer Festival which takes place in
May, atracts many tourists. From elegant frit
exnibitons to enthraling boat races, ower art-
works, chssical cance performances and
melodious musicals, the Summer Festival is 3
platter of different shows. Kodaikanal 350 holds
fantastic festvas ice Panguni Uthiram in March
nd the Annual Horticulture Show in May.
          </p>

          <h6 className='mt-5'>Kodaikanal in Monsoon ( June-September)</h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}} className='mt-4'>
        
With 2 temperature that rarey falls
ew 8 cegree Celsius, winter in Kodaikanal
(ostieen December and Februar) is the best
time to enjoy various treks, and attend the
famous Pongal festival celebrated curing
January.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
    </Card>
    
    
    
    </Col> 

    </Row>
    </Container>
    
    </>
  )
}

export default TimeKodaikanal