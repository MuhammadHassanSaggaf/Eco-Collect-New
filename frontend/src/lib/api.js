// lib/api.js
import axios from "axios";

const BASE =
	process.env.NEXT_PUBLIC_API_URL !== undefined
		? process.env.NEXT_PUBLIC_API_URL
		: ""; // "" makes requests relative to current origin

const api = axios.create({
	baseURL: BASE,
	withCredentials: true, // keep if you use cookies; remove if you use token auth
	timeout: 30000,
});

export default api;
