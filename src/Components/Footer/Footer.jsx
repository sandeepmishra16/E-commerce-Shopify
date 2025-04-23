import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.webp";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {

  return (

    <div className="footer">
      <ul className="footer-links">
        <li>About</li>
        <li>Products</li>
        <li>Help</li>
        <li>Careers</li>
        <li>Contact</li>
        <li>Legal</li>
      </ul>

      <div className="footer-social-icon">
        <div>
          <FaFacebookF size={28} />
        </div>
        <div>
          <FaInstagram size={28} />
        </div>
        <div>
          <FaWhatsapp size={28} />
        </div>
        <div>
          <FaXTwitter size={28} />
        </div>
        <div>
          <FaLinkedinIn size={28} />
        </div>
        <div>
          <FaYoutube size={28} />
        </div>
      </div>

      <hr className="hr" />
      
      <div className="footer-copyright">
        <p>Copyright © 2025 by Sandeep Mishra. All rights reserved.</p>
        <div className="footer-logo">
          <img src={logo} alt="" height="40px" />
          <p>Shopify</p>
        </div>
      </div>
    </div>

  );
};

export default Footer;
