import React from 'react';
import EmailIcon from '../assets/mail.png';
import LinkedInIcon from '../assets/linkedIn.png';
import GitHubIcon from '../assets/gitHub.png';

function Contact() {
    return (
        <section class='icon-container transitionIn'>
            <div><a href="mailto:katebonner277@gmail.com?subject=Im(z)"><img src={EmailIcon} alt='email icon' class='icon'></img></a></div>
            <div><a href="https://www.linkedin.com/in/kate-bonner/" target="_blank" ><img src={LinkedInIcon} alt='linkedIn icon' class='icon'></img></a></div>
            <div><a href="https://github.com/katebonner" target="_blank" ><img src={GitHubIcon} alt='gitHub icon' class='icon'></img></a></div>
        </section>
    );
}

export default Contact;