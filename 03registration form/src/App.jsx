import React from 'react'


function App() {

  return (
   <div className='bg-slate-800 min-h-screen flex flex-col justify-center items-center'>

    <div className='flex flex-col items-center mb-10'>    
      <h1 className='text-white font-bold text-3xl font-serif'>Registration Form</h1>
      <h3 className='text-gray-400 text-2xl font-light font-serif'>for travel agency</h3>
    </div>

    <div className='bg-slate-700 flex flex-col md:flex-row gap-4 w-full max-w-4xl h-auto rounded-sm overflow-hidden'>
      <div className='w-full max-w-2xl flex flex-col items-center'>
        <h2 className='text-white font-extrabold font-mono text-3xl items-center mt-10 mb-1.5'>Welcome Back</h2>
          <p className='text-slate-300 font-light font-mono text-sm'>Please login to your account!</p>

            <input className='w-full max-w-xs py-2 px-3  border-none mt-10 bg-slate-500 rounded-xs' type="email" placeholder="Email Address" />

            <input className='w-full max-w-xs py-2 px-3 border-none mt-2 bg-slate-500 rounded-xs' type="password" placeholder="Password" />

                <div className="flex justify-between w-full max-w-xs mt-3">
                   <label className='text-xs  text-white gap-1'>
                     <input type="checkbox" />
                      Remember me
                   </label>

                      <a className='text-shadow-slate-800 text-xs' href="#">Forgot password?</a>
                 </div>

  <button className='text-black font-light font-sans bg-amber-500 w-full max-w-xs py-2 rounded-md mt-3 mb-2.5'>Login</button>

  <p className='text-slate-500 text-sm flex gap-1'>
    Don’t have an account? <a className='text-amber-300 text-md' href="#">Sign up</a>
  </p>
</div>
       <div className="w-full md:w-1/2">
          <img 
             src="https://images.pexels.com/photos/36539127/pexels-photo-36539127.jpeg"
             alt=""
            className="w-full h-auto object-cover hidden md:block"
          />
       </div>
    </div>
   </div>
  )
}

export default App
