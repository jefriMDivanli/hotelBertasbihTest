import React, { Component } from 'react';
import './login.css';
import { connect } from 'react-redux';
import { onLogin } from '../../ActionCreators/index';
import { Redirect } from 'react-router-dom';



class Login extends Component {

    onLoginClick = () => {
        const email = this.refs.email.value;
        const password = this.refs.password.value;

        this.props.onLogin({ email, password });
    }

    render() {
        console.log(this.props.auth)
        if (this.props.auth.email === "") {
            return (
                <div className='loginJumbotron'>
                    <jumbotron id="login">
                        <div className="loginbox">
                            <div className="logintitle">
                                <p className='title-login'>Log In</p>
                                <p>Welcome to B SOCIAL HOTEL</p>
                            </div>

                            <form className="loginform">
                                <h5>USERNAME</h5>
                                <input ref='email' id="textboxlogin" type="text" name="name" />
                                <h5>PASSWORD</h5>
                                <input ref='password' id="textboxlogin" type="text" name="name" />
                                <input id="loginbutton" type="button" value="Log In" onClick={this.onLoginClick} />
                                <input id="loginbutton" type="button" value="Sign Up" />
                                <a id="forgetlink" href="">Forget Your Password</a>
                            </form>
                        </div>
                    </jumbotron>
                </div>
            );
        }
        return <Redirect to='/' />
    }

}

const mapStateToProps = (state) => {
    const auth = state.loginAuth;
    return { auth }
}

export default connect(mapStateToProps, { onLogin })(Login);