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


const TimeKumbakonam = () => {
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
        
    
    <h6 className='fw-bold text-start h4'>06. Kumbakonam</h6>
    <Row className='mt-4'>
    
     <Col lg={6}>
     <Card style={{ width: '33rem' }} >
    <div onClick={handleClick} className={`${(style === true) ? 'class-modal' : "hide-modal"}`}>
    
    
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem'}}>
        <Modal.Title className='text-capitalize ms-1 fw-bold'>More about best time to travel to <br /> Kumbakonam</Modal.Title>
        <CloseButton aria-label="Hide" onClick={handleClose}/>
        </div>
        
    <   hr />
        
      <div style={{display:'flex', gap: '1.2rem', justifyContent:'center'}}>
      
        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/kumbakonam1.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Dawn  <br /> Source </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/kumbakonam2.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Steemit <br /> Source  </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/kumbakonam3.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Holydham  <br /> Source </Card.Text>
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
          <h6 >Kumbakonam in Winter (October - February)</h6>
        <p style={{textAlign:'justify',textIndent:'4rem'}}> 
        The winters in Kumbakonam are.
pleasanty cola, with light sweaters helping you
to survive the cold. The temperature ranges
from 15 to 25 degrees Celcius, and the diurnal
range of temperature nt moe than 3
maximum of 10 cegrees Celcius. Tis seson is
most preferred by tourists to visit Kumbakonam,
35 exloring the dy in tis weather becomes
comfortable and the temperature 1s pleasing
‘most ofthe time during winter months.
          </p>
          <h6 className='mt-5'>
          Kumbakonam in Monsoon (une - August)
          </h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}} >
            
      
          The monsoon is associated with
frequent and untimely shower spels in the
region. The temperature drops down
considerably after the scorching summers and
the piace witness a waste stretch of greenery as
the rains give fe to the fora of the region, Tre.
rains can though be problematic at times and
an interfere with your exploration plans, but
overall this season can also be preferred by.
tourists o pay 3 vist to Kumbakonam.
          </p>

          <h6 className='mt-5'>Kumbakonam in Summer (March - May)</h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}}>
        

          Summers in the Deccan region of the.
country is undeniable hot, and the scorching
sun might be an unplessant experience. Tre.
summers are usually ard and hested up, an
the temperature goes up to 40 degrees Celcius
uring the day. Tre season is majorly avoided
by toursts to plan a visit to Kumbakonam
‘because of the overal weather conditions.

          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
    </Card>
    
    
    
    </Col> 
    
    <Col lg={6}>
    
    
    <p className='fw-bold text-start mt-2'>What is the best time to visit :</p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    Located in the tropical area and the
Deccan region of the country, Kumbakonam has the typical tropical climate,
with pleasant winters and hot and dry summers. The monsoons are
accompanied with moderate rains and erratic shower spells, thus making the
time one of the suitable time to pay a visit. The summers are hot and largely
uncomfortable for one to visit the place.
    </p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    Kumbakonam has a typical tropical
climate. Regions around the Cauvery Delta are rather hot, but Kumbakonam
has moderate weather throughout the year and summers are said to be far
better than in hot coastal cities like Chennai. All said, there are numerous
places to visit in Kumbakonam and it were better you choose the most ideal
time for a visit. The monsoons are accompanied with moderate rains and
erratic shower spells, thus making the time one of the suitable time to pay a
visit.
    </p>
    </Col>
    </Row>
    </Container>
  )
}

export default TimeKumbakonam