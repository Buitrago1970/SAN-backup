import axios from 'axios';

const API_URL = process.env.API_ULR;
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
    try {
        const response = await axios(`${apiUrl}`
        );
        ;
        return response.data;
    } catch (error) {
        ;
        return error;
    }
}
