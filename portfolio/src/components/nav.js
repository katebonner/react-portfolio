import React from 'react';
import Cv from '../assets/Kate_Bonner_CV.pdf';
import Graphic from '../assets/katie-03.png';

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
        <header>
            {/* <h1 class="title">
                <span>z=</span>ka+ie
            </h1> */}
            <img src={Graphic} alt='graphic' class='img'/>
            <nav class='navigation'>
                <ul class='navigation-list'>
                    <li class={`${aboutSelected && `selected`}`}>
                        <a id="about" onClick={() => {
                            setAboutSelected(true)
                            setWorkSelected(false)
                            setContactSelected(false)
                        }}>about</a>
                    </li>
                    <li class={`${workSelected && `selected`}`}>
                        <a id='work' onClick={() => {
                            setAboutSelected(false)
                            setWorkSelected(true)
                            setContactSelected(false)
                        }}>work</a>
                    </li>
                    <li class={`${contactSelected && `selected`}`}>
                        <a id='contact' onClick={() => {
                            setAboutSelected(false)
                            setWorkSelected(false)
                            setContactSelected(true)
                        }}>contact</a>
                    </li>
                    <li>
                        <a href={Cv} target="_blank">cv</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;