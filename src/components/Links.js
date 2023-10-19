import ImageLinkedIn from './LI-In-Bug.png'

{/*I want this to be the box conting all my links. */}

const Links = () => {
    return (
        <div className='flex grow-0 shrink-0'>
            <a href="https://www.linkedin.com/in/ricky-zhang-23b50b26a/" target="_blank"> <img src={ImageLinkedIn} alt='My LinkedIn'/> </a>
            {/*github link and email link too */}
        </div>
    );
};

export default Links;