import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20730047-d508ae82251ec562b3c9d3457';

export const fetchGalleryWithQuery = async (query, page) => {
    const searchParams = new URLSearchParams({
        q: query,
        page: page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 6,
    });

    const response = await axios.get(`${BASE_URL}?${searchParams}`);
    return response.data;
};