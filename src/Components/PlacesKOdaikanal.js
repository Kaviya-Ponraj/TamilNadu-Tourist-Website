import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const PlacesKOdaikanal = () => {
  return (
    <Container className='my-5'>
    <h2 className='text-center h2'>Kodaikanal</h2>
    <h3 className='text-center h3'>Tourist Places Visit</h3>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/kodaikanal1.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Green Valley View, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Formerly known as Suicide point, the Green Valley View offers a breathtaking view of the plains, deep valleys and hills, The mesmerizing
            view of the Vaigai Dam is an unforgettable experience. It used to be known as suicide point because of the dangerous valley which is dense and deep;
            below the point of more than 5000 feet drop.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Located at a distance of 5.5 km from the Kodaikanal Lake, the Green Valley View not just offers a gorgeous view, but s also surrounded by
            ys. On the way to the point, there are several shops which offer homemade chocolates, ormaments and a wide range of flowers.
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Kodai Lake, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Kodaikanal Lake is a manmade lake in the Kodaikanal city which is also known as Kodai Lake. Vera Levinge was the man responsible for
            eativity and resources of this lake amidst Kodaikanal town. This lake was developed by the British and early missionaries from the USASA.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            ‘The star-shaped lake is centrally located in Kodaikanal and is surrounded by the rich green Palani Hills Range the main watershed for
            the lake. The lake is situated at an elevation of 2285m above sea level and has an average depth of 3.0m. The lake is at 2 distance of 3 km from the
            Kodai Bus stand.
            </p>
            </div>
        </Col>
        <Col lg={2}>
            <img src={require('../assets/Home/kodaikanal2.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
    </Row>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/kodaikanal3.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Bear Shola Falls, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Located at 3 mere distance of 2 kilometres from the Kodaikanal Lake, the Bear Shola Falls is 3 popular picnic spot in the region. This
            cascades a seasonal attraction that comes to life in its fullest during the monsoons. An interesting legend behind the unique name of this place
            that it was a favourite haunt of a bear who used to frequent this water body to drink water, hence imparting it the name Bear Shola Falls.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Wrapped with dense forests coupled with the chirping of birds, Bear Shola Fals is 2 little heaven. Also, the forest area of the Westen
            ated near the falls is a biodiversity hotspot where you can have a rendezvous with animals like monkeys and deer in the wild.
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
       <Col lg={10} className='p-2'>
           <h5 className='fw-bold'>Pillar Rocks, Overview</h5>
           <div >
           <p style={{textAlign:'justify',textIndent:'4rem'}}>
           Situated in the ‘Princess of Hill stations, Kodaikanal, the Pillar Rocks have become a lovely picnic spot. Constituting 2 beautiful mini
            garden; the place is named so sit has three vertically positioned boulders reaching up to a height of 400 feet. The aura here is full of affection and
            is evidence of a great love story. The “white cross' which once existed on these rocks represented David Gell's excellent tribute to love. The view of
            rocks is not something to be missed. They stand as an untouched miracle for the tourists visiting Kodaikanal.

           </p>
           <p style={{textAlign:'justify',textIndent:'4rem'}}>
           The pillars are famous for providing bird's view of nearby surroundings. The chambers between these two massive rocks are called the
            Devil's Kitchen. Fewer times you might find rocks covered with mist and clouds, but when the ways become clear nothing beautiful than this could
            be ever seen.

           </p>
           </div>
       </Col>
       <Col lg={2}>
           <img src={require('../assets/Home/kodaikanal4.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
       </Col>
   </Row>
   </Container>
  )
}

export default PlacesKOdaikanal