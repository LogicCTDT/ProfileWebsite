import React from 'react';


export const Navbar = () => {

    return (
        // I want to create a navbar element, that has different actions if i'm active. 
        /// p-4 py-10 bg-gradient-to-r from-indigo-600 to-fuchsia-700 text-xl relative
        // Navbar doesn't work for small screen sizes, change later
        <nav className= "w-full backdrop-filter backdrop-blur-lg bg-opacity-30 border-b py-3 border-gray-400 fixed top-0 z-10 bg-gray-500 items-center">
                <div className="inline-block h-full align-middle">
                    <div className="absolute left-0 font-bold text-gray-50 text-opacity-50 rounded-full mr-2">Profile Picture </div>
                </div> 
                <div className="inline-block w-full mx-auto font-medium align-middle text-gray-400">
                    <a className="mx-10" href="#About Me">About Me</a>
                    <a className="mx-10" href="#Resume">Resume</a>
                    <a className="mx-10" href="#Fun Project">Fun Project</a>
                
                </div> 
    
        </nav>





    );
}
export default Navbar;