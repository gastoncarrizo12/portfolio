import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://res.cloudinary.com/dsatc2mlm/image/upload/v1740692237/fotoportfolio_fc3rml.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/gastoncarrizo12" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/gaston-carrizo-chaio-7083b4275/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.facebook.com/gaston.carrizochaio/" target="_blank" rel="noreferrer"><FacebookIcon/></a>
            <a href="https://www.instagram.com/gas.carrizo/?hl=es" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
          <h1>Gastón Carrizo Chaio</h1>
          <p>Desarrollador Full Stack</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/gastoncarrizo12" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/gaston-carrizo-chaio-7083b4275/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.facebook.com/gaston.carrizochaio/" target="_blank" rel="noreferrer"><FacebookIcon/></a>
            <a href="https://www.instagram.com/gas.carrizo/?hl=es" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;