import React from 'react'
import styled from 'styled-components'
import Section_latestNewsCard from './Section_latestNewsCard'
import Section_latestSearch from './Section_latestSearch'


const Section_latestNews = ({data}) => {
  const [isTrue, setTrue] = React.useState(true)

  const Wrapper = styled.section`
    border-top: 3px black solid;
    margin-top: 15px
  `

  const InnerTab = styled.div`
    padding:12px 20px;    
    font-size: 15px;
    font-weight: 500;
    margin: 0 5px;        
    cursor:pointer; 

    &:focus, &:active {
      border-top: 1px black solid;
      border-left: 1px black solid;
      border-right: 1px black solid;
      z-index:3;
      border-bottom: none;
    }     
   
  `

  const Design = styled.div`
    border-bottom:1px black solid;
    padding:0;
    margin:0;
    display:flex;

  ` 
  // console.log(data);
  

    return (
        <Wrapper>
            <Design>
                <InnerTab onClick = {()=> setTrue(true)}  >Latest</InnerTab> 
                <InnerTab  onClick = {()=> setTrue(false)}>Search</InnerTab>
            </Design>
            <div>
                {isTrue ? (data?.map((item)=> <Section_latestNewsCard {...item}/>) ): <Section_latestSearch/> }
            </div>
        

        </Wrapper>
    )
}

export default Section_latestNews
