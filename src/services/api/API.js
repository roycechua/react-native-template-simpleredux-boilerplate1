import {AxiosInstance as API} from './AxiosInstance';

export default {
    get: async ({ url, token, additionalHeaders }) => await API.get(url, { 
        headers: { Authorization: token, ...additionalHeaders} 
    }),
    post: async ({ url, token, additionalHeaders }) => await API.post(url, { 
        headers: { Authorization: token, ...additionalHeaders} 
    }),
    put: async ({ url, token, additionalHeaders }) => await API.update(url, { 
        headers: { Authorization: token, ...additionalHeaders} 
    }),

    delete: async ({ url, token, additionalHeaders }) => await API.delete(url, { 
        headers: { Authorization: token, ...additionalHeaders} 
    }),
};