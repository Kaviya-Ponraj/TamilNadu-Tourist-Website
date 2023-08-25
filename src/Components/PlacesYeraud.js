import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const PlacesYeraud = () => {
  return (
    <Container className='my-5'>
    <h2 className='text-center h2'>Yercaud</h2>
    <h3 className='text-center h3'>Tourist Places Visit</h3>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/yercaud...(1).jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Pagoda Point, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Located in the easter part of the Yercaud Hills, Pagoda point is 2 beautiful viewpoint where one is treated to a panoramic view of the
entire town of Salem as well as the neighbouring village of Kakambadi. The twists and turns of the 21 hairpin bends of Yercaud can be seen from this
spot as they envelop themselves around the hills. The mysterious piles of stones arranged in the form of a pyramid resembling a Pagodz give the
location its unique name. These stones are believed to be placed here by loca tribes.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Between the Pagodas here lies a temple devoted to Lord Rama. One can indulge in the amazing natural beauty of the spot and the
scenery of the Easter Ghats, with the greenery growing within the rugged terrains of the hills, entwined with sights of the craggy cliffs
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Botanical Garden, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Any tourist wha i interested in gods gift to this planet, the wondrous flora, and in knowing about various species of plants must make it
a point to visit the orchid garden and the green house in the Botanical garden.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Yercaud is the place where the famous Kurinji flower blooms in plenty and the specialty of this flower is that it will bloom only once in
twelve years. The National Orchidarium which is located 2 km from the Emerald Lake has a wide variety of orchids which includes 30 orchid species
that are exclusively found here. Many endangered species of orchids are persevered in this orchidarium which is ranked the third largest of all the
orchidariums in India.
            </p>
            </div>
        </Col>
        <Col lg={2}>
            <img src={require('../assets/Home/yercaud1 (2).jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
    </Row>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/yercaud1.(3).jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Emerald Lake, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake. Surrounded by some wonderful
cloud-peaked hills and a well persevered garden on its banks, this lake is a feast for the eyes.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            There is a floating fountain in the lake and boating facilities are available at a reasonable rate. Self-driven as well as rowing boats can be
chosen according to your comfort and intersts. A nominal amount is collected as caution fee before issuing the boats and austere safety measures are
followed by the authorities.
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
       <Col lg={10} className='p-2'>
           <h5 className='fw-bold'>Ladys Seat, Overview</h5>
           <div >
           <p style={{textAlign:'justify',textIndent:'4rem'}}>
           Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam and Salem town, Besides,
the place also houses a viewing tower, which is equipped with a telescope to enjoy the beautiful view. This viewing tower is open for visitors only
during the daytime. Lady's Seat, Gent's Seat and Children's Seat, located to the south-west of Shevaroy Hill, are the names given to a group of
rocks located on the Yercaud Hills.
           </p>
           <p style={{textAlign:'justify',textIndent:'4rem'}}>
           
tis believed that an English lady used to spend her evenings at this place watching the beautiful view of this rock. For those interested
in 2 closer view, there's a mounted telescope. Swing it to your extreme right to see the Mettur Dam on the Cauvery River. Great shots of the river
can be had from this spot in the late aftemoon when the sun's rays are reflected in its waters

           </p>
           </div>
       </Col>
       <Col lg={2}>
           <img src={require('../assets/Home/yercaud1.(4).jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
       </Col>
   </Row>
   </Container>
  )
}

export default PlacesYeraud