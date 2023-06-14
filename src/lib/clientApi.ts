import axios from 'axios';

const clientApi = axios.create({
    baseURL: '/api'
});
export default clientApi;
