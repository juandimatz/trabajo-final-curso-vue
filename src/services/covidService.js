import http from './api/covidInfoClient';

const getCovidInfo = async() => {
    
    http.defaults.params = {'country': 'argentina', 'day': '2021-06-07'};

    return await http.get().then((response) => {
        return response.data.response[0];
    }).catch((error) => {
        return error;
    });
}

const exported = {
    getCovidInfo
}

export default exported;