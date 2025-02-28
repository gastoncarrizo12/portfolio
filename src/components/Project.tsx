import React from "react";
import bookcloud from '../assets/images/bookcloud.onrender.com_.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Proyectos Personales</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://bookcloud.onrender.com/" target="_blank" rel="noreferrer"><img src={bookcloud} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://bookcloud.onrender.com/" target="_blank" rel="noreferrer"><h2>Bookcloud</h2></a>
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;