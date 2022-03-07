// import { API_URL} from '../.env';
import axios from 'axios';

const API_URL = 'https://backendsan.herokuapp.com';
const qs = require('qs');
const query = qs.stringify({
  pagination: {
    page: 1,
    pageSize: 10,
  },
});

export default async function getProducts({
    limit = 15,
    page = 0,
} = {}) {
    const apiUrl = `${API_URL}/api/products`;
debugger
    try {
        const response = await axios(`${apiUrl}`
        );
        debugger;
        return response.data;
    } catch (error) {
        debugger;
        return error;
    }
}
