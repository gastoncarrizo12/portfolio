import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faGithub } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "SpringBoot",
    "React",
    "NodeJS",
    "ExpressJS",
    "TypeScript",
    "JavaScript",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "AWS",
    "MongoDB Atlas",
    "JMeter",
    "Redis",
    "Cloudinary",
    "Postman",
    "Selenium",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Experiencia</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>He creado una amplia variedad de aplicaciones web desde cero utilizando tecnologías modernas como React y el stack MERN (MongoDB, Express, React, Node.js). Tengo un profundo dominio del proceso SDLC y una sólida experiencia en el desarrollo tanto del frontend como del backend, lo que me permite construir soluciones completas y eficientes que abarcan desde la interfaz de usuario hasta la gestión de bases de datos.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                    <h3>Pruebas y automatización</h3>
                    <p>Una vez que la aplicación está creada, colaboro con los clientes para implementar y configurar pruebas automatizadas, garantizar la calidad del código y optimizar los procesos de integración continua (CI) y entrega continua (CD). También diseño e implemento flujos de trabajo de automatización que permiten una implementación más eficiente y sin errores, asegurando un lanzamiento exitoso y una gestión ágil del ciclo de vida del software.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

               
                </div>
            </div>
        </div>
    );
}

export default Expertise;