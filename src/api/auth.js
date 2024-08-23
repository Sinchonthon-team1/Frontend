import axios from 'axios';
// 인증 관련 API 호출을 담당하는 모듈입니다.
const API_URL = 'https://2bzksr2k-8000.asse.devtunnels.ms/api/user/';
// 로그인 API 호출
export const loginApi = async (email, password) => {
  try {
    const response = await axiosInstance.post(`${API_URL}login/`,{ email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// 회원가입 API 호출
export const registerApi = async (
  email,
  password,
  name,
  age,
  school,
  user_name,
  tag_line,
  tier,
  position,
) => {
  try {
    const response = await axios.post(
      `${API_URL}register/`,
      {
        email,
        password,
        name,
        age,
        school,
        user_name,
        tag_line,
        tier,
        position,

      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('Network Error');
    }
  }
};

// 로그아웃 API 호출
export const logoutApi = async () => {
  try {
    const response = await axios.post(`${API_URL}logout/`, {}, { withCredentials: true });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};