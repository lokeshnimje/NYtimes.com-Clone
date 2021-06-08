import React from 'react'
import styled from 'styled-components'
import axios from "axios"
import { LoginPage } from './LoginPage'
const Wrapper = styled.div`
 margin : 100px auto;
 width:410px;
 padding:10px;
 
 .form{
    display: flex;
    flex-direction : column;
 }
 .form input {
     margin : 5px;
     height:40px;
     border-radius:5px;
     border: 1px solid #ddd;
     outline:none;
     text-indent : 10px;
     &:hover {
        border: 1px solid black;
     }
 }
 .form input[type="submit"] {
    margin : 5px;
    height:40px;
    background:black;
    color:white;
    font-size : 15px;
    font-weight : 500;
    text-indent : 0px;
    &:hover{
        opacity:.5;
    }
}
 .form .radioGroup {
     display : flex;
     input{
         margin-left:12px;
     }
     .select{
        width:50px
     }
    
 }
  select{
     margin:20px 10px;
     paddingt:10px;
     width: 100px
 }

`
const RegisterationPage = () => {
    const initialState = {
        fname : "",
        lname : "",
        email : "",
        pass : "",
        userType : "",
        savedArticle : []
    }
    const [state, setState] = React.useState(initialState)
    const [isError, setIsError] = React.useState(false)
    const [isRegistered, setIsRegistered] = React.useState(false)

    const handleChange = (e) => {
        const {name,value} = e.target
        setState({...state, [name]:value}) 
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(state)
        axios.post("https://nytimespentane.herokuapp.com/users", {...state, savedArticle:[]})
        .then(res=> setIsRegistered(true))
        .catch(err => setIsError(true))
    }
    const {fname, lname, email, pass, userType} = state
    return (
        <>
        {/* reusing loginNavabr here */}
        {/* <LoginNavbar /> */}
        {isRegistered ? <LoginPage/> : 
        <Wrapper>
            {isError && <h3>Error while Registering</h3>}
            <form onSubmit={handleSubmit} className="form">
                <input type="text" name= 'fname' value={fname} onChange={handleChange}  placeholder="First Name"/>
                <input type="text" value={lname} onChange={handleChange} name= 'lname' placeholder="Last Name"/>
                <input type="text" value={email} onChange={handleChange} name= 'email' placeholder="Email"/>
                <input type="text" value={pass} onChange={handleChange} name= 'pass' placeholder="Password"/>
                <select className = "select" name="userType" value={userType} onChange={handleChange}>
                    <option value="">I AM</option>
                    {["Reader","Admin"].map(item=> <option key={item.id} value={item}>{item}</option>)}
                </select>
                <input type="submit" value="Register"/>     
            </form>
        </Wrapper> }
        {/* reusing loginbottom here */}
        {/* <LoginBottom /> */}
        </>
    )
}

export { RegisterationPage }
