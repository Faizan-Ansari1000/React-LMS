import axios from "axios";

const ApiInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export default ApiInstance;