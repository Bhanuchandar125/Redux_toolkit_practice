import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

 
  const userSlice = createSlice({
        name:"user",
        initialState:[],
        reducers:{
            addUser(state, action){},
            deleteUser(state, action){},
            removeUsers(state, action){}
        }
    })
  
console.log("user",userSlice.actions);
    
export default userSlice.reducer  

