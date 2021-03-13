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
               
                <Route path = "/search">
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

                <Route exact path="/admin">
                    <AdminPage/>
                </Route>

            </Switch>
        </>
    )
}

export default Routes
