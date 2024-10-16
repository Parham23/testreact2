import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.jpg'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>مجیکال واچ</p>
        </div>
        <ul className="footer-links">
            <li>کمپانی</li>
            <li>محصولات</li>
            <li>دفاتر</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyrights @ 2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}
