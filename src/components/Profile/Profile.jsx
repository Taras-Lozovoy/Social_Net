import React from "react";
import Desc from "./Desc/Desc";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import cl from "./Profile.module.css";

const Profile = (props) => {

    return  <div className={cl.content}>
              <div className={cl.pic}>
                <img src="https://www.seekpng.com/png/detail/603-6037516_samurai-logo-png.png"/>
              </div>
              <Desc profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
              <MyPostsContainer store={props.store}/>
            </div>
}

export default Profile;