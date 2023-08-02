/* eslint-disable no-param-reassign */
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getUser = async (login) => api.get(`users/${login}`);

export const getRepos = async (login) => api.get(`users/${login}/repos`);

export const getLanguagesFrom = (repositories) => {

  let stats = repositories
    .map((repository) => repository.language)
    .reduce((data, language) => {

      if (data[language]) {

        data[language] += 1;
      } else {

        data[language] = 1;
      }
      return data;
    }, {});
  delete stats.null

  stats = Object.keys(stats)
    .map(language => ({
      name: language,
      count: stats[language]
    }))

  return stats;
};



export default api;
