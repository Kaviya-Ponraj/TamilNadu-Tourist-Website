import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Madurai = () => {
  return (
    <Container className='mt-5' id='Madurai'>
    <h5>07.Madurai</h5>
    <Row>
        <Col>
        <img src={require('../assets/Home/Madurai.jpeg') } alt='Chennai img' width={'100%'}/>
        </Col>
        <Col className='py-3'>
        <h6>"The Lotus City"</h6>
        <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>
        Madurai Tourism Madurai, the cultural capital of TamilNadu, is one of the oldest continuously inhabited cities of India. Ruled by Pandya kings for the longest time in its history, it is called as the 'Lotus City' as it was planned and built in the shape of a lotus. Madurai is known for Meenakshi Amman Temple, dedicated to the goddess Meenakshi with a sanctum for her consort, Sundareshwarar.
        </p>
        <p className='text-indent' style={{textIndent:'4rem', textAlign:'justify'}}>
        There are many other ancient temples in Madurai, including Thiruparankundram. It is one of the important old temples dedicated to Lord Muruga Karthikeya and is located on a  hillock approximately 8 km from the city. Having trade ties with ancient Rome, the place holds a great cultural heritage. With butling bazaars and fantastic street food, Madurai has heritage walks conducted throughout the day.
        </p>
        </Col>
    </Row>
    <Row className='mt-5'>
       <h6 className='text-capitalize text-center'>must visit places in Madurai</h6> 
    </Row>
    <Row className='mt-4'>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/madurai1.jpeg')} alt='chennai img'/>
            <Card.Body>
                <Card.Title>Vaigai Dam</Card.Title>
                <Card.Text>
                Vaigai dam, a magnificient human made structure is constructed over River vaigai near Andipatti, Theni...
                   
                   
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/madurai2.jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Meghmalai</Card.Title>
                <Card.Text>
                Often  known as the 'High Wavy Mountains', Meghmalai is a pelit yet beautiful place located in the...
               
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/madurai3.jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Samanar Hills</Card.Title>
                <Card.Text>
                  Located in Keelakuyilkudi village near Madurai. smanar Hills or Samanar Malai is a beautiful hill rock.
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/madurai4..jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Thirumalai Nayakar</Card.Title>
                <Card.Text>
                Thirumalai NAyakar Palace was erected in 1636 Ad in the city of MAdurai, by King Thirumalai NAyakar...
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
    </Row>
</Container>
  )
}

export default Madurai