import ParallaxHeader from '../components/Parallaxheader';
import 'aos/dist/aos.css';
import './Contact.css';
import AOS from 'aos';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Email sent successfully!');
        } else {
            alert('Failed to send email.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong.');
    }

    event.target.reset();
};

const Contact = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        course: ''
    });

    useEffect(() => {
        if (location.state?.courseName) {
            setFormData(prev => ({ ...prev, course: location.state.courseName }));
        }
    }, [location.state]);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 100 });
    }, []);

    return (
        <>
            <ParallaxHeader
                title="Contact Our Chess Club"
                breadcrumbs={[{ title: 'Contact Us', path: '/contact' }]}
                backgroundImage="/images/aboutheader.jpg"
            />

            <div className="contact-template-container">
                {/* Contact Info Section */}
                <div className="contact-info-section-template">
                    <div className="contact-info-content-template">
                        <h4 className="contact-subtitle-template">Contact Us</h4>
                        <h2 className="contact-title-template">Get a Quote</h2>
                        <p className="contact-description-template">Lorem ipsum dolor sit amet, consectetuer adipiscing.</p>

                        <div className="contact-details-template">
                            <div className="contact-detail-item">
                                <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
                                <span>(+62) 81 2345 1234</span>
                            </div>
                            <div className="contact-detail-item">
                                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                                <span>topchess@domain.com</span>
                            </div>
                            <div className="contact-detail-item">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                                <span>Jl. Sunset Road No. 99, Kuta</span>
                            </div>
                        </div>

                        <div className="social-icons-template">
                            <a href="https://www.facebook.com/" rel="noopener noreferrer" className="social-icon-template">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://www.facebook.com/" rel="noopener noreferrer" className="social-icon-template">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.instagram.com/" rel="noopener noreferrer" className="social-icon-template">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="contact-form-section-template">
                    <form className="contact-form-template" onSubmit={handleSubmit}>
                        <div className="form-group-template">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" className='bg-[#FFF] text-gray-900' />
                        </div>

                        <div className="form-group-template">
                            <label htmlFor="email">Email <span className="required">*</span></label>
                            <input type="email" id="email" name="email" placeholder="you@company.com" required className='bg-[#FFF] text-gray-900' />
                        </div>

                        <div className="form-group-template">
                            <label htmlFor="course">Selected Course</label>
                            <input
                                type="text"
                                id="course"
                                name="course"
                                className="bg-[#FFF] text-gray-900"
                                value={formData.course}
                                onChange={handleChange}
                                placeholder="(Optional) Type a course"
                            />
                        </div>

                        <div className="form-group-template">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" className='bg-[#FFF] text-gray-900' placeholder="Message" rows="5"></textarea>
                        </div>

                        <button type="submit" className="submit-button-template">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-full h-[450px] mt-6 rounded-lg overflow-hidden shadow-md">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8544712912944!2d80.07425307489198!3d12.917073487393294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f5899cb25019%3A0xb401e6efaa80188!2sThirumal%20Chess%20Academy%2C%20Tambaram%20Corporation!5e0!3m2!1sen!2sca!4v1750307599000!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Thirumal Chess Academy Location"
                    className="w-full h-full"
                />
            </div>
        </>
    );
};

export default Contact;