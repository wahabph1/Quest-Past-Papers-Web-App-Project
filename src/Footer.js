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
      <di className = " mt-10 mr-40 lg:mr-[1000nppx] lg:ml-8  " ><p>
      <p className='text-sm font-serif' >&copy;Abdul Wahab Shaikh 21SW07</p>
      <p className='text-sm font-serif' >aw599822@gmail.com </p>
   
    </p></di>
      <div  >
      <ul  id='list' >  <li className='ml-3' > <a href="https://github.com/your-github-profile">
      <FontAwesomeIcon id='size' icon={faGithub} />
    </a></li>
    <li className='ml-3' > <a  >
    < FontAwesomeIcon id='size' icon={faInstagram} />
  </a></li>
  <li className='ml-3' > <a href="https://www.linkedin.com/in/your-linkedin-profile">
  <FontAwesomeIcon id='size' icon={faLinkedin} />
</a></li>
<li className='ml-3 mr-4  '> <a href="https://www.linkedin.com/in/your-linkedin-profile">
<FontAwesomeIcon id='size' icon={faFacebook} />
</a></li></ul>
      </div>
      </div>
    
  </>
 )
}

export default Footer;
