import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Yercaud = () => {
  return (
    <Container className='mt-5' id='Yercaud'>
    <h5>08.Yercaud</h5>
    <Row>
        <Col>
        <img src={require('../assets/Home/Yarcaud.jpeg') } alt='Chennai img' width={'100%'} height={'100%'}/>
        </Col>
        <Col className='py-3'>
        <h6>"The Land of Seven Forests"</h6>
        <p className='py-2' style={{textIndent:'4rem'}}>
            Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud is a hill station in the Eastern Ghats steeped in abundant greenery. Commonly called  'Ooty of the poor', this region has a dating bact to the tmime of British. Located at an altitude of 4970 feet, Yercaud is known for its vast expenses of coffee plntations and great weather.
        </p>
        <p className='text-indent' style={{textIndent:'4rem'}}>
            Yeraud lake is the main point of attraction of the region. One of the many highlights is the summer festival that takes place in May. It is dedicated to Lord Servarayan, the supreme god of the ranges and gives visitors a glimpse into the rich heritage of this region.
        </p>
        </Col>
    </Row>
    <Row className='mt-5'>
       <h6 className='text-capitalize text-center'>must visit places in Yercaud</h6> 
    </Row>
    <Row className='mt-4'>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/yercaud...(1).jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Pagoda Point</Card.Title>
                <Card.Text>
                Located in the eastern part of Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated...
                   
                   
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/yercaud1 (2).jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Botanical Garden</Card.Title>
                <Card.Text>
                Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various...
               
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/yercaud1.(3).jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Emerald Lake</Card.Title>
                <Card.Text>
                  The most alluring aspect of Yeracaud is its big yet natural lake very popularly known as the Emerald Lake...
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/yercaud1 (4).jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Lady,s Seat</Card.Title>
                <Card.Text>
                    Lady,s Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam... 
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
    </Row>
</Container>
  )
}

export default Yercaud