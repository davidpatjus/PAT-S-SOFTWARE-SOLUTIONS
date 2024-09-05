import Image from 'next/image';
import logoImage from '@/assets/images/logosaas.png'
import MenuIcon from '@/assets/icons/menu.svg'

export const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className="px-4">
        <div className='py-4 flex items-center justify-between'>
          
          <div className='relative flex items-center'>
            <div className='absolute w-full top-2 bottom-0 bg-custom-gradient blur-md'></div>
            <Image src={logoImage} alt='Nav Logo' className='h-12 w-12 relative' />
            <h2 className='text-purple-600/70 font-bold text-sm sm:text-lg md:text-xl  px-2 '>PAT&apos;S SOFTWARE SOLUTIONS</h2>
          </div>

          <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
            <MenuIcon className='text-white' />
          </div>

          <nav className='gap-6 items-center hidden sm:flex'>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Inicio</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Features</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Updates</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Help</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Customers</a>
            <button className='bg-white py-2 px-4 rounded-lg'>Get For Free</button>
          </nav>

        </div>
      </div>
    </div>
  );
};
