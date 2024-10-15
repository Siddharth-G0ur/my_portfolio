import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { X } from 'lucide-react';

ReactModal.setAppElement('#root');

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '500px',
    width: '100%',
    padding: '2rem',
    borderRadius: '10px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1001,
  }
};

const ContactModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    onRequestClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyles}
      contentLabel="Contact Me Modal"
    >
      <div className="card">
        <button
          onClick={onRequestClose}
          style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <X size={24} color="#333" />
        </button>
        <h3>Contact Me</h3>
        <div >
          <p>Email: goursiddharth@gmail.com</p>
          <p>Phone: +91 9340883094</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
            style={{ marginBottom: '1rem', width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            style={{ marginBottom: '1rem', width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject"
            required
            style={{ marginBottom: '1rem', width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            required
            rows="4"
            style={{ marginBottom: '1rem', width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc', resize: 'vertical' }}
          ></textarea>
          <button type="submit" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Send Message
          </button>
        </form>
      </div>
    </ReactModal>
  );
};

export default ContactModal;