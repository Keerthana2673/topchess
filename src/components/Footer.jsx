import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer itemScope itemType="https://schema.org/WPFooter" className="bg-secondary text-white pt-12">
            {/* Footer Top Section */}
            <div className="footer-top pb-5">
                <div className="container mx-auto px-2 max-w-6xl">
                    <div className="flex flex-wrap gap-5">
                        {/* Column 1 - Logo and Contact Info */}
                        <div className="flex-1 min-w-[200px] px-2">
                            <img
                                src="https://templatekit.jegtheme.com/topchess/wp-content/uploads/sites/266/2022/04/Topchess-logo-white-3ZEA8H-800x161.png"
                                alt="TOPCHESS Logo"
                                className="w-3/5 mb-4"
                            />
                            <p className="mb-5 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                            </p>
                            <ul className="list-none p-0">
                                <li className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faPhoneAlt} className="text-primary mr-2 w-4" />
                                    <span>(+62) 81 2345 1234</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-2 w-4" />
                                    <span>topchess@domain.com</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mr-2 w-4" />
                                    <span>Jl. Sunset Road No.99, Kuta</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 - Quick Links */}
                        <div className="flex-1 min-w-[200px] px-2">
                            <h4 className="text-heading font-heading text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="list-none p-0">
                                <li className="mb-2"><a href="/" className="text-white hover:text-accent transition-colors">Home</a></li>
                                <li className="mb-2"><a href="/about" className="text-white hover:text-accent transition-colors">About Us</a></li>
                                <li className="mb-2"><a href="/courses" className="text-white hover:text-accent transition-colors">Courses</a></li>
                                <li className="mb-2">
                                    <Link to="/about#coaches" className="text-white hover:text-accent transition-colors">
                                        Coach
                                    </Link>
                                </li>
                                <li className="mb-2"><a href="/contact" className="text-white hover:text-accent transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        {/* Column 3 - Useful Links */}
                        <div className="flex-1 min-w-[200px] px-2">
                            <h4 className="text-heading font-heading text-lg font-semibold mb-4">Useful Links</h4>
                            <ul className="list-none p-0">
                                <li className="mb-2"><a href="/" className="text-white hover:text-accent transition-colors">Privacy Policy</a></li>
                                <li className="mb-2"><a href="/" className="text-white hover:text-accent transition-colors">Terms and Conditions</a></li>
                                <li className="mb-2"><a href="/" className="text-white hover:text-accent transition-colors">Disclaimer</a></li>
                                <li className="mb-2"><a href="/" className="text-white hover:text-accent transition-colors">Support</a></li>
                                <li className="mb-2"><a href="/" className="text-white hover:text-accent transition-colors">FAQ</a></li>
                            </ul>
                        </div>

                        {/* Column 4 - Social Media and Newsletter */}
                        <div className="flex-1 min-w-[200px] px-2">
                            <h4 className="text-heading font-heading text-lg font-semibold mb-4">Our Social Media</h4>
                            <div className="flex gap-2 mb-5">
                                <a href="/" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-secondary hover:bg-accent hover:text-heading transition-all">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="/" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-secondary hover:bg-accent hover:text-heading transition-all">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="/" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-secondary hover:bg-accent hover:text-heading transition-all">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="/" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-secondary hover:bg-accent hover:text-heading transition-all">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </div>
                            <h4 className="text-heading font-heading text-lg font-semibold mb-4">Subscribe or Newsletter</h4>
                            <form className="mt-2">
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Your Email Address"
                                        className="flex-1 px-5 py-3 border-none bg-input text-secondary placeholder:text-placeholder"
                                        required
                                    />
                                    <button type="submit" className="px-5 py-3 bg-primary text-secondary border-none cursor-pointer hover:bg-accent hover:text-heading transition-all">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;