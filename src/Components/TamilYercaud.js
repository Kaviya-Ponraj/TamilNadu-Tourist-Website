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


const TamilYercaud = () => {
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
        
    
    <h6 className='fw-bold text-start h4'>08. Yercaud</h6>
    <Row className='mt-4'>
    
     <Col lg={6}>
     <Card style={{ width: '33rem' }} >
    <div onClick={handleClick} className={`${(style === true) ? 'class-modal' : "hide-modal"}`}>
    
    
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem'}}>
        <Modal.Title className='text-capitalize ms-1 fw-bold'>More about best time to travel to <br /> Yercaud</Modal.Title>
        <CloseButton aria-label="Hide" onClick={handleClose}/>
        </div>
        
    <   hr />
        
      <div style={{display:'flex', gap: '1.2rem', justifyContent:'center'}}>
      
        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/yercaud1.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Easemytrip  <br /> Source </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/yercaud2.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Oyorooms <br /> Source  </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/yercaud3.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
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
          <Offcanvas.Title style={{position:'relative', left:'22%'}} className=''>Best Time To Visit <br /> <span style={{position:'relative', left:'2.5rem'}} >Yercaud</span> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 >
Yercaud in Summer (March - June)</h6>
        <p style={{textAlign:'justify',textIndent:'4rem'}}> 
        With temperatures that hardly move.
out of the range between 24 degree Celsius and
28 Gegree Celsius, Vercaug experiences mi
summers during March to June, The best places
to vist Guring ths season are the enchanting
Emeraia Lake, Kiliyur Fas, Sk Farm, nd Laoy?s
Sest Aart from these stiactons, one
particular festival which alures tourists from
‘every nook of the wiorid Is the Yercaud Summer.
Festival. Held in May, it s an annual festival
wich keeps everyone on their toss unt ts
artival. Usually taking place for five cays, the.
enrapturing summer event i as grand as t gets!
From sophisticated folk dances to bewitching
musical concerts, from captivating cutural
competitions to horse riding tournaments, tis
event is a treasure trove of smorgasbord of
wonderful acthities.
          </p>
          <h6 className='mt-5'>
          
Yercaud in Winter (November - February)
          </h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}} >
            
      
          Versus experiences 3 celigntiul
climate from October to February. The average.
temperature which stays between pleasant 10
‘degree Celsius and 15 degree Celsius is idea for
leisurely nature walks as well as adventure
activites. Do not miss out on the Bears Cave,
Pagoda Point, Snevaroy Temple, and Anna Park.
if you pian to vist this beautiful piace during
winter.
          </p>

          <h6 className='mt-5'>Yercaud in Monsoon (uly - September)</h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}}>
        

          Vercsug experiences a not and hum
monsoon with temperatures that range
between 20 cegree Celsius 300 25 degres
Celsius from June to September. At this time,
the coffee plantations look ethereal after being
washed by the ran, The Botanical Garden, Raj
Reeshwar Temple aa the Si Crake
Mahamery Temple are some of the paces you
Should vst during this time.

          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
    </Card>
    
    
    
    </Col> 
    
    <Col lg={6}>
    
    
    <p className='fw-bold text-start mt-2'>What is the best time to visit :</p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    October to June is the best time to
visit Yercaud because the weather is dry and cool. However, Yercaud offers
breathtaking views and a tranquil ambience throughout the year. During the
month of May, a seven-day Summer Festival is conducted which includes
flower shows, dog shows, boating races and village fairs. Monsoons (uly -
September) could be avoided as rains might hamper your sightseeing plans,
but the rains make this place extra beautiful and you might not want to miss
that either.
    </p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    Yercaud celebrates seasonal festivals
that are in tune with the changing climatic conditions and showcase the
nativity and culture of the hill town. If you are planning a weekend getaway
or a long vacation, choose the best of the seasons so you can enjoy your trip
to the finest. The best period to visit Yercaud is from October to June, when
the weather is at its best.
    </p>
    </Col>
    </Row>
    </Container>
  )
}

export default TamilYercaud