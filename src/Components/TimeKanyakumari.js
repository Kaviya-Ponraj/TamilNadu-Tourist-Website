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

const TimeKanyakumari = () => {
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
    
    <h6 className='fw-bold text-start h4'>05. Kanyakumari</h6>
    <p className='fw-bold text-start mt-5'>What is the best time to visit :</p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    The months from October until
February are considered the best time to visit Kanyakumari, as the weather
remains calm and pleasant. Although this coastal region is a bit humid, this is
the best time to try out some adventurous water sports, going on
sightseeing and outings, undertaking beach activities and savouring the
spectacular sunset views. With the beginning of winters in November,
Kanyakumari also hosts many festivals during this month, for instance the
Cape Festival.
    </p>
    <p style={{textAlign:'justify',textIndent:'14rem'}}>
    Kanyakumari is the southernmost tip
of India. As Kanyakumari is close to the seas, the expanse experiences a
tropical coastal climate. There are not many variations in the seasons, as
there is an overall humidity and seasonal rain during the year.
    </p>
    </Col>
     <Col lg={6}>
     <Card style={{ width: '34rem' }} className='class-modal'>
    <div onClick={handleClick} className={`${(style === true) ? 'class-modal' : "hide-modal"}`}>
    
    
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem'}}>
        <Modal.Title className='text-capitalize fw-bold'>More about best time to travel to <br /> Kanyakumari</Modal.Title>
        <CloseButton aria-label="Hide" onClick={handleClose}/>
        </div>
        
    <   hr />
        
      <div style={{display:'flex', gap: '1.2rem', justifyContent:'center'}}>
      
        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/kanyakumari1 (1).jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text> Landscape  <br /> Source </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/kanyakumari1 (2).jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text> Sea  <br /> Source </Card.Text>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
        <img src={require('../Gallery/kanyakumari1 (3).jpeg')} width={'100rem'} height={'150rem'} alt='chennai img'/>
        <Card.Text>Coast <br /> Source </Card.Text>
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
          <Offcanvas.Title style={{position:'relative', left:'20%'}} className=''>Best Time To Visit <br /> <span style={{position:'relative', left:'13%'}} >Kanyakumari</span> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6>Kanyakumari in Winters (October to March)</h6>
        <p style={{textAlign:'justify',textIndent:'4rem'}}>  Winters, the best time to vist
        Winters in Kanyakumari are the best
time for sightseeing and traveling around the
place. Attractions such as Vavathura, Chitraral
Hil Temple a0 Thiruvalvar Statue are popular
among the tourists. November is a very
favourable month for visiting Kanyakumari as
the wether is pleasant with cesr ses and less
humidity. Temperatures vary from 15 cegree
Celcius to 35 degres celcus. It 5 350 the perfect
time for indulging in beach activites like
sunbathing, swimming and surfing. December
to February are the peak seasons; hence the
tourism sector gets maximum revense uring
this time.


          </p>
          <h6 className='mt-5'>
         
Kanyakumari in Summers (April to June)
          </h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}} className='mt-3'> 
            
         Kanyakumari experiences mocerste
weather curing summers, with temperatures
ranging from 22 Gegrees to 35 Gegrees Celcius.
During this period the weatner is humic;
however, the cimatic conditions are apt for
Visiting the various attractions of the place
inciuging Vivekananda Rock, Vattakottal Fort
an Gandhi Museum. Apart from this, the
various besch activites are open throughout
summer, so tourists can Induige Tn outdoor
Visits, sea bathing and surfing. though early
summers are an ideal time to visit Kanyakumari,
the month of April gets considerably hot which is why this month is not prefered for travel.
However, the place gets vacant with less crowd
n6 cheaper accomodation - a perfect time for
bucget ravelers

          </p>

          <h6 className='mt-5'>Kanyakumari in Monsoons (July to.
September)
</h6>
          <p style={{textAlign:'justify',textIndent:'4rem'}} className='mt-3'>
        
Mansoons in Kanyakumari starts in
June which helps in tremendously lowering the
temperature, However, the level of humidity
keeps rising making it difcut (o travel around.
If youre a pluviophile, then the month of
August Is best recommended 3s the
atmosphere is pleasant with a sight drizze that
enhances the beauty of this coast. Apart from its
humidity, this is a good time to vist during
‘monsoons. The frequent showers put a hold on
sightsesing which affects the footfal in
Kanyakumar in September, however, the Cape
Festival takes place In October, and by tis time
tourists from around India vst Kanyakumari
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

export default TimeKanyakumari