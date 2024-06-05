import React from 'react'
import './Footer.css'
// import footer_logo from '../../assets/footer_logo.svg'
// import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
       <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                &copy; 2024 Aloyo Job. All rights reserved.
            </p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Private policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer