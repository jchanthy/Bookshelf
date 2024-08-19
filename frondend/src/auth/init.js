import axios from 'axios';
const instance = () => {
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
}
export default instance;