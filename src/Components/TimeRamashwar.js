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

const TimeRamashwar = () => {

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
        
    
    <h6 className='fw-bold text-start h4'>02. Rameshwaram</h6>
    <Row className='mt-4'>
    
     <Col lg={6}>
     <Card style={{ width: '33rem' }} >
    <div onClick={handleClick} className={`${(style === true) ? 'class-modal' : "hide-modal"}`}>
    
    
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem'}}>
        <Modal.Title className='text-capitalize ms-1 fw-bold'>More about best time to travel to <br /> Rameshwaram</Modal.Title>
        <CloseButton aria-label="Hide" onClick={handleClose}/>
        </div>
        
    <   hr />
        
      <div style={{display:'flex', gap: '1.2rem', justifyContent:'center'}}>
      
        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/rameshwaram1.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Railway <br /> Bridge <br /> Source </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/rameshwaram2.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Lighthouse <br /> Source  </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/rameshwaram3.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Pilgrims <br /> Temple <br /> Source </Card.Text>
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
          <Offcanvas.Title style={{position:'relative', left:'22%'}} className=''>Best Time To Visit <br /> <span style={{position:'relative', left:'6%'}} >Rameshwaram</span> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 >Rameshwaram in Winter (December - February)</h6>
        <p style={{textAlign:'justify',textIndent:'4rem'}} className='mt-4'> Winters in Rameshwaram, which last
from October al the way to March, s sid to be.
the peak season for visting Rameshwaram If
Jou are visting the piace 3s 2 tourist and not 2
pilgrim. The temperature during these months
crops considerably than the other two seasons,
with t ranging from 20 cegree Celsius to 30
eres Cosius. The town is 3150 blessed with
chil winds which make the atmosphere even
more amicable. This season, therefore, makes
for the best time for tourists to take part in 2
plethora of outdoor activites and enjoy thelr
stay. During December, Remeshwaram also
hosts the festival of Arudhra Darshanam which
Is essentially a festival that celebrates an aspect
of Lord Shiva, This is sad to be one of the most
coebrateq festials amongst al the ones
celebrated in Rameshviaram.
          </p>
          <h6 className='mt-5'>
          Rameshvaram in Summers (March - June)
          </h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}} className='mt-4'>
            
          March marks the onset of the summer
          Season in Chena, It lasts til June and visiting
          the city during tis time is not for the faint-
          hearted, some say. The Gays are blazing hot
          with the temperatures soaring as high as 39°C
          and the nights are equally vam with the
          minimum hovering around 27°C. Exploring the
          cityscape curing this time of the year is an
          extremely exhausting affsir and is, therefore not
          aavised to tourists.
          </p>

          <h6 className='mt-5'>Rameshvaram in Monsoons (July - September)</h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}} className='mt-4'>
          Rameshvaram is susceptible to heavy
          ‘Gownpours and cyciones between the months
          of July anc September, These months mark the
          monsoon season In the region and is
          considered off-season as tourism does not
          realy thrive here. Tre exveme rainfalls ano
          strong winds could prove to be a indrance to

          Sightseeing and, therefore the monsoon season
          s rot recommended to tourists. The hotel
          tarifs, however, crop drastically curing the
          Season, making t decent option for budget
          travellers. In case one has to visit Crennai, they
          may want to plan 2 tp at the onset of the
          Season when the showers are moderate and
          allow traveling through the city.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
    </Card>
    
    
    
    </Col> 
    
    <Col lg={6}>
    
    
    <p className='fw-bold text-start mt-2'>What is the best time to visit :</p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    The best time to visit Rameshwaram is from October to April. However, as far as the weather goes, Rameshwaram
experiences tropical climate which means the though the seasons greatly
vary, the temperatures may not. This makes Rameshwaram a destination
which can be visited all year round. Winters (November to February) are cool
and temperature comes down to 17 degrees Celcius. This is the most
pleasant season for sightseeing and visiting neighbourhoods. The Monsoons
(uly to September) are humid with average rainfalls, but, the scenic view of
the coastal region during these months is enjoyable.
    </p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    Dotted with temples along the seashore and located on a beautiful island, rumour has it that this is where
Lord Rama built the bridge across the ocean to reach Sri Lanka. One of the
holiest places in the country, pilgrims flocks to this town to pay their respects
and worship Lord Shiva. With a tropical climate throughout the year, this
hamlet can pretty much be visited at any time.
    </p>
    </Col>
    </Row>
    </Container>
  )
}

export default TimeRamashwar