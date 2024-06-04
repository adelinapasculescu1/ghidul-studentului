import React from 'react';
import './Footer.css'
import { FaFacebook, FaLinkedin, FaInstagram, FaTiktok, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import { PiGlobe } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
const Footer = () => {
    return (
        <footer className="footer">
            <div className = 'footer-left'>
                <div className='container'>
                    <div className="title">Fii la curent!</div>
                    <div className="social-icons">
                        <a href="https://www.upt.ro" target="_blank" rel="noopener noreferrer">
                            <PiGlobe />
                        </a>
                        <a href="https://www.facebook.com/UPTimisoara" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/upt.ro/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.tiktok.com/@upt.ro" target="_blank" rel="noopener noreferrer">
                            <FaTiktok />
                        </a>
                        <a href="https://www.linkedin.com/in/Politehnica%20University%20Timisoara" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            <div className='text'>© 2024 Ghidul Studentului. Toate drepturile rezervate.</div>
            </div>
            <div className='footer-right'>
                <div>
                    <FaMapMarkedAlt /> 
                    <div className='text'>Piaţa Victoriei Nr. 2, 300006 Timişoara, jud. Timiş, România</div>
                </div>
                <div >
                    <FaPhone /> 
                    <div className='text'>0256 - 403021</div>
                </div>
                <div>
                    <CiMail />
                    <div className='text'>rector@upt.ro</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;