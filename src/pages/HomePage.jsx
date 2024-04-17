import React from 'react';
import logo from '../assets/logo.png';
import homevector from '../assets/homevector.png';

const HomePage = () => {
  return (
    <main className='mx-8'>
        <nav >
          <div className='flex justify-between items-center'>
            <div>
                <img src={logo} className='h-28'></img>
            </div>
            <div>
                <div className='flex gap-8 items-center'>
                    <div>About Us</div>
                    <div>Contact</div>
                    <div className='poppins border-2 border-gray-900 rounded py-1 px-3 hover:bg-gray-900 hover:text-[#f8f8ff]'>Log In</div>
                    <div className='poppins border-2 border-[#ff725e] bg-[#ff725e] rounded py-1 px-3 text-[#f8f8ff] hover:bg-gray-900 hover:text-[#f8f8ff] hover:border-gray-900'>Sign Up</div>
                </div>
            </div>  
          </div>
        </nav>
        <section className='mt-4 ml-2'>
            <div className='flex justify-between'>
                <div className='mt-28'>
                    <div className='text-6xl montserrat'>Simplifying Banking</div>
                    <div className='mt-10 text-xl lato'>Easy Secure Convenient Banking. Anytime. Anywhere.</div>
                    <div className='poppins text-xl mt-10 border-2 border-[#ff725e] bg-[#ff725e] rounded py-1 px-3 text-[#f8f8ff] hover:bg-gray-900 hover:text-[#f8f8ff] hover:border-gray-900 w-fit'>Get Started</div>
                </div>
                
                <div>
                    <img src={homevector}></img>
                </div>
            </div>
        </section>
      </main>
  )
}

export default HomePage;