import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Data from '../Data.json';
import '../App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const Packages = () => {

  const [currentPage, setCurrentPage] = useState(1)

  const recordsPerPage = 9;

  const lastIndex = currentPage * recordsPerPage;

  const firstIndex = lastIndex - recordsPerPage;

  const records = Data.slice(firstIndex, lastIndex);

  const npage = Math.ceil(Data.length / recordsPerPage);

  const numbers = [...Array(npage + 1).keys()].slice(1);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Container className='mt-5' >
        <Row>
        <Col lg={6}>
        <h2>How packages work in Tamil Nadu Tourism??</h2>
        <p style={{textIndent:'3rem', textAlign:'justify'}} className='mt-4'>
            Tamil Nadu, the land of 33, 000 temples, is one of the popular Tourist Places in India and it boasts the largest tourism industry in India. Tamil Nadu is renowned for its temple towns and heritage sites, hill stations, waterfalls, national parks, local cuisine and the fabulous wildlife and scenic beauty. Typically, 3-4 days is required to explore best Tamilnadu Tourism Packages. Chennai, Rameshwaram, Madurai, Hogenakkal, Theni, Yercaud, Kanyakumari,  and kumbakonam are the top Tamilnadu Tourist Places. Besides, pristine beauty of hill stations like Ooty and Kodaikanal leaves the visitors mesmerized with its irresistible charm.
        </p>
        <p>
        Explore our <a href='../#home'> Tamilnadu Tourism</a> guide for complete details.
        </p>
        </Col>
        <Col lg={6}>
            <img src={require('../Gallery/package.jpg')} alt='tn img' width={'100%'} />
        </Col>
        </Row>
        <h6 className='my-5 text-danger'>Note : In all packages FOOD and ACCOMODATION included</h6>

        <h3 className='mt-5 text-center'>Best Tour Packages Offered to You!</h3>
        <h6 className='mt-2 text-muted text-center'>Choose your next Destintion</h6>

        <Table striped bordered hover className='mt-5'>
      <thead>
        <tr>
        <th className='text-center'>Package</th>
          <th className='text-center'>Duration</th>
          <th className='text-center'>Starting Price</th>
          <th className='text-center'>Details</th>
        </tr>
      </thead>
      <tbody>
        {records.map((data,index) => (
             <tr key={index}>
             <td className='text-center '>{data.Package}</td>
             <td className='text-center'>{data.Duration}</td>
             <td className='text-center'> &#8377; {data.Price} per person </td>
             <td className='text-center'>
            <button style={{backgroundColor:"grey", border:'none'}} className='rounded-5 button px-3'
            onClick={handleShow}>
              View Details
            </button>
             </td>
           </tr>
        ))}
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Would you like to travel with us</Modal.Title>
        </Modal.Header>
        <Modal.Body>You will be visiting all <a href='../#home'>these places</a> in your trip <br /> <br />
        For more details you can contact us <br /> <br /> abc@gmail.com </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
        
      </tbody>
    </Table>

    <nav className=' d-flex justify-content-center my-5'>
      <ul className='pagination'>
          <li>
            <a href='#' className='page-link'
            onClick={prevPage}>Prev</a>
          </li>
          {
            numbers.map((n,i) =>(
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <a className='page-link'
                onClick={ () => changeCurrentPage(n)}>{n}</a>
              </li>
            ))
          }
          <li>
            <a href='#' className='page-link'
            onClick={nextPage}
            style={{cursor:'pointer'}}
            >Next</a>
          </li>
      </ul>
    </nav>

    <section>
      <h3 className="section-header text-center">
        Testimonials  </h3>
         <p className='text-center text-muted'>What people say about us</p>
        

        <div className="testimonials my-5">
          <Row className='mt-5'>
            <Col lg={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../Gallery/pro pic.webp')} />
      <Card.Body>
        <Card.Title>Sravan Reddy</Card.Title>
        <Card.Text>
        Overall experience is good, better or best.
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../Gallery/pro pic.webp')} />
      <Card.Body>
        <Card.Title>Lakshmi Narayana</Card.Title>
        <Card.Text>
        The trip was properly arranged and coordinated! 
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4}>
    <Card style={{ width: '18rem' }} className='d-flex'>
      <Card.Img variant="top" src={require('../Gallery/pro pic.webp')} />
      <Card.Body>
        <Card.Title>Sruthi </Card.Title>
        <Card.Text>
        We had a very nice trip in Tamil Nadu with all the facilities in hotel.
        </Card.Text>
        <Button variant="primary" >Book Now</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
        </div>
    </section>

        {/* <h5 className='mt-5'>01.From Chennai to other districts</h5>

    <Table striped bordered hover className='my-5'>
      <thead style={{backgroundColor:'0A7285'}}>
        <tr>
          <th>Package</th>
          <th>Duration</th>
          <th>Starting Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chennai - Rameshwaran</td>
          <td>3D/2N</td>
          <td> &#8377;  9208</td>
          <td>  <Button variant="secondary" type="submit">
                    View Details
                </Button>
        </td>
        </tr>
        <tr>
          <td>Chennai - Madurai</td>
          <td>2D/1N</td>
          <td> &#8377; 4600 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Chennai - Hogenakkal </td>
          <td > 3D/2N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Chennai - Theni </td>
          <td > 1D/1N </td>
          <td> &#8377; 3708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Chennai - Yercaud </td>
          <td > 3D/2N </td>
          <td> &#8377; 6120 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Chennai - Kanyakumari </td>
          <td > 2D/1N </td>
          <td> &#8377; 7250 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Chennai - Kumbakonam </td>
          <td > 1D/0N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Chennai - Kodaikanl </td>
          <td > 3D/2N </td>
          <td> &#8377; 9500 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Chennai - Ooty </td>
          <td > 3D/2N </td>
          <td> &#8377; 7300 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>

    <h5 className='mt-3'>02.From Rameshwaram to other districts</h5>


    <Table striped bordered hover className='my-4'>
      <thead style={{backgroundColor:'0A7285'}}>
        <tr>
          <th>Package</th>
          <th>Duration</th>
          <th>Starting Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{padding:'4px'}}> Rameshwaram - Chennai </td>
          <td>3D/2N</td>
          <td> &#8377;  9208</td>
          <td>  <Button variant="secondary" type="submit">
                    View Details
                </Button>
        </td>
        </tr>
        <tr>
          <td>Rameshwaram - Madurai</td>
          <td>2D/1N</td>
          <td> &#8377; 4600 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Rameshwaram - Hogenakkal </td>
          <td > 3D/2N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Rameshwaram - Theni </td>
          <td > 1D/1N </td>
          <td> &#8377; 3708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Rameshwaram - Yercaud </td>
          <td > 3D/2N </td>
          <td> &#8377; 6120 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Rameshwaram - Kanyakumari </td>
          <td > 2D/1N </td>
          <td> &#8377; 7250 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Rameshwaram - Kumbakonam </td>
          <td > 1D/0N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Rameshwaram - Kodaikanl </td>
          <td > 3D/2N </td>
          <td> &#8377; 9500 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Rameshwaram - Ooty </td>
          <td > 3D/2N </td>
          <td> &#8377; 7300 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>

    <h5 className='mt-5'>03.From Madurai to other districts</h5>

    <Table striped bordered hover className='my-3'>
      <thead style={{backgroundColor:'0A7285'}}>
        <tr>
          <th>Package</th>
          <th>Duration</th>
          <th>Starting Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Madurai - Rameshwaran</td>
          <td>3D/2N</td>
          <td> &#8377;  9208</td>
          <td>  <Button variant="secondary" type="submit">
                    View Details
                </Button>
        </td>
        </tr>
        <tr>
          <td>Madurai - Chennai </td>
          <td>2D/1N</td>
          <td> &#8377; 4600 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Madurai - Hogenakkal </td>
          <td > 3D/2N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Madurai - Theni </td>
          <td > 1D/1N </td>
          <td> &#8377; 3708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Madurai - Yercaud </td>
          <td > 3D/2N </td>
          <td> &#8377; 6120 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Madurai - Kanyakumari </td>
          <td > 2D/1N </td>
          <td> &#8377; 7250 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Madurai - Kumbakonam </td>
          <td > 1D/0N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Madurai - Kodaikanl </td>
          <td > 3D/2N </td>
          <td> &#8377; 9500 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Madurai - Ooty </td>
          <td > 3D/2N </td>
          <td> &#8377; 7300 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
    
    <h5 className='mt-5'>04.From Hogenakkal to other districts</h5>

    <Table striped bordered hover className='my-3'>
      <thead style={{backgroundColor:'0A7285'}}>
        <tr>
          <th>Package</th>
          <th>Duration</th>
          <th>Starting Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hogenakkal - Rameshwaran</td>
          <td>3D/2N</td>
          <td> &#8377;  9208</td>
          <td>  <Button variant="secondary" type="submit">
                    View Details
                </Button>
        </td>
        </tr>
        <tr>
          <td>Hogenakkal - Chennai </td>
          <td>2D/1N</td>
          <td> &#8377; 4600 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Hogenakkal - Madurai  </td>
          <td > 3D/2N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Hogenakkal - Theni </td>
          <td > 1D/1N </td>
          <td> &#8377; 3708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Hogenakkal - Yercaud </td>
          <td > 3D/2N </td>
          <td> &#8377; 6120 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Hogenakkal - Kanyakumari </td>
          <td > 2D/1N </td>
          <td> &#8377; 7250 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Hogenakkal - Kumbakonam </td>
          <td > 1D/0N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Hogenakkal - Kodaikanl </td>
          <td > 3D/2N </td>
          <td> &#8377; 9500 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Hogenakkal - Ooty </td>
          <td > 3D/2N </td>
          <td> &#8377; 7300 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>

    <h5 className='mt-5'>05.From Theni to other districts</h5>

    <Table striped bordered hover className='my-3'>
      <thead style={{backgroundColor:'0A7285'}}>
        <tr>
          <th>Package</th>
          <th>Duration</th>
          <th>Starting Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Theni - Rameshwaran</td>
          <td>3D/2N</td>
          <td> &#8377;  9208</td>
          <td>  <Button variant="secondary" type="submit">
                    View Details
                </Button>
        </td>
        </tr>
        <tr>
          <td>Theni - Chennai </td>
          <td>2D/1N</td>
          <td> &#8377; 4600 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Theni - Madurai  </td>
          <td > 3D/2N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Theni - Hogenakkal  </td>
          <td > 1D/1N </td>
          <td> &#8377; 3708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Theni - Yercaud </td>
          <td > 3D/2N </td>
          <td> &#8377; 6120 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Theni - Kanyakumari </td>
          <td > 2D/1N </td>
          <td> &#8377; 7250 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Theni - Kumbakonam </td>
          <td > 1D/0N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Theni - Kodaikanl </td>
          <td > 3D/2N </td>
          <td> &#8377; 9500 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Theni - Ooty </td>
          <td > 3D/2N </td>
          <td> &#8377; 7300 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>

    <h5 className='mt-5'>06.From Yercaud to other districts</h5>

    <Table striped bordered hover className='my-3'>
      <thead style={{backgroundColor:'0A7285'}}>
        <tr>
          <th>Package</th>
          <th>Duration</th>
          <th>Starting Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Yercaud - Rameshwaran</td>
          <td>3D/2N</td>
          <td> &#8377;  9208</td>
          <td>  <Button variant="secondary" type="submit">
                    View Details
                </Button>
        </td>
        </tr>
        <tr>
          <td>Yercaud - Chennai </td>
          <td>2D/1N</td>
          <td> &#8377; 4600 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Yercaud - Madurai  </td>
          <td > 3D/2N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Yercaud - Hogenakkal  </td>
          <td > 1D/1N </td>
          <td> &#8377; 3708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Yercaud - Theni </td>
          <td > 3D/2N </td>
          <td> &#8377; 6120 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Yercaud - Kanyakumari </td>
          <td > 2D/1N </td>
          <td> &#8377; 7250 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Yercaud - Kumbakonam </td>
          <td > 1D/0N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Yercaud - Kodaikanl </td>
          <td > 3D/2N </td>
          <td> &#8377; 9500 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Yercaud - Ooty </td>
          <td > 3D/2N </td>
          <td> &#8377; 7300 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>

    <h5 className='mt-5'>07.From Kanyakumari to other districts</h5>

    <Table striped bordered hover className='my-3'>
      <thead style={{backgroundColor:'0A7285'}}>
        <tr>
          <th>Package</th>
          <th>Duration</th>
          <th>Starting Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Kanyakumari - Rameshwaran</td>
          <td>3D/2N</td>
          <td> &#8377;  9208</td>
          <td>  <Button variant="secondary" type="submit">
                    View Details
                </Button>
        </td>
        </tr>
        <tr>
          <td>Kanyakumari - Chennai </td>
          <td>2D/1N</td>
          <td> &#8377; 4600 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kanyakumari - Madurai  </td>
          <td > 3D/2N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kanyakumari - Hogenakkal  </td>
          <td > 1D/1N </td>
          <td> &#8377; 3708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kanyakumari - Theni </td>
          <td > 3D/2N </td>
          <td> &#8377; 6120 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kanyakumari - Yercaud  </td>
          <td > 2D/1N </td>
          <td> &#8377; 7250 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kanyakumari - Kumbakonam </td>
          <td > 1D/0N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kanyakumari - Kodaikanl </td>
          <td > 3D/2N </td>
          <td> &#8377; 9500 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kanyakumari - Ooty </td>
          <td > 3D/2N </td>
          <td> &#8377; 7300 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>

    <h5 className='mt-5'>08.From Kumbakonam to other districts</h5>

    <Table striped bordered hover className='my-3'>
      <thead style={{backgroundColor:'0A7285'}}>
        <tr>
          <th>Package</th>
          <th>Duration</th>
          <th>Starting Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Kumbakonam - Rameshwaran</td>
          <td>3D/2N</td>
          <td> &#8377;  9208</td>
          <td>  <Button variant="secondary" type="submit">
                    View Details
                </Button>
        </td>
        </tr>
        <tr>
          <td>  Kumbakonam - Chennai </td>
          <td>2D/1N</td>
          <td> &#8377; 4600 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kumbakonam - Madurai  </td>
          <td > 3D/2N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kumbakonam - Hogenakkal  </td>
          <td > 1D/1N </td>
          <td> &#8377; 3708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kumbakonam - Theni </td>
          <td > 3D/2N </td>
          <td> &#8377; 6120 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kumbakonam - Yercaud  </td>
          <td > 2D/1N </td>
          <td> &#8377; 7250 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kumbakonam - Kanyakumari </td>
          <td > 1D/0N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kumbakonam - Kodaikanl </td>
          <td > 3D/2N </td>
          <td> &#8377; 9500 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kumbakonam - Ooty </td>
          <td > 3D/2N </td>
          <td> &#8377; 7300 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>

    <h5 className='mt-5'>09.From Ooty to other districts</h5>

    <Table striped bordered hover className='my-3'>
      <thead style={{backgroundColor:'0A7285'}}>
        <tr>
          <th>Package</th>
          <th>Duration</th>
          <th>Starting Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ooty - Rameshwaran</td>
          <td>3D/2N</td>
          <td> &#8377;  9208</td>
          <td>  <Button variant="secondary" type="submit">
                    View Details
                </Button>
        </td>
        </tr>
        <tr>
          <td>  Ooty - Chennai </td>
          <td>2D/1N</td>
          <td> &#8377; 4600 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Ooty - Madurai  </td>
          <td > 3D/2N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Ooty - Hogenakkal  </td>
          <td > 1D/1N </td>
          <td> &#8377; 3708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Ooty - Theni </td>
          <td > 3D/2N </td>
          <td> &#8377; 6120 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Ooty - Yercaud  </td>
          <td > 2D/1N </td>
          <td> &#8377; 7250 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Ooty - Kanyakumari </td>
          <td > 1D/0N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Ooty - Kodaikanl </td>
          <td > 3D/2N </td>
          <td> &#8377; 9500 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Ooty - Kumbakonam  </td>
          <td > 3D/2N </td>
          <td> &#8377; 7300 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>

    <h5 className='mt-5'>10.From Kodaikanal to other districts</h5>

    <Table striped bordered hover className='my-3'>
      <thead style={{backgroundColor:'0A7285'}}>
        <tr>
          <th>Package</th>
          <th>Duration</th>
          <th>Starting Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Kodaikanal - Rameshwaram</td>
          <td>3D/2N</td>
          <td> &#8377;  9208</td>
          <td>  <Button variant="secondary" type="submit">
                    View Details
                </Button>
        </td>
        </tr>
        <tr>
          <td>  Kodaikanal - Chennai </td>
          <td>2D/1N</td>
          <td> &#8377; 4600 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kodaikanal - Madurai  </td>
          <td > 3D/2N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kodaikanal - Hogenakkal  </td>
          <td > 1D/1N </td>
          <td> &#8377; 3708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kodaikanal - Theni </td>
          <td > 3D/2N </td>
          <td> &#8377; 6120 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kodaikanal - Yercaud  </td>
          <td > 2D/1N </td>
          <td> &#8377; 7250 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kodaikanal - Kanyakumari </td>
          <td > 1D/0N </td>
          <td> &#8377; 9708 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kodaikanal - Ooty </td>
          <td > 3D/2N </td>
          <td> &#8377; 9500 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
        <tr>
          <td> Kodaikanal - Kumbakonam  </td>
          <td > 3D/2N </td>
          <td> &#8377; 7300 </td>
          <td>
          <Button variant="secondary" type="submit">
                    View Details
            </Button>
          </td>
        </tr>
      </tbody>
    </Table> */}

    </Container>
  )
  
  function prevPage() {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCurrentPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if(currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }
}

export default Packages