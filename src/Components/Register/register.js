import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onRegister } from '../../ActionCreators/RegisterAction';
import './register.css';


class Register extends Component {
    state = { };

    onRegisterClick = () => {
        var username = this.refs.username.value;
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        var role = this.refs.role.value;

        this.props.onRegister({username, email, password, role})
    }

    render() {
        return(
            <form className='registration'>
                <div className='registrationbox'>

                <div className='registrationgreets'>
                    <p>Selamat Datang</p>
                    <p>Silahkan Register</p>
                </div>

                <div className='registrationform'>
                    <p>Username</p>
                    <input ref='username' className="textboxregister" type="text" name="name" />
                    <p>Email</p>
                    <input ref='email' className="textboxregister" type="text" name="name" />
                    <p>Password</p>
                    <input ref='password' className="textboxregister" type="text" name="name" />
                    <p>Role</p>
                    <input ref='role' className="textboxregister" type="text" defaultValue="Client/User" />
                    <input type='button' id='submitButton' value='Start' onClick={this.onRegisterClick} />
                </div>

                </div>
                
            </form>

        )
    }
}

export default connect(null, { onRegister })(Register);