
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import { useSelector,useDispatch} from 'react-redux'
import Login from "./Login";
import { login } from "./components/redux/loginSlice";


const App = () => {
  const dispatch=useDispatch();
  const status = useSelector((state) => state.login.status)
  if (localStorage.getItem("access_token")) {
    dispatch(login())}
  
  return (
   <div>
      {status?(<Login/>):(
        <div className="relative lg:flex font-serif ">
        <Navbar/>
      <div className="h-full lg:h-full min-h-screen flex-1 ">
        <Header/>
        <Routes>
          <Route path="/" element={<Welcome/>}/>

          
          

        </Routes>
      </div></div>)}
      
    </div>
  );
};
export default App;