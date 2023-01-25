import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { saveContact,removeContact } from '../state/contactSlice'
import {useNavigate} from 'react-router-dom'
const Contact = () => {

    const[userName, setUserName]= useState("")
    const[userEmail, setUserEmail]= useState("")
    const dispatch= useDispatch()
    const navigate= useNavigate()

    // const {contact} = useSelector(state=> state.demoContact)
    // console.log(contact)
    const handleContact =(e)=>{
        e.preventDefault()
      
        dispatch(saveContact({
          username: userName,
          useremail: userEmail
        }))

        navigate("/")

    }

    // const send=()=>{
    //    alert(userName +" "+ userEmail)
    //      dispatch(saveContact({
    //         userName:userName,
    //         userEmail:userEmail
    //     }))

    // }

    const remove=()=>{
      dispatch(removeContact())
    }
  return (
    <div>
      <form onSubmit={handleContact}>
        <label htmlFor="userName">User Name</label>
        <input type="text" name='userName' id='userName'  onChange={(e)=> setUserName(e.target.value)}  />

        <label htmlFor="userEmail">User Email</label>
        <input type="text" name='userEmail' id="userEmail"  onChange={(e)=> setUserEmail(e.target.value)} />
        <button>Send Form</button>
        <button onClick={remove}>Remove State</button>
      </form>
    </div>
  )
}

export default Contact
