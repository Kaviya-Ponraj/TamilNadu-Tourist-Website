import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Accordion from 'react-bootstrap/Accordion';
import TimeChennai from './TimeChennai';
import TimeRamashwar from './TimeRamashwar';
import TimeKodaikanal from './TimeKodaikanal';
import TimeOoty from './TimeOoty';
import TimeKanyakumari from './TimeKanyakumari';
import TimeKumbakonam from "./TimeKumbakonam";
import TimeMaurai from './TimeMaurai';
import TamilYercaud from './TamilYercaud';
import TimeTheni from './TimeTheni';
import TimeHoganakkal from './TimeHoganakkal';

const BestTimeToVisit = () => {
  return (
    <>
    <Container className='mt-5'>
    <h6 className='h5'>TAMILNADU TOURISM</h6>
    <h3 className='text-capitalize'>best time to visit</h3>
    <Row className='mt-5'>
        <Col lg={6}>
            <figure>
            <img src={require('../Gallery/Climate.jpeg')} height={'100%'} width={'100%'} alt='best time to visit'/>
            <figcaption className='text-capitalize text-center'>best time to visit</figcaption>
            </figure>
        </Col>
        <Col lg={6}>
            <h6 className='text-center'>More about Best Time to Travel to Tamil Nadu</h6>
            
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tamil Nadu in Summer (March - May)</Accordion.Header>
        <Accordion.Body style={{textIndent:'2.5rem', textAlign:'justify'}}>
        This season begins in March and lasts until May. The temperatures are
        high, ranging between 35°C and 40°C and so is the humidity especially in the
        coastal regions. Sightseeing during this time is not very convenient because of
        the improper temperature. The season, however, is visited to witness the
        festival of Chithirai held in the Madurai temple in the month of March-April.
        Puthandu, another important festival that marks the Tamil New year falls in
        mid-April and Mahamahan Festival is celebrated in March (celebrated once in
        12 years). If visiting during summer, it is a good idea to visit the attractions on
        higher attitudes. Hill stations like Ooty, Kodaikanal and Yelagiri hills are the best
        where the temperature is pleasant and has scenic views that tourists can
        witness.
        
        <img src={require('../Gallery/image.jpeg')} width={'100%'} style={{position:'relative', left:'0'}} />
        <figcaption className='text-center text-capitalize'>Pillar Rocks Of KodaikanalSource</figcaption>
        

        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="1">
        <Accordion.Header>Tami Nadu in Monsoon (June - September) </Accordion.Header>
        <Accordion.Body style={{textIndent:'2.5rem', textAlign:'justify'}}>
        Tris Souther state sees monsoon two times 3 year - once between
        June to Se and the retreating monsoon In November and December
        Tne temperature is slightly less than what ts In the summer season. t ranges
        between 25°C and 30°C. Tne rains often occur n long spels and the humiaity
        uring this time is high especially in costa! regions. Some of the ily areas massive rainfall and venturing out during this time around is not a great idea
        Tne Eastern seaboard of Tami Nadu sometimes experiences cyclones during
        the te monsoon making an use pace fo visit.

        
        <img src={require('../Gallery/image1.jpeg')} width={'100%'}/>
        <figcaption className='text-center text-capitalize'>A Rainy Day in Chennai Source</figcaption>
       
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Tamil Nadu in Winter (October - February)</Accordion.Header>
        <Accordion.Body style={{textIndent:'2.5rem', textAlign:'justify'}}>
        Winter in Tamil Nadu begins in October and lasts until February.
        November and December have intermittent rainfall because of the retreating
        monsoon, but otherwise, the temperature remains between 10°C and 15°C. The
        humidity is low, 2nd it is the best climate for sightseeing and touring the cities.
        Most of the tourist attractions are bustling with activities during this season.
        The beaches call the beach lovers, and adventure seekers for bathing in the
        sun, swimming and water sports as the temperature remains moderate all
        through the day.

        <img src={require('../Gallery/image2.jpeg')} width={'100%'} />
        <figcaption className='text-center text-capitalize'>Pechiparai Resrvoiur in Kanyakumari District Source</figcaption>
        
        </Accordion.Body>
      </Accordion.Item>

      
      
 
    </Accordion>
        </Col>
    </Row>

    <Row>
        <p className='' style={{textAlign:'justify',textIndent:'4.5rem'}}>The best time to visit Tamil Nadu is during the winter season, ie. from November to February when the temperature is relatively low, and pleasant to explore
the attractions in the state. Monsoons bring torrential downpour which makes it an inappropriate time to travel through Tamil Nadu. Summer, however, is perfect for
exploring the hills stations. Tourists can pick the region they wish to see according to the season because offseason visits could be extremely inconvenient for some.</p>
    </Row>
    </Container>
    <TimeChennai />
    <TimeRamashwar />
    <TimeKodaikanal />
    <TimeOoty />
    <TimeKanyakumari />
    <TimeKumbakonam />
    <TimeMaurai />
    <TamilYercaud />
    <TimeTheni />
    <TimeHoganakkal />
    </>

  )
}

export default BestTimeToVisit