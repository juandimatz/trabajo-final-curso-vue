import httpClient from '../httpClient';

let http = httpClient({
    baseURL: process.env.VUE_APP_COVID_INFO_URL
});

http.defaults.headers.common['x-rapidapi-key'] = '03e414169bmshf84846a4f4fb6fbp1087c0jsn7a4d14dfbd90';
http.defaults.headers.common['x-rapidapi-host'] = 'covid-193.p.rapidapi.com';
http.defaults.headers.common['useQueryString'] = true;

export default http;