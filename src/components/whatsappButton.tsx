import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Wspbutton.scss';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5493865506859" // Reemplaza con tu número de WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
        >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
        </a>
    );
}

export default WhatsAppButton;
