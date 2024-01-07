// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Envelope, Instagram, Facebook, Twitter, Telephone } from 'react-bootstrap-icons';

// const Footer = () => {
//   return (
//     <div>
//       <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
//         <div className="col-md-4 d-flex align-items-center">
//           {/* Email Link with Icon */}
//           <Link to="mailto:info@example.com" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
//             <Envelope className="me-1" /> 
//           </Link>
//           {/* Instagram Link with Icon */}
//           <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
//             <Instagram className="me-1" /> 
//           </Link>
//           {/* Facebook Link with Icon */}
//           <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
//             <Facebook className="me-1" /> 
//           </Link>
//           {/* Twitter Link with Icon */}
//           <Link to="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
//             <Twitter className="me-1" /> 
//           </Link>
//           {/* Phone Number Link with Icon */}
//           <Link to="tel:+123456789" className="mb-3 mb-md-0 text-muted text-decoration-none lh-1">
//             <Telephone className="me-1" /> 
//           </Link>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import { Envelope, Instagram, Facebook, Twitter, Telephone } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p>
              Have questions? Reach out to us.
            </p>
            <Link to="mailto:info@example.com" className="text-light text-decoration-none">
              <Envelope className="me-2" />
              amit.18606@knit.ac.in
            </Link>
            <br />
            <Link to="tel:+123456789" className="text-light text-decoration-none">
              <Telephone className="me-2" />
              +91-8239060323
            </Link>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <p>Stay connected on our social media channels.</p>
            <div className="d-flex">
              <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="me-3 text-light text-decoration-none">
                <Instagram />
              </Link>
              <Link to="https://www.facebook.com/profile.php?id=100015794357514" target="_blank" rel="noopener noreferrer" className="me-3 text-light text-decoration-none">
                <Facebook />
              </Link>
              <Link to="https://twitter.com/AmitKum12553552" target="_blank" rel="noopener noreferrer" className="me-3 text-light text-decoration-none">
                <Twitter />
              </Link>
              <Link to="https://www.crio.do/learn/portfolio/amitkumar823906/" target="_blank" rel="noopener noreferrer" className="me-3 text-light text-decoration-none">
                Portfolio
              </Link>
              <Link to="https://www.linkedin.com/in/amit-kumar-522180201/" target="_blank" rel="noopener noreferrer" className="me-3 text-light text-decoration-none">
                LinkedIn
              </Link>
              <Link to="https://github.com/Amitbabu123" target="_blank" rel="noopener noreferrer" className="me-3 text-light text-decoration-none">
                GitHub
              </Link>
            </div>
          </div>

          {/* Additional Links Section */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-light text-decoration-none">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-light text-decoration-none">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

