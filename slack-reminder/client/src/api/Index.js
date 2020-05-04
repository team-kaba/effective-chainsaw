import axios from 'axios';
import API_BASE_URL from './Const.js';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

function createTimerPost(params) {
    console.log(params)
    return client.post('', params)
}

export default createTimerPost;
