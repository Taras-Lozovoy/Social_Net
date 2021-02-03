import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../Common/FormControl/FormControl";
import { maxLength, minLength, required } from "../../Common/Validators/Validators";
import cl from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let postsElem = props.posts.map (p => <Post message={p.message} key={p.id} likes={p.likes} src={p.src}/>);

  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return  <div className={cl.myPosts}>
            My posts
            <AddPostReduxForm onSubmit={addNewPost} />
            <div className={cl.posts}>
              {postsElem}
            </div>
          </div>
};

const maxLength30 = maxLength(30);
const minLength0 = minLength(0);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name="newPostText" placeholder="Type new post"
            validate={[maxLength30, minLength0]}/>
      <button>Add Post</button>
    </form>
  )
};

const AddPostReduxForm = reduxForm({form: "NewPost"}) (AddPostForm);

export default MyPosts;