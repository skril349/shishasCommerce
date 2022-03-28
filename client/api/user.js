import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/authFetch";
export async function registerApi(formData) {
  try {
    const url = `${BASE_PATH}/auth/local/register`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    if (formData.age < 18) {
      return null;
    } else {
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    }
  } catch (error) {
    return null;
  }
}

export async function loginApi(formData) {
  try {
    const url = `${BASE_PATH}/auth/local`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    if (formData.age < 18) {
      return null;
    } else {
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    }
  } catch (error) {
    return null;
  }
}

export async function getMeApi(logout) {
  try {
    const url = `${BASE_PATH}/users/me`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}