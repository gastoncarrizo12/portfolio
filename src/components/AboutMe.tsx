import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/AboutMe.scss';

function AboutMe() {
    return (
    <div className="container" id="about-me">
        <div className="aboutme-container">
            <h1>Sobre Mi</h1>
            <div className="aboutme-grid">
                <div>
                    <FontAwesomeIcon icon={faUser} size="3x"/>
                    <p>Soy un desarrollador comprometido y responsable, con una fuerte pasión por la tecnología y la programación. A lo largo de mi carrera, he aprendido a trabajar de manera eficiente y efectiva, siempre con un enfoque objetivo en los proyectos que emprendo. Aunque aún no he tenido la oportunidad de demostrar mi experiencia en un entorno laboral formal, he trabajado en diversos proyectos personales y colaborativos que me han permitido adquirir un sólido dominio de tecnologías modernas.</p>
                    <p>Me considero una persona autodidacta, con un enfoque proactivo para aprender y mejorar mis habilidades constantemente. A pesar de no haber trabajado en proyectos reales, he dedicado tiempo y esfuerzo a crear aplicaciones completas, desde el diseño hasta la implementación, lo que me ha dado una comprensión integral de los procesos de desarrollo.</p>
                    <p>Estoy listo y muy motivado para formar parte de un equipo donde pueda aplicar mis habilidades y aprender más en el proceso. Mi objetivo es contribuir con soluciones tecnológicas que mejoren los procesos y la experiencia de los usuarios, al mismo tiempo que continúo creciendo como profesional. Mi capacidad de trabajar bajo presión, de forma autónoma o colaborativa, y mi enfoque en la calidad y la eficiencia, me permiten afrontar cualquier desafío con determinación.</p>                
                </div>
                    <Chip label="LinkedIn" component="a" href="https://www.linkedin.com/in/gaston-carrizo-chaio-7083b4275/" target="_blank" clickable className="chip"/>
                    <Chip label="GitHub" component="a" href="https://github.com/gastoncarrizo12" target="_blank" clickable className="chip"/>
                    </div>
                </div>
            </div>
    );
}

export default AboutMe;
