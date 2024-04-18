import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav >
          <div className='flex justify-between items-center'>
            <div>
                <Link to="/" replace="true">
                    <img src={logo} className='h-28'></img>
                </Link>
            </div>
            <div>
                <div className='flex gap-8 items-center'>
                    <div>About Us</div>
                    <div>Contact</div>
                    <Link to="/login" replace="true">
                        <div className='poppins border-2 border-gray-900 rounded py-1 px-3 hover:bg-gray-900 hover:text-[#f8f8ff]'>Log In</div>
                    </Link>
                    <Link to="/signup" replace="true">
                        <div className='poppins border-2 border-[#ff725e] bg-[#ff725e] rounded py-1 px-3 text-[#f8f8ff] hover:bg-gray-900 hover:text-[#f8f8ff] hover:border-gray-900'>Sign Up</div>
                    </Link>
                </div>
            </div>  
          </div>
        </nav>
  )
}

export default Navbar;