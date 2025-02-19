import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        {/* Left side: Contact Info */}
        <div className='footer-contact'>
          <h2>CONTACT</h2>
          <div className="underline"></div>
          <Link to='/'>Adres: Berkenhof 4, 4711RS Sint Willebrord</Link>
          <Link to='/'>Email: info@vanvlimmerenfeestverhuur.nl</Link>
          <Link to='/'>KVK: 91703921</Link>
        </div>

        {/* Right side: Logo & Social Icons */}
        <div className='footer-right'>
          <div className='social-icons'>
            <Link className='social-icon-link' to='https://www.facebook.com/profile.php?id=61569594416814' target='_blank' aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>
            <Link className='social-icon-link' to='https://www.instagram.com/vanvlimmerenfeestverhuur/' target='_blank' aria-label='Instagram'>
              <i className='fab fa-instagram' />
            </Link>
          </div>
          <div className='footer-logo'>
            <Link to='/'>
              <img src={require('../images/V-2.png')} alt="Logo" />
            </Link>
          </div>
        </div>
      </div>
      <small className='website-rights'>Van Vlimmeren Feestverhuur © 2025</small>
    </div>
  );
}

export default Footer;