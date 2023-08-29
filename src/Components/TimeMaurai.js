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

const TimeMaurai = () => {
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
    
    <h6 className='fw-bold text-start h4'>07. Madurai</h6>
    <p className='fw-bold text-start mt-5'>What is the best time to visit :</p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    October to March is the best time to
visit Madurai. With a hot and dry climate for most of the year, Madurai is best
visited during the winter season. The town is known for its ancient temples
and other architectural and religious masterpieces and receives a generous
crowd of people throughout the year. Madurai is the most fascinating and
welcoming during the months between October and March which coincides
with its winter season.
    </p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    Madurai is one of the oldest culturally
vibrant cities of India. Its historical places and temples have a steady flow of
tourists from all around the world.
    </p>
    </Col>
     <Col lg={6}>
     <Card style={{ width: '34rem' }} className='class-modal'>
    <div onClick={handleClick} className={`${(style === true) ? 'class-modal' : "hide-modal"}`}>
    
    
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem'}}>
        <Modal.Title className='text-capitalize fw-bold'>More about best time to travel to <br /> Madurai</Modal.Title>
        <CloseButton aria-label="Hide" onClick={handleClose}/>
        </div>
        
    <   hr />
        
      <div style={{display:'flex', gap: '1.2rem', justifyContent:'center'}}>
      
        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/madurai1.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text> </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/madurai2.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>  </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/madurai3.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text> </Card.Text>
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
          <Offcanvas.Title style={{position:'relative', left:'20%'}} className=''>Best Time To Visit <br /> <span style={{position:'relative', left:'25%'}} >Madurai</span> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6>Madurai in Winter (December-February)</h6>
        <p style={{textAlign:'justify',textIndent:'4rem'}}>  Winters, the best time to vist
        Many locals look forward to. the
winter season In Madural due to the relief t
rings from the summers. Th season fasts from
December to February. The temperature curing
the winter months ranges from 20 cegree
Celsius to 29 degree Celsius. Tre season is
cnaracterises by moderately cool temperatures
whieh make traveling round the city 2 pleasant
experience for al individuals. Pongal 3 videly
celebrated festival s regarded a5 extremely
special in Maoursl The festival lasts for three
Gays and comprises of praying for a good
rarest by locas ano farmers alike. Otrer
reious festivals are iso celebrated with great
vigour. However, hotel prices may climb up as
ths is the peat tourist season.



          </p>
          <h6 className='mt-5'>
         

          Madurai in Monsoon (June-August)
          </h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}} className='mt-3'> 
            
          Monsoon season in Madurai lasts
from June to August. Although the monsoon
Season continues for 2 smaller amount of ime,
the south-west monsoon winds bring in 3 large
amount of rainfall which is extremely heavy. This
rainfall also makes the weather gloomy but stil
makes the Cty beautiful as the nature round
Madurai mainly benefits from ths rain. Ths is
the perfect time to vist Madurai for peopie who
love greeny ano the lsh rata
surmoundings.

          </p>

          <h6 className='mt-5'>Madurai in Summer (March-July)
</h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}} className='mt-3'>
        

          The summer season Tn Madura! lasts
from March to May. Tne temperatures uring
ths season range from 24 degree Celsius to 34
egree Celsius, Tis means that the weather in
Madu cuing these months is
uncharactersticaly hot. It 1s also realy cry
which makes the heat more noticeable and
discourages travelers to vist. The summer
sesson therefore, an offsesson for Madura,
00 the owes are comparative less as well.
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

export default TimeMaurai