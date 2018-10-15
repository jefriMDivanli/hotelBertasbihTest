import axios from 'axios';
import { API_URL_1 } from '../Support/api_url';

export const onLogin = (users) => {
    return (dispatch) => {
        axios.get(`${API_URL_1}/login`, {
            params: {
                email: users.email,
                password: users.password
            }
        }).then(user => {
            dispatch({
                type: 'USER_LOGIN_SUCCESS',
                payload: {
                    id: user.data[0].id,
                    name: user.data[0].name,
                    email: user.data[0].email,
                    error: ''
                }
            })
        }).catch(err => {
            return dispatch({
                type: "USER_LOGIN_FAIL"
            });
        })
    };
}