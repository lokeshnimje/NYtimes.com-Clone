import React from 'react'
import {Route} from "react-router-dom"
import Navbar from '../Components/Navbar'
const Routes = () => {
    return (
        <>
            <Route>
                <Navbar/>
                {/* <h3>Page Not Found</h3> */}
            </Route>
        </>
    )
}

export default Routes
