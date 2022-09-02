import React, { useEffect, useState } from 'react';
import Intro from './components/intro';
import About from './components/about';
import Header from './components/nav';
import Work from './components/work';
import Contact from './components/contact';
import Footer from './components/footer.js';

function App() {
  // insert constants 
  const [showIntroComponent, setShowIntroComponent] = useState(true);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [workSelected, setWorkSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  // SHOW INTRO COMPONENT FOR 5 SECONDS
  useEffect(()=> {
    const timer = setTimeout(()=> {
      setShowIntroComponent(false);
      clearTimeout(timer);
    }, 6000)
  }, [])
  
  return (
    <div>
      {showIntroComponent && <Intro></Intro>}
      {!showIntroComponent && <>
      <Header
        setAboutSelected = {setAboutSelected}
        setWorkSelected = {setWorkSelected}
        setContactSelected = {setContactSelected}
        aboutSelected = {aboutSelected}
        workSelected = {workSelected}
        contactSelected = {contactSelected}
      ></Header>
     <main>
        {aboutSelected && (<><About
          showIntroComponent = {showIntroComponent}
        ></About></>)}
        {workSelected && (<><Work
        showIntroComponent = {showIntroComponent}
        ></Work></>)}
        {contactSelected && (<><Contact
        showIntroComponent = {showIntroComponent}
        ></Contact></>)}
        <><Footer></Footer></>
      </main>
      </>}
    </div>
    
  );
}

export default App;
