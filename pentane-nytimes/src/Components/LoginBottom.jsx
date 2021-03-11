import React from 'react'
import styled from 'styled-components'

const Bottom = styled.div`
*{
    font-size:12px;
    line-height: 15px;
    color : #767676;
}
position : absolute;
bottom:0px;

width : 100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 0px -1px 0px 0px #ddd;
`
const LoginBottom = () => {
    return <Bottom>
        <span style={ {marginTop:'10px', marginBottom:'10px',height:'fit-content'} }>This site is protected by&nbsp; reCAPTCHA &nbsp; and the Google &nbsp;&nbsp; <a href="#"> Privacy Policy </a> &nbsp;&nbsp; and &nbsp;&nbsp; <a href="#"> Terms of Service  </a> &nbsp;&nbsp;apply.</span>
        <span>
            &copy; 2021  The New York Times Company  &nbsp;&nbsp; &nbsp;<a href="#"> Privacy Policy </a>  &nbsp;&nbsp; &nbsp; <a href="#"> Help </a> &nbsp;&nbsp; &nbsp; <a href="#"> Contact Us </a>  &nbsp;&nbsp; &nbsp;<a href="#"> California Notices </a>
        </span>

    </Bottom>
}

export { LoginBottom }
