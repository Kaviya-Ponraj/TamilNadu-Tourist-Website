import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const PlacesRameshwaram = () => {
  return (
    <Container className='my-5'>
    <h2 className='text-center h2'>Rameshwaram</h2>
    <h3 className='text-center h3'>Tourist Places Visit</h3>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/rameshwarem1.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>
                 Dhanushkodi Temple, Overview
            </h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
           
            Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India. However, du to a natural calamity, the cyclone, it
            got completely washed away.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
           
            It holds the advantage of being on an island and is exquisitely covered by waters on all the four sides of it. It is sandwiched between the
            Bay of Bengal and Indian Ocean. When viewed from 2 birds eye The seas are in the shape of bow and arrow. The arrow head is considered to be 2
            sacred place for worship by the Hindus and people from far and wide come there to offer sacred prayers to the deity. Lord Rama has his pious foot
            marks in this temple and the whole story of Ramayana revolves around this temple island. It is a wonderful pilgrim place for the followers of Lord
            Rama. The place is an approximate of 18 kms from Rameshwaram and one can easily travel by road.
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Lakshmana Temple, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman, brother of Lord Rama. In order to offer sacred
            prayers to lord Lakshman, this temple has been constructed in Rameshwaram itself which indicates that Lord Lakshman had been given a valuable
            place in the dynasty of Lord Rama.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Several wonderful sculptures of Lord Lakshman have been carved out from marble and the temple has the statues of lord Rama and
            which signifies the spirit of unitedness that exisited between them.
            </p>
            </div>
        </Col>
        <Col lg={2}>
            <img src={require('../assets/Home/rameshwarem2.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
    </Row>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/rameshwarem4.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Villoondi Tirtham, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Villoondi Tirtham is a beach which is also considered a sacred natural water body and a favourite amongst tourists. It also has a spring
            inside the sea which makes the attraction a unique ane and is often associated with the Legend of Ramayana. It is believed that Lord Rama shot an
            arrow to create this spring to help his people with drinking water.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Villoondi Theertham is situated about & km from the Remeswaram main bus stand. Besides its arresting views and silent tides, the place is
            also known for its pure water spring inside the sea. A few metres from the shore, this pure water well beside the sea is a marvel. Devotees connect its
            existence to a mythological legend from the epic Ramayana. After rescuing Goddess Sita and bringing her back to Rameswaram from Sri Lanka, Lord
            Rama performed rituals by installing a Shiva linga on the spot.
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
       <Col lg={10} className='p-2'>
           <h5 className='fw-bold'>Rameshwaram Temple, Overview </h5>
           <div >
           <p style={{textAlign:'justify',textIndent:'4rem'}}>
           A perfect blend of mind-boggling architecture and spiritual significance, Rameshwaram Temple, also known as Ramanathaswamy
            Temple of Temil Nadu is dedicated to Lord Shiva. It also boasts of being one of the 12 Jyotiringa temples of India. Not just spiritually,
            Rameshwaram Temple is appealing architecturally also. With the longest corridor of the world and immaculate carvings on pillars, it is definitely a
            treat for your eyes.
           </p>
           <p style={{textAlign:'justify',textIndent:'4rem'}}>
           ‘The lingam in the Remeshwaram Temple was installed by Lord Rama but, the construction was led by several rulers over the centuries.
            Inside the temple, there are two lingams- Ramalingam and Shivalingam. The latter i still worshipped first to preserve the words of Lord Rama.
            Besides daily Abhishkams and poojas performed with great zeal, there are absorbing festivals worth witnessing

           </p>
           </div>
       </Col>
       <Col lg={2}>
           <img src={require('../assets/Home/Rameshwaram3.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
       </Col>
   </Row>
   </Container>
  )
}

export default PlacesRameshwaram