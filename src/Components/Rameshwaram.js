import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Rameshwaram = () => {
  return (
    <Container id='Rameswaram'>
        <h5>02.Rameshwaram</h5>
        <Row>
            <Col>
            <img src={require('../assets/Home/Rameshwaran.jpeg') } alt='Chennai img' width={'100%'}/>
            </Col>
            <Col className='py-3'>
            <h6>"The Bridge on the Indian Ocean"</h6>
            <p className='py-2' style={{textIndent:'4rem'}}>
                Rameshwaram is located on a beautiful island in the South Indian statenof Tamil Nadu. It is seperated by a small Pamban channel from Sri Lanka. According to Hindu mythilogy, this is the place where Lord Rama created a bridge across the sea to Sri Lanka.
            </p>
            <p className='text-indent' style={{textIndent:'4rem'}}>
                Renowned for its magnificient prakaras with massive sculptured pillrs on either side. The Ramanathaswamy Temple houses the longest corridor in the world. agniteertham is famous for its sacred waters and pilgrims perform poojas in honour of their ancestors at this seashore. The five-faced Hanuman Temple holds the floating stone which wasc used to build the bridge between India and Sri Lanka. Rameshwaram has the first sea bridge connecting the town of Mandapam with Pamban Island and Rameshwaram.
            </p>
            </Col>
        </Row>
        <Row className='mt-5'>
           <h6 className='text-capitalize text-center'>must visit places in rameshwaram</h6> 
        </Row>
        <Row className='mt-4'>
            <Col>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={require('../assets/Home/rameshwarem1.jpeg')} alt='chennai img'/>
                <Card.Body>
                    <Card.Title>Dhanushkodi Temple</Card.Title>
                    <Card.Text>
                        Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India.However due to a...
                    </Card.Text>
                <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={require('../assets/Home/rameshwarem2.jpeg')} alt='chennai img'/>
                <Card.Body>
                    <Card.Title>Lakshmana Temple</Card.Title>
                    <Card.Text>
                    Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman brother of...
                    
                    {/* brother of Lord Rama. In order... */}
                    </Card.Text>
                <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={require('../assets/Home/Rameshwaram3.jpeg')} alt='chennai img'/>
                <Card.Body>
                    <Card.Title>Rameshwaram Temple</Card.Title>
                    <Card.Text>
                        A perfect blend of mind-bloggling architecture and spiritual significance, Rameshwaram Temple, also...
                        {/* has the temple deity Shiva... */}
                    </Card.Text>
                <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={require('../assets/Home/rameshwarem4.jpeg')} alt='chennai img'/>
                <Card.Body>
                    <Card.Title>Villoondi Tirtham</Card.Title>
                    <Card.Text>
                    Villoondi Tirtham is a beach which is also considered a sacred natural water body and a favourite amngst tourists...
                    </Card.Text>
                <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Rameshwaram