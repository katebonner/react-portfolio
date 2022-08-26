import React, { useState } from 'react';
import About from './components/about';
import Nav from './components/nav';
import Work from './components/work';
import Contact from './components/contact';

function App() {
  // insert constants 
  const [aboutSelected, setAboutSelected] = useState(true);
  const [workSelected, setWorkSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  
  return (
    <div>
      <Nav
        setAboutSelected = {setAboutSelected}
        setWorkSelected = {setWorkSelected}
        setContactSelected = {setContactSelected}
      ></Nav>
      <main>
        {aboutSelected && (<><About></About></>)}
        {workSelected && (<><Work></Work></>)}
        {contactSelected && (<><Contact></Contact></>)}
      </main>
    </div>
  );
}

export default App;
