import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/gastoncarrizo12" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/gaston-carrizo-chaio-7083b4275/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://www.facebook.com/gaston.carrizochaio/" target="_blank" rel="noreferrer"><FacebookIcon/></a>
        <a href="https://www.instagram.com/gas.carrizo/?hl=es" target="_blank" rel="noreferrer"><InstagramIcon/></a>
      </div>
      <p>Este portfolio fue diseñado y creado por <a href="https://github.com/gastoncarrizo12" target="_blank" rel="noreferrer">Gastón Carrizo Chaio</a></p>
    </footer>
  );
}

export default Footer;