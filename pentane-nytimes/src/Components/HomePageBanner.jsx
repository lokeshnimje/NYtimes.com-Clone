import React from 'react'

const HomePageBanner = ({data}) => {
    // console.log(data);
    let [num1 , setNum1] = React.useState(0) 
    let [num2 , setNum2] = React.useState(4) 
    let [num3 , setNum3] = React.useState(9)

    React.useEffect(()=>{
        
        var id=setInterval(()=>{
            setNum1( Math.floor(Math.random() * (3 - 1)) + 1)
            setNum2( Math.floor(Math.random() * (8 - 5)) + 5)
            setNum3( Math.floor(Math.random() * (14- 10)) + 10)
        
        },3000)
        return ()=>{
            clearInterval(id);
        }
    },[num3] )

    return (
        <div style = {{display:"flex", width:"91%", margin:"0 auto", borderBottom:"1px solid"}} >
            <div style = {{display:"flex", fontSize:"12px", wordWrap:"break-word", padding:"10px", margin:"0 5px"}}>
                <div style = {{marginRight:"5px"}}>
                    <img src={data[num1]?.multimedia[0].url } alt="Breaking News" width= "100px" height = "70px"/>
                </div>
                <div>
                    <div>{data[num1]?.title}</div>
                    
                </div>
            </div>

            <div style = {{display:"flex", fontSize:"12px",  wordWrap:"break-word",  padding:"10px", margin:"0 5px"}}>
                <div style = {{marginRight:"5px"}}>
                        <img src={data[num2]?.multimedia[0].url } alt="Breaking News" width= "100px" height = "70px"/>
                </div>
                <div>
                    <div>{data[num2]?.title}</div>
                    
                </div>
            </div>

            <div style = {{display:"flex", fontSize:"12px",  wordWrap:"break-word",  padding:"10px", margin:"0 5px"}}>
                <div style = {{marginRight:"5px"}}>
                    <img src={data[num3]?.multimedia[0].url } alt="Breaking News" width= "100px" height = "70px"/>
                </div>
                <div>
                    <div>{data[num3]?.title}</div>
                    
                </div>
            </div>
        </div>
    )
}

export default HomePageBanner
