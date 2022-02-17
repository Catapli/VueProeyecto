<template>
    <div>
        <!-- Breadcrumb Start -->
    <div class="container-fluid">
        <div class="row px-xl-5">
            <div class="col-12">
                <nav class="breadcrumb bg-light mb-30">
                    <a class="breadcrumb-item text-dark" href="#"><router-link to="/">Home</router-link></a>
                    <a class="breadcrumb-item text-dark" href="#"><router-link to="/shop">Tienda</router-link></a>
                    <span class="breadcrumb-item active">Detalles Producto</span>
                </nav>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

    <!-- Shop Detail Start -->
    <product-details :key="producto_id" :producto_id="producto_id"></product-details>
    <!-- Shop Detail End -->
   
    <!-- Products Start -->
    <div class="container-fluid py-5">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">You May Also Like</span></h2>
        <div class="row px-xl-5">
                    <producto-principal v-for="product in productsLike" :key="product.id" :product="product"></producto-principal>
        </div>
    </div>
    <!-- Products End -->

    </div>
</template>

<script>
import Api from '../Api'
import ProductDetails from '../components/ProductDetails.vue'
import ProductoPrincipal from '../components/ProductoPrincipal.vue'
export default {
    data(){
        return{
            productsLike:[],
            producto_id: '',
        }
    },
  components: { ProductDetails, ProductoPrincipal },
  async mounted(){
      this.producto_id = this.$route.params.id;
      this.getProductsLike()
  },
  methods:{
      async getProductsLike(){
          try {
            let a = await Api.products.getAllByLimit(4)
            this.productsLike = a.data
          } catch (error) {
              console.error(error)
          }
      },

  }
    
}

</script>