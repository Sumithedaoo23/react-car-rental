// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import "./Nav.css"
// import { useNavigate } from 'react-router-dom';
// // import { useNavigate } from 'react-router-dom';
// import { Link, Outlet } from 'react-router-dom';

// function Navigation(){

//     let navigate = useNavigate();

//     const Next = () =>{
//         navigate("./vehicleroute.js");
//     };
//     return(
//         <>
//             <Container id="navigate">
//                   <Navbar expand="lg" className="bg-body-tertiary">
//                       <Container>
//                           <Navbar.Brand id="logocar" href="#home"><i class="fa-solid fa-car-side"></i> <strong>Car</strong> Rental</Navbar.Brand>
//                           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                           <Navbar.Collapse id="basic-navbar-nav">
//                                 <Nav id="navii" className="me-auto">
//                                   <Link style={{textDecoration:"none"}} to="/">Home</Link>
//                                   {/* <button onClick={Next} >Vehicles</button> */}
//                                   <Link style={{textDecoration:"none"}} to="/vehiclePg">Vehicles</Link>
//                                   {/* <Link style={{textDecoration:"none"}} to="/detailsPg">Details</Link> */}
//                                   <Link style={{textDecoration:"none"}} to="/aboutUsPg">About Us</Link>
//                                   <Link style={{textDecoration:"none"}} to="/contactUsPg">Contact Us</Link>
//                                   <Link style={{textDecoration:"none"}} to="/addtocart">Add to cart</Link>
//                                   <Link style={{textDecoration:"none"}} to="/book/:id">Your Booking</Link>
//                                 </Nav>
//                               <Navbar.Brand href="#home">Need help? <br/> +996 247-1680</Navbar.Brand>
//                           </Navbar.Collapse>
//                       </Container>
//                   </Navbar>
//             </Container>
//         </>
//     )
// }

// export default Navigation;





// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import "./Nav.css";
// import { Link } from 'react-router-dom';

// function Navigation() {
//   return (
//     <>
//       <div className="nav-wrapper">
//         <Navbar expand="lg" className="nav-bar w-100">
//           <Container>
//             <Navbar.Brand id="logocar" href="/">
//               <i className="fa-solid fa-car-side"></i> <strong>Car</strong> Rental
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav id="navii" className="me-auto">
//                 <Link className="nav-link-custom" to="/">Home</Link>
//                 <Link className="nav-link-custom" to="/vehiclePg">Vehicles</Link>
//                 <Link className="nav-link-custom" to="/aboutUsPg">About Us</Link>
//                 <Link className="nav-link-custom" to="/contactUsPg">Contact Us</Link>
//                 <Link className="nav-link-custom" to="/addtocart">Add to Cart</Link>
//                 <Link className="nav-link-custom" to="/yourbooking">Your Booking</Link>
//               </Nav>
//               <Navbar.Brand className="help-contact" href="#help">
//                 Need help? <br /> +996 247-1680
//               </Navbar.Brand>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </div>
//     </>
//   );
// }

// export default Navigation;











// import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// import './Nav.css';

// function Navigation() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <>
//       <div className="nav-wrapper">
//         <Navbar expand="lg" className="nav-bar w-100">
//           <Container className="d-flex justify-content-between align-items-center">
//             <Navbar.Brand id="logocar" href="/">
//               <i className="fa-solid fa-car-side"></i> <strong>Car</strong> Rental
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav id="navii" className="mx-auto d-flex align-items-center">
//                 <Link className="nav-link-custom" to="/">Home</Link>
//                 <Link className="nav-link-custom" to="/vehiclePg">Vehicles</Link>
//                 <Link className="nav-link-custom" to="/aboutUsPg">About Us</Link>
//                 <Link className="nav-link-custom" to="/contactUsPg">Contact Us</Link>
//                 {/* <Link className="nav-link-custom" to="/addtocart">Add to Cart</Link> */}
//                 {/* <Link className="nav-link-custom" to="/yourbooking">Your Booking</Link> */}
//               </Nav>
//               <div className="nav-right">
//                 <button className="profile-btn" onClick={toggleSidebar}>
//                   <i className="fa-solid fa-user"></i>
//                 </button>
//                 <Navbar.Text className="help-contact text-end">
//                   Need help? <br /> +996 247-1680
//                 </Navbar.Text>
//               </div>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </div>

//       {/* Slide-in Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
//         <div className="sidebar-header">
//           <i className="fa-solid fa-user-circle user-icon"></i>
//           <div className="username">Guest User</div>
//         </div>
//         <div className="sidebar-links">
//           <Link to="/addtocart" className="sidebar-link" onClick={toggleSidebar}>🛒 Add to Cart</Link>
//           <Link to="/yourbooking" className="sidebar-link" onClick={toggleSidebar}>📋 Your Booking</Link>
//           <button className="sidebar-btn">Sign Up</button>
//           <button className="sidebar-btn logout">Logout</button>
//         </div>
//       </div>

//       {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
//     </>
//   );
// }

// export default Navigation;









import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Nav.css';
import LoginPopup from './loginpop'; // ✅ Import your popup

function Navigation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false); // ✅ New state

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLoginSuccess = () => {
    setShowLoginPopup(false); // Close popup after login
    setSidebarOpen(false);    // Also close sidebar
    // You can add localStorage.setItem("user", ...) if needed
  };

  return (
    <>
      <div className="nav-wrapper">
        <Navbar expand="lg" className="nav-bar w-100">
          <Container className="d-flex justify-content-between align-items-center">
            <Navbar.Brand id="logocar" href="/">
              <i className="fa-solid fa-car-side"></i> <strong>Car</strong> Rental
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav id="navii" className="mx-auto d-flex align-items-center">
                <Link className="nav-link-custom" to="/">Home</Link>
                <Link className="nav-link-custom" to="/vehiclePg">Vehicles</Link>
                <Link className="nav-link-custom" to="/aboutUsPg">About Us</Link>
                <Link className="nav-link-custom" to="/contactUsPg">Contact Us</Link>
                {/* <Link className="nav-link-custom" to="/addtocart">Add to Cart</Link>
                <Link className="nav-link-custom" to="/yourbooking">Your Booking</Link> */}
              </Nav>
              <div className="nav-right">
                <button className="profile-btn" onClick={toggleSidebar}>
                  <i className="fa-solid fa-user"></i>
                </button>
                <Navbar.Text className="help-contact text-end">
                  Need help? <br /> +996 247-1680
                </Navbar.Text>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Slide-in Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <i className="fa-solid fa-user-circle user-icon"></i>
          <div className="username">Guest User</div>
        </div>
        <div className="sidebar-links">
          <Link to="/addtocart" className="sidebar-link" onClick={toggleSidebar}>🛒 Add to Cart</Link>
          <Link to="/yourbooking" className="sidebar-link" onClick={toggleSidebar}>📋 Your Booking</Link>
          
          {/* 🔘 Sign Up opens popup */}
          <button className="sidebar-btn" onClick={() => setShowLoginPopup(true)}>Sign Up</button>

          {/* 🔴 Logout button (can be dynamic later) */}
          <button className="sidebar-btn logout">Logout</button>
        </div>
      </div>

      {/* Close sidebar if clicked outside */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* ✅ Login Popup Modal */}
      {showLoginPopup && <LoginPopup onLogin={handleLoginSuccess} />}
    </>
  );
}

export default Navigation;
