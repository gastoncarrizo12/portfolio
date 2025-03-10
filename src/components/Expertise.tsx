import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faRobot } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "Angular",
    "Bootstrap",
    "Material UI",
    "Redux"
];

const labelsSecond = [
    "JMeter",
    "Selenium",
    "Jest",
    "Mocha",
];

const labelsThird = [
    "Git",
    "GitHub",
    "Bitbucket",
    "Trello",
    "Jira",
    "Docker",
    "MongoDB Atlas",
    "Redis",
    "Cloudinary",
    "Postman",
]

const labelsFour = [
    "Java",
    "Spring Boot",
    "NodeJS",
    "ExpressJS",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
]

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Experiencia</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Desarrollo Fullstack</h3>
                    <p>Mi experiencia abarca tanto el frontend como el backend, permitiéndome construir soluciones completas y eficientes. Además, tengo un fuerte dominio del ciclo de vida del desarrollo de software (SDLC), lo que me ha permitido gestionar proyectos de principio a fin, desde el diseño de la interfaz hasta la gestión y optimización de bases de datos.</p>
                    <h3>Tecnologías Frontend</h3>
                    <div className="flex-chips">
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    <h3>Tecnologías Backend</h3>
                    <div className="flex-chips">
                        {labelsFour.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    </div>
                    </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>Pruebas y automatización</h3>
                    <p>Una vez que la aplicación está creada, colaboro con los clientes para implementar y configurar pruebas automatizadas, garantizar la calidad del código y optimizar los procesos de integración continua (CI) y entrega continua (CD). También diseño e implemento flujos de trabajo de automatización que permiten una implementación más eficiente y sin errores, asegurando un lanzamiento exitoso y una gestión ágil del ciclo de vida del software.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tecnologías:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                    <h3>Herramientas de desarrollo</h3>
                    <p>he utilizado una amplia variedad de herramientas de desarrollo que me han permitido mejorar la eficiencia y calidad en la creación de aplicaciones. Tengo experiencia en el uso de control de versiones con Git y GitHub, así como en la gestión de proyectos con herramientas como Trello y Jira.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Herramientas:</span>
                        {labelsThird.map((label, index) => (
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