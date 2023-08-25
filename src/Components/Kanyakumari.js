import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Kanyakumari = () => {
  return (
    <Container className='mt-5' id='Kanyakumari'>
    <h5>05.Kanyakumari</h5>
    <Row>
        <Col>
        <img src={require('../assets/Home/Kanyakumari.jpeg') } alt='Chennai img' width={'100%'}/>
        </Col>
        <Col className='py-3'>
        <h6>"Cape Comorin or The Land's End"</h6>
        <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>
          Kanyakumari Tourism Boerded by the three seas - Arabian, Indian and the Bay of Bengal, Knayakumari is the southernmost tip of the Indian Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin.
        </p>
        <p className='text-indent' style={{textIndent:'4rem', textAlign:'justify'}}>
          Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. But, this is not a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquuoise blue, deep blue and sea green waters of the three seas. To enjoy the best view tower. The town has a mountainous terrain with elevated patches of hills, coconut trees and lined with paddy feilds. 
        </p>
        </Col>
    </Row>
    <Row className='mt-5'>
       <h6 className='text-capitalize text-center'>must visit places in Kanyakumari</h6> 
    </Row>
    <Row className='mt-4'>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/kanyakumari1 (1).jpeg')} alt='chennai img'/>
            <Card.Body>
                <Card.Title>Kanyakumari Beach</Card.Title>
                <Card.Text>
                  Located in the southernmost part of India. kanyakumari beach with its beautiful hue-changing beaches.
                   
                    {/* the popular hill... */}
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/kanyakumari1.(2).jpeg')} alt='chennai img'/>
            <Card.Body>
                <Card.Title>Vivekananda Memorial</Card.Title>
                <Card.Text>
                  The magnificent Vivekananda Rock Memorial is located on a small island of kanyakumari. It has the picturesque...
                
               
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/kanyakumari1 (3).jpeg')} alt='chennai img' height={'170rem'}/>
            <Card.Body>
                <Card.Title>Thiruvalluvar Statue</Card.Title>
                <Card.Text>
                   Dedicated to the accomplished philosopher and poet Thiruvalluvar this beautiful statue finds itself...
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/kanyakumari1 (4).jpeg')} alt='chennai img' height={'170rem'}/>
            <Card.Body>
                <Card.Title>Thirparappu Falls</Card.Title>
                <Card.Text>
                  Located at a distance of about 55 kilometers from kanyakumari the cascading waters of the Thirparappu...
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
    </Row>
</Container>
  )
}

export default Kanyakumari