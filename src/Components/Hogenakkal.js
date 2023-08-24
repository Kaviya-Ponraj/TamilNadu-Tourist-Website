import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Hogenakkal = () => {
  return (
    <Container className='my-5' id='Hogenakkal'>
    <h5>10.Hogenakkal</h5>
    <Row>
        <Col>
        <img src={require('../assets/Home/Hogenakkal.jpeg') } alt='Chennai img' width={'100%'} height={'100%'}/>
        </Col>
        <Col className='py-3'>
        <h6>“The one that will take your breath away"</h6>
        <p className='py-2' style={{textIndent:'4rem'}}>
        
Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri
district of Tamil Nadu where the Kaveri river splits into multiple streams of
waterfalls, Located at a distance of 180 km from Bangalore, Hogenakkal has
water throughout the year. The carbonite rocks, the coracle (basket boat)
tides, freshwater fish, oil massages by locals make it a perfect one day trip or
a weekend getaway from Bangalore.
        </p>
        <p className='text-indent' style={{textIndent:'4rem'}}>
        Sometimes referred to as the “Niagara Falls of India," it is also known
for the medicinal baths. Also known at Marikottayam, Hoge actually means
smoke and Kal means rock. Recently, the place has been found to be littered
with plastic bags and garbage and the fish market outside the waterfall
might stink. Weekends can be crowded. Keep all these points in mind before
visiting.
        </p>
        </Col>
    </Row>
    <Row className='mt-5'>
       <h6 className='text-capitalize text-center'>Must Visit Place In Hogenakkal </h6> 
    </Row>
    <Row className='mt-4'>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/hogenakkal1.jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Theerthamalai Temple</Card.Title>
                <Card.Text>
                Theerthamalai is a popular pilgrim centre close to Hogenakkal. One of its most popular destinations is the...
                   
                   
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/hogenakkal2..jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Hogenakkal Falls</Card.Title>
                <Card.Text>
                Hogenakkal Falls is a scintillating waterfall that is located on river Kaveri in the Dharmapuri district of...
               
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/hogenakkal3.jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Pennagram Village</Card.Title>
                <Card.Text>
                The village is located about 20 km away from Hogenakkal and is famous for its weekly fair that it holds every..
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/hokenakkal4..jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title> Mettur Dam</Card.Title>
                <Card.Text>
                Mettur Dam, situated 30 miles and from Salem in a small Mettur Village, is one of the largestdams in India. Built...

                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
    </Row>
</Container>
  )
}

export default Hogenakkal