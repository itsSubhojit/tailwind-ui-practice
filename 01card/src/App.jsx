import { useState } from 'react'


function App() {

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="bg-white w-60 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
        
          <img className='h-32 w-full object-cover  rounded-t-lg'  src="https://images.pexels.com/photos/36552743/pexels-photo-36552743.jpeg" alt="Image" />
      
        <div className='p-3'>
          <p className='text-slate-500 text-sm text-justify'>
            Lorem ipsum dolor sit amet consectetur,
            <span className='font-semibold font-serif text-violet-400'> adipisicing elit. Magni, sunt!</span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default App
