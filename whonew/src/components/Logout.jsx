import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const navigate=useNavigate();
    const Logout=async()=>{
        try {
            const res=await fetch('/logout',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            if(res.status==401 || !res){
                window.alert("Please Logout later");
            }else{
                navigate('/');
                window.alert("Logged Out Successfully")
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        Logout();
    },[]);
  return (
    <div></div>
  )
}
