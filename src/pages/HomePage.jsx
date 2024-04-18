import React from 'react';

import homevector from '../assets/homevector.png';
import  Navbar  from '../components/Navbar';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main className='mx-8'>
        <Navbar/>
        <section className='mt-4 ml-2'>
            <div className='flex justify-between'>
                <div className='mt-28'>
                    <div className='text-6xl montserrat'>Simplifying Banking</div>
                    <div className='mt-10 text-xl lato'>Easy, Secure, Convenient Banking. Anytime. Anywhere.</div>
                      <div className='mt-10'></div>
                      <Link to="/signup" className='poppins text-xl border-2 border-[#ff725e] bg-[#ff725e] rounded py-1 px-3 text-[#f8f8ff] hover:bg-gray-900 hover:text-[#f8f8ff] hover:border-gray-900 w-fit'>Get Started</Link>
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