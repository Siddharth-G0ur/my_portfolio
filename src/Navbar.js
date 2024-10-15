import React, { useState } from 'react';
import ContactModal from './ContactModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav>
        <ul>
          <li onClick={openModal}>Contact Me</li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </nav>
      <ContactModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </>
  );
};

export default Navbar;