import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <Link to='/' className='brand-item' title='Logo'>
          <img src={logo} alt='easybank' />
        </Link>
        <div className='social'>
          <a href='www.facebook.com'></a>
          <a href='www.youtube.com'></a>
          <a href='www.twitter.com'></a>
          <a href='www.printerest.com'></a>
          <a href='www.instagram.com'></a>
        </div>
        <ul className='menu'>
          <li className='menu-item'>
            <Link>About Us</Link>
          </li>
          <li className='menu-item'>
            <Link>Contact</Link>
          </li>
          <li className='menu-item'>
            <Link>Blog</Link>
          </li>
          <li className='menu-item'>
            <Link>Careers</Link>
          </li>
          <li className='menu-item'>
            <Link>Support</Link>
          </li>
          <li className='menu-item'>
            <Link>Privacy Policy</Link>
          </li>
        </ul>
        <div className='btn btn-important'>Request Invite</div>
      </footer>
    )
  }
}

export default Footer
