import axios from 'axios';

const BASE_URL = process.env.BASE_URL

export const fetchHomePageData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/page`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch home page data: ${error}`);
  }
};
