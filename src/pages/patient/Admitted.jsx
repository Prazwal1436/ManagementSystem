
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';


import { Link} from 'react-router-dom'


export default function Admitted() {

 


  const [list, setList] = useState([]);
  
  useEffect(() => {

    axios.get('https://surubasnet4.pythonanywhere.com/patientList/', {
      headers: {
        'Authorization': `token ${localStorage.getItem("access_token")}`
      }
    })
      .then((res) => {
        setList(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  },[])

  function deleteList(data) {

    axios.delete(`https://surubasnet4.pythonanywhere.com/patient/${data}/`, {
      headers: {
        'Authorization': `token ${localStorage.getItem("access_token")}`
      }
    })
      .then(res => {
        alert("Your Form deleted Succesfully");
        axios.get('https://surubasnet4.pythonanywhere.com/patientList/', {
      headers: {
        'Authorization': `token ${localStorage.getItem("access_token")}`
      }
    })
      .then((res) => {
        setList(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
      })

  }


  return (
    <div className=' '>
      <div className=' justify-between bg-gray-500 flex'>
        <h1 className="text-xl font-semibold text-white p-3">Admitted Patient Listing</h1>
        <form className='p-2'>
          <Link type='button' className='border-2 p-1.5  rounded border-green-600 mx-2 bg-white text-green-900 hover:bg-green-600 hover:text-white font-semibold' to="/newpatient">+ new Patient</Link>
        </form>
      </div>

      <table className=" w-full  border-collapse  ">
        <thead className='bg-gray-400 '>
          <tr>
            <th className='border py-2 lg:border-none border-slate-300 lg:w-10'>Id</th>
            <th className='border py-2 lg:border-none border-slate-300 '>First Name</th>
            <th className='border py-2 lg:border-none border-slate-300 hidden lg:block'>Middle Name</th>
            <th className='border py-2 lg:border-none border-slate-300 '>Last Name</th>
            <th className='border py-2 lg:border-none border-slate-300 lg:w-15'>Sex</th>
            <th className='border py-2 lg:border-none border-slate-300 lg:w-15 hidden lg:block'>DOB</th>
            <th className='border py-2 lg:border-none border-slate-300 '>Status</th>
            <th className='border py-2 lg:border-none border-slate-300 w-50'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (item.patientStatus==='Admitted')?(
            <tr className='hover:bg-gray-300 hover:text-white'>

            <td className='px-0.5 lg:px-2 text-center '>{item.id}</td>
            <td className='px-0.5 lg:px-2 text-center'>{item.firstName}</td>
            <td className='px-0.5 lg:px-2 text-center hidden lg:block py-3'>{item.middleName}</td>
            <td className='px-0.5 lg:px-2 text-center'>{item.lastName}</td>
            <td className='px-0.5 lg:px-2 text-center'>{item.sex}</td>
            <td className='px-0.5 lg:px-2 text-center hidden lg:block py-3'>{item.dateOfBirth}</td>
            <td className='px-0.5 lg:px-2 text-center'>{item.patientStatus}</td>
            <td className='lg:px-1 lg:text-center'>
              <Link type='button' to={`/editpatient/${item.id}`} className=' p-1.5 mx-1 lg:mx-3 lg:px-3 hover:text-yellow-700 text-yellow-500 ' ><i className="fa-solid fa-pencil"></i></Link>
              <button type="button" className=' p-1.5 mx-1 lg:mx-3 lg:px-3 hover:text-red-700 text-red-500 '><i className="fa-solid fa-trash" onClick={(e) => { e.preventDefault(); deleteList(item.id) }}></i></button>
              <Link type='button' to={`/editpatient/${item.id}`} className=' p-1.5 mx-1 lg:mx-3 lg:px-3 hover:text-green-700 text-green-500 ' ><i className="fa-solid fa-check" ></i></Link>
            </td>
          </tr>)
          
           :(<></>) )}
        </tbody>
      </table>


      <ul>
        <li></li>

      </ul>



    </div>
  )
}
