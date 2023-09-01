import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

import {Link, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Places from './Components/Places';
import BestTimeToVisit from './Components/BestTimeToVisit';
import Food from './Components/Food';
import Packages from './Components/Packages';

function App() {
  return (
    <>
    
    <Navbar expand="lg" className="navbar">
      <Container >
        <Navbar.Brand href="#home" className='text-white fw-bold'>TAMILNADU TOURISM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            <Nav.Link  > <Link to={'/'} className='text-white text-decoration-none fw-bold' id='home'>Home</Link> </Nav.Link>
            <Nav.Link  > <Link to={'/Places'} className='text-white text-decoration-none fw-bold'>Places To Visit</Link> </Nav.Link>
            <Nav.Link  > <Link to={'/BestTimeToVisit'} className='text-white text-decoration-none fw-bold'>Best Time To Visit</Link> </Nav.Link>
            <Nav.Link  > <Link to={'/packages'} className='text-white text-decoration-none fw-bold'>Packages</Link> </Nav.Link>
            <Nav.Link  > <Link to={'/food'} className='text-white text-decoration-none fw-bold'>Food</Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Places' element={<Places />}/>
      <Route path='/BestTimeToVisit' element={<BestTimeToVisit />} />
      <Route path='/packages' element={<Packages />} />
      <Route path='/food' element={<Food />} />
    </Routes>
    </>
  );
}

export default App;
