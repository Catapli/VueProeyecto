import axios from 'axios';
import store from './store'


const baseURL = "http://batoipop.my/api";

const products = {
    getAllByLimit: async (limite) => await axios.get(`${baseURL}/products?limite=${limite}`),
    getAllByCategoria: async (idCategory) => await axios.get(`${baseURL}/products?categoria=${idCategory}`),
    countProductsByCategoria: async (idCategory) => await axios.get(`${baseURL}/products?count=${idCategory}`),
    getAll: async () => await axios.get(`${baseURL}/products`),
    paginate: async (page) => await axios.get(`${baseURL}/products?page=`+page),
    getOne: async (id) => await axios.get(`${baseURL}/products/${id}`),
    create: (item) => axios.post(`${baseURL}/autores`, item),
    modify: (item) => axios.put(`${baseURL}/products/${item.id}`, item),
    delete: (id) => axios.delete(`${baseURL}/autores/${id}`),
    toogleDone: (item) => axios.put(`${baseURL}/categories/${item.id}`, {
        id: item.id,
        title: item.title, 
        done: !item.done
      }),
    filter: async (page,filtro) => {
        let url = `${baseURL}/products?page=`+page+'&';
        if(filtro.categoria){
            url = url+`categoria=${filtro.categoria}&`
        }
        if(filtro.precio){
            url = url+`precio=${filtro.precio}&`
        }
        if(filtro.etiqueta){
            url = url+`etiqueta=${filtro.etiqueta}&`
        }
        console.log(url)
        return await axios.get(url)
    }
 
}

const categories = {
    getAll: async () => await axios.get(`${baseURL}/categories`),
}

const etiquetas = {
    getAll: async () => await axios.get(`${baseURL}/etiquetas`),
}

const users = {
    getOne: async (id) => await axios.get(`${baseURL}/users/${id}`),
    login (user){
        return axios.post(baseURL+ '/login', user)
    }
}

const valoraciones = {
    getAllByUser: async (id) => await axios.get(`${baseURL}/valoraciones/${id}`),
}

axios.interceptors.request.use((config) => {
    const token = store.state.user.access_token
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
    }
    return config;
}, (error) => {
    return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                console.log(this.$router.path)
                store.commit('logoutUser')
                if (this.$router.path !== '/login') {
                    this.$router.replace({
                        path: 'login',
                        query: { redirect: this.$router.path },
                    })
                }
        }
    }
    return Promise.reject(error)
})

export default{
    products, categories, etiquetas, users, valoraciones
}