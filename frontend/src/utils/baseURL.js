const getBaseUrl = () => {
    // Check if the environment is development or production
    // Vite uses import.meta.env for environment variables
    if (import.meta.env.MODE === 'development') {
        return 'http://localhost:5000';
    } else {
        return 'https://book-store-backend-gamma-self.vercel.app';
    }
};

export default getBaseUrl;
