import React from 'react'
import AI from "../Components/AI"
import AIA from "../Components/AIA"
import axios from 'axios'

const HomePage = () => {

    const [data, setData ] = React.useState([])

    React.useEffect(()=>{
        
        axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=veI5P7qVillAxFUNbchxr8ijwFGG3M0z`)
        .then((res)=>{
            setData(res.data.results)
        })
    }, [])

    console.log(data)

    return (
        <div>
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
}

export { HomePage }
