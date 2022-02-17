import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../Api.js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories:[],
    filtro:{
      categoria:'',
      etiqueta:'',
      precio:''
    },
    user:{},
    token:''
  },
  mutations: {
    getCategories(state,payload){
      state.categories = payload;
    },
    setFiltrosCategoria(state, payload){
      state.filtro.categoria = payload;
    },
    setFiltrosEtiqueta(state, payload){
      state.filtro.etiqueta = payload;
    },
    setFiltrosPrecio(state, payload){
      state.filtro.precio = payload;
    },
    clearFiltros(){
      this.state.filtro.splice(0,this.state.filtro.length)
    },
    loginUser(state, token) {
      state.token = token.token
      state.user = token.usuario
      localStorage.token = token.token
      localStorage.idUser = token.usuario.id
    },
    logoutUser(state) {
      state.token = null
      localStorage.removeItem('token')
      localStorage.removeItem('idUser')
      router.push('/login')
    },


  },
  actions: {
    getAllCategories: async (context) => {
      try{
        let response = await Api.categories.getAll()
        context.commit('getCategories',response.data)
      }catch(error){
        console.error(error)
      }
    },
    async login(context,user) {
      try {
        let response = await Api.users.login(user)
        if(response.status == 200){
          context.commit('loginUser', response.data)
          router.push('/')
        }
      } catch (error) {
        alert(error.message)
      }
  }
  },
  modules: {
  },
})
