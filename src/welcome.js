import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub,
  faInstagram,
  faLinkedin,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';


function Footer() {
 return(
  <>
      <div id='footer' >

      <div id='list' >
        <li> <a href="https://github.com/your-github-profile">
        <FontAwesomeIcon id='size' icon={faGithub} />
      </a></li>
      <li> <a href="https://www.instagram.com/your-instagram-profile">
      < FontAwesomeIcon id='size' icon={faInstagram} />
    </a></li>
    <li> <a href="https://www.linkedin.com/in/your-linkedin-profile">
    <FontAwesomeIcon id='size' icon={faLinkedin} />
  </a></li>
  <li> <a href="https://www.linkedin.com/in/your-linkedin-profile">
<FontAwesomeIcon id='size' icon={faFacebook} />
</a></li>


    </div>

     <div id='list' >
     </div>


     <div >
     <nav >
     <ul >
    
     
     </ul></nav>
     </div>


      </div>
    
  </>
 )
}

export default Footer;
