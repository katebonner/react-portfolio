import React from 'react';
import Cv from '../assets/Kate_Bonner_CV.pdf';
import Graphic from '../assets/katie-04.png';

function Nav(props) {
    const {
        setWorkSelected,
        setAboutSelected,
        setContactSelected,
        aboutSelected,
        workSelected,
        contactSelected
      } = props;

    return (
        <header class='transitionIn'>
            <img src={Graphic} alt='graphic' class='img'/>
            <nav class='navigation'>
                <ul class='navigation-list'>
                    <li class={`${aboutSelected && `selected`}`}>
                        <p id="about" onClick={() => {
                            setAboutSelected(true)
                            setWorkSelected(false)
                            setContactSelected(false)
                        }}>about</p>
                    </li>
                    <li class={`${workSelected && `selected`}`}>
                        <p id='work' onClick={() => {
                            setAboutSelected(false)
                            setWorkSelected(true)
                            setContactSelected(false)
                        }}>work</p>
                    </li>
                    <li class={`${contactSelected && `selected`}`}>
                        <p id='contact' onClick={() => {
                            setAboutSelected(false)
                            setWorkSelected(false)
                            setContactSelected(true)
                        }}>contact</p>
                    </li>
                    <li>
                        <p><a href={Cv} target="_blank" rel="noopener noreferrer">cv</a></p>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;