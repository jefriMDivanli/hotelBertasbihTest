import axios from 'axios';
import { API_URL_1 } from '../Support/api_url';

export const getAllKamar = () => {
    return (dispatch) => {
        axios.get(`${API_URL_1}/kamar`)
            .then((response) => {
                dispatch({
                    type: "GET_ALL_KAMAR",
                    payload: response.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    };
};