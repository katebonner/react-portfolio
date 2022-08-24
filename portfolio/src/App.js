import React, { useState } from 'react';
import About from './components/about';
import Nav from './components/nav';
import Work from './components/work';
import Contact from './components/contact';

function App() {
  // insert constants 
  const [categories] = [ 'about', 'work', 'contact']
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <div>
      <Nav>
        {/* insert data */}
      </Nav>
      <main>
        {/* insert data */}
      </main>
    </div>
  );
}

export default App;
