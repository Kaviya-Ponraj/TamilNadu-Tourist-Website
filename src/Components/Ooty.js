import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Ooty = () => {
  return (
    <Container className='mt-5' id='Ooty'>
    <h5>04.Ooty</h5>
    <Row>
        <Col>
        <img src={require('../assets/Home/Ooty.jpeg') } alt='Chennai img' width={'100%'}/>
        </Col>
        <Col className='py-3'>
        <h6>"Queen of the Nilgiris"</h6>
        <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>
           Nestred amidst Nilgiri hills, Ooty, also known as Udadagamandalam, is a hill station in Tamil Nadu which serves as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway.
        </p>
        <p className='text-indent' style={{textIndent:'4rem', textAlign:'justify'}}>
          The NIlgiri mountain railway is the steepest track in all of Asia. Remember the hit song 'Chaiya Chiaya' whetre Shahrukh Khan and Malika Arora matching steps on top of a train? Remember the breathtaking locales as train chuggled its way acroos lush greenery? Yes, that was the Nilgiri Mountain Railways and the Nilgiri Mountains all along Dotted with tea  gardens, serene waterfalls, winding country lanes, and charming colonial architechture. Ooty is the perfect rewspite everyone.
        </p>
        </Col>
    </Row>
    <Row className='mt-5'>
       <h6 className='text-capitalize text-center'>must visit places in Ooty</h6> 
    </Row>
    <Row className='mt-4'>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/ooty1.jpeg')} alt='chennai img'/>
            <Card.Body>
                <Card.Title>Nilgiri Mountain Railway</Card.Title>
                <Card.Text>
                   Nilgiri mountain railway, also known as Toy Train in Ooty, is one of the key attractions of...
                   
                    {/* the popular hill... */}
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/ooty1 (2).jpeg')} alt='chennai img'/>
            <Card.Body>
                <Card.Title>Ooty Botanical Garden</Card.Title>
                <Card.Text>
                   Ooty Botanical Garden lie on the lower slopes of the Doddabetta peak, the Goverment Botanical...
                
               
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/ooty1 (3).jpeg')} alt='chennai img' height={'170rem'}/>
            <Card.Body>
                <Card.Title>Emerald Lake</Card.Title>
                <Card.Text>
                   Emerald Lake is situated in Emerald Village around 20-22 kilometers from the main city of Ooty and...
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/ooty1 (4).jpeg')} alt='chennai img' height={'170rem'}/>
            <Card.Body>
                <Card.Title>Dolphins Nose</Card.Title>
                <Card.Text>
                   Located about 12km away from Coonoor is the Dolphin's Nose about 1,500 meters above sea level, The tip...
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
    </Row>
</Container>
  )
}

export default Ooty