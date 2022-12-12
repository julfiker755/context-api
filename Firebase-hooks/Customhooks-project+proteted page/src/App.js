// import {RouterProvider} from 'react-router-dom'
// import routes from './Component/routes/routes';
// <RouterProvider router={routes} />
import { Route, Routes } from "react-router-dom";
import Header from "./Compon/Header/Header";
import Home from "./Compon/Home/Home";
import Login from "./Compon/LogIn/Login";
import Register from "./Compon/Register/Register";
import RequireAuth from "./Compon/RequireAuth/RequireAuth";



function App() {
  return (
    <div className="App text-center"> 
    <Header></Header>
    <Routes>
      <Route path="/Home" element={<RequireAuth><Home></Home></RequireAuth>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
    </Routes>
   </div>
  );
}
export default App;

