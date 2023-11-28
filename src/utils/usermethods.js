import axios from "axios";
import { API_URL } from "./globals";
import { getValueFromstore } from "./storage";

export const signup = async (fullname, email, phone, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/userapp/auth/signup`, {
      fullname,
      email,
      phone,
      password,
    });
    return response.data;
  } catch (err) {}
};
export const signin = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/userapp/auth/signin`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const signinwithgoogle = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/userapp/auth/signinwithgoogle`,
      {
        email: data.email,
        fullname: data.name,
        profileimg: data.picture,
      }
    );
    return response.data;
  } catch (err) {
    console.warn(err);
  }
};

export const validateaccesstoken = async () => {
  try {
    const accesstoken = await getValueFromstore("accessToken");
    const response = await axios.post(
      `${API_URL}/api/userapp/auth/validateaccesstoken`,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error({ errorfromval: error });
  }
};
