import { useEffect } from "react";
import axios from 'axios';
import RegistrationForm from "./component/registration";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import UpdateForm from "./component/update";
import Details from "./component/details";
function App() {

  return (
   <HashRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/register" element={<RegistrationForm/>} />
      <Route exact path="/details" element={<Details/>} />
      <Route exact path="/update" element={<UpdateForm/>} />
    </Routes>
   </HashRouter>
  );
}

export default App;
