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
        <categoria v-for="categoria in categorias" :key="categoria.id" :categoria="categoria" ></categoria>
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


import Categoria from "../components/Categoria.vue";
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
  computed:{
    categorias(){
      return this.$store.state.categories
    }
  },
  components: {
    NewimageCarrusel,
    MenuMitad,
    Categoria,
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
