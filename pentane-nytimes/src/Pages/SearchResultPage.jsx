import React from 'react'
import { Search } from '../Components/Search'
import  styled from "styled-components"
import { SearchIntrest } from '../Components/SearchInterest'
import { SearchedNewsCard } from '../Components/SearchedNewsCard';
import { useSelector } from "react-redux"

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
    const [ interest, setInterest ] =React.useState({ types:"" })
    const [ selectRelevance, setSelectRelevance ] =React.useState( "" )
    const { searchedNews } = useSelector( (state)=> state.searchedData)
    return (
            <>
                <OuterWrapper>
                    <InnerWrapper>
                        <Search types = { interest.types } sort ={ selectRelevance } />
                        <select  onClick ={ (e) => setSelectRelevance( e.target.value ) } className="select">
                            <option value="">Sort by Relevance</option>
                            <option value="newest">Sort by Newest</option>
                            <option value="oldest">Sort by Oldest</option>
                        </select>
                    </InnerWrapper>
                    <div className="intrestSearch">
                        <SearchIntrest  interest = { interest } setInterest = { setInterest } />
                    </div>
                </OuterWrapper>
                {searchedNews.length > 0 ? searchedNews?.map((item, index) => <SearchedNewsCard key={ index } { ...item } />) : <h1 style={{margin:'100px 500px '}}>No Result Found</h1>}
            </>
    )
}

export { SearchResultPage }
