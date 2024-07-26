import axios from 'axios';

axios.defaults.withXSRFToken = true;
export const contactAxios = axios.create({
  baseURL: 'https://api.contact.com/v2',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEEHIIV_API_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const contactAxiosClient = axios.create({
  baseURL: `/api/email`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});
