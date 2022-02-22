<template>
<div>
<div>
    <!-- Breadcrumb Start -->
    <div class="container-fluid">
        <div class="row px-xl-5">
            <div class="col-12">
                <nav class="breadcrumb bg-light mb-30">
                    <a class="breadcrumb-item text-dark" href="#"><router-link to="/">Home</router-link></a>
                    <a class="breadcrumb-item text-dark" href="#"><router-link to="/shop">Tienda</router-link></a>
                    <span class="breadcrumb-item active">Listado Productos</span>
                </nav>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->


    <!-- Shop Start -->
    <div class="container-fluid">
        <div class="row px-xl-5">
            <filtros></filtros>
            <!-- Shop Product Start -->
            <div class="col-lg-9 col-md-8">
                <div class="col-lg-12 col-12 text-left">
                    <form @submit.prevent="searching">
                        <div class="input-group">
                            <input type="text" v-model="search" class="form-control" placeholder="Busca tu producto">
                            <div class="input-group-append">
                                <span class="input-group-text bg-transparent text-primary">
                                    <button type="submit"><i class="fa fa-search"></i></button>
                                    
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <br>
                <div class="row pb-3 center">
                    
                    <h3 class="header" v-if="existencias">No hay existencias con estos filtros</h3>
                
                     <producto-principal v-for="product in products.data" :key="product.id" :product="product"></producto-principal>
                </div>
                <div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li v-on:click="getPreviousPage()" class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Anterior</span>
              </a>
            </li>
            <li
              v-for="pagina in products.last_page"
              :key="pagina"
              v-on:click="getDataPagina(pagina)"
              v-bind:class="isActivePage(pagina)"
              class="page-item"
            >
              <a class="page-link" href="#">{{ pagina }}</a>
            </li>
            <li v-on:click="getNextPage()" class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Siguiente</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
            </div>
            <!-- Shop Product End -->
        </div>
       
    </div>
</div>
</div>
    
</template>


<script>

import Filtros from '../components/Filtros.vue'
import ProductoPrincipal from '../components/ProductoPrincipal.vue'
import Api from "../Api.js";
export default {
    data(){
        return{
            products:[],
            existencias: false,
            search:'',
            elementosPorPagina:24,
            paginaActual: 1,
        }
    },
    methods:{
        totalPaginas(){
            return Math.ceil(this.products.length / this.elementosPorPagina)
        },
        async getDataPagina(numPagina){
            this.paginaActual = numPagina
            try {
                  let response = await Api.products.paginate(numPagina)
                  this.products = response.data
            } catch (error) {
                console.error(error)
            }
        },
        async searching(){
            this.resetFilters()
            try {
                let response = await Api.products.search(this.search)
                this.products = []
                 this.products = response.data
                 if(this.products.data === undefined ){
                     this.existencias = true
                 }else{
                     this.existencias = false
                 }
            } catch (error) {
                console.error(error)
            }
        },
        resetFilters(){
              this.$store.commit('setFiltrosPrecio','')
              this.$store.commit('setFiltrosCategoria','')
              this.$store.commit('setFiltrosEtiqueta','')
        },
        getPreviousPage(){
            if(this.paginaActual > 1){
                this.paginaActual--;
            }
            this.getDataPagina(this.paginaActual)
        },
        getNextPage(){
            if(this.paginaActual < this.totalPaginas()){
                this.paginaActual++;
            }
            this.getDataPagina(this.paginaActual)
        },
        isActivePage(pagina){
            if(pagina == this.paginaActual){
                return 'active'
            }else{
                return ''
            }
        },
        async checkFiltros(){
            let filtrado = {}
            if(this.filtrosCategoria != ''){
                filtrado.categoria = this.filtrosCategoria;
            }
            if(this.filtrosEtiqueta != ''){
                filtrado.etiqueta = this.filtrosEtiqueta
            }
            if(this.filtrosPrecio != ''){
                filtrado.precio = this.filtrosPrecio
            }
            try {
                 let response = await Api.products.filter(1,filtrado)
                 this.products = []
                 this.products = response.data
                 if(this.products.data === undefined ){
                     this.existencias = true
                 }else{
                     this.existencias = false
                 }
            } catch (error) {
                console.error(error)
            }
           
           
        },
    },
    computed: {
        filtrosEtiqueta (){
              return this.$store.state.filtro.etiqueta
        },
        filtrosPrecio (){
              return this.$store.state.filtro.precio
        },
        filtrosCategoria (){
              return this.$store.state.filtro.categoria
        },
    },
    watch:{ 
        filtrosEtiqueta(){
           this.checkFiltros()
        }
        ,
        filtrosPrecio(){
           this.checkFiltros()
        },
        filtrosCategoria(){
            this.checkFiltros()
        },
    },
    name:'Shop',
    components:{
       Filtros,
        ProductoPrincipal,
    },
    async mounted(){
        if(this.$store.state.filtro.categoria != ''){
            this.checkFiltros()
        }else{
            this.getDataPagina(1)
        }
        
    },
}
</script>

<style scoped>
.center{
    display: flex;
    justify-content: center;
}

.header{
    color: red;
    padding: auto;
}

</style>



