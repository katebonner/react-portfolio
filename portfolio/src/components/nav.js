import React from 'react';
import Cv from '../assets/Kate_Bonner_CV.pdf';

function Nav(props) {
    const {
        setWorkSelected,
        setAboutSelected,
        setContactSelected,
      } = props;

    return (
        <header>
            <h1 class="title">
                <span>z=</span>ka+ie
            </h1>
            <nav class="navigation">
                <ul class="navigation-list">
                    <li>
                        <a id="about" onClick={() => {
                            setAboutSelected(true)
                            setWorkSelected(false)
                            setContactSelected(false)
                        }}>about</a>
                    </li>
                    <li>
                        <a id="work" onClick={() => {
                            setAboutSelected(false)
                            setWorkSelected(true)
                            setContactSelected(false)
                        }}>work</a>
                    </li>
                    <li>
                        <a id="contact" onClick={() => {
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