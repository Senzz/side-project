import pFetch from './pFetch';
interface FetchParams {
  page?: Number;
  tab: string; 
  mdrender: Boolean,
  limit: Number,
}

const fetchList = (data: FetchParams) => {
  return pFetch({
    url: 'https://cnodejs.org/api/v1/topics',
    method: 'get',
    data: data
  });
};

export default fetchList;