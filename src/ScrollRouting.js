import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import {Link} from 'react-scroll';
import './App.css';

const ScrollRouting = () => {
  return (
    <>
    < Container>
    <div className='div1 ' style={{cursor:'pointer'}}>
    <Link to="Chennai" spy={true} smooth={true} offset={-50} duration={500}>Chennai</Link>
    <Link to="Kodaikanal" spy={true} smooth={true} offset={-50} duration={500}>Kodaikanal</Link>
    <Link to="Madurai" spy={true} smooth={true} offset={-50} duration={500}>Madurai</Link>
    <Link to="Kumbakonam" spy={true} smooth={true} offset={-50} duration={500}>Kumbakonam</Link>
    <Link to="Theni" spy={true} smooth={true} offset={-50} duration={500}>Theni</Link>
    </div>
    <div className='div2' style={{cursor:'pointer'}}>
        <Link to="Rameswaram" spy={true} smooth={true} offset={-50} duration={500}>Rameshwaram</Link>
        <Link to="Ooty" spy={true} smooth={true} offset={-50} duration={500}>Ooty</Link>
        <Link to="Kanyakumari" spy={true} smooth={true} offset={-50} duration={500}>Kanyakumari</Link>
        <Link to="Yercaud" spy={true} smooth={true} offset={-50} duration={500}>Yercaurd</Link>
        <Link to="Hogenakkal" spy={true} smooth={true} offset={-50} duration={500}>Hogenakkal</Link>
    </div>
    </Container>
    </>
  )
}

export default ScrollRouting