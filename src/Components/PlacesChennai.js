import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const PlacesChennai = () => {
  return (
   <Container className='my-5'>
    <h2 className='text-center h2'>Chennai</h2>
    <h3 className='text-center h3'>Tourist Places Visit</h3>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/chennai1.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Marina Beach, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal. The beach is stretched out to
            a distance of 13 kilometres making it the longest natural urban beach in the country, second largest in the world and also the most crowded beach in
            India with almost 30,000 visitors a day.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            With a white sandy shore that looks as though extending to infinity, the landscape of Marina Beach is a mesmerising and serene sight to
            behold. The beach has a primarily sandy terrain and is dotted with plenty of merry-go-rounds and shops selling souvenirs. You could take a walk
            along the Marina beach with your near and dear anes or even all alone and enjoy the cool evening sea breeze along with a hot plate of crispy sundal
            and murukku. Watching the sun craw upwards into the sky or even disappear into the ocean from the beach, is an awe-striking and enchanting
            experience.
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>MGR Flim City, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Having been established in the year 1994, a considerably new structure, the MGR Film city is managed by the Government of Tamil
            loving memory of MG Remachandran who was not only a crowd-pleasing tamil actor but also a longtime CM of Tamil Nadu.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            With a white sandy shore that looks as though extending to infinity, the landscape of Marina Beach is a mesmerising and serene sight to
            behold. The beach has primarily sandy terrain and is dotted with plenty of merry-go-rounds and shops selling souvenirs. You could take a walk
            along the Marina beach with your near and dear ones or even all alone and enjoy the cool evening sea breeze along with a hot plate of crispy
            sundal and murukku. Watching the sun crawl upwards into the sky or even disappear into the ocean from the beach, is an awe-striking and enchanting experience.
            </p>
            </div>
        </Col>
        <Col lg={2}>
            <img src={require('../assets/Home/chennai2.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
    </Row>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/chennai3.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Marundeeswarar Temple, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            ‘The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple deity Shiva in the form of Marundeeswar or
            Aushadeeswarar, the God of Medicines. A fine specimen of Dravidian architecture, this temple is a must vist for anyone visiting Chennai or nearby
            cities,
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Glorified in the 7th-8th century by Nayanars (Saivite Saints), Tirugnana Sambandar, and Appar, the temple was expanded by the Chola
            Kingdom in the 11th century. Moreover, given the name, Marundeeswarar Temple has been 2 place of worship especially for people with diseases and
            those facing various problems with their health. The prasadam here is 2 mixture of sacred ash, water, and milk which is believed to cure any ailments.
            One must visit the temple to encounter the miraculous power it is said to have.
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
       <Col lg={10} className='p-2'>
           <h5 className='fw-bold'>Breezy Beach, Overview</h5>
           <div >
           <p style={{textAlign:'justify',textIndent:'4rem'}}>
           Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai, Being smaller and less polluted, its a perfect
            ne looking for a peaceful evening.
           </p>
           <p style={{textAlign:'justify',textIndent:'4rem'}}>
            This beach is not as popular and known 2s the Ellots beach, and is hence more quiet and peaceful. Evenings are very pleasant and
            breezy here, and in the recent years lots of tourists have been attracted towards this beach for its beauty. Those looking for an amiable, refreshing
            and breezy place to chill out and have fun, the Breezy beach of Chennai i the place to be.

           </p>
           </div>
       </Col>
       <Col lg={2}>
           <img src={require('../assets/Home/chennai4.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
       </Col>
   </Row>
   </Container>
  )
}

export default PlacesChennai