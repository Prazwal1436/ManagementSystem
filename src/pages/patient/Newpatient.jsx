import React, { useState,useEffect } from 'react'
import { bloodType, sex } from '../../components/constants/blood'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'


export default function Newpatient() {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    sex: "Male",
    dateOfBirth: "",
    placeOfBirth: "",
    occupation: "",
    patientStatus: "Registered",
    bloodType: "A+",
    patientType: "",
    referBy: "",
    referredDate: "",
    religion: "",
    parent_guardian: "",
    phone: "",
    email: "",
    address: ""
  })

  const [list, setList] = useState([]);
  useEffect(() => {

    axios.get(' https://surubasnet4.pythonanywhere.com/referBy/', {
      headers: {
        'Authorization': `token ${localStorage.getItem("access_token")}`
      }
    })
      .then((res) => {
        setList(res.data)
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error)
      })
  },[])

  const handleChange = (e) => {
    console.log({ e })
    console.log(e.target.value)
    setPatient({ ...patient, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { firstName,
      middleName,
      lastName,
      sex,
      dateOfBirth,
      placeOfBirth,
      occupation,
      patientStatus,
      bloodType,
      patientType,
      referBy,
      referredDate,
      religion,
      parent_guardian,
      phone,
      email,
      address } = patient

    let data = {
      firstName,
      middleName,
      lastName,
      sex,
      dateOfBirth,
      placeOfBirth,
      occupation,
      patientStatus,
      bloodType,
      patientType,
      referBy,
      referredDate,
      religion,
      parent_guardian,
      phone,
      email,
      address
    }
    if (data.dateOfBirth === "") {
      data.dateOfBirth = null;
    }

    let url = `https://surubasnet4.pythonanywhere.com/patient/`
    axios.post(url, data, {
      headers: {
        'Authorization': `token ${localStorage.getItem("access_token")}`
      }
    })
      .then(res => {
        alert("Your Form submitted Succesfully");
        navigate("/patientlisting")
      })
      .catch(err => {
        alert("Please enter your data propperly and Try again");
      })

  }

  let bloodType_arr = Object.entries(bloodType);
  let bloodType_mapping = bloodType_arr.map(el => {
    return <option value={el[1]}>{el[1]}</option>
  })

  let sex_arr = Object.entries(sex);
  let sex_mapping = sex_arr.map(el => {
    return <option value={el[1]}>{el[0]}</option>
  })

  return (
    <div className=''>
      <div className=' justify-between bg-gray-500 flex'>
        <h1 className="text-xl font-semibold text-white p-3">New Patient</h1>

      </div>
      <form className='m-5' onSubmit={handleSubmit}>
        <div className='md:grid md:grid-cols-3 md:gap-4'>


          <div className='block m-2'>
            <label htmlFor="firstName" className="">
              First name<span className='text-red-500'>*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={patient.firstName}
              onChange={handleChange}

              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="First Name"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="middleName" className="">
              Middle Name
            </label>
            <input
              id="middleName"
              name="middleName"
              type="text"
              value={patient.middleName}
              onChange={handleChange}
              className="block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Middle Name"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="lastName" className="">
              Last Name<span className='text-red-500'>*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={patient.lastName}
              onChange={handleChange}
              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Last Name"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="sex" className="">
              Sex
            </label>
            <select
              id="sex"
              name="sex"
              value={patient.sex}
              onChange={handleChange}
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {sex_mapping}
            </select>
          </div>
          <div className='block m-2'>
            <label htmlFor="dateOfBirth" className="">
              Date of Birth
            </label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={patient.dateOfBirth}
              onChange={handleChange}
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

            />
          </div>
          <div className='block m-2'>
            <label htmlFor="pob" className="">
              Place Of Birth
            </label>
            <input
              id="pob"
              name="pob"
              type="text"
              value={patient.pob}
              onChange={handleChange}

              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Place of Birth"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="occupation" className="">
              Occupation
            </label>
            <input
              id="occupation"
              name="occupation"
              type="text"
              value={patient.occupation}
              onChange={handleChange}

              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Occupation"
            />
          </div>
        
          <div className='block m-2'>
            <label htmlFor="bloodType" className="">
              bloodType Group
            </label>
            <select
              id="bloodType"
              name="bloodType"
              value={patient.bloodType}
              onChange={handleChange}
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {bloodType_mapping}
            </select>
          </div>
          <div className='block m-2'>
            <label htmlFor="patientType" className="">
              Patient Type
            </label>
            <input
              id="patientType"
              name="patientType"
              type="text"

              value={patient.patientType}
              onChange={handleChange}

              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Patient Type"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="sex" className="">
              Sex
            </label>
            <select
              id="sex"
              name="sex"
              value={patient.sex}
              onChange={handleChange}
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {sex_mapping}
            </select>
          </div>
          <div className='block m-2'>
            <label htmlFor="referBy" className="">
              Reffered By
            </label>
            <select
              id="referBy"
              name="referBy"
              value={patient.referBy}
              onChange={handleChange}
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            ><option value="">Choose Referances</option> 
             {list.map(item => <option value={item.id}>{item.doctor_name}</option>)}</select>
          </div>
          <div className='block m-2'>
            <label htmlFor="referredDate" className="">
              Referred Date
            </label>
            <input
              id="referredDate"
              name="referredDate"
              type="date"
              value={patient.referredDate}
              onChange={handleChange}

              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              
            /></div>
          <div className='block m-2'>
            <label htmlFor="religion" className="">
              Religion
            </label>
            <input
              id="religion"
              name="religion"
              type="text"
              value={patient.religion}
              onChange={handleChange}

              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Religion"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="guardain" className="">
              Guardain
            </label>
            <input
              id="parent_guardian"
              name="parent_guardian"
              type="text"
              value={patient.parent_guardian}
              onChange={handleChange}

              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="parent_guardian"
            />
          </div>






        </div>
        <div className='justify-between bg-gray-500 flex'>
          <h1 className="text-xl font-semibold text-white p-3">Contact Details</h1>
        </div>
        <div className=''>
          <div className='md:grid md:grid-cols-3 md:gap-4'>
            <div className='block m-2'>
              <label htmlFor="phone" className="">
                Phone<span className='text-red-500'>*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={patient.phone}
                onChange={handleChange}

                required
                className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Phone"
              />
            </div>
            <div className='block m-2'>
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                value={patient.email}
                onChange={handleChange}
                className="block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div className='block m-2'>
              <label htmlFor="address" className="">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={patient.address}
                onChange={handleChange}

                className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Address"
              />
            </div>
          </div><br />
          <div className='flex justify-end'>

            <Link type="button" to="/patientlisting" className='border-2 p-1.5 rounded hover:border-red-600 mx-2 hover:bg-white hover:text-red-900 bg-red-600 text-white font-semibold'> Cancel</Link>
            <button type='submit' className='border-2 p-1.5 rounded border-green-600 mx-2 bg-white text-green-900 hover:bg-green-600 hover:text-white font-semibold' > Add</button>
          </div><br />


        </div>






      </form>
    </div>

  )
}
