import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/FormControl/FormControl';
import { maxLength, required } from '../Common/Validators/Validators';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from '../Common/FormControl/FormControl.module.css'

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    };

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const maxLength20 = maxLength(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"email"} type={"email"} placeholder={"Email"}
                    validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field component={Input} name={"password"} type={"password"} placeholder={"Password"}
                    validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/>Remember Me
            </div>
            {props.error && <div className={styles.formControlError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )          
};

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login}) (Login);