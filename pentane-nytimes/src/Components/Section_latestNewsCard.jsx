import React from 'react'
import { useHistory, useLocation } from 'react-router'
import styled from 'styled-components'

const Section_latestNewsCard = ({published_date, title, abstract, byline, multimedia, url}) => {
    let imgUrl = (multimedia == null)?"https://static01.nyt.com/images/2021/03/10/us/10oil-01/10oil-01-mediumThreeByTwo210.jpg": multimedia[4].url
    let caption =   (multimedia == null)?"Copyright (c) 2021 The New York Times Company. All Rights Reserved.": multimedia[0].caption
    let date = published_date?.trim().split("-")
    let day= date[2].split("T")
    const Month = (month)=>{
        switch (month) {
            case "01": {
                return "January"
            }
            case "02": {
                return "February"
            }
            case "03": {
                return "March"
            }
            case "04": {
                return "April"
            }
            case "05": {
                return "May"
            }
            case "06": {
                return "June"
            }
            case "07": {
                return "July"
            }
            case "08": {
                return "August"
            }
            case "09": {
                return "September"
            }
            case "10": {
                return "October"
            }   
            case "11": {
                return "November"
            }
            case "12": {
                return "December"
            }
                

        
            default:
                break;
        }
    }
    const Detail = styled.div`
        display: flex;
        flex-direction: column;
        text-align: left;

        h2{
            font-weight: 400;
            font-size: 1.4em;
            margin:0;
            padding:0;
           
        }
        h4{
            font-weight: 400;
            margin-top:5px;
            margin-bottom:10px;

            
        }

        span{
            color: #999999;
            font-size: 12px;
            

        }
    `
    const Date = styled.span`
        color: #999999;
        font-size: 12px;
        margin-right: 10px;
    `
    const Wrapper = styled.section`
        display: flex;
        border-bottom: 1px #ddd solid;
        padding: 10px;
        width:90%;
        padding-bottom: 20px;
        cursor:pointer;

        div {
           margin:20px;
        }

    `
    let largeImg = (multimedia == null)?"https://static01.nyt.com/images/2021/03/11/multimedia/11virus-astrazeneca-denmark1/merlin_182654916_deba33c0-da8b-4e82-b168-aa7681c091d8-superJumbo.jpg": multimedia[0].url
    const location = useLocation(window.search)
    const history = useHistory(location)
    const payload  = {
        head: title,
        sub: abstract,
        img: largeImg,
        cap: caption,
        day: day[0],
        month: Month(date[1]),
        year: date[0],
        by: byline,
        link:url
    }
    const handleClick = ()=>{
        
        localStorage.setItem("pageInfo", JSON.stringify(payload))
        history.push(`/Pentane/news/${title}`)
    }
    return (
        <Wrapper onClick = {handleClick}>
            <div>
                <Date>{ Month(date[1])} {day[0]}, {date[0]}</Date>
            </div>  
            <Detail>
                <h2>{title}</h2>
                <h4>{abstract} </h4>
                <span> {byline} </span>
            </Detail>
            <div>
                <img src={imgUrl} alt={caption} style={{width:"220px",height:"170px"}} />
            </div>
        </Wrapper>
    )
}

export default Section_latestNewsCard
