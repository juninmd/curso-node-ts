import axios from 'axios';

export const getPeople = async (id: number = 1) => {
  const response = await axios.get(`people/${id}`, { baseURL: process.env.STAR_WARS_API_URL });
  return response.data;
}