import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import PlacesChennai from './PlacesChennai'
import PlacesRameshwaram from './PlacesRameshwaram'
import PlacesKOdaikanal from './PlacesKOdaikanal'
import PlacesOoty from './PlacesOoty'
import PlacesKanyakumari from './PlacesKanyakumari'
import PlacesKumbakonam from './PlacesKumbakonam'
import PlacesMadurai from './PlacesMadurai'
import PlacesYeraud from './PlacesYeraud'
import PlacesTheni from './PlacesTheni'
import PlacesHoganakkal from './PlacesHoganakkal'

const Places = () => {
  return (
    <>
    <Container>
        <Row className='mt-5'>
            <Col lg={6}>
                <h2 className='text-capitalize h2'>Tourist Places to visit in Tamil nadu</h2>
                <p className='text-indent mt-4' style={{textAlign:'justify',textIndent:'4rem'}}>
                  Chennai, Ooty, Pondicherry, Kodaiksanal, Coimbatore, Yelagiri, Masinagudi, Kanyakumari, Kotgiri, Nilgiri, Krishnagiri, Auroville, Theni, Hullathy, Rameshwaram, Kalhatty, Ghat and more.
                </p>
                <p className='text-indent ' style={{textAlign:'justify',textIndent:'4rem'}}>
                  Enjoy a vacation to remember and cherish some amazing experience while touring the most gorgeous places to visit in Tamil Nadu. With many serene beaches, beautuful temples known for Dravidian architechture, bustling shopping bazaars and adventurous wildlife places, these places offer a splendid mix to help you make superb travel itinerary.
                </p>
                <p className='text-indent ' style={{textAlign:'justify',textIndent:'4rem'}}>
                  Looking forward to visiting the most stunning places to see in Tamil Nadu?Well, then you are in for a grewat time. From the thfriving cosmopolitan vibes of Chennai to the emerald tea plantations ofOoty and the French style houses of Pondicherry to the scenic beauty of Kodaikanal, these places will leave you overwhelmed. There is an awesome experience in store, whether you are going for leisure, backpacking or looking for an adventure.
                </p>
            </Col>
            <Col lg={6}>
            <figure className='p-1'>
            <img src={require('../assets/Home/Place.jpeg')} alt='kanyakumari img' height={'420rem'} width={'100%'}/>
            <figcaption className='text-capitalization text-center'>Tourist Place to vist in Tamil nadu</figcaption>
            </figure>
            </Col>
        </Row>
        <Row>
          <p style={{textAlign:'justify',textIndent:'4rem'}}> 
              The variety of tourist places in Tamil nadu offers you a glimpse of all kinds of sightseeing and adventures. Tourists here can choose among many offbeat places like Yeligiri, and Yercaud to the famous cultural citadels like Mahabalipuram and Mumbai. Tamil Nadu, is also known or or a religious respite in the temples, these places are a delight for anyone wishing to escape the hustle and bustle of life.
          </p>

        </Row>
    </Container>
    <PlacesChennai />
    <PlacesRameshwaram />
    <PlacesKOdaikanal />
    <PlacesOoty />
    <PlacesKanyakumari />
    <PlacesKumbakonam />
    <PlacesMadurai />
    <PlacesYeraud />
    <PlacesTheni />
    <PlacesHoganakkal />
    </>
  )
}

export default Places