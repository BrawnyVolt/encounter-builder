import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Search from "./Search";



function App() {

  const [user, setUser] = useState([])

  return (
      <div>
        <NavBar/>
        <Routes>
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/signup" element={<Signup user={user} setUser={setUser} />} />
          <Route path="/search" element={<Search user={user} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  );
};

export default App;