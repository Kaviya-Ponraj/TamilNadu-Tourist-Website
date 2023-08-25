import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const PlacesHoganakkal = () => {
  return (
    <Container className='my-5'>
    <h2 className='text-center h2'>Hogenakkal</h2>
    <h3 className='text-center h3'>Tourist Places Visit</h3>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/hogenakkal1.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Theerthamalai Temple, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Theerthamalai is 2 popular pilgrim centre close to Hogenakkal. One of its most popular destinations is the Theerthamalai temple. Lord
‘Theerthagireeswar, 2 form of Lord Shiva is the worshipping deity.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            tis believed that Lord Ram worshipped Lord Shiva at this temple to absolve him of the sin of kiling so many demas, after his victory
over Rvana. Therefore, it is believed that dip in these holy waters can help man rid himself of sins committed against others. Theerthamalai Temple
or Theerthagiriswarar Temple is located in small village Theerthamalai, just 16 km from Harur in Dharmapuri district of Temil Nadu. The name
‘Theerthamalai in Tamil means hill with sacred water. The temple is situated about one km up the steep slope of the hillock, derives its name from the
five springs in the temple. This temple was built during 7th Century when the Cholas and the Pandya's were ruling this dynasty.
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>
Hogenakkal Falls, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            Hogenakkal alls is 2 scintillating waterfall thet is located on river Kaveri in the Dharmapuri district of Tamil Nadu. The place gets its
name from Hogenakkal, which means ‘smoking rocks, owing to the unique rock arrangement that exists around it. The gushing beauty of this
cascade is one of a kind and is often quoted as being the “Niagara falls of India.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            The Kaveri River forks into multiple streams and fells through multiple steps, making the sight a mesmerising thing to behold. The
carbonatite rocks by these falls are the oldest of its kind in South Asia and one of the oldest in the world, Drinking water can also be obtained from
the falls, and interestingly enough, the water here is believed to possess medicinal properties, owing to the numerous herbs that grow in its path.
Known for its pristine appeal
            </p>
            </div>
        </Col>
        <Col lg={2}>
            <img src={require('../assets/Home/hogenakkal2..jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
    </Row>

    <Row className='mt-5'>
        <Col lg={2}>
            <img src={require('../assets/Home/hogenakkal3.jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
        </Col>
        <Col lg={10} className='p-2'>
            <h5 className='fw-bold'>Pennagram Village, Overview</h5>
            <div >
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            The village is located about 20 km away from Hogenakkal and is famous for its weekly fair that it holds every month to attract tourists. The
village is also know for its brightly colored giant terracotta statues, which are known as Aiyznars.
            </p>
            <p style={{textAlign:'justify',textIndent:'4rem'}}>
            According to census 2011 information the sub-district code of Pennagaram Block (CD) is 05889. Total area of pennagaram taluka is 1.130
km? including 1,117.33 km? rural area and 13.04 km? urban area. Pennagaram taluka has 2 population of 2.34853 peoples, out of which urban
population is 29,654 while rural population is 2.05199. Pennagaram taluka has a population density of 208 inhabitants per square kilometre. There
are about 57,398 houses in the sub-district, including 7.266 urban houses and 50,132 rural houses.
            </p>
            </div>
        </Col>
    </Row>

    <Row className='mt-5'>
       
       <Col lg={10} className='p-2'>
           <h5 className='fw-bold'>Mettur Dam, Overview</h5>
           <div >
           <p style={{textAlign:'justify',textIndent:'4rem'}}>
           
Mettur Dam, situated 30 miles from Salem in a small Mettur Village, is one of the largest dams in India. Built across the River Cauvery at
the canyon, Mettur Dam was built in the year 1943 2nd is 2 sight of sheer beauty. The dam is surrounded by verdant hills and picturesque natural
beauty and is quite popular among tourists. One of the most extraordinary features of the dam is its design, which is 2 testament to the country's
engineering genius. Mettur Dam is a huge human-made marvel which spans over a massive length of 1700 metres and is a major hotspot where
tourists visit from all across the country to relax and seek solitude.
           </p>
           <p style={{textAlign:'justify',textIndent:'4rem'}}>
            
Apart from being a tourist hotspot, the dam also provides irrigation facility for 271,000 acres of agricultural land around it. Another
major attraction of the area is a water reservoir flanked by hilly ranges all around.

           </p>
           </div>
       </Col>
       <Col lg={2}>
           <img src={require('../assets/Home/hokenakkal4..jpeg')} alt='tourist places' height={'92%'} width={'100%'}/>
       </Col>
   </Row>
   </Container>
  )
}

export default PlacesHoganakkal