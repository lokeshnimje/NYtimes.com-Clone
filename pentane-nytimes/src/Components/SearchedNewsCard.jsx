import React from 'react'
import styleSheet from "./Css/SearchedNewsCard.module.css"


const SearchedNewsCard = ({abstract, byline, section_name, headline, multimedia, pub_date }) => {

    return (
        <div className={ styleSheet.card}>
            <div className={ styleSheet.timeAgo}> { pub_date}  </div>
            <div className={ styleSheet.contentDiv}>
                    
                    <span style={ {width:'470px'}}>
                        <p className={ styleSheet.newsType}> { section_name } </p>
                        <h4 className={ styleSheet.titleH4}> { abstract } </h4>
                        {/* <p> { headline.main } </p> */}
                        
                        <p className={ styleSheet.newsAuthor }> {byline.original} </p>
                    </span>

                   {/* { multimedia && multimedia.length > 0 ?  <img width="205px" height="136px" src={ 'https://static01.nyt.com/'+multimedia[1]?.url }  alt=""/> : null } */}

            </div>
        </div>
    )
}

export { SearchedNewsCard }






  // const timeFunc = () => {
    //     let convertingInLocalTime = new Date(pub_date.toString() ).toISOString()
    //     let timeNow = Date.parse( new Date().toISOString() )
    //      let ms = timeNow - Date.parse( convertingInLocalTime )
        
    //      let sec =Math.floor( ms / 1000 )
    //      let min = Math.floor( sec / 60)
    //      let hr = Math.floor( min / 60 ) 
    //      let days = Math.floor( hr / 24)
    //      if( ms / 1000 < 60)
    //      {
    //          return sec+'seconds ago' 
    //      } 
    //      else if( ms / 1000 >= 60 && ms / 1000 <= 60*60) {
    //         return min+'minutes ago'
    //      }
    //      else if( ms / 1000 >= 60*60 && ms / 1000 <= 60*60*24)
    //      {
    //          return hr+'hours ago'
    //      }
    //      else 
    //      {
    //          return new Intl.DateTimeFormat('en-US',{month:'long'}).format(new Date(pub_date))+' '+ new Date(pub_date).getDate()+" "+new Date(pub_date).getFullYear()
    //      }
        
    // }