import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment,decrement } from './state/customSlice';
const Home = () => {

    const dispatch= useDispatch()
    const {counterNo}= useSelector(state=> state.demo)

    const {contact} = useSelector(state=> state.demoContact)
    console.log(contact.username)

    const[userInfo, setUserInfo]= useState({})

    useEffect(()=>{
        setUserInfo(contact)
    })
  return (
    <div className="App">
    <button onClick={()=> dispatch(increment())}>+</button>
    <span>{counterNo}</span>
    <button onClick={()=> dispatch(decrement())}>-</button>
    <h2>User Information</h2>
    <p>User Name: {userInfo.username} Email: {userInfo.useremail}</p>
</div>
  )
}

export default Home
