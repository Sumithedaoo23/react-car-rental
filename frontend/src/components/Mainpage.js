import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Mainpage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/vehiclePg");
  };
  const handleClick1 = () => {
    navigate("/detailsPg");
  };

  useEffect(() => {
    Aos.init({ duration: "1000" });
  });
  return (
    <>
      <Container>
        <Row className="main-banner">
          <Col>
            <Row>
              <Col md={6} data-aos="fade-right">
                <h1 className="main-text">
                  Experience the road
                  <br />
                  like never before
                </h1>
                <p className="main-desc">
                  Discover the easiest way to rent a car anytime, anywhere. At
                  UrbanDrive <br />
                  CAR, we offer a wide range of well-maintained vehicles to suit
                  every <br />
                  journey – from quick city trips to weekend getaways. Whether
                  you’re looking <br />
                  for a compact car, a spacious SUV, or a luxury ride, we’ve got
                  the perfect <br />
                  wheels for you.
                </p>
                <button className="btn-view" onClick={handleClick}>
                  View all cars
                </button>
              </Col>
              <Col md={6} sm={12} data-aos="fade-left">
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
            </Row>
          </Col>
        </Row>
      </Container>

      <Container id="info" fluid>
        <Container>
          <Row className="text-center mt-5 mb-4 feature-icons">
            <Col xs={12} md={4} className="mb-4" data-aos="fade-down">
              <i className="fa-solid fa-location-dot fa-2x mb-2"></i>
              <h5>Availability</h5>
              <p>
                Easy access to services anytime and anywhere,
                <br />
                ensuring convenience for users.
              </p>
            </Col>
            <Col xs={12} md={4} className="mb-4" data-aos="fade-down">
              <i className="fa-solid fa-car-side fa-2x mb-2"></i>
              <h5>Comfort</h5>
              <p>
                Focus on providing a smooth and pleasant experience,
                <br />
                like a relaxed journey or user-friendly features.
              </p>
            </Col>
            <Col xs={12} md={4} className="mb-4" data-aos="fade-down">
              <i className="fa-solid fa-wallet fa-2x mb-2"></i>
              <h5>Savings</h5>
              <p>
                Helps users save money through affordable
                <br />
                options or cost-effective solutions.
              </p>
            </Col>
          </Row>
        </Container>

        <Container id="steps" className="mb-5">
          <Row className="align-items-center">
            <Col xs={12} md={6} className="mb-4" data-aos="fade-up">
              <img
                src={require("../images/male-manager-shows-helps-female-client-choose-car-her-dreams-modern-car-showroom_359031-40914.avif")}
                alt="contact us"
                className="img-fluid rounded"
              />
            </Col>
            <Col xs={12} md={6} data-aos="fade-left">
              <div className="step-box mb-4">
                <h5>
                  <button className="step-btn">1</button> Choose Your Car
                </h5>
                <p>
                  Browse through our wide range of vehicles — from budget rides
                  to luxury SUVs. Filter by model, type, or budget to find your
                  perfect match.
                </p>
              </div>
              <div className="step-box mb-4">
                <h5>
                  <button className="step-btn">2</button> Select Pickup & Drop
                  Locations
                </h5>
                <p>
                  Easily pick your rental location and preferred drop-off point.
                  We support multiple cities and airports for your convenience.
                </p>
              </div>
              <div className="step-box mb-4">
                <h5>
                  <button className="step-btn">3</button> Book & Pay Securely
                </h5>
                <p>
                  Reserve your car online in minutes. Enjoy secure payments and
                  instant booking confirmation — no hidden fees.
                </p>
              </div>
              <div className="step-box mb-4">
                <h5>
                  <button className="step-btn">4</button> Drive & Enjoy
                </h5>
                <p>
                  Pick up your car at the scheduled time and hit the road. Enjoy
                  24/7 customer support and roadside assistance throughout your
                  journey.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row className="text-center my-5">
          <Col data-aos="fade-down">
            <h3>
              Choose the car that <br /> suits you
            </h3>
          </Col>
        </Row>
      </Container>

      <Container
        id="facts"
        className="text-center py-5"
        style={{ backgroundColor: "#4C4CDE" }}
      >
        {/* Heading & Description */}
        <Row>
          <Col data-aos="fade-down" >
            <h3
              style={{
                color: "white",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Facts In Numbers
            </h3>
            <p className="text-light px-3 px-md-5" style={{ fontSize: "16px" }}>
              Keep it short and concise: A good slogan is typically no more than
              a few words or a short phrase.{" "}
              <br className="d-none d-md-block" />
              It should be easy to remember and instantly convey your business's
              unique value proposition.
            </p>
          </Col>
        </Row>

        {/* Stats Cards */}
        <Row className="justify-content-center text-center mt-4">
          {[
            ["540+", "Cars"],
            ["20k+", "Customers"],
            ["25+", "Years"],
            ["20m+", "Miles"],
          ].map(([value, label], idx) => (
            <Col
              key={idx}
              xs={12}
              sm={6}
              md={3}
              className="mb-4 d-flex justify-content-center"
              data-aos="fade-down" 
            >
              <div style={{ textAlign: "center", width: "100%" }}>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "orange",
                    borderRadius: "10px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "24px",
                    color: "#fff",
                  }}
                >
                  {idx + 1}
                </div>
                <h5
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    marginTop: "15px",
                    color: "white",
                  }}
                >
                  {value}
                </h5>
                <p style={{ color: "white", marginTop: "-5px" }}>{label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container id="download" className="my-5">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4" data-aos="fade-up-right">
            <h1>
              Download <br /> mobile app
            </h1>
            <p className="text-muted">
              Keep it short and concise: A good slogan is typically no more than{" "}
              <br />
              a few words or a short phrase. It should be easy to <br />
              remember and instantly convey your business's unique value
              proposition.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-3">
              <img
                src={require("../images/Group-31.png")}
                alt="app store"
                className="app-btn"
              />
              <img
                src={require("../images/Group-34.png")}
                alt="google play"
                className="app-btn"
              />
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center" data-aos="fade-left">
            <div className="download-mockup">
              <Container
                style={{ width: "200px", height: "400px" }}
                id="mobile"
                className="mockup-style"
              ></Container>
              <Container
                style={{
                  width: "200px",
                  height: "400px",
                  marginLeft: "-450px",
                  marginTop: "100px",
                }}
                id="mobile1"
                className="mockup-style"
              ></Container>
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        id="enjoy"
        className="text-center my-5"
        style={{
          backgroundColor: "#4C4CDE",
          height: "350px",
          borderRadius: "10px",
        }}
      >
        <Row className="justify-content-center">
          <Col xs={12} md={8} data-aos="fade-down">
            <h2 style={{ color: "white", marginTop: "50px" }}>
              Enjoy every mile with <br /> adorable companionship
            </h2>
            <p className="text-muted" style={{ color: "white" }}>
              A few words or a short phrase. It should be easy to <br />
              remember and instantly convey your business's unique value
              proposition.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col
            xs={10}
            sm={8}
            md={6}
            className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2"
            data-aos="fade-down"
          >
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search your destination..."
            />
            <button className="btn btn-warning search-btn">Search</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
