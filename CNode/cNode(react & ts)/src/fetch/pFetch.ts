const querystring = require('querystring');
interface FetchParams {
  url: string;
  method: string;
  data: Object;
}

const pFetch = (fetchParams: FetchParams) => {  
  if (fetchParams.method.toUpperCase() === 'GET' && Object.keys(fetchParams.data).length !== 0) {
    fetchParams.url += '?' + querystring.stringify(fetchParams.data)
  }
  console.log('fetchParams: ', fetchParams);
  return window.fetch(fetchParams.url, {
    method: fetchParams.method,
    body: fetchParams.data
  })
  .then( (res: Response) => {
    return res.json();
  })
  .catch((error: Error) => {
    console.warn(error);
  });
};

export default pFetch;