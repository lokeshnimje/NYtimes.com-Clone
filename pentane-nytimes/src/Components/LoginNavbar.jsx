import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    height : 60px;
    display : flex;
    justify-content : center;
    align-items : center;
    // border :1px solid black;
    box-shadow: 0px 2px 0px #ddd;
    
`

const LoginNavbar = () => {
    return ( <Nav>  <img height="40px"  src= "https://www.vectorlogo.zone/logos/nytimes/nytimes-wordmark.svg"  alt="new york times's logo'"/> </Nav> )
}

export { LoginNavbar }
