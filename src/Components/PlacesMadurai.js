import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const PlacesMadurai = () => {
  return (
    <Container className='my-5'>
    <h2 className='text-center h2'>Madurai</h2>
    <h3 className='text-center h3'>Tourist Places Visit</h3>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/madurai1.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>
Vaigai Dam, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai near Andipatti, Theni District in the South Indian State
of Tamil Nadu. Andipatti lies about 70 kilometres from Madurai and travellers on their way to Periyar Wildlife Sanctuary often visit this massive and
wondrous dam. Over the years, the site has become a favourite picnic spot s it gets beautifully illuminated in the evenings especially on weekends,
and one can spend hours admiring the splendid view. The soft and warm sunrises by the reservoir are worth experiencing too.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            On one side of the dam is 2 beautiful garden known as Little Brindavan maintained by the management for the visitors. Little Brindavan
has a variety of exotic flowers and plants and is a preferred getaway for nature lovers living nearby. The play area made especially for children is 2
reli for parents as they watch their little ones have fun in the unpolluted air.
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>
Meghamalai, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            
Often known as the “High Wavy Mountains, Meghamalai is 2 petit yet beautiful place located in the Wester Ghats in the state of Tamil
Nadu. At 2n elevation of 1500 meters, this place is 2 perfect getaway to beat the heat and enjoy some peaceful time relaxing amidst nature. Nestled
between the evergreen forest this place is filled with the fresh aroma of cardamom, cinnamon and pepper. The lush green tea plantations will give
you an opportunity to sip fresh piping tea and enjoy a lazy stroll amidst nature replete with flora and fauna.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            The Meghamalai region of the Wester Ghats is 2 paradise unexplored even by the people of Tamil Nadu. The local Tamil language also
refers to it as Paccha Kumachi, which means ‘Green Peaks’ Located at approximately 1,500 metres above sez level, this small mountain village is
sumounded by tea and cardamom plantations.
            </p>
            </div>
        </Col>
        <Col lg={2}>
            <img src={require('../assets/Home/madurai2.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
    </Row>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/madurai3.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Samanar Hills, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Located in Keelakuyilkudi vilage near Madurai, Samanar Hills or Samanar Malai is 2 beautiful hill rock complex which was originally home
to Tamil Jain monks, The hill caves are 2 popular place of tourism and have elaborate carvings 2nd drawings of the monks, on the interior walls. The
spot also has a beautiful lotus temple located in the premises
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            There is no better place to escape the heat than this picturesque getaway surrounded by nature. Meghamalai is one of the best places to
visit in Tamilnadu if you are looking for a quiet and peaceful weekend away from the city. During your vacation in this hill station, you can explore the
following samanar hills tourist places. The city stands out for the active nightlife of the people, making it the safest place to travel Madurai which is
ane of the oldest temple city has lot more to offer than just spiritual things.
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
       <Col lg={10} className='p-2'>
           <h5 className='fw-bold'>Thirumalai Nayakar, Overview</h5>
           <div >
           <p style={{textAlign:'justify',textIndent:'4rem'}}>
           Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by King Thirumalai Nayak. The palace depicts the perfect
blend of Dravidian and Rajput styles. After Independence, this palace was declared as 2 national monument and ill date continues to be one of the
spectacular monuments of Souther India. The magnificent palace is located in the vicinity of the very famous Meenakshi Amman Temple.
Depicting the Saracenic style of architecture, it was constructed during the rule of Nayak Dynasty and is widely considered as the most illustrious
monument built by the Madurai Nayak Dynasty.he alluring palace (Nayak Mahal palace) is in the min city of Madurai, which is located 2 km away
from the Meenakshi Amman temple. The Thirumalai Nayak Mahal was but by the Thirumalai Nayak king during the 16th century.The building that
is sill observable was the resident of the King Nayak and the throne of the King Nayak has been kept for display.
           </p>
           {/* <p style={{textAlign:'justify',textIndent:'4rem'}}>
            This beach is not as popular and known 2s the Ellots beach, and is hence more quiet and peaceful. Evenings are very pleasant and
            breezy here, and in the recent years lots of tourists have been attracted towards this beach for its beauty. Those looking for an amiable, refreshing
            and breezy place to chill out and have fun, the Breezy beach of Chennai i the place to be.

           </p> */}
           </div>
       </Col>
       <Col lg={2}>
           <img src={require('../assets/Home/madurai4..jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
       </Col>
   </Row>
   </Container>
  )
}

export default PlacesMadurai