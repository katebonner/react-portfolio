import React from 'react';
import Graphic from '../assets/z.png';

function About(props) {
    const {
        showIntroComponent
      } = props;
    return (
        <>
        <div class={`container ${!showIntroComponent && `transitionIn`}`}>
            <img src={Graphic} alt='graphic' class='img'/>
        </div>
        <section class={`container ${!showIntroComponent && `transitionIn`}`}>
            <p class='about-text'>CREATIVE FULL-STACK WEB DEVELOPER WITH A BACHELOR'S DEGREE IN PHYSICS, A MASTER'S DEGREE IN DESIGN AND TECHNOLOGY, AND PROFESSIONAL EXPERIENCE IN CYBERSECURITY. SKILLS IN HTML, CSS, JAVASCRIPT, NODE.JS, REACT, SQL, MONGODB, AND ORM. PASSIONATE ABOUT THE POETIC INTERPLAY BETWEEN DESIGN AND DEVELOPMENT -- BETWEEN THE REAL AND THE IMAGINARY. STRENGTHS IN SELF-DIRECTED LEARNING, CREATIVITY IN DESIGNING SOLUTIONS, AND TENACITY IN BRINGING THOSE SOLUTIONS TO FRUITION. EXCITED TO BUILD RESPONSIVE WEBSITES AND CONTINUE EXPLORING THE CREATIVE AND ANALYTICAL USE OF EMERGING TECHNOLOGIES AS MEDIUMS FOR BOTH VISUAL AND MATHEMATICAL STORYTELLING.</p>
        </section>
        </>
    );
}

export default About;