import React from 'react'
import styled from 'styled-components'
import Advertisement from './AdvertisementSmall'
import SECTION_LATEST_NEWS_CARD from './Section_latestNewsCard'
import SECTION_LATEST_SEARCH from './Section_latestSearch'


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
            <div style = {{display:"flex", justifyContent:"space-evenly"}}>              
                <div style = {{margin:"0",  width:"70%", padding:"0"}}>
                    {isTrue ? (data?.map((item)=> <SECTION_LATEST_NEWS_CARD {...item}/>) ): <SECTION_LATEST_SEARCH/> }
                </div>
                <div>
                <Advertisement/>
                <Advertisement/>
                </div>
            </div>


        </Wrapper>
    )
}

export default Section_latestNews
