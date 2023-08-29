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

const TimeHoganakkal = () => {
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
    <Container className='text-center ' style={{marginTop:'6rem', marginBottom:'6rem'}}>
        
    
    <h6 className='fw-bold text-start h4'>10. Hogenakkal</h6>
    <Row className='mt-4'>
    
     <Col lg={6}>
     <Card style={{ width: '33rem' }} >
    <div onClick={handleClick} className={`${(style === true) ? 'class-modal' : "hide-modal"}`}>
    
    
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem'}}>
        <Modal.Title className='text-capitalize ms-1 fw-bold'>More about best time to travel to <br /> 
Hogenakkal</Modal.Title>
        <CloseButton aria-label="Hide" onClick={handleClose}/>
        </div>
        
    <   hr />
        
      <div style={{display:'flex', gap: '1.2rem', justifyContent:'center'}}>
      
        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/hogenakkal1 (1).jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Easemytrip  <br /> Source </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/hogenakkal1 (3).jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Oyorooms <br /> Source  </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/hogenakkal1 (2).jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Hiveminer  <br /> Source </Card.Text>
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
          <Offcanvas.Title style={{position:'relative', left:'22%'}} className=''>Best Time To Visit <br /> <span style={{position:'relative', left:'1.5rem'}} >Hogenakkal</span> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 >
          Hogenakkal in Winter (November -
February)</h6>
        <p style={{textAlign:'justify',textIndent:'4rem'}}> 
        Watch the glory of nature take over
Hogenakial, as the south-west monsoon
showers the region with about 150 mm of
rainfall between these months. Hogenakial is 2
5ht to behold Inthe rain as the Kaver comes
alive ang usualy floods her banks. While
adventure enthusiasts and adrenaline Junkies
throng Hogenakkal in the monsoon, is not
recommended for tourists as the currents are.
t00 strong to swim In. Boating is not alowed
either, 300 there is ro standard means of
transportation to reach the waterfl, It I best
£0 avid the river, as the water fon may be too
heavy. Further downnil, you can go rafting If
Vou prefer, afthough discretion is advises. Tre.
viaterfals are 3 sight to behold, 3s they ve up
to their name of the ‘Smoking Rocks’ — the.
Sulty mist as the water sries the rocks covers
the base in a myriad of colours. Rainbows ado
the falls 30g the scene is posteard-perfect.

          </p>
          <h6 className='mt-5'>
          
          Hogenakkal in Monsoon (July - September)
          </h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}} >
            
      
          Hogenakical Waterfall is a popuiar
Gestination attraction among nature lovers,
adventure seekers, trekkers and snutterbugs, If
You re planning a ip to this watertal, here is
Some. information about Hogenakial Falls
timings, location, activities, parking fee and
          </p>

          <h6 className='mt-5'>Hogenakkal in Summer (March - June)</h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}}>
        

          The Indian Peninsula les in the
tropics, and is known for ts sweltering summer
Pest Temperatures soar to 3 maximum of 35°C
in Apri, which is the hottest month of the year
here. The water flow is minimal, and there are
few waterfalls to reckon during these summer
months. Most small waterfals dry up. The rock
facaces are magnificent. though. The Jagged
rocks and steep gorges make for picture-perfect
Views, and have been featured in many fims as
well

          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
    </Card>
    
    
    
    </Col> 
    
    <Col lg={6}>
    
    
    <p className='fw-bold text-start mt-2'>What is the best time to visit :</p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    The best time to visit Hogenakkal is
during the winter from October - February to relax and unwind near the
waterfalls. Winters in Hogenekkal is pleasant with moderate weather
throughout the day. Whereas the summers are warm and sunny with
temperatures ranging from 23 - 34 degree celcius. Despite summers being
an off season, a dip in the hogenekkal lake is rejuvenating for all. Monsoon
on the other hand has a pleasant weather with temperatures ranging from 13
to 20 degree celcius, making it an ideal time to enjoy its spectacular beauty.
    </p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    Hogenakkal Falls, located on the
border of Tamil Nadu and Karnataka, is one of the most scenic places to visit
in the region. The waterfall is known as Hogenakkal, or “Smoky Rocks’,
because of the unique arrangement of the gigantic carbonated rocks that
surround it. The sight of River Kaveri splitting into multiple small streams and
cascading from different heights ranging from 15 feet to 66 feet will leave
you mesmerised! Hogenakkal Waterfall is similar to the popular.
    </p>
    </Col>
    </Row>
    </Container>
  )
}

export default TimeHoganakkal