import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (dropdownName) => setActiveDropdown(dropdownName);
    const handleMouseLeave = () => setActiveDropdown(null);

    const renderDropdownContent = (dropdownName) => {
        switch (dropdownName) {
            case 'Company':
                return (
                    <div className="dropdown-panel">
                        <ul>
                            <li>About Us</li>
                            <li>Career</li>
                            <li>Life @Ripenapps</li>
                            <li>Awards & Recognition</li>
                        </ul>
                    </div>
                );
            case 'Services':
                return (
                    <div className="dropdown-panel dropdown-services">
                        <div>
                            <h6>App Development</h6>
                            <ul>
                                <li>Android App Development</li>
                                <li>iOS App Development</li>
                                <li>Web App Development</li>
                                <li>iPad App Development</li>
                            </ul>
                        </div>
                        <div>
                            <h6>Web Design & Development</h6>
                            <ul>
                                <li>PHP Development</li>
                                <li>CodeIgniter</li>
                                <li>Laravel Development</li>
                                <li>AngularJs Development</li>
                            </ul>
                        </div>
                        <div>
                            <h6>Full Stack Development</h6>
                            <ul>
                                <li>NodeJs Development</li>
                                <li>MEAN Development</li>
                                <li>MERN Development</li>
                                <li>ReactJs Development</li>
                            </ul>
                        </div>
                        <div>
                            <h6>Latest Technologies</h6>
                            <ul>
                                <li>Wearable Device App Development</li>
                                <li>IoT App Development</li>
                                <li>Beacon App Development</li>
                            </ul>
                        </div>
                        <div>
                            <h6>UI/UX Designing</h6>
                            <ul>
                                <li>Quality Assurance</li>
                                <li>Hire Mobile App Developer</li>
                                <li>Product Design & Discovery Phase</li>
                                <li>Digital Marketing</li>
                            </ul>
                        </div>
                    </div>
                );
            case 'Industries':
                return (
                    <div className="dropdown-panel">
                        <ul>
                            <li>Education</li>
                            <li>Banking & Finance</li>
                            <li>Ecommerce</li>
                            <li>Sports</li>
                            <li>Food & Restaurant</li>
                            <li>Taxi Booking</li>
                            <li>Dating</li>
                            <li>Travel & Transport</li>
                            <li>Events & Tickets</li>
                            <li>Social Networking</li>
                            <li>On Demand</li>
                            <li>Healthcare & Fitness</li>
                        </ul>
                    </div>
                );
            case 'Insights':
                return (
                    <div className="dropdown-panel">
                        <ul>
                            <li>Blog</li>
                            <li>Press Release</li>
                            <li>Brochure</li>
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <header className="sticky-top bg-white shadow-sm p-3">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Logo */}
                <div>
                    <img src="logo-placeholder.png" alt="Sparkup India Logo" style={{ width: '150px' }} />
                </div>

                {/* Navigation */}
                <nav className="d-flex gap-4">
                    {['Company', 'Services', 'Industries', 'Insights', 'Portfolio', 'Contact Us'].map((item) => (
                        <div
                            key={item}
                            onMouseEnter={() => handleMouseEnter(item)}
                            onMouseLeave={handleMouseLeave}
                            className="position-relative nav-item"
                            style={{ cursor: 'pointer' }}
                        >
                            {item}
                            {activeDropdown === item && (
                                <div className="dropdown-container">
                                    {renderDropdownContent(item)}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
