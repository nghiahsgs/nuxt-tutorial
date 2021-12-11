import axios from 'axios'


const ServiceAxios = {
    get_data_json: async(url, headers) => {
        let res = await axios.get(url, { headers: headers })
        res = res['data']
        return res
    },

    // dataPost: json
    post_data_json: async(url, headers, dataPost) => {
        // const headers = {
        //     'x-requested-with':'XMLHttpRequest',
        //     'access_token':access_token
        // }
        let res = await axios.post(url, dataPost, { headers: headers });
        // debugger
        res = res['data']
        return res
    },

    upload_file: async(url, headers, key, file) => {
        let formdata = new FormData();
        formdata.append(key, file);
        let reqOptions = {
            url: url,
            method: "POST",
            headers: headers,
            data: formdata,
        }
        let res = await axios.request(reqOptions)
        res = res['data']
        return res
    }
}


const ServiceAxiosFb = {
    get_data_json_fb: async(url, access_token, params) => {
        const headers = {
            'x-requested-with': 'XMLHttpRequest',
            'access_token': access_token
        }
        let res = await axios.get(url, { params: params, headers: headers })
        res = res['data']
        return res
    },

    // dataPost: json
    post_data_json_fb: async(url, access_token, dataPost) => {
        const headers = {
            'x-requested-with': 'XMLHttpRequest',
            'access_token': access_token
        }
        let res = await axios.post(url, dataPost, { headers: headers });
        res = res['data']
        return res
    },
    post_data_json_fb1: (url, access_token, dataPost) => {
        const headers = {
            'x-requested-with': 'XMLHttpRequest',
            'access_token': access_token
        }
        let res = axios.post(url, dataPost, { headers: headers });
        res = res['data']
        return res
    }
}
const ServiceAxiosGG = {
    get_data_json_gg: async(url, params, headers = {}) => {
        headers = {...headers,
            ... {
                'x-requested-with': 'XMLHttpRequest'
            }
        }
        let res = await axios.get(url, { params: params, headers: headers })
        res = res['data']
        return res
    },
    get_data_json_gg_1: (url, params, headers = {}) => {
        headers = {...headers,
            ... {
                'x-requested-with': 'XMLHttpRequest'
            }
        }
        let res = axios.get(url, { params: params, headers: headers })
        res = res['data']
        return res
    },

    // dataPost: json
    post_data_json_gg: async(url, dataPost, headers = {}) => {
        headers = {...headers,
            ... {
                'x-requested-with': 'XMLHttpRequest'
            }
        }
        let res = await axios.post(url, dataPost);
        res = res['data']
        return res
    }
}

export { ServiceAxios, ServiceAxiosFb, ServiceAxiosGG }