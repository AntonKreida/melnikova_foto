import axios from 'axios';


export const apiBase = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_CLIENT_URL}`
});
