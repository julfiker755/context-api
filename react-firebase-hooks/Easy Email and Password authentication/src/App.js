import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from './component/Layout/Layout';
import SignIn from './component/SignIn/SignIn';
import Home from './component/Home/Home';
import Servies from './component/Servies/Servies';
import Register from './component/Register/Register';
function App() {
  const routes=createBrowserRouter([
    {
      path:'/',
      element:<Layout></Layout>,
      children:[
        {
          path:"/signin",
          element:<SignIn></SignIn>
        },{
          path:"/home",
          element:<Home></Home>
        },{
          path:"/servies",
          element:<Servies></Servies>
        },{
          path:'/register',
          element:<Register></Register>
        }
      ]

    },{
      path:"*",
      element:<div>404 Page is Not found</div>
    }
  ])
  return (
    <div className="App">
       <RouterProvider router={routes} />
    </div>
  );
}

export default App;
