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

const TimeTheni = () => {
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
    
    <h6 className='fw-bold text-start h4'>09. Theni</h6>
    <p className='fw-bold text-start mt-5'>What is the best time to visit :</p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    In order to spend your vacation in the
lap of nature in south India, no place would be better than the town of
Cardamom - Theni. The best season to visit Then is winter when the weather
remains all pleasant and favourable for tourism. On the other hand, summer
remains hot and monsoon receives a heavy rainfall which makes the two
seasons not suitable for touring.
    </p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    Theni is known for having a salubrious
climate throughout the year. The average temperature ranges between 15
degrees Celsius to 40 degrees Celsius. The best months to visit are from the
month of December to February since the weather is pleasant and allows you
to indulge in a number of outdoor activities.
    </p>
    </Col>
     <Col lg={6}>
     <Card style={{ width: '34rem' }} className='class-modal'>
    <div onClick={handleClick} className={`${(style === true) ? 'class-modal' : "hide-modal"}`}>
    
    
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem'}}>
        <Modal.Title className='text-capitalize fw-bold'>More about best time to travel to <br /> Theni</Modal.Title>
        <CloseButton aria-label="Hide" onClick={handleClose}/>
        </div>
        
    <   hr />
        
      <div style={{display:'flex', gap: '1.2rem', justifyContent:'center'}}>
      
        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/theni1.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text> </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/theni2.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>  </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/theni3.jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
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
          <Offcanvas.Title style={{position:'relative', left:'20%'}} className=''>Best Time To Visit <br /> <span style={{position:'relative', left:'30%'}} >Theni</span> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6>Theni in summer</h6>
        <p style={{textAlign:'justify',textIndent:'4rem'}}>  Winters, the best time to vist
        Tne summer season in Then starts from
the month of March and continues tl May. The
‘months are general hot and not favourable to vist
Then. Temperature dung these months ranges
between 24°C and 42°C



          </p>
          <h6 className='mt-5'>
         

          Theni in Winter
          </h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}} className='mt-3'> 
            
         
Monsoon in Then! strkes in the month of
June ang lasts until September. The town
experiences 3 heavy rainfal curing ts time that
ils the tonn with zest Despite being at peak of its
‘beauty, the town of Theni Is not best to vist during

          </p>

          <h6 className='mt-5'>
Theni in Monsoon
</h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}} className='mt-3'>
        

          December mars the beginning of winter
season in Theni which ends in the month of
February. The temperature during these months
varies fiom 22°C to 32°C, and thus, the town
winesses a pleasant weather and make the sesson
best tovist Theni.
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

export default TimeTheni