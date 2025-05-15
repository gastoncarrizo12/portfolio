import React, { useState } from "react";
import bookcloud from '../assets/images/bookcloud.onrender.com_.png';
import createbook from '../assets/images/bookcloud.onrender.com_secret-dashboard.png';
import readbook from '../assets/images/bookcloud.onrender.com_secret-dashboard (1).png';
import analyticsbook from '../assets/images/bookcloud.onrender.com_secret-dashboard (2).png';
import UrlShortener from '../assets/images/UrlShortener.png';
import '../assets/styles/Project.scss';

function Project() {
  const images = [
    bookcloud,
    createbook, 
    readbook,
    analyticsbook,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (

    <div className="projects-container" id="projects">
      <h1>Proyectos Personales</h1>
      <div className="projects-grid">
                <div className="project">
          <div className="carousel-container">
            <button className="arrow left" onClick={handlePrev}>❮</button>
            <img src={images[currentImage]} className="carousel-image zoom" alt="thumbnail" width="100%" />
            <button className="arrow right" onClick={handleNext}>❯</button>
          </div>
          <div className="project-title-container">
            <h2>
              <a href="https://bookcloud.onrender.com/" target="_blank" rel="noreferrer">
                Bookcloud
              </a>
            </h2>
            <a 
              href="https://bookcloud.onrender.com/" 
              className="btn-view" 
              target="_blank" 
              rel="noreferrer"
            >
              Ver Proyecto
            </a>
          </div>

          <p>
            Bookcloud es una aplicación web MERN diseñada para la gestión y venta de libros.Utiliza MongoDB Atlas para el almacenamiento escalable de datos, integra MercadoPago para pagos seguros y Cloudinary para la gestión optimizada de imágenes. La plataforma está alojada en Render, garantizando un rendimiento robusto. Además, cuenta con secciones de "Destacados" y "Recomendados" que facilitan el descubrimiento de libros, ofreciendo una experiencia de usuario intuitiva y atractiva.
            Cuenta con un sistema de Administrador, el cual puede crear, leer, editar y eliminar libros.
          </p>
          <a 
            href="https://github.com/gastoncarrizo12/bookcloud-server" 
            target="_blank" 
            rel="noreferrer"
          >
            🔗 Código fuente
          </a>
        </div>
        <div className="project">
            <div>
              <button className="arrow left" onClick={handlePrev}>❮</button>
              <img src={UrlShortener} alt="thumbnail" width="100%" />
              <button className="arrow right" onClick={handleNext}>❯</button>
            </div>
          
          <div className="project-header">
          <h2>URL Shortener</h2>
          <a className="btn-view" href="https://gcch.netlify.app/" target="_blank" rel="noreferrer">
              Ver Proyecto
          </a>
          </div>
          <p>Este proyecto es una aplicación de acortador de URLs desarrollada con el stack MERN (MongoDB, Express.js, React, Node.js). Permite a los usuarios generar enlaces cortos personalizados o automáticos, almacenar y gestionar sus URLs de forma segura y sencilla.</p>
          <a href="https://github.com/gastoncarrizo12/URL-Shortener" target="_blank" rel="noreferrer">
              🔗 Código fuente
          </a>
        </div>
        
      </div>
    </div>
  );
}


export default Project;
