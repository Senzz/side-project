import pFetch from './pFetch';

const fetchDetail = (id: string) => {
  return pFetch({
    url: `https://cnodejs.org/api/v1/topic/${id}`,
    method: 'get',
    data: {}
  });
};

export default fetchDetail;