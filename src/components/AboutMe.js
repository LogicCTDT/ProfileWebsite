import React from 'react';


export const AboutMe = () => {
    
    return (
        <div className="w-4/5 h-4/5 flex justify-center items-center">
            <div className="w-3/5 h-1/5 text-center text-white flex flex-col justify-between">
                <span className="block text-2xl font-sans font-extrabold text-right">Hi!</span>

                <span className="inline-block text-left text-xl">My name is Ricky, I'm a third year U of T student majoring in Computer Science and Neuroscience. 
                In my free time I like reading, gaming, playing the piano and learning new things. If you're interested in what I've done recently, 
                have a look at my fun projects. </span>

                {/** normally put here employment + projects, but it seems I don't have either */}


                {/** consider uploading a video of me playing the piano. No face though.*/} 

        
            </div>
        </div>
    );

}

export default AboutMe;