import React from 'react'
import { Route, Switch } from "react-router-dom"
import Navbar from '../Components/Navbar'
import { LoginPage } from '../Pages/LoginPage'
import { RegisterationPage } from '../Pages/RegisterationPage'
import { SearchResultPage } from '../Pages/SearchResultPage'
import MainArticle from '../Components/MainArticle'
import SectionNews from '../Components/SectionNews'
import { HomePage } from "../Pages/HomePage"
import AdminPage from '../Pages/AdminPage'
const Routes = () => {
    return (
        <>
            <Navbar/>
            <Switch>

                <Route exact path="/Pentane/">
                    <HomePage/>
                </Route>
                <Route exact path="/Pentane/Home">
                    <HomePage />   
                </Route>

                <Route exact path = "/Pentane/registeration">
                    <RegisterationPage />
                </Route>

                <Route exact path = "/Pentane/login">
                        <LoginPage />
                </Route>
               
                <Route path = "/Pentane/search">
                    <SearchResultPage />
                </Route>

                <Route exact path = "/Pentane/registration">
                    <RegisterationPage/>
                </Route>

                <Route exact path = "/Pentane/Articles/:name">
                    <SectionNews/>
                </Route>

                <Route exact path = "/Pentane/news/:title">
                    <MainArticle/>
                </Route>

                <Route exact path="/Pentane/admin">
                    <AdminPage/>
                </Route>

            </Switch>
        </>
    )
}

export default Routes
