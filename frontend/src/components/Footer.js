// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import "./Footer.css"

// function Footer(){
//     return(
//         <>
//             <Container id="foot">
//                 <Row>
//                     <Col id="logo">Car Rental</Col>
//                     <Col>
//                         <h6>Address</h6>
//                         <p>Oxford ave. Cary,NC 27511</p>
//                     </Col>
//                     <Col>
//                         <h6>Email</h6>
//                         <p>rental@gmail.com</p>
//                     </Col>
//                     <Col>
//                         <h6>Phone</h6>
//                         <p>+547 547 6421</p>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
//                     </Col>
//                     <Col>
//                         <h6>Useful links</h6>
//                         <p>About us</p>
//                         <p>Contact us</p>
//                         <p>Gallery</p>
//                         <p>Blog</p>
//                         <p>F.A.Q</p>
//                     </Col>
//                     <Col>
//                         <h6>Vehicles</h6>
//                         <p>sedan</p>
//                         <p>Cabrriolet</p>
//                         <p>Pickup</p>
//                         <p>Minivan</p>
//                         <p>SUV</p>
//                     </Col>
//                     <Col id="phone">
//                         <h6>Download App</h6>
//                         <img src={require('../images/Group-31.png')} alt="contact us" class="contact-image" />
//                         <img src={require('../images/Group-34.png')} alt="contact us" class="contact-image" />
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }

// export default Footer;






import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-container">
          <Row>
            <Col id="logo">Car Rental</Col>
            <Col>
              <h6>Address</h6>
              <p>Oxford ave. Cary,NC 27511</p>
            </Col>
            <Col>
              <h6>Email</h6>
              <p>rental@gmail.com</p>
            </Col>
            <Col>
              <h6>Phone</h6>
              <p>+547 547 6421</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </Col>
            <Col>
              <h6>Useful links</h6>
              <p>About us</p>
              <p>Contact us</p>
              <p>Gallery</p>
              <p>Blog</p>
              <p>F.A.Q</p>
            </Col>
            <Col>
              <h6>Vehicles</h6>
              <p>Sedan</p>
              <p>Cabriolet</p>
              <p>Pickup</p>
              <p>Minivan</p>
              <p>SUV</p>
            </Col>
            <Col id="phone">
              <h6>Download App</h6>
              <img
                src={require('../images/Group-31.png')}
                alt="Google Play"
                className="contact-image"
              />
              <img
                src={require('../images/Group-34.png')}
                alt="App Store"
                className="contact-image"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Footer;



