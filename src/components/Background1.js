import background from './Image.png'
import { useState } from 'react';


export const Background1 = () => {
    const [position, setPosition] = useState({ x: 30, y: 30});

  const handleMouseMove = (e) => {
    const xOffset = ((e.clientX / window.innerWidth) * 50);
    const yOffset = ((e.clientY / window.innerHeight) * 50);
    setPosition({ x: xOffset, y: yOffset });
    
  };
  const xConst = () => {
    return (50 - ((50/window.innerWidth) * 25))
  }
  const yConst = () => {
    return (50 - ((50/window.innerHeight) * 25))
  }
  /* map 50 50 to center always. We can definetly use math to do this
  */
  
    return (
    <div className="w-full bg-center bg-cover h-full absolute " onMouseMove={handleMouseMove}>
    <div className=" bg-fixed w-full h-full bg-no-repeat items-center
    overflow-x-auto overflow-y-auto" style={{backgroundImage: `url('${background}')`, 
    backgroundSize: '120% 120%' , 
    backgroundPosition: `${position.x + xConst()}% ${position.y + yConst()}%`,}}></div>
    </div>
    );
}

export default Background1;