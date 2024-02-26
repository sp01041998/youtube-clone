import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice ({
    "name" : "user",
    initialState: {
        "isMobileView" : window.innerWidth > 768 ? false : true,
        "isSidebarOpen" : true
    },
    reducers: {
        isMobileViewScreen : (state, action) => {
            state.isMobileView = action.payload
        },
        isSidebarOpen : (state, action) => {
            state.isSidebarOpen = action.payload
        }
    }
})


export const {isMobileViewScreen, isSidebarOpen} = userSlice.actions
export default userSlice.reducer
