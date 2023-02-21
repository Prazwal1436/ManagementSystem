import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setOpen,setInventory,setPatient,setScheduling,setImaging,setMedication,setAdmin } from './redux/navSlice';
import { logout } from "./redux/loginSlice";
export default function Navbar() {

   

    const open = useSelector((state) => state.nav.open)
    const patient =useSelector((state)=>state.nav.patient)
    const scheduling =useSelector((state)=>state.nav.scheduling)
    const imaging =useSelector((state)=>state.nav.imaging)
    const medication =useSelector((state)=>state.nav.medication)
    

    const dispatch = useDispatch()
    
    return (
        <div>
            <div
                
                className={` ${open ? "block w-72" : "hidden lg:block lg:w-20 pt-2"

                    } bg-dark-purple min-h-full  max-h-full p-5  absolute lg:relative duration-300 `}
            >
                <i className={`text-gray-400 fa-sharp fa-solid fa-arrow-right absolute cursor-pointer fa-lg m-3 -right-9 top-6 w-7 
             ${open && "text-gray-400  hidden"} `}
             onClick={ () =>dispatch(setOpen())}></i>
              <i className={`text-gray-400 fa-sharp fa-solid fa-xmark absolute cursor-pointer fa-lg m-3 -right-3 top-6 w-7 
             ${!open && "rotate-180 text-gray-400  hidden"} `}
             onClick={ () =>dispatch(setOpen())}></i>

                    
                <div className="flex items-center">
                    <i className={`fa-solid fa-hospital fa-xl text-gray-400 cursor-pointer duration-500 px-2 ${open && "rotate-[360deg]"
                        }`}></i>
<Link to="/">
                    <h1
                        className={`text-gray-400 origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        TechRevo Nepal
                    </h1>
                    </Link>
                </div>




                <ul className="pt-7">
                    <form className={`${!open && "hidden"} flex items-center `}>
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className={`${!open && "hidden"} origin-left duration-200 relative w-full`}>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 px-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required="" />
                        </div>
                        <button type="submit" className='rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm justify-between'>
                            <i className="fa-solid fa-magnifying-glass text-gray-400 fa-lg"></i>
                        </button>
                    </form>

                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`} onClick={() => dispatch(setInventory())}>
                        <i className={'fa-solid fa-box '}></i>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Dashboard
                        </span>
                    </li>
                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`} onClick={() => dispatch(setPatient())}>
                        <i className="fa-solid fa-users "></i>

                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Management System
                        </span>
                    </li>
                    <ul className={`${patient ? "show" : "hidden"} m-1 origin-down duration-500`}>
                        <Link to="patientlisting">
                            <li
                                className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                                <i className="fa-solid fa-caret-right fa-sm"></i>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Patient Listing
                                </span>
                            </li>
                        </Link>
                        <Link to="patientadmitted">
                            <li
                                className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                                <i className="fa-solid fa-caret-right fa-sm"></i>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Admitted Patients
                                </span>
                            </li>
                        </Link>
                        <Link to="outpatient">
                            <li
                                className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                                <i className="fa-solid fa-caret-right fa-sm"></i>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Outpatient
                                </span>
                            </li>
                        </Link>
                        <Link to="newpatient">
                            <li
                                className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                                <i className="fa-solid fa-caret-right fa-sm"></i>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    New Patient
                                </span>
                            </li>
                        </Link>
                        <Link to="patientreport">
                            <li
                                className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                                <i className="fa-solid fa-caret-right fa-sm"></i>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Reports
                                </span>
                            </li>
                        </Link>
                    </ul>
                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`} onClick={() => dispatch(setScheduling())}>
                        <i className="fa-solid fa-calendar-days"></i>

                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Finance System
                        </span>
                    </li>
                    <ul className={`${scheduling ? "show" : "hidden"} m-1 `}>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                            <i className="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Appointments This Week
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                            <i className="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Today's Appointments
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                            <i className="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Appointment Search
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                            <i className="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Appointment's Calendar
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                            <i className="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Add Appointment
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                            <i className="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Theater Schedule
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                            <i className="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Schedule
                            </span>
                        </li>
                    </ul>
                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`} onClick={() => dispatch(setImaging())}>
                        <i className="fa-solid fa-camera"></i>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Projects
                        </span>
                    </li>
                    <ul className={`${imaging ? "show" : "hidden"} m-1 `}>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                            <i className="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Requests
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                            <i className="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Completed
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                            <i className="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                New Requests
                            </span>
                        </li>
                    </ul>
                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`} onClick={() => dispatch(setMedication())}>
                        <i className="fa-solid fa-notes-medical"></i>

                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Reports
                        </span>
                    </li>
                    <ul className={`${medication ? "show" : "hidden"} m-1 `}>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                            <i className="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Request
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                            <i className="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Completed
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                            <i className="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                New Request
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                            <i className="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Dispence
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}>
                            <i className="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Return Medication
                            </span>
                        </li>
                    </ul>

                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`} onClick={() => dispatch(setAdmin())}>
                        <i className="fa-solid fa-user"></i>

                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Administration
                        </span>
                    </li>
                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-red-700 hover:text-white text-gray-400 text-sm items-center gap-2 px-3`}  onClick={() => dispatch(logout())}>
                       <i className="fa-solid fa-right-from-bracket"></i>

                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Logout
                        </span>
                    </li>

                </ul>
            </div>
        </div>
    )
}
