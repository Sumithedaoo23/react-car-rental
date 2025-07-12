import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./AboutUS.css";
import Stack from "react-bootstrap/Stack";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/detailsPg");
  };
  useEffect(() => {
    Aos.init({ duration: "1000" });
  });
  return (
    <>
      <Container>
        <Container id="first">
          <Row>
            <Col data-aos="fade-down">
              <h1>About Us</h1>
              <p>Home / About Us</p>
            </Col>
          </Row>
        </Container>

        <Container id="second">
          <Row>
            <Col data-aos="fade-right">
              <h2>
                Where every <br></br> drive feels<br></br>extraordinary
              </h2>
            </Col>
            <Col data-aos="fade-down">
              <Row>
                <h4>Variety Brands</h4>
                <p>
                  Choose from a wide range of trusted and<br></br> premium car
                  brands suited to every taste and need.
                </p>
              </Row>
              <Row>
                <h4>Maximum Freedom</h4>
                <p>
                  Our support team is here 24/7 to help you with anything you
                  need — before, during, or after<br></br> your trip.
                </p>
              </Row>
            </Col>
            <Col data-aos="fade-down">
              <Row>
                <h4>Awesome Support</h4>
                <p>
                  Our rental plans are designed to offer full<br></br>{" "}
                  flexibility with your time and travel goals.
                </p>
              </Row>
              <Row id="four">
                <h4>Flexibility On The Go</h4>
                <p>
                  Mobile-friendly bookings, quick pickup options,<br></br> and
                  easy cancellations give you full control.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container id="video">
          <Row>
            <Col data-aos="flip-up">
              <img
                src={require("../images/istockphoto-487923098-612x612.jpg")}
                alt="Video section"
                className="contact-image"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </Col>
          </Row>
        </Container>

        <Container id="third">
          <Row>
            <Col data-aos="fade-right">
              <h1>20k+</h1>
              <p>Happy Customers</p>
            </Col>
            <Col  data-aos="fade-down">
              <h1>540+</h1>
              <p>Cars Available</p>
            </Col>
            <Col data-aos="fade-left">
              <h1>25+</h1>
              <p>Years of Experience</p>
            </Col>
          </Row>
        </Container>

        <Container id="fourth">
          <Row className="align-items-center">
            {/* LEFT SIDE: Text */}
            <Col md={7} data-aos="fade-right">
              <h3>
                Unlock unforgettable
                <br />
                memories on the road
              </h3>
              <p id="subheading">
                Explore the world at your pace with our trusted car rentals.
              </p>

              <Row className="mt-5">
                <Col sm={6}>
                  <p className="rule">
                    <button>1</button> Drive beyond the destination
                    <br />
                    Every journey is a story waiting to be told.
                  </p>
                </Col>
                <Col sm={6}>
                  <p className="rule">
                    <button>2</button> Comfort that moves with you
                    <br />
                    From city streets to highways, enjoy comfort.
                  </p>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col sm={6}>
                  <p className="rule">
                    <button>3</button> Moments made on the road
                    <br />
                    Stop where you want, stay as long as you like.
                  </p>
                </Col>
                <Col sm={6}>
                  <p className="rule">
                    <button>4</button> Travel light, live large
                    <br />
                    No schedules. No limits. Just freedom.
                  </p>
                </Col>
              </Row>
            </Col>

            {/* RIGHT SIDE: Image */}
            <Col md={5} className="text-center mt-4 mt-md-0"  data-aos="fade-left">
              <div id="roadimg">
                <img
                  src={require("../images/7367137-Lailah-Gifty-Akita-Quote-Great-moment-unforgettable-memory.jpg")}
                  alt="memory"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>

        <Container id="fifth">
          <Row className="align-items-center">
            {/* Left - Mobile phone mockup */}
            <Col md={6} className="text-center mb-4 mb-md-0" data-aos="fade-up-right">
              <div id="mobile">
                <div id="camera">
                  <div id="lens"></div>
                </div>
              </div>
            </Col>

            {/* Right - Download content */}
            <Col md={6}  data-aos="fade-left">
              <p>DOWNLOAD OUR APP</p>
              <h3>Download our app</h3>
              <div className="description">
                <p>
                  Experience the convenience of booking on the go. Stay updated,
                  manage your trips, and unlock exclusive app-only deals.
                  Download now and take control of your journey anytime,
                  anywhere.
                </p>
              </div>
              <img
                src={require("../images/Group-31.png")}
                alt="playstore"
                className="store-badge"
              />
              <img
                src={require("../images/Group-34.png")}
                alt="appstore"
                className="store-badge"
              />
            </Col>
          </Row>
        </Container>

        <Container id="sixth">
          <Row data-aos="fade-down">
            <h3>Review from our customers</h3>
          </Row>
          <Row className="justify-content-center">
            {[1, 2, 3].map((item, idx) => (
              <Col
                key={idx}
                xs={12}
                md={4}
                className="d-flex justify-content-center"
                style={{ marginBottom: "30px" }}
                 data-aos="fade-down"
              >
                <div id="box">
                  <p>
                    Experience the convenience of booking on the go. Stay
                    updated, manage your trips, and unlock exclusive app-only
                    deals. Download now and take control of your journey
                    anytime, anywhere.
                  </p>
                  <div id="user"></div>
                  <div className={`profile profile${idx + 1}`}>
                    <p
                      style={{
                        color: "white",
                        textAlign: "center",
                        marginTop: "20px",
                      }}
                    >
                      <strong>Emanuel Boyle</strong>
                      <br />
                      kuphal LLC
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        <Container id="seventh"  data-aos="fade-down">
          <h1>Top Car Rental Questions</h1>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How does it work?</Accordion.Header>
              <Accordion.Body>
                Renting a car is simple and convenient. You choose your location
                and dates, browse available vehicles, and book online by
                entering your details and making a payment. Once confirmed, pick
                up the car at the scheduled time and return it to the designated
                drop-off point. Many services also offer extras like insurance
                and roadside assistance for added convenience.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Can I rent a car without a credit card?
              </Accordion.Header>
              <Accordion.Body>
                Most companies require a valid driver's license, ID, and a
                credit or debit card. Age restrictions (typically 21+) may
                apply, and requirements may vary by location.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What are the requirements for renting a car?
              </Accordion.Header>
              <Accordion.Body>
                You need a valid driver’s license, a government-issued ID, and a
                credit or debit card. Most companies require renters to be at
                least 21 years old.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Can I tow or attach a hitch to the rental vehicle?
              </Accordion.Header>
              <Accordion.Body>
                Generally, no. Towing or hitching is not allowed as it may
                violate the rental agreement and insurance terms. Check with the
                company if you need a tow-capable vehicle.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Does Car Rental offer coverage products?
              </Accordion.Header>
              <Accordion.Body>
                Yes. Optional coverage includes damage waivers, theft
                protection, and liability insurance. You may add these during
                booking or pickup. Check if your own insurance or credit card
                already provides similar coverage.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>

        <Container id="eight">
          <Row>
            <Col data-aos="fade-right">
              <h2 style={{ color: "white" }}>Looking for a car?</h2>
              <h5 style={{ color: "white" }}>+547 547-6401</h5>
              <p style={{ color: "white" }}>
                Ready to hit the road? Whether it’s for a quick trip or a long
                getaway, we’ve got the perfect ride waiting for you. Call us now
                and let us help you find the car that fits your needs, budget,
                and lifestyle—fast, easy, and hassle-free.
              </p>
              <button
                onClick={handleClick}
                style={{
                  border: "none",
                  borderRadius: "10px",
                  marginLeft: "100px",
                  width: "200px",
                  height: "40px",
                  backgroundColor: "orange",
                  color: "white",
                  fontWeight: "bold",
                  textAlign:'center'
                }}
              >
                Book now
              </button>
            </Col>
            <Col  data-aos="fade-left">
              <Container id="carimgg">
                <img
                  src={require("../images/looking for a car.webp")}
                  alt="contact us"
                  className="contact-image"
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default About;
