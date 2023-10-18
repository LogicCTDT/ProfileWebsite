import React from 'react';
import Links from './Links.js';

export const AboutMe = () => {
    
    return (
        <div className="w-4/5 h-4/5 flex justify-center items-center">
            <div className="w-3/5 h-3/5 text-left text-white flex flex-col justify-between">
                <span className="block text-2xl font-sans font-extrabold">Hi!</span>

                <span className="block text-sm">My name is Ricky, I'm a third year U of T student majoring in Computer Science and Neuroscience. </span>

                {/** normally put here employment + projects, but it seems I don't have either */}

                <span className="block text-sm"> In my free time I like reading, gaming, playing the piano and learning new things. </span>
                {/** consider uploading a video of me playing the piano. No face though.*/} 

                <span className="block text-sm">If you're interested in what I've done recently, have a look at my fun projects. </span>
                <Links />
            </div>
        </div>
    );

}

export default AboutMe;