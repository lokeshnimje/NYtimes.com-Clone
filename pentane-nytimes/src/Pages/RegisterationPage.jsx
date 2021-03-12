import React from 'react'
import styled from 'styled-components'
import { LoginBottom } from '../Components/LoginBottom'
import { LoginNavbar } from "../Components/LoginNavbar"
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
 }
  label{
     margin-top:11px;
     padding-left:5px;
 }


`
const RegisterationPage = () => {
    
    return (
        <>
        {/* reusing loginNavabr here */}
        <LoginNavbar />
        <Wrapper>
            <form action="" className="form">
             
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Password"/>
                <div className = "radioGroup">
                    <input type="radio" name="userType"/> <label htmlFor="reader"> Reader</label>
                    <input type="radio" name="userType"/> <label htmlFor="administrator"> Administrator</label>
                </div>
                <input type="submit" value="Register"/>
                
            </form>
        </Wrapper> 
        {/* reusing loginbottom here */}
        <LoginBottom />
        </>
    )
}

export { RegisterationPage }
