import './index.css';
import { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

const Footer = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="footer-container">
            <div>
                <h1
                    onClick={() => toggleSection('products')}
                    className={openSection === 'products' ? 'open' : ''}
                >
                    Products
                    <IoIosArrowDropdown className="icon" />
                </h1>
                <ul className={openSection === 'products' ? 'open' : ''}>
                    <li>StonePedia Exclusive</li>
                    <li>Best Seller</li>
                    <li>Premium Stones</li>
                    <li>Shop By Color</li>
                    <li>Shop By Category</li>
                    <li>Applications</li>
                    <li>Customer Review</li>
                </ul>
            </div>
            <div>
                <h1
                    onClick={() => toggleSection('support')}
                    className={openSection === 'support' ? 'open' : ''}
                >
                    Support
                    <IoIosArrowDropdown className="icon" />
                </h1>
                <ul className={openSection === 'support' ? 'open' : ''}>
                    <li>Request For Quotation</li>
                    <li>FAQs</li>
                    <li>Blogs</li>
                    <li>Help Center</li>
                    <li>Login</li>
                    <li>Sign Up</li>
                    <li>Report Complaint</li>
                </ul>
            </div>
            <div>
                <h1
                    onClick={() => toggleSection('company')}
                    className={openSection === 'company' ? 'open' : ''}
                >
                    Company
                    <IoIosArrowDropdown className="icon" />
                </h1>
                <ul className={openSection === 'company' ? 'open' : ''}>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Cookies Policy</li>
                    <li>Cancellation Policy</li>
                    <li>Disclaimer</li>
                </ul>
            </div>
            <div>
                <h1
                    onClick={() => toggleSection('reachUs')}
                    className={openSection === 'reachUs' ? 'open' : ''}
                >
                    Reach Us
                    <IoIosArrowDropdown className="icon" />
                </h1>
                <ul className={openSection === 'reachUs' ? 'open' : ''}>
                    <li>In The Press</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>LinkedIn</li>
                    <li>YouTube</li>
                    <li>Feedback</li>
                    <li>Partner With Us</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
