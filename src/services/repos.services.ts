import http from "./http-common";

export interface IRepo {
  id: 331598550;
  name: "animeist-api";
  html_url: "https://github.com/ntaticat/animeist-api";
  description: "API para gestionar listas de animes desarrollada con Node/Express y MongoDB";
  url: "https://api.github.com/repos/ntaticat/animeist-api";
  created_at: "2021-01-21T10:53:44Z";
  visibility: "public";
}

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