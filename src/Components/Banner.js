import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';

const Banner = () => {
  return (
    <Container >
    <Carousel>
      <Carousel.Item>
        <img src={require('../assets/Home/banner1.jpg')} alt='torist places' width={'100%'}/>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={require('../assets/Home/pic1.jpeg')} alt='torist places' width={'100%'}/>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={require('../assets/Home/pic2.jpeg')} alt='torist places' width={'100%'}/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={require('../assets/Home/pic3.jpeg')} alt='torist places' width={'100%'}/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={require('../assets/Home/pic4.jpeg')} alt='torist places' width={'100%'}/>
        
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default Banner