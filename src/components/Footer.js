import React from 'react';
import './Footer.css';
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link 
              to='home'
              className='social-logo'
              spy={true}
              smooth={true}
            >
              TOPO
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TOPO © 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/thornaito'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/thorparinn.exe/'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/ThorPeturs'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/in/thorp94/'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link Mail'
              href='mailto:petursson94@gmail.com'
              aria-label='Mail'
            >
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
