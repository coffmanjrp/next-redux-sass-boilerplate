import axios from 'axios';
import { GET_POSTS } from '../types';

export const fetchPosts = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const data = res.data;

  dispatch({
    type: GET_POSTS,
    // payload: ['1st post', '2nd post', '3rd post'],
    payload: data,
  });
};
