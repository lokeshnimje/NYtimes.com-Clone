import React from 'react'
import { useParams } from 'react-router'
import Section_latestNews from './Section_latestNews'
import Section_popular from './Section_popular'
import { fetchSectionData } from "../Redux/getData/action"
import { useDispatch, useSelector } from "react-redux"
import Weather from './Weather'


const SectionNews = () => {

  const {name} = useParams()
  const {news} = useSelector( (state) => state.getData)
  const {isLoading} = useSelector( (state) => state.getData)
  const {isError} = useSelector( (state) => state.getData)
  const dispatch = useDispatch()  //action dispatcher

  
  const getNewsData =()=>{
    const url = `https://api.nytimes.com/svc/topstories/v2/${name}.json?api-key=FIggacgleeORGRG2RudGPU94oYeKpAeO`
    dispatch( fetchSectionData(url) )
  }

  React.useEffect(()=>{
    getNewsData()
    
  },[])
  // window.onload = ()=>{
  //   getNewsData()
  // }

 

  if (isLoading) {
    return (
      <div>...Loading </div>
    )
  } else if (isError) {
    return (
      <div> something went wrong</div>
    )
  } else if (news) {
        return (
          <div>
            
            <div style = {{width:"90%", margin:"15px auto", marginTop:"50px"}}> 
                  <div style = {{display:"flex", justifyContent:"space-between"}}>
                    <div style={{fontSize:"35px", textAlign:"left",  fontWeight:"500"}}>{name.toUpperCase()}</div> 
                    <Weather/>
                  </div>
                  <hr/> 
                  {news && <Section_popular data = {news} />}
                  { <Section_latestNews data = {news}/> }
            </div>
          </div>
        )
  }    

}

export default SectionNews
