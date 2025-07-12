import Container from "react-bootstrap/esm/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./ContactUS.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import { Choose } from "../images/Choosing the Right Car - auto and carz.png";
import carImage1 from '../images/Choosing-The-Right-Car.jpg'; // adjust the path as needed
import carImage2 from '../images/1615402885322.avif'; // adjust the path as needed
import carImage3 from '../images/Choosing the Right Car - auto and carz.png'; // adjust the path as needed


function Contact() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/vehiclePg");
  };
  useEffect(() => {
    Aos.init({ duration: "1000" });
  });
  return (
    <>
      <Container>
        <Container id="first" data-aos="fade-down">
          <h1>Contact Us</h1>
          <p>Home / Contact Us</p>
        </Container>

        <Container id="booking-section" data-aos="fade-right">
          <Row>
            <Col md={6} sm={12}>
              <Container id="bookyour">
                <h4>Book your car</h4>

                <NavDropdown title="Car Type" id="car-dropdown">
                  <NavDropdown.Item>Sedan</NavDropdown.Item>
                  <NavDropdown.Item>SUV</NavDropdown.Item>
                  <NavDropdown.Item>Sports</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Luxury</NavDropdown.Item>
                  <NavDropdown.Item>Convertible</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Place of Rental" id="rental-dropdown">
                  <NavDropdown.Item>Nagpur</NavDropdown.Item>
                  <NavDropdown.Item>Mumbai</NavDropdown.Item>
                  <NavDropdown.Item>Pune</NavDropdown.Item>
                  <NavDropdown.Item>Nashik</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Others</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Place of Return" id="return-dropdown">
                  <NavDropdown.Item>Nagpur</NavDropdown.Item>
                  <NavDropdown.Item>Pune</NavDropdown.Item>
                  <NavDropdown.Item>Mumbai</NavDropdown.Item>
                  <NavDropdown.Item>Akola</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Others</NavDropdown.Item>
                </NavDropdown>

                <span>Rental Date</span>
                <br />
                <input type="date" />
                <br />
                <span>Return Date</span>
                <br />
                <input type="date" />
                <br />
                <button onClick={handleClick}>Book Now</button>
              </Container>
            </Col>

            <Col md={6} sm={12} data-aos="fade-left">
              <div id="imggg">
                <img
                  src={require("../images/istockphoto-487923098-612x612.jpg")}
                  alt="contact us"
                  className="contact-image"
                />
              </div>
            </Col>
          </Row>
        </Container>

        <Container id="second">
          <Row>
            <Col data-aos="fade-down">
              <Container id="icon">
                <i class="fa-solid fa-location-dot"></i>
              </Container>
              <h6>Address</h6>
              <p>OxFord Ave. Cary, NC 27511</p>
            </Col>
            <Col data-aos="fade-down">
              <Container id="icon">
                <i class="fa-solid fa-message"></i>
              </Container>
              <h6>Email</h6>
              <p>nwiger@yahoo.com</p>
            </Col>
            <Col data-aos="fade-down">
              <Container id="icon">
                <i class="fa-solid fa-phone"></i>
              </Container>
              <h6>Phone</h6>
              <p>+544 367-6401</p>
            </Col>
            <Col data-aos="fade-down">
              <Container id="icon">
                <i class="fa-solid fa-clock"></i>
              </Container>
              <h6>Opening hours</h6>
              <p>Sun-Mon: 10am - 10pm</p>
            </Col>
          </Row>
        </Container>

        <Container id="third">
          <h2>Latest blog posts & news</h2>
          <Row>
            <Col md={4} className="blog-post" data-aos="fade-down">
              <div className="post-img">
                {/* <img src={Choose} alt="blog post" /> */}
                <img src={carImage1} alt="Car" style={{width:'410px', height:'180px',borderRadius:'10px'}} />
              </div>
              <h6>How To Choose The Right Car</h6>
              <p>News / 12 April 2024</p>
            </Col>
            <Col md={4} className="blog-post" data-aos="fade-down">
              <div className="post-img"></div>
              <img src={carImage2} alt="Car" style={{width:'405px', height:'180px',borderRadius:'10px',marginTop:'-210px'}} />
              <h6 style={{marginTop:'-5px'}}>Which Plan Is Right For Me?</h6>
              <p>News / 12 April 2024</p>
            </Col>
            <Col md={4} className="blog-post" data-aos="fade-down">
              <div className="post-img">
                <img src={carImage3} alt="Car" style={{width:'405px', height:'185px',borderRadius:'10px'}} />
              </div>
              <h6>Enjoy Speed, Choice & Total Control</h6>
              <p>News / 12 April 2024</p>
            </Col>
          </Row>
        </Container>

        <Container id="logos">
          <Row className="justify-content-center">
            {[11, 12, 13, 14, 15, 16].map((num, index) => (
              <Col
                key={index}
                md={2}
                sm={4}
                xs={6}
                className="text-center car-logo"
              >
                <img
                  src={require(`../images/pngwing.com (${num}).png`)}
                  alt={`logo-${num}`}
                  className="car-logo-img"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Contact;
