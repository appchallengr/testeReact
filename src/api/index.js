import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my.api.mockaroo.com/',
});

export function getAll() {
  return api.get('items?key=52d6c330').then(res => {
    console.log(res);
    return res.data;
  })
}

