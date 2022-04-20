import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/authFetch";
import { size } from "lodash";
export async function isFavoriteApi(idUser, idProduct, logout) {
  try {
    const url = `${BASE_PATH}/favorites?idProduct=${idProduct}&user=${idUser}`;
    console.log(url);
    return await authFetch(url, null, logout);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addFavoriteApi(idUser, productSelected, logout) {
  try {
    // const dataFound = await isFavoriteApi(idUser, productSelected.id, logout);
    // if (size(dataFound) > 0 || !dataFound) {
    //   return "Este juego ya lo tienes en tu lista de favoritos";
    // } else {
    const url = `${BASE_PATH}/favorites`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: idUser,
        product: productSelected,
        idProduct: productSelected.id,
      }),
    };
    const result = await authFetch(url, params, logout);
    return result;
    // }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function removeFavoriteApi(idUser, idProduct, logout) {
  try {
    const dataFound = await isFavoriteApi(idUser, idProduct, logout);
    console.log("dataFound", dataFound[0].id);
    console.log(idProduct);
    if (size(dataFound) > 0) {
      console.log("insie IF");
      const url = `${BASE_PATH}/favorites/${dataFound[0].id}`;
      console.log(url);
      const params = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const result = await authFetch(url, params, logout);
      console.log(result);
      return result;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
