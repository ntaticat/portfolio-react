import { IRepo } from "../types/app.interfaces";
import http from "./http-common";

export const getRepos = async () => {
  try {
    const response = await http.get<IRepo[]>("https://api.github.com/users/ntaticat/repos");

    if (response.status.toString()[0] !== "2") {
      throw new Error("Error al obtener repos");
    }

    const dataResponse = response.data;
    console.log(dataResponse);
    return dataResponse;
  } catch (error) {
    console.error(error);
    return [];
  }
}