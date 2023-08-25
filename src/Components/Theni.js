import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Theni = () => {
  return (
    <Container className='mt-5' id='Theni'>
    <h5>09.Theni</h5>
    <Row>
        <Col>
        <img src={require('../assets/Home/Theni.jpeg') } alt='Chennai img' width={'100%'} height={'100%'}/>
        </Col>
        <Col className='py-3'>
        <h6>"A little hamlet in Tamil Nadu"</h6>
        <p className='py-2' style={{textIndent:'4rem', textAlign:'justify'}}>
        Theni Tourism Dotted by luscious patches of greenery and beautiful
waterfalls, Theni is a little hamlet on the Western Ghats. The topography of
Theni mainly consists of hills and ranges. It has plenty of rivers and dams and
is an abode to 27 forests hence filled with unparalleled greenery.
        </p>
        <p className='text-indent' style={{textIndent:'4rem', textAlign:'justify'}}>
        There temples like Kamatchi Amman Temple, Vellappar Temple, and
Balasubramanya Temple which are brimming with devotees from all around
the country throughout the year. The vibrant local markets of Theni are
shoppers paradise. The local handloom products and agricultural products
are the best buys at these markets. The aroma filled tea estates in Theni are a
paradise. The Kolukkamalai Tea estate is often deemed to be the world's
highest organic tea estate. The Suruli Falls and the Kumbakarai Falls are the
crown jewels of Theni.

        </p>
        </Col>
    </Row>
    <Row className='mt-5'>
       <h6 className='text-capitalize text-center'>Must Visit Place In Theni</h6> 
    </Row>
    <Row className='mt-4'>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/theni1.(1).jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Chinna Suruli Falls</Card.Title>
                <Card.Text>
                Located in the lap of wild, green
forests, Chinna Suruli Falls is a
picturesque destination to visit
from Theni...
                   
                   
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/theni1 (2).jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Kumbakkarai Falls</Card.Title>
                <Card.Text>
                Located in Dindigul district near
Theni in Tamil Nadu,
Kumbakkarai Falls is a
mesmerising waterfall that...
               
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/Theni.jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Meghamalai</Card.Title>
                <Card.Text>
                 
Tucked within the Western
Ghats of Tamil Nadu,
Meghamalai in Theni district is
the kind of hidden paradise...
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={require('../assets/Home/theni1.(4).jpeg')} alt='chennai img' height={'190rem'}/>
            <Card.Body>
                <Card.Title>Suruli Falls</Card.Title>
                <Card.Text>
                   
Suruli Falls is a beautiful
waterfall in the Theni district of
Tamil Nadu and one of the
major tourist attractions of...
                </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </Col>
    </Row>
</Container>
  )
}

export default Theni