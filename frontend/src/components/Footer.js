import React from 'react';
import './Footer.css';
import Email from "../assets/images/Email.png";
import contact from "../assets/images/contact.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>About Us</h2>
                        <p>The best banking service provider. One place for all your banking essentials.</p>
                    </div>

                    <div className="footer-section contact">
                        <h2 className='mb-2'>Contact Us</h2>
                        <h5 className='email'><img src={Email} alt="#" />premierbank@gmail.com</h5>
                        <h5 className='email'><img src={contact} alt="#" />+91 6299674639</h5>
                    </div>
                    <div className="footer-bottom">
                        <h6>&copy; {new Date().getFullYear()} Premier Private Bank,<br /> All rights reserved</h6>
                    </div>
                </div>
            </div>


        </footer>
    );
}

export default Footer;
