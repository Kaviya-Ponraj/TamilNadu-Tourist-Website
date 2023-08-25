import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const PlacesOoty = () => {
  return (
    <Container className='my-5'>
    <h2 className='text-center h2'>Ooty</h2>
    <h3 className='text-center h3'>Tourist Places Visit</h3>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/ooty1.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Nilgiri Mountain Railway, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Nilgiri Mountain Railway, also known as Toy Train in Ooty, is one of the key attractions of the popular hill station Ooty. Such is the train's
            popularity and history that it was declared as a World Heritage Site by UNESCO in 2005. Started in the year 1899, it has continued to charm its visitors
            over the past many years winding its way through the best of nature.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            The Toy Trein covers a distance of total 46 km in 2 span of 5 hours and takes one through 2 truly spectacular journey filed with
            picturesque views en route, Another fascinating feature of the train is that its youngest X-class locomotive is over 50 years old and the oldest is 80
            years old.
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>
                Ooty Botanical Garden, Overview
            </h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Ooty Botanical Gardens lie on the lower slopes of the Doddabetta pezk, the Goverment Botanical Garden is a splendid garden in
            Udhagamandalam, near Coimbatore in the state of Tamil Nadu. Sprawled over an area of 22 hectares, the garden is divided into several sections
            that are trimmed beautifully to present an endearing sight.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Visitors are greeted with astounding colourful natural beauty from the moment they pass through the gates. For more than 160 years,
foreign and local travellers have visited the lush green lawns of the garden, admiring the stunning variety of flowers, ferns, and orchids present
here. Another highlight of the Botanical Garden is the Toda hill, known as the Toda mund, which gives the visitors n insight into the lives and
culture of Todas (a tribe of the Nilgirs).
            </p>
            </div>
        </Col>
        <Col lg={2}>
            <img src={require('../assets/Home/ooty1 (2).jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
    </Row>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/ooty1 (3).jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Emerald Lake, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Emerald Lake is situated in Emerald Village, around 20-22 kilometres from the mein city of Ooty and is 2 part of the Silent Valley National
            Parkin the Nilgiris District. Serene and away from the maddening crowd, the lake and its surroundings are much cleaner and offer a perfect place to
            enjoy 2 leisurely time in the vicinity of nature and quietude.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            It is one of the unexplored and virgin places of the South Indian hill station, not yet encroached by the masses of tourists that visit the
            place every year. Emerald Lake is the ideal spot in Ooty for nature lovers. Tourists usually flock there for the picturesque scenic beauty of the lake, and
            the green Nilgiri slopes and tea plantations surrounding it. It is a paradise for nature photography enthusiasts as the delightful landscape offers a
            perfect subject and composition.
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
       <Col lg={10} className='p-2'>
           <h5 className='fw-bold'>Dolphin's Nose Overview</h5>
           <div >
           <p style={{textAlign:'justify',textIndent:'4rem'}}>
           Located about 12 km away from Coonoor is the Dolphin's Nose about 1,500 meters above sea level, The tip of the peak of this
enormous rock resembles a dolphin's nose and this is ane of the most visited tourist spots in The Nilgiris District of Tamil Nadu.
           </p>
           <p style={{textAlign:'justify',textIndent:'4rem'}}>
           tis set amidst the rolling hills of the Nilgiris Hill (or the Blue Mountains). The gigantic rock formation is entirely unprecedented, There
            are enormous canyons found on both the sides of the destination and there is a clear view of the Catherine Falls, another popular tourist
            destination with its ongoing current several thousand meters below, which is located at a short distance from the Dolphins Nose.

           </p>
           </div>
       </Col>
       <Col lg={2}>
           <img src={require('../assets/Home/ooty1 (4).jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
       </Col>
   </Row>
   </Container>
  )
}

export default PlacesOoty