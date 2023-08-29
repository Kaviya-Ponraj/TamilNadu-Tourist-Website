import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

import {Link, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Places from './Components/Places';
import BestTimeToVisit from './Components/BestTimeToVisit';

function App() {
  return (
    <>
    
    <Navbar expand="lg" className="navbar">
      <Container >
        <Navbar.Brand href="#home" className='text-white fw-bold'>TAMILNADU TOURISM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            <Nav.Link  > <Link to={'/'} className='text-white text-decoration-none fw-bold'>Home</Link> </Nav.Link>
            <Nav.Link  > <Link to={'/Places'} className='text-white text-decoration-none fw-bold'>Places To Visit</Link> </Nav.Link>
            <Nav.Link  > <Link to={'/BestTimeToVisit'} className='text-white text-decoration-none fw-bold'>Best Time To Visit</Link> </Nav.Link>
            <Nav.Link  > <Link className='text-white text-decoration-none fw-bold'>Packages</Link> </Nav.Link>
            <Nav.Link  > <Link className='text-white text-decoration-none fw-bold'>Destination</Link> </Nav.Link>
            <Nav.Link  > <Link className='text-white text-decoration-none fw-bold'>Food</Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Places' element={<Places />}/>
      <Route path='/BestTimeToVisit' element={<BestTimeToVisit />} />
    </Routes>
    </>
  );
}

export default App;
