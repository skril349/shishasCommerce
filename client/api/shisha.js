import { BASE_PATH } from "../utils/constants";

export async function getConesApi() {
  try {
    const url = `${BASE_PATH}/cones`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getConeApi(id) {
  try {
    const url = `${BASE_PATH}/cones/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getPlatesApi() {
  try {
    const url = `${BASE_PATH}/plates`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getMastsApi() {
  try {
    const url = `${BASE_PATH}/masts`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getDecorationMastsApi() {
  try {
    const url = `${BASE_PATH}/decorationMasts`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getPurgesApi() {
  try {
    const url = `${BASE_PATH}/purges`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getLowerStemsApi() {
  try {
    const url = `${BASE_PATH}/lowerStems`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getDiffusersApi() {
  try {
    const url = `${BASE_PATH}/diffusers`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getComponentByIdAndSelectedApi(id, selected) {
  try {
    const url = `${BASE_PATH}/${selected}/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
