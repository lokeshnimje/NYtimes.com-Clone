import React from 'react'
import { Route, Switch } from "react-router-dom"
import Navbar from '../Components/Navbar'
import { LoginPage } from '../Pages/LoginPage'
import { RegisterationPage } from '../Pages/RegisterationPage'
import { SearchResultPage } from '../Pages/SearchResultPage'
import MainArticle from '../Components/MainArticle'
import SectionNews from '../Components/SectionNews'
import { HomePage } from "../Pages/HomePage"
const Routes = () => {
    return (
        <>
             <Navbar/>

            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/Home">
                <HomePage />   
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
            <Route exact path = "/registration">
                <RegisterationPage/>
            </Route>        
            <Route exact path = "/Articles/:name">
                <SectionNews/>
            </Route>
            <Route exact path = "/news/:title">
                <MainArticle/>
            </Route>
        </>
    )
}

export default Routes
