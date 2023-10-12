
import './App.css';
import React from 'react'; 
import Navbar from './components/Navbar.js';
import Background1 from './components/Background1.js'
// TODO: Make the Resume portion of the website, and start applying to shit.
// Add resume portion in the readme as a hyperlink. Remove from navbar. 
// Write navbar and resume portion.
// Background image as galaxy, would be very cool I think
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
      

     {/* make background take in image url later
     */}
      
      
      <Background1 />
      
        
      
    </div>
   
  );
};


export default App;
