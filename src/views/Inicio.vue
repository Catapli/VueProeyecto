<template>
  <div>

    
    <!-- Carousel Start -->
    <div class="container-fluid mb-3">
      <div>
        <div class="row px-xl-5">
          <newimage-carrusel></newimage-carrusel>
          <newimage-carrusel></newimage-carrusel>
          <newimage-carrusel></newimage-carrusel>
        </div>
      </div>
    </div>

    <!-- Carousel End -->

    <!-- Featured Start -->
    <menu-mitad></menu-mitad>


    <!-- Featured End -->

    <!-- Categories Start -->
    <div class="container-fluid pt-5">
      <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span class="bg-secondary pr-3">Categorías</span>
      </h2>
      <div class="row px-xl-5 pb-3">
            <div v-for="categoria in categorias" :key="categoria.id" :categoria="categoria" class="col-lg-4 col-md-4 col-sm-6 pb-1" v-scrollanimation >
                <a class="text-decoration-none" @click="goToProducts(categoria.id)">
                    <div class="cat-item d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style="width: 100px; height: 100px; display:flex;">
                            <img class="img-fluid" :src="require('@/assets/img/categorias/' + (categoria.id+'.png' || 'default.jpg'))" alt="">
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>{{categoria.nombre}}</h6>
                            <small class="text-body">{{conteo[categoria.id-1]}} Products</small>
                        </div>
                    </div>
                </a>
            </div>
      </div>
    </div>
    <!-- Categories End -->

    <!-- Products Start -->
    <div class="container-fluid pt-5 pb-3">
      <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span class="bg-secondary pr-3">Productos Más Valorados</span>
      </h2>
      <div class="row px-xl-5">
        <producto-principal v-for="product in products" :key="product.id" :product="product"></producto-principal>
      </div>
    </div>
    
    <a  class="btn btn-primary"><router-link to="/shop" style="color:black;">Ver Todos</router-link></a>
    <!-- Products End -->
    <!-- Products End -->
  </div>
</template>


<script>


import MenuMitad from "../components/MenuMitad.vue";
import NewimageCarrusel from "../components/NewimageCarrusel.vue";
import ProductoPrincipal from "../components/ProductoPrincipal.vue";
import Api from "../Api.js";
export default {
  data(){
    return{
      products :[],
    }
  },
  methods:{
        goToProducts(id){
            this.$store.commit('setFiltrosCategoria',id)
            this.$router.push('/shop')
        },
  },
  computed:{
    categorias(){
      return this.$store.state.categories.category
    },
    conteo(){
      return this.$store.state.categories.conteo
    }
  },
  components: {
    NewimageCarrusel,
    MenuMitad,
    ProductoPrincipal,
  },
  async mounted(){
    try {
       let a = await Api.products.getAllByLimit(8)
      this.products = a.data
    } catch (error) {
      console.error(error)
    }
   
  }
    

};
</script>
