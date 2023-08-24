import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Banner from './Components/Banner';
import Section2 from './Section2';
import ScrollRouting from './ScrollRouting';
import Chennai from './Components/Chennai';
import Rameshwaram from './Components/Rameshwaram';
import Kodaikanal from './Components/Kodaikanal';
import Ooty from './Components/Ooty';
import Kanyakumari from './Components/Kanyakumari';
import Kumbakonam from './Components/Kumbakonam';
import Madurai from './Components/Madurai';
import Yercaud from './Components/Yercaud';
import Theni from './Components/Theni';
import Hogenakkal from './Components/Hogenakkal';

function App() {
  return (
    <>
    
    <Navbar expand="lg" className="navbar">
      <Container >
        <Navbar.Brand href="#home" className='text-white'>TAMILNADU TOURISM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Places To Visit</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Best Time To Visit</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Packages</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Destination</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Food</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Banner />
    <Section2 />
    <ScrollRouting />
    <Chennai />
    <Rameshwaram />
    <Kodaikanal />
    <Ooty />
    <Kanyakumari />
    <Kumbakonam />
    <Madurai />
    <Yercaud />
    <Theni />
    <Hogenakkal />
    </>
  );
}

export default App;
