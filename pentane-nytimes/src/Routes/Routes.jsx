import React from 'react'
import { Route, Switch } from "react-router-dom"
import Navbar from '../Components/Navbar'
import { LoginPage } from '../Pages/LoginPage'
import { RegisterationPage } from '../Pages/RegisterationPage'
import { SearchResultPage } from '../Pages/SearchResultPage'
const Routes = () => {
    return (
        <>
            <Switch>
                <Route>
                    <Navbar/>
                </Route>                
                <Route exact path = "/registeration">
                    <RegisterationPage />
                </Route>
                <Route exact path = "/login">
                        <LoginPage />
                </Route>
                {/* SearchResult page  */}
                <Route exact path = "/search">
                    <SearchResultPage />
                </Route>
                <Route>
                    <h2>
                        Error: Page not found
                    </h2>
                </Route>
            </Switch>
        </>
    )
}

export default Routes
