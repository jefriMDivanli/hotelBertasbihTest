import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
    render() {
        return(
            <div className='header'>

                <div className='logo'>
                    <p>B Social Hotel</p>
                </div>

                <div className='navigation'>
                    <span>
                        <Link className='logoLink' to='/'>
                           Home
                        </Link>
                    </span>

                    <span>
                        <Link className='logoLink' to='/kamar'>
                            Kamar
                        </Link>
                    </span>

                    <span>
                        <Link className='logoLink' to='/login'>
                            Login
                        </Link>
                    </span>

                    <span>
                        <Link className='logoLink' to='/register'>
                            Register
                        </Link>
                    </span>
                </div>

            </div>
        )
    }
}

export default Header;