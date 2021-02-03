import React from "react";
import cl from "./Desc.module.css"
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const Desc = (props) => {
     return  <div className={cl.prof}>
              <div className={cl.ava}>
                {props.profile 
                  ? <img src={props.profile.photos.large} alt=""/>
                  : <img src="https://kyokushinkarate.news/wp-content/uploads/2019/11/young-samurai-2019.jpg" alt=""/>}               
              </div>
              <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
};

export default Desc;