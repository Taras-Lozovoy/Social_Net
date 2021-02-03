import React from "react";
import cl from "./Post.module.css";

const Post = (props) => {
    return  <div className={cl.item}>
                <img src={props.src}/>
                <span className={cl.message}>{props.message}</span>
                <button className={cl.like}>Like</button>
                <span className={cl.likes}>{props.likes} Likes</span>
            </div>
            
}

export default Post;