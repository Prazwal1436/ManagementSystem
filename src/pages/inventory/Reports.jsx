import React from 'react'

export default function Reports() {
  return (
    <div>
       <div className='sticky-top justify-between bg-gray-500 flex'>
        <h1 className="text-xl font-semibold text-white p-3">Inventory Reports</h1>
        <form className='p-2'>
        <button className='border-2 p-1.5 rounded border-green-600 mx-2 bg-white text-green-900 hover:bg-green-600 hover:text-white font-semibold'>+ New Request</button>
        <button className='border-2 p-1.5 rounded border-green-600 mx-2 bg-white text-green-900 hover:bg-green-600 hover:text-white font-semibold'> Recieved Inventory</button>
        </form>
        
        </div>
    </div>
  )
}
