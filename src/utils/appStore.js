import{configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import moviesReducer from "./movieSlice";

const appStore= configureStore({
    reducer:{
        auth:authSlice,
        movie:moviesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, }),
})

export default appStore