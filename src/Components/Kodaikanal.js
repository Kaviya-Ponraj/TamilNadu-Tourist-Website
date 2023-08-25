import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Kodaikanal = () => {
  return (
    <Container className='mt-5' id='Kodaikanal'>
    <h5>03.Kodaikanal</h5>
    <Row>
        <Col>
        <img src={require('../assets/Home/Kodaikanal.jpeg') } alt='Chennai img' width={'100%'} height={'100%'}/>
        </Col>
        <Col className='py-3'>
        <h6>"The Princess of Hill Stations"</h6>
        <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>
            Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon dstinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect gateway, Kodaikanal means 'the gift of the forests'.
        </p>
        <p className='text-indent' style={{textIndent:'4rem', textAlign:'justify'}}>
           Nested amidst the rolling slopes of the Palani Hills, Kodaikanal stands at an altitude of 7200 feet above the sea level, and ance you visit this hill station, you will find that every bit of what you have imagined to be is real. Kodaikanal is a place you can go to take a break from the rigours of daily city life, and this hill station lets you sit back and connect with nature as you head out on  biking or trekking trails or take a stroll through the vast forests surrounding the town.
        </p>
        </Col>
    </Row>
    <Row className='mt-5'>
       <h6 className='text-capitalize text-center'>must visit places in Kodaikanal</h6> 
    </Row>
    <Row className='mt-4'>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/kodaikanal1.jpeg')} alt='chennai img'/>
            <Card.Body>
                <Card.Title>Green Valley View</Card.Title>
                <Card.Text>
                   Formerly known as Suicide point, the green valley view offers a breath taking view of the plains, deep...
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/kodaikanal2.jpeg')} alt='chennai img'/>
            <Card.Body>
                <Card.Title>Kodai Lake</Card.Title>
                <Card.Text>
                    Kodaikanal Lake is manmade lake in the Kodaikanal city which is also known as Kodai Lake Vera...
                
               
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/kodaikanal3.jpeg')} alt='chennai img'/>
            <Card.Body>
                <Card.Title>Bear Shola Falls</Card.Title>
                <Card.Text>
                    Located at a mere distance of 2 kilometres from the Kodaikanal Lake the Bear Shola Fall is a popular...
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/kodaikanal4.jpeg')} alt='chennai img'/>
            <Card.Body>
                <Card.Title>Pillar Rocks</Card.Title>
                <Card.Text>
                    Situated in the Princes of Hill stations, Kodaikanal the Pillar Rocks have become a lovely picnic... 
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
    </Row>
</Container>
  )
}

export default Kodaikanal