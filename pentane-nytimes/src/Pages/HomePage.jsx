import React from 'react'
import HomePageBanner from '../Components/HomePageBanner'
import AIA from "../Components/AIA"
import axios from 'axios'

const key = process.env.REACT_APP_NEWSFEED_API;

const HomePage = () => {    
    const [isLoading, setLoading] = React.useState(false)
    const [data, setData ] = React.useState([])

    React.useEffect(()=>{
        setLoading(true)
        axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`)
        .then((res)=>{
            setData(res.data.results)
            setLoading(false)
        })
    }, [])    

    return (
        (isLoading)?( <div style ={{margin:"10px 40%",}}> <img style ={{margin:"auto",}} width="300px" height="300px" src="https://www.bluechipexterminating.com/wp-content/uploads/2020/02/loading-gif-png-5.gif" alt="loading"/> </div>  ):(
        <div style = {{marginTop:"50px" }} >
            <div>
                <HomePageBanner data = {data}/>            
            </div>
            <div style ={{ padding:'0', borderTop:'3px solid',  width:"91%", margin:"10px auto"}}></div>

            <AIA data3 = { data[5] }  data2 ={ data[4]}  data = {data[0]} imgUrl = {data[0]?.multimedia[0].url }  imgCaption = {data[0]?.multimedia[0].caption }
            
            />
            <AIA data3 = { data[6] }  data2 ={ data[10]}  data = {data[19]} imgUrl = {data[19]?.multimedia[0].url }  imgCaption = {data[19]?.multimedia[0].caption }/>
            <AIA data3 = { data[7] } data2 ={ data[14]}  data = {data[20]}  imgUrl = {data[20]?.multimedia[0].url }  imgCaption = {data[20]?.multimedia[0].caption } />
            <AIA data3 = { data[8] }  data2 ={ data[9]}  data = {data[10]} imgUrl = {data[10]?.multimedia[0].url }  imgCaption = {data[10]?.multimedia[0].caption }
            
            />
            <AIA data3 = { data[11] }  data2 ={ data[12]}  data = {data[13]} imgUrl = {data[13]?.multimedia[0].url }  imgCaption = {data[13]?.multimedia[0].caption }/>
            <AIA data3 = { data[20] } data2 ={ data[21]}  data = {data[22]}  imgUrl = {data[22]?.multimedia[0].url }  imgCaption = {data[22]?.multimedia[0].caption } />
            <AIA data3 = { data[23] } data2 ={ data[25]}  data = {data[24]}  imgUrl = {data[24]?.multimedia[0].url }  imgCaption = {data[24]?.multimedia[0].caption } />
            {/* <AI/> */}

            {/* {new Array(10).fill(0).map((el,index) => index > 5 ? <>asddds</> : null) } */}
           
        </div>
        )
    )
}

export { HomePage }
