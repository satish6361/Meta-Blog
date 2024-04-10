// import {configureStore} from '@reduxjs/toolkit';
// import authService from '../appwrite/auth';
// import authSlice from './authSlice';

// const store = configureStore({
//     reducer:{
//         auth: authSlice
//         //TODO: add more slices here for posts
//     }
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    search: searchSlice,
  },
});

export default store;
