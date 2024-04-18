import React from 'react'
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <main className='mx-8'>
        <Navbar/>
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        
        <h2 className="text-2xl font-semibold text-center mb-4">Welcome Back</h2>
        <p className="text-gray-600 text-center mb-6">Login to your account.</p>
        <form>
            <div className="mb-4">
                <label for="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
                <input type="email" id="email" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="hello@alignui.com"/>
            </div>
            <div className="mb-6">
                <label for="password" className="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
                <input type="password" id="password" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="••••••••"/>
                <p className="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
            </div>
            <button type="submit" className="poppins w-full bg-[#ff725e] text-white px-4 py-2 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
            <p className="text-gray-600 text-xs text-center mt-4">
                By clicking Register, you agree to accept our <br></br>
                <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>.
                        </p>
                     </form>
                 </div>
            </div>
    </main>
  )
}

export default Login;