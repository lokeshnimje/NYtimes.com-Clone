import React from 'react'
import { useParams } from 'react-router'
import SECTION_LATEST_NEWS from './Section_latestNews'
import SECTION_POPULAR from './Section_popular'
import { fetchSectionData } from "../Redux/getData/action"
import { useDispatch, useSelector } from "react-redux"
import Weather from './Weather'
import { Container } from '@material-ui/core'
import Error from '../Utils/10.svg'
import dotenv from 'dotenv';
dotenv.config();

const SectionNews = () => {

  const {name} = useParams()
  const {news} = useSelector( (state) => state.getData)
  const {isLoading} = useSelector( (state) => state.getData)
  const {isError} = useSelector( (state) => state.getData)
  const dispatch = useDispatch()  //action dispatcher
  const [article,setArticle]=React.useState("");
  const key = process.env.REACT_APP_NEWSFEED_API;
  console.log(process.env,'env')
  console.log(key);
  const getNewsData =()=>{
    const url = `https://api.nytimes.com/svc/topstories/v2/${name}.json?api-key=${key}`
    dispatch( fetchSectionData(url) )
  }

  React.useEffect(()=>{
    getNewsData()
    if(localStorage.getItem("postedArticle")){
      setArticle(JSON.parse(localStorage.getItem("postedArticle")))
    };
  },[name])


  return (
    <>
      {isLoading?<div style ={{margin:"10px 40%",}}> <img style ={{margin:"auto",}} width="300px" height="300px" src="https://www.bluechipexterminating.com/wp-content/uploads/2020/02/loading-gif-png-5.gif" alt="loading"/> </div>:null}
      {isError?(
      <div > <img src={Error} alt="404 error" width = "500px" height = "400px"/></div>
      ):null}
      {news?(
          <div>
            
            <div style = {{width:"90%", margin:"15px auto", marginTop:"50px"}}> 
                  <div style = {{display:"flex", justifyContent:"space-between"}}>
                    <div style={{fontSize:"35px", textAlign:"left",  fontWeight:"600"}}>{name.toUpperCase()}</div> 
                    <Weather/>
                  </div>
                  {name==="opinion"? <div style ={{ borderTop:'3px solid #ddd', padding:'1px', borderBottom:'1px solid #ddd'}}></div>: null}
                  {(name === "opinion" && article)?<Container><div dangerouslySetInnerHTML={article} ></div></Container>:null}
                  <div style ={{ borderTop:'3px solid #ddd', padding:'1px', borderBottom:'1px solid #ddd'}}></div>
                  {news && <SECTION_POPULAR data = {news} />}
                  { <SECTION_LATEST_NEWS data = {news}/> }
            </div>
          </div>
        ):null}
    </>
  )    

}

export default SectionNews
