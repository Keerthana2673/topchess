import ParallaxHeader from '../components/Parallaxheader';
import 'aos/dist/aos.css';
import './Contact.css';
import AOS from 'aos';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

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

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('course', formData.course);
      form.append('message', formData.message);

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxrsWXwl1y_QUbfeP-IirMfFPqhqwtJrwZ9em-mDxdz5l8ZswwwcROtO3K-uuYVMYZBpA/exec',
        {
          method: 'POST',
          body: form
        }
      );

      const result = await response.json();
      console.log('Success:', result);
      alert('Message sent successfully!');

      setFormData({
        name: '',
        email: '',
        course: '',
        message: ''
      });

    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please email us directly!');
    }
    finally {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: '',
        course: location.state?.courseName || ''
      });
    }
  };

  return (
    <>
      <ParallaxHeader
        title="Contact Our Chess Club"
        breadcrumbs={[{ title: 'Contact Us', path: '/contact' }]}
        backgroundImage="/images/aboutheader.jpg"
      />

      <div className="contact-template-container">
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
              <a href="/" className="social-icon-template"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="/" className="social-icon-template"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="/" className="social-icon-template"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
        </div>

        <div className="contact-form-section-template">
          <form className="contact-form-template" onSubmit={handleSubmit}
            action="https://script.google.com/macros/s/AKfycbxrsWXwl1y_QUbfeP-IirMfFPqhqwtJrwZ9em-mDxdz5l8ZswwwcROtO3K-uuYVMYZBpA/exec"
            method="POST"
          >
            <div className="form-group-template">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="bg-[#FFF] text-gray-900"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group-template">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@company.com"
                className="bg-[#FFF] text-gray-900"
                value={formData.email}
                onChange={handleChange}
                required
              />
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
              <textarea
                id="message"
                name="message"
                className="bg-[#FFF] text-gray-900"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button-template" disabled={isSubmitting}>
              {isSubmitting ? 'Sending . . .' : 'Send Message'}
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
        ></iframe>
      </div>

      <div className="contact-footer-template">
        <p>&copy; 2023 Top Chess Academy. All rights reserved.</p>
      </div>
    </>
  );
};

export default Contact;