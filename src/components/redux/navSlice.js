import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  inventory: false,
  patient:false,
  scheduling:false,
  imaging:false,
  medication:false,
  labs:false,
  billing:false,
  incident:false,
  admin:false,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOpen: (state) => {
        state.open =  !(state.open)
        state.inventory= false
        state.patient=false
        state.scheduling=false
        state.imaging=false
        state.medication=false
        state.labs=false
        state.billing=false
        state.incident=false
        state.admin=false
      },
      setInventory:(state)=>{
        state.inventory = !(state.inventory)
        state.open = true
        state.patient=false
        state.scheduling=false
        state.imaging=false
        state.medication=false
        state.labs=false
        state.billing=false
        state.incident=false
        state.admin=false
      },
      setPatient:(state)=>{
        state.inventory = false
        state.open = true
        state.patient=(!state.patient)
        state.scheduling=false
        state.imaging=false
        state.medication=false
        state.labs=false
        state.billing=false
        state.incident=false
        state.admin=false
      },
      setScheduling:(state)=>{
        state.inventory = false
        state.open = true
        state.patient=false
        state.scheduling=(!state.scheduling)
        state.imaging=false
        state.medication=false
        state.labs=false
        state.billing=false
        state.incident=false
        state.admin=false
      },
      setImaging:(state)=>{
        state.inventory = false
        state.open = true
        state.patient=false
        state.scheduling=false
        state.imaging=(!state.imaging)
        state.medication=false
        state.labs=false
        state.billing=false
        state.incident=false
        state.admin=false
      },
      setMedication:(state)=>{
        state.inventory = false
        state.open = true
        state.patient=false
        state.scheduling=false
        state.imaging=false
        state.medication=(!state.medication)
        state.labs=false
        state.billing=false
        state.incident=false
        state.admin=false
      },
      setLabs:(state)=>{
        state.inventory = false
        state.open = true
        state.patient=false
        state.scheduling=false
        state.imaging=false
        state.medication=false
        state.labs=(!state.labs)
        state.billing=false
        state.incident=false
        state.admin=false
      },
      setBilling:(state)=>{
        state.inventory = false
        state.open = true
        state.patient=false
        state.scheduling=false
        state.imaging=false
        state.medication=false
        state.labs=false
        state.billing=(!state.billing)
        state.incident=false
        state.admin=false
      },
      setIncident:(state)=>{
        state.inventory = false
        state.open = true
        state.patient=false
        state.scheduling=false
        state.imaging=false
        state.medication=false
        state.labs=false
        state.billing=false
        state.incident=(!state.incident)
        state.admin=false
      },
      setAdmin:(state)=>{
        state.inventory = false
        state.open = true
        state.patient=false
        state.scheduling=false
        state.imaging=false
        state.medication=false
        state.labs=false
        state.billing=false
        state.incident=false
        state.admin=(!state.admin)
      },
  },
})

// Action creators are generated for each case reducer function
export const {setOpen,setInventory,setPatient,setScheduling,setImaging,setMedication,setLabs,setBilling,setIncident,setAdmin} = navSlice.actions

export default navSlice.reducer
