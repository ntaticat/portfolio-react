export interface IProject {
  name: string;
  description: string;
  img_links: string[];
  project_links: IProjectLink[];
  technology_tags: string[];
}

export interface IProjectLink {
  link_title: string;
  link_url: string;
}

export interface IRepo {
  id: 331598550;
  name: "animeist-api";
  html_url: "https://github.com/ntaticat/animeist-api";
  description: "API para gestionar listas de animes desarrollada con Node/Express y MongoDB";
  url: "https://api.github.com/repos/ntaticat/animeist-api";
  created_at: "2021-01-21T10:53:44Z";
  visibility: "public";
}