import axios from 'axios'
const uri = 'https://cnodejs.org/api/v1'; 

const fetchArticleDetail = id => {
  return axios({
    url: `${uri}/topic/${id}`,
    method: 'get',
    data: {}
  });
};

/**
 * @param {Object} data 
 */
const fetchList = data => {
  console.log(data);
  return axios({
    url: `${uri}/topics`,
    method: 'get',
    params: {
      ...data
    }
  });
};

export { fetchArticleDetail, fetchList };