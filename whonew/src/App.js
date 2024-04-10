import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Explore from "./components/Explore";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  RedirectFunction,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import Result from "./components/Result";
import Guidelines from "./components/Guidelines";
import { useEffect } from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Questions from "./components/Questions";
import Quiz from "./components/Quiz";
import ResultTable from "./components/ResultTable";

function App() {
  //check if user is logged in or not
  /*const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(false);
  const isLoggedIn=async()=>{
    try {
      const res=await fetch('/auth',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });
      if(res.status==200)
      {
        setauth(true)
        setauth(false)
      }
      if(res.status==401)
      {
        setauth(false)
        setauth(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    isLoggedIn();
  }, [])*/

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/questions" element={<Questions/>}/>
        <Route path="/result" element={<Result />}/>
        <Route path="/guidelines" element={<Guidelines/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
      </Routes>
    </>
  );
}

export default App;
