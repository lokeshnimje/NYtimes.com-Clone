import React from 'react'
import {Route} from "react-router-dom"
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
        </>
    )
}

export default Routes
