import React from 'react'
import { Search } from '../Components/Search'
import  styled from "styled-components"
import { SearchIntrest } from '../Components/SearchInterest'

const InnerWrapper = styled.div`
background-color: #f7f7f7;
display:flex;
justify-content: center;

.select{
    margin-left: 50px;
    border:none;
    width:146px;
    padding:5px 30px 5px 8px;
    background-color: #f7f7f7;
    font-size:14px;
    //  appearance:none;
    // background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right transparent;
    option{
        font-size:14px;
    }
    &:hover{
        border:1px solid #ddd;
    }
}
`
const OuterWrapper = styled.div`
background-color: #f7f7f7;
display:flex;
flex-direction: column;
justify-content: center;

.intrestSearch{
    margin-left:340px;
}

}
`


const SearchResultPage = () => {
    const [ interest, setInterest ] =React.useState({dateRange:"",types:""})
    return (
            <OuterWrapper>
                  <InnerWrapper>
                    <Search />
                    <select className="select">
                        <option value="">Sort by Relevance</option>
                        <option value="">Sort by Newest</option>
                        <option value="">Sort by Oldest</option>
                    </select>
                </InnerWrapper>
                <div className="intrestSearch">
                    <SearchIntrest  interest = { interest } setInterest = { setInterest } />
                </div>

            </OuterWrapper>
    )
}

export { SearchResultPage }
