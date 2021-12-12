import axios from 'axios'

const ServiceAxios = {
  get_data_json: async (url, headers) => {
    let res = await axios.get(url, { headers })
    res = res.data
    return res
  },

  // dataPost: json
  post_data_json: async (url, headers, dataPost) => {
    // const headers = {
    //     'x-requested-with':'XMLHttpRequest',
    //     'accessToken':accessToken
    // }
    let res = await axios.post(url, dataPost, { headers })
    // debugger
    res = res.data
    return res
  },

  upload_file: async (url, headers, key, file) => {
    const formdata = new FormData()
    formdata.append(key, file)
    const reqOptions = {
      url,
      method: 'POST',
      headers,
      data: formdata
    }
    let res = await axios.request(reqOptions)
    res = res.data
    return res
  }
}

const ServiceAxiosFb = {
  get_data_json_fb: async (url, accessToken, params) => {
    const headers = {
      'x-requested-with': 'XMLHttpRequest',
      accessToken
    }
    let res = await axios.get(url, { params, headers })
    res = res.data
    return res
  },

  // dataPost: json
  post_data_json_fb: async (url, accessToken, dataPost) => {
    const headers = {
      'x-requested-with': 'XMLHttpRequest',
      accessToken
    }
    let res = await axios.post(url, dataPost, { headers })
    res = res.data
    return res
  },
  post_data_json_fb1: (url, accessToken, dataPost) => {
    const headers = {
      'x-requested-with': 'XMLHttpRequest',
      accessToken
    }
    let res = axios.post(url, dataPost, { headers })
    res = res.data
    return res
  }
}
const ServiceAxiosGG = {
  get_data_json_gg: async (url, params, headers = {}) => {
    headers = {
      ...headers,
      ...{
        'x-requested-with': 'XMLHttpRequest'
      }
    }
    let res = await axios.get(url, { params, headers })
    res = res.data
    return res
  },
  get_data_json_gg_1: (url, params, headers = {}) => {
    headers = {
      ...headers,
      ...{
        'x-requested-with': 'XMLHttpRequest'
      }
    }
    let res = axios.get(url, { params, headers })
    res = res.data
    return res
  },

  // dataPost: json
  post_data_json_gg: async (url, dataPost, headers = {}) => {
    headers = {
      ...headers,
      ...{
        'x-requested-with': 'XMLHttpRequest'
      }
    }
    let res = await axios.post(url, dataPost)
    res = res.data
    return res
  }
}

export { ServiceAxios, ServiceAxiosFb, ServiceAxiosGG }
