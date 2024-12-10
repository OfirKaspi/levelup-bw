import axios from 'axios';

const BASE_URL = process.env.BASE_URL

export const fetchAboutPageData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/about/page`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch about page data: ${error}`);
  }
};
