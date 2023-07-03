import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20730047-d508ae82251ec562b3c9d3457';

export const fetchImageWithQuery = async (searchQuery='', page=1, RESULTS_PER_PAGE=12 ) => {
    const response = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${RESULTS_PER_PAGE}`);
    return  response.data;
}

export default {
    fetchImageWithQuery
};