import { Container } from "@material-ui/core";
import React from "react"
import ArticlePost from "../Components/ArticlePost";

const AdminPage=()=>{
    return (
        <>
        <Container>
            <h1 style={{textAlign:"center"}}>Create Article</h1>
            <ArticlePost/>
        </Container>
        </>
    )
}
export default AdminPage;