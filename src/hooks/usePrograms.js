import {useQuery} from 'react-query';
import axios from 'axios';
import {BASE_URL} from '../constants';

const getPrograms = async () => {
  const {data} = await axios.get(`${BASE_URL}/media-library/free`);
  return data;
};

export default function usePrograms() {
  return useQuery('posts', getPrograms);
}
