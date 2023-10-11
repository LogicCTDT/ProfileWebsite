
import './App.css';
import React from 'react'; 
import Navbar from './components/Navbar.js';
import Background1 from './components/Background1.js'

/*
To do: 
Background image is a image but shortened a little, so moving mouse moves the background. Choose a suitable picture,
maybe of a place you've been. Then, small profile picture of me + get my own 'cs' profile picutre, put on github.
The about me is the main page, resume is a block scrol under, links is two blocks scrolls under, fun project
is three block srcolls under.

*/
function App() {
  return (
    
    
    <div className="text-center h-screen">
      
      <Navbar />
      

      {/* I want a hook which records the movement of the move relative 
      to size of the whole background image, with 0, 0 being the top
      left of the image (which should be off screen. Then, according
      to my mouse, I want to shift the position of the image without
      moving the position of the overall div. ) */}
      
      <Background1 />
      
        
      
    </div>
   
  );
};


export default App;
