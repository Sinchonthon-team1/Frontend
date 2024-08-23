

const axiosInstance = axios.create({
    // baseURL: API_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });