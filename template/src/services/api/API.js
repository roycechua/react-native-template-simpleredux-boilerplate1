import {AxiosInstance as API} from './AxiosInstance'; 

export const api = {
    get: async (payload) => await API.get('', payload.token, { 
        headers: { Authorization: token, ...additionalHeaders} 
    }),
    post: async (payload) => await API.post('', payload.params, payload.token, { 
        headers: { Authorization: token, ...additionalHeaders} 
    }),
    put: async (payload) => await API.update('', payload.params, payload.token, { 
        headers: { Authorization: token, ...additionalHeaders} 
    }),
    delete: async (payload) => await API.delete('', payload.params, payload.token, { 
        headers: { Authorization: token, ...additionalHeaders} 
    }),
}

const apiRoutes = {
    login: (payload) => api.get("/login", payload),
}

export default apiRoutes;