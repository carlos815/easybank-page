import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo-white.svg'

import FacebookSVG from '../img/social/icon-facebook.inline.svg'
import InstagramSVG from '../img/social/icon-instagram.inline.svg'
import TwitterSVG from '../img/social/icon-twitter.inline.svg'
import YoutubeSVG from '../img/social/icon-youtube.inline.svg'
import PinterestSVG from '../img/social/icon-pinterest.inline.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <div className='brand'>
            <Link to='/' className='brand-item' title='Logo'>
              <img src={logo} alt='easybank' />
            </Link>
            <div className='social'>
              <a href='https://www.facebook.com'>
                <FacebookSVG />
              </a>
              <a href='https://www.youtube.com'>
                <YoutubeSVG />
              </a>
              <a href='https://www.twitter.com'>
                <TwitterSVG />
              </a>
              <a href='https://www.pinterest.com'>
                <PinterestSVG />
              </a>
              <a href='https://www.instagram.com'>
                <InstagramSVG />
              </a>
            </div>
          </div>

          <ul className='menu'>
            <li className='menu-item'>
              <Link to='/about'>About Us</Link>
            </li>
            <li className='menu-item'>
              <Link to='/contact'>Contact</Link>
            </li>
            <li className='menu-item'>
              <Link to='/blog'>Blog</Link>
            </li>
            <li className='menu-item'>
              <Link to='/careers'>Careers</Link>
            </li>
            <li className='menu-item'>
              <Link to='/support'>Support</Link>
            </li>
            <li className='menu-item'>
              <Link to='/privacy-policy'>Privacy Policy</Link>
            </li>
          </ul>
          <div className='last-column'>
            <Link className='btn btn-important' to='/'>
              Request Invite
            </Link>
            w<div className='copyright'>© Easybank. All Rights Reserved</div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
