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

const TimeChennai = () => {

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
    <>    <Container className='text-center mt-5 ' >
        
    <h5>TAMILNADU TOURISM</h5>
    <p className='fw-bold mb-5'>
        Best Time To Visit
    </p>
    <Row className='' style={{marginTop:'5rem'}}>
    <Col lg={6}>
    
    <h6 className='fw-bold text-start h4'>01. Chennai</h6>
    <p className='fw-bold text-start mt-5'>What is the best time to visit :</p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    October to February during the winters and the pr
pre-monsoons season is the best time to visit Chennai. This time of the year is considered i
as the best time to explore the metropolitan city as summers are scorching and monsoons
bring torrential downpours and cyclones. Its geographical location on the beautiful
coastline mostly keeps the city's weather hot and humid.
    </p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    Chennai is one of the cities that has successfully

Chennai, Chennai, Chennai

blended the modern, traditional and sides with ease. The city welcomes everyone who
India Kathipara Beach

wants to seek a soulful and spiritual connection but also those who love shopping for
Source Source Source

sarees and enjoy good food. There is no conundrum in Chennai when you visit. Its all
about the moment, whether you decide to take a stroll down Marina Beach.
    </p>
    </Col>
     <Col lg={6}>
     <Card style={{ width: '34rem' }} className='class-modal'>
    <div onClick={handleClick} className={`${(style === true) ? 'class-modal' : "hide-modal"}`}>
    
    
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem'}}>
        <Modal.Title className='text-capitalize fw-bold'>More about best time to travel to <br /> chennai</Modal.Title>
        <CloseButton aria-label="Hide" onClick={handleClose}/>
        </div>
        
    <   hr />
        
      <div style={{display:'flex', gap: '1.2rem', justifyContent:'center'}}>
      
        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/chennai1.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Chennai, <br /> India <br /> Source </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/chennai2.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Chennai, <br /> India <br /> Source </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/chennai3.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Chennai, <br /> India <br /> Source </Card.Text>
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
          <Offcanvas.Title style={{position:'relative', left:'20%'}} className=''>Best Time To Visit <br /> <span style={{position:'relative', left:'28%'}} >Chennai</span> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6>Chennai in Winters (November - February)</h6>
        <p style={{textAlign:'justify',textIndent:'4rem'}} className='mt-4'>  Winters, the best time to vist
          Chennai, begin in November and last til
          February. Even the transitional mont of
          (October is qute good for exploring the city. The
          weather is quite peasant win the madmum
          temperature hovering around 30°C and the
          minimum around 22°C. Hts proximity to the
          coastine aio resus In occasional rains, but t
          will not be something that will hamper travel
          plans (0 3 grest extent, Kapalesshuarar temple,
          Govemment Museum, Fort St George, St
          andrews Church, Fort Museum, Nall Siks,
          Kaiskshetra Foundation, Vivekananda House
          etc. are some of the attractions that can be seen
          when in Chennai, Th season 1s also famous for
          the amay of festivas organised in the city like
          the Dance and Music Festival in December,
          Travel & Tourism Fair and Pongal In January and
          the Natyariall Dance Festival nlc in February!
          March, These events are traditional and
          important celebrations of Chennai ang. its
          culture and must not be missed when there.
          </p>
          <h6 className='mt-5'>
          Chennai in Summers (March - June)
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

          <h6 className='mt-5'>Chennai in Monsoons (July - September)</h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}} className='mt-4'>
          Chemnai is susceptible to heavy
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

    </Row>
    </Container>
    
    </>

  )
}

export default TimeChennai