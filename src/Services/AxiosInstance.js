import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Utilisation de la variable d'environnement
    headers: {
        'Content-Type': 'application/json',
    },
});

// Ajouter un intercepteur pour inclure le token JWT dans chaque requête
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // Récupérer le token du stockage local
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;
