import React, { useState } from 'react'
import Alert from './components/Alert'
import hospimg from './images/hospital.png'
import {  useDispatch } from 'react-redux'
import { login } from "./components/redux/loginSlice";
import axios from 'axios';

export default function Login() {
  const dispatch=useDispatch();
  
  

  const[dataa,setData]=useState({
    email:"",
    password:"",
  })

  const [alert, setAlert] = useState({
    status: "",
    message: ""
});

  const handleChange=(e)=>{
    setData({...dataa, [e.target.name]:e.target.value})
}

function handleSubmit(e) {
  e.preventDefault();
  const { email, password } = dataa
  let data = { email, password}
  if(data.email===""||data.password===""){
      setAlert({
          status: "red-500",
          message: "Please enter all credentials"
      })
  }
  else{
    
    axios.post("https://surubasnet4.pythonanywhere.com/login/", data)
    .then(res => {
      console.log(res);
        localStorage.setItem("access_token", res.data.token)
        dispatch(login(data))
    })
    .catch(err => {
        // console.log({err})
        // console.log(err.response)
        setAlert({
            status: "red-500",
            message: err
        })
    })
  }
  
}

  return (
   
    <div className=' h-full bg-gradient-to-l from-gray-500  md:h-screen w-full'>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
          >
            <div
              className="grow-0 md:shrink-0 basis-auto xl:w-5/12 lg:w-5/12 md:w-9/12 mb-12 md:mb-0"
            >
              <img
                src={hospimg}
                className=""
                alt=""
              />
            </div>
            
            <div className="xl:ml-20 xl:w-4/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <div className='flex justify-center mb-8'>
                <h1 className='text-5xl font-mono subpixel-antialiased font-semibold text-gray-700'>Hospital</h1>
                </div>
            {
                    alert.message
                    &&
                    <Alert
                        status={alert.status}
                        message={alert.message}
                    />
                }
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    name='email'
                    value={dataa.email}
                      onChange={handleChange}
                  />
                </div>


                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    name='password'
                    value={dataa.password}
                      onChange={handleChange}
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  
                  <a href="#!" className="text-red-800">Forgot password?</a>
                </div>

              
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
    
  )
}
