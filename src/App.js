
import './App.css';
import React from 'react'; 
import Navbar from './components/Navbar.js';
import background from './Image.png'

/*
To do: 
Background image is a image but shortened a little, so moving mouse moves the background. Choose a suitable picture,
maybe of a place you've been. Then, small profile picture of me + get my own 'cs' profile picutre, put on github.
The about me is the main page, resume is a block scrol under, links is two blocks scrolls under, fun project
is three block srcolls under.

*/
function App() {
  return (
    
    
    <div className="text-center h-screen w-screen">
      <Navbar />
      

        
      <div className=" bg-fixed bg-cover bg-center w-full h-full overflow-x-auto overflow-y-auto" style={{ backgroundImage: `url('${background}')`, backgroundSize: '120% 120%' }}>
      </div>
        
      
    </div>
   
  );
};


export default App;
