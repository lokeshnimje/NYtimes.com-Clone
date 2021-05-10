import React, {useState} from 'react'
import { useHistory } from "react-router";
import styles from "./Comments.module.css";
import { Button } from "@material-ui/core";
import CommentCard from "./CommentCard";
import { FaBookmark } from "react-icons/fa";
import {useSelector} from 'react-redux'
const Comment = () => {
    const history = useHistory()
    const [comm, setComm] = useState([]);
    const [comment, setComment] = useState("");
    const [color, setColor] = useState("");
    const {user, isAuth} = useSelector(state => state.auth)
    const handleLogin = () => {
    history.push("/Pentane/login")
    }

    const handleComments = () => {
    const payload = {
        name : user.fname,
        date : new Date().toLocaleDateString(),
        comment : comment
    }
    if(comm.length !== 0){
        setComm([...comm, payload])
        } else {
        setComm([payload])
    }
    }
    const handleChange = () => {
        setColor("skyblue")
    }
    const handleClick = (e) => {
        let a =  e.target.value
        setComment(a)
}

return (
    <div className={styles.comment_main}>
        <div>
            <div className = {styles.bookmarks}>
                <h4>{`Comments (${comm.length})`}</h4>
                <FaBookmark onClick = {handleChange} color = {color} size = "25px"/>
            </div>
        </div>
        <div>
            <div className={styles.comment_box}>
            <textarea onChange = {(e) => handleClick(e)} type="text" />
            {isAuth ? (
            <Button onClick = {handleComments}
                variant="contained" color="secondary">
                Post
            </Button>
            ) : (
            <Button
            onClick={handleLogin}
            variant="contained"
            color="primary"
            >
            Login
            </Button>
            )}
        <div> { comm.length !== 0 && comm?.map((e, i) => ( <CommentCard id = {i} {...e}/> )) } </div>
        </div>
            <div className={styles.privacy}>
                <p>
                1. Comments will be moderated by The New York Times editorial
                team.
                </p>
                <p>
                2.Comments that are abusive, personal, incendiary or
                irrelevant cannot be published.
                </p>
                <p>
                3. Please write complete sentences. Do not type comments
                in all capital letters, or in all lower case letters, or
                using abbreviated text. (example: u cannot substitute
                for you, d is not 'the', n is not 'and').
                </p>
                <p>4.We may remove hyperlinks within comments.</p>
                <p>
                5. Please use a genuine email ID and provide your name,
                to avoid rejection.
                </p>
            </div>
        </div>
    </div>
);
}

export default Comment
