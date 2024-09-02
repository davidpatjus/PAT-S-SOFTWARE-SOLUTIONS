import './gradients.css';

export const Hero = () => {
  return (
    <div className="bg-black text-white custom-bg-gradient py-[72px]">
      <div className="container">

        <div className='flex items-center justify-center'>
          <a href="#" className='border py-1 px-2 rounded-lg border-white/30'>
            <span className='text-gradient text-transparent bg-clip-text [-webkit-background-clip:text]'> Version 2.0 is here </span>
            <span>Read More</span>
          </a>
        </div>

        <h1>One Task at a Time</h1>
        
        <p>
          Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
        </p>
        
        <button>Get For Free</button>
      
      </div>
    </div>
  );
};
