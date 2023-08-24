import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Kumbakonam = () => {
  return (
    <Container className='mt-5' id='Kumbakonam'>
    <h5>06.Kumbakonam</h5>
    <Row>
        <Col>
        <img src={require('../assets/Home/Kumbakonam.jpeg') } alt='Chennai img' width={'100%'}/>
        </Col>
        <Col className='py-3'>
        <h6>"The Cambridge of India"</h6>
        <p className='py-2' style={{textIndent:'4rem'}}>
         Kumbakonam Tourism Sandwiched between two great rivers of southern India. Cauvery and Arsala, Kumbakonam is a gorgeous temple town in the heart of Thanjore district in TamilNadu. The town is a place for rivers of history and those seeking to understnd India's cultural roots and Hinduism.
        </p>
        <p className='text-indent' style={{textIndent:'4rem'}}>
         The town is also known for its grand festival called Mahamham festival which is celebrated every twelve years at the Mahamaham Tank. The town is one of the oldest in the Indian history and knowm for its famed temples. Chola heritage and also its marvellous educational Institutes. The town is one of the oldest in the Indian history and knowm for its famed temples. Chola heritage and also its marvellous educational Institutes. 
        </p>
        </Col>
    </Row>
    <Row className='mt-5'>
       <h6 className='text-capitalize text-center'>must visit places in Kumbakonam</h6> 
    </Row>
    <Row className='mt-4'>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/Kumbakonam.jpeg')} alt='chennai img'/>
            <Card.Body>
                <Card.Title>Sarangapani Temple</Card.Title>
                <Card.Text>
                Sarangapani Temple, an ancient temple dedicated to Lord Vishnu, is located in the town of kumbakonam...
                   
                   
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/kumbakonam2.jpeg')} alt='chennai img'/>
            <Card.Body>
                <Card.Title>Nageswaran Temple</Card.Title>
                <Card.Text>
                 Constructed as a chariot, the Nageswaran Temple is an important Shavite temple. A piece of genius Chola...
                
               
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/Kumbakonam3.jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Adi Kumbeshwara Temple</Card.Title>
                <Card.Text>
                  Located in the town of Darsauram near Kumbakonam in TamilNadu, Airvatesvara...
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/kumbakonam1 (4).jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Airvatesvara Temple</Card.Title>
                <Card.Text>
                Located in the town of Darsauram near Kumbakonam in TamilNadu, Airvatesvara Temple is ...
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
    </Row>
</Container>
  )
}

export default Kumbakonam