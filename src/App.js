
import './App.css';
import { createBrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';
import { RouterProvider } from 'react-router-dom';
import { useDispatch} from "react-redux"
import { useEffect } from 'react';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase';
import { addUser, removeUser } from './utils/userSlice';
import Error from './components/Error';

function App() {
  const dispatch = useDispatch()
 
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element:<Login/>
    },
    {
      path : "/browse",
      element:<Browse/>
    },
    {
      path : "/error",
      element:<Error/>
    }
  
  ])


  useEffect(()=>{
    onAuthStateChanged(auth,(user) => {
      if (user) {
        // USER SIGNED IN
        const {uid,email,displayName,photoURL} = user;
        // UPDATE THE REDUX STORE BY DISPATCHING AN ACTION
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
       
      } else {
        // USER SIGNED OUT
        dispatch(removeUser())
        
      }
    });
  },[])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;

