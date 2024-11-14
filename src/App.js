
import './App.css';
import { createBrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';
import { RouterProvider } from 'react-router-dom';


import Error from './components/Error';

function App() {

 
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



  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;

