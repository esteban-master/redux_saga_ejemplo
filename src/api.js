import axios from "axios";

export const GET_POSTS = "/posts";
export const GET_POST_DETAILS = "/posts";

const axiosApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

axios.interceptors.request.use(function (config) {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config) {
  return await axiosApi
    .get(url, {
      ...config,
    })
    .then((response) => response.data);
}


//Post
export const getPosts = () => get(GET_POSTS);

//Post
export const getPostDetails = (id) =>
  get(GET_POST_DETAILS, {
    params: {
      id: id,
    },
 });