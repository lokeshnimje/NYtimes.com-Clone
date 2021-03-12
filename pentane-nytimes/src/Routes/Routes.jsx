import React from 'react'
import {Route} from "react-router-dom"
import MainArticle from '../Components/MainArticle'
import Navbar from '../Components/Navbar'
import SectionNews from '../Components/SectionNews'
const Routes = () => {
    return (
        <>
            <Route>
                <Navbar/>
                {/* <h3>Page Not Found</h3> */}
            </Route>

            <Route exact path = "/:name">
                <SectionNews/>
            </Route>
            
            <Route exact path = "/news/:title">
                <MainArticle/>
            </Route>
        </>
    )
}

export default Routes
