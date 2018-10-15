import axios from 'axios';
import { API_URL_1 } from '../Support/api_url';

export const onRegister = (user) => {
    return (dispatch) => {
        axios.post(`${API_URL_1}/registerUser`, user)
        .then((res) => {
            dispatch({
                type: 'USER_LOGIN_SUCCESS',
                payload: {
                    username: res.data[0].username,
                    email: res.data[0].email,
                    password: res.data[0].password,
                    role:res.data[0].role,
                    error: ''
                }
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }
}