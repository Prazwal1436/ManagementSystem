import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div>
        <nav className="w-full rounded-md py-2 px-8">
  <ol className="list-reset flex">
    <li>
      <Link to="/" className="text-gray transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:text-gray-500 dark:active:text-gray-600">
        Home
        </Link>
    </li>
    <li>
      <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
    </li>
  </ol>
</nav>
<div className='bg-gray-100 h-screen p-4'>
<div class="grid grid-cols-1 grid-cols-5 gap-4">
  
<div class="flex justify-center">
  <div
    class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
    <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      Room Balance
    </h5>
   <div className='flex'>
   <i class='bx bxs-badge-dollar'></i>

   </div>
  </div>
</div>

</div>

</div>

    </div>
  )
}
