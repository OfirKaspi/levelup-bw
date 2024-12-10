import axios from 'axios';

const BASE_URL = process.env.BASE_URL

export const fetchProjectsPageData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/projects/page`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch projects page data: ${error}`);
  }
};
