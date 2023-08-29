import axios from "axios";
import axiosRetry from "axios-retry";

/**
 * @author Lusaib Latheef on 27-08-2023
 * @description Axios instance function to handle the axios request and response
 */
// Create an instance of axios with the cache adapter
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // adapter: cacheAdapter.adapter,
});

// Set up axios-retry with the desired configuration
axiosRetry(axiosInstance, {
  retries: 2,
  retryDelay: () => 1000,
  retryCondition: (error): boolean => {
    // Retry only when the error code is not 401
    return Boolean(error.response && ![401].includes(+error.response.status));
  },
});


export default axiosInstance;
