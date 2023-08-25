import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const PlacesTheni = () => {
  return (
    <Container className='my-5'>
    <h2 className='text-center h2'>Theni</h2>
    <h3 className='text-center h3'>Tourist Places Visit</h3>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/theni1.(1).jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Chinna Suruli Falls, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Located in the lap of wild, green forests, Chinna Suruli Falls is picturesque destination to visit from Theni. It cascades all the way down
from Meghamalai to form a pool of cool, sparkling water at the foothills of the mountain. Located around 54 Kilometres away from the main centre,
near the Kombaithozhu village, Chinna Suruli Fals is a lovely and serene destination to visit in and around Theni. It can be included in your itinerary of
local sightseeing if you are visiting Theni and its nearby attractions
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            China Suruli Falls is one of the beautiful waterfalls near Madurai and the top visiting places in Megamalai range. It is also known as
Cloudland Falls as it originates in the Megamalai Hills. In the local language, Chinna means small or younger, so in a sense, it is called the younger
suruli
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Kumbakkarai Falls, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai Falls is a mesmerising waterfall that is situated at the foothills of the
Kodaikanal hills The water cascades down in two layers- at the first stage, the water collects at the rock boulders and recesses. And in the second
stage, it fas down the layer of rocks. These recesses are named after wild animals lie tiger, snake, elephant, cheetah etc.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Besides boasting of immense scenic beauty and the melodious tinkering of the gushing waters, the place also offers utter peace and
tranquility. Also unlike most other waterfalls, Kumbakkarai Falls also offer shallow waters where tourists are welcomed to swim or to take a dip. The
popular tourist spot is the most crowded during the rainy season when the water level is high and the neighboring areas glows with greenery.
            </p>
            </div>
        </Col>
        <Col lg={2}>
            <img src={require('../assets/Home/theni1 (2).jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
    </Row>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/Theni.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Meghamalai, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise that you read about in books,
complete vith exhilarating trek routes, breathtaking scenes and an excellent opportunity to take a break from your everyday life in the lap of nature.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            The Highwavys Mountain, locally called the Meghamalai, is an undulating terrain of peaks belonging to the Varushanad Range of Western
Ghats, in Then district of Tamil Nadu. Located at an elevation of 1,500 metres above the sea level, Meghamalai is covered in the trademark green of
Sahyadri, thus eaming the name ‘Pacha Kumachi in Tamil, meaning ‘Green Peaks’. Green pesks of Meghamalai Source Up until recently, the
Meghamalai Hills were restricted to private estates of tez and coffee plantations.
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
       <Col lg={10} className='p-2'>
           <h5 className='fw-bold'>Suruli Falls, Overview</h5>
           <div >
           <p style={{textAlign:'justify',textIndent:'4rem'}}>
           Suruli Falls is a beautiful waterfal in the Theni district of Tamil Nadu and one of the major tourist attractions of Then as well. It is 2
perfect destination to get up close and personal with the nature and cool off in its pristine waters
           </p>
           <p style={{textAlign:'justify',textIndent:'4rem'}}>
           Ata distance of 123 kms from Madurai, 22 Kms from Thekkady (via Gudalur & Karuna Muthevan Patt), 10 Kms from Kambam (via Suruli
Patti) & 548 Kms from Chennai, Suruli Falls are situated amidst rich flora fauna and serve as a perfect picnic spot. The falls seve as the venue of
Summer Festival, organized every year by the Tamil Nadu Tourism Department. The Kailasanathar Temple Cave is also an added attraction of the
place. There are also other 18 caves in and around the Suruli Falls. The Kailasanatha temple and Suruli Velappar temple are also nearby the falls The
falls are reachable by road from Kamba and Gudalur towns.

           </p>
           </div>
       </Col>
       <Col lg={2}>
           <img src={require('../assets/Home/theni1.(4).jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
       </Col>
   </Row>
   </Container>
  )
}

export default PlacesTheni