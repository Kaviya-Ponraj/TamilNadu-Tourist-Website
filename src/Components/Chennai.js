import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Chennai = () => {
  return (
    <Container className='my-5' id='Chennai'>
        <h5>01.Chennai</h5>
        <Row >
            <Col>
            <img src={require('../assets/Home/Chennai.jpeg') } alt='Chennai img' width={'100%'}/>
            </Col>
            <Col className='py-3'>
            <h6>"The Detroit Of India"</h6>
            <p className='py-2' style={{textIndent:'4rem'}}>
                Formerly known as Madras, Chennai is the capital city of the state of Tamil Nadu, in the southern part of India. Located on the Coramendel coast of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This 'capital of south', is one among the four metropolitan siblings of india, having a rich cultural history which it perfectly balances with its metropolis lifestyle.
            </p>
            <p className='text-indent' style={{textIndent:'4rem'}}>
                Amid its chaos of traffic and swelter9ing humid climate, Chennai is worth visiting for its temples steeped in south-Indian culture, British-era musems and monuments, culinary delights and Marina Beach (Second largest urban beach in the world). Chennai's skyline is famous for its towering skyscrapers, but the heart of Chennai has an old-world charm to it that refuses to be overshadowed.
            </p>
            </Col>
        </Row>
        <Row className='mt-5'>
           <h6 className='text-capitalize text-center'>must visit places in chennai</h6> 
        </Row>
        <Row className='mt-4'>
            <Col>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={require('../assets/Home/chennai4.jpeg')} alt='chennai img'/>
                <Card.Body>
                    <Card.Title>Marina Beach</Card.Title>
                    <Card.Text>
                    Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal...
                    </Card.Text>
                <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={require('../assets/Home/chennai2.jpeg')} alt='chennai img'/>
                <Card.Body>
                    <Card.Title>MGR Film City</Card.Title>
                    <Card.Text>
                    Having been established in the year 1994, a considerably new structure , the MGR Film city is managed...
                    </Card.Text>
                <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={require('../assets/Home/chennai3.jpeg')} alt='chennai img'/>
                <Card.Body>
                    <Card.Title>Marundeeshwarar Temple</Card.Title>
                    <Card.Text>
                        The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai...
                        {/* has the temple deity Shiva... */}
                    </Card.Text>
                <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={require('../assets/Home/chennai4.jpeg')} alt='chennai img'/>
                <Card.Body>
                    <Card.Title>Breezy Beach</Card.Title>
                    <Card.Text>
                            Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar... 
                            {/* in Chennai. Being smaller and less polluted... */}
                    </Card.Text>
                <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Chennai