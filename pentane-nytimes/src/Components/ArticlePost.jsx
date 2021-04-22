import { Editor } from 'react-draft-wysiwyg';
import React from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button, Container } from '@material-ui/core';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
const ArticlePost=()=>{

    const [editorState,setEditorState]=React.useState("")    
    const [postStatus,setPostStatus]=React.useState(false);
    const [isPosting,setIsPosting]=React.useState(false);
    const onEditorStateChange = (editorState) => {
        return setEditorState(editorState)
    }

    const handleClick=()=>{
        setIsPosting(true);
        let articleString=draftToHtml(convertToRaw(editorState.getCurrentContent()))
        let payload={
            __html:articleString
        }
        localStorage.setItem("postedArticle",JSON.stringify(payload));
        setIsPosting(false);
        setPostStatus(true);
    }
    return (
        <>
        <Container style={{height:"fit-content"}}>
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
            />
            <Button onClick={handleClick} variant="contained" color="primary">
                POST
            </Button>
            {isPosting?<h3>Posting...</h3>:null}
            {postStatus?<h3 style={{color:"green"}}>Posted Successfully!</h3>:null}
        </Container>
        
            
        </>
    )
}
export default ArticlePost;
