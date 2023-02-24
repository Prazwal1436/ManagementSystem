import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  nav2:false,
  nav3:false,
  nav4:false,
  nav5:false,
  nav6:false,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOpen: (state) => {
        state.open =  !(state.open)
        
        state.nav2=false
        state.nav3=false
        state.nav4=false
        state.nav5=false
        state.nav6=false
        
        
        
      },
      setNav1:(state)=>{
        state.open = true
        state.nav2=false
        state.nav3=false
        state.nav4=false
        state.nav5=false
        state.nav6=false
        
        
        
      },
      setNav2:(state)=>{
        
        state.open = true
        state.nav2=(!state.nav2)
        state.nav3=false
        state.nav4=false
        state.nav5=false
        state.nav6=false
        
        
        
      },
      setNav3:(state)=>{
        
        state.open = true
        state.nav2=false
        state.nav3=(!state.nav3)
        state.nav4=false
        state.nav5=false
        state.nav6=false
        
        
        
      },
      setNav4:(state)=>{
        
        state.open = true
        state.nav2=false
        state.nav3=false
        state.nav4=(!state.nav4)
        state.nav5=false
        state.nav6=false
        
        
        
      },
      setNav5:(state)=>{
        
        state.open = true
        state.nav2=false
        state.nav3=false
        state.nav4=false
        state.nav5=(!state.nav5)
        state.nav6=false
        
        
        
      },
      setNav6:(state)=>{
        
        state.open = true
        state.nav2=false
        state.nav3=false
        state.nav4=false
        state.nav5=false
        state.nav6=false
      },
  },
})

// Action creators are generated for each case reducer function
export const {setOpen,setNav1,setNav2,setNav3,setNav4,setNav5,setNav6} = navSlice.actions

export default navSlice.reducer
