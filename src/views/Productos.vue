<template>
    <div class="row px-xl-5">
            <div class="col-12">
                <nav class="breadcrumb bg-light mb-30">
                    <a class="breadcrumb-item text-dark" href="#"><router-link to="/">Home</router-link></a>
                    <a class="breadcrumb-item text-dark" href="#"><router-link to="/profile">Perfil</router-link></a>
                    <span class="breadcrumb-item active">Tus Productos</span>
                </nav>
            </div>
            
            <div class="row pb-3 center">
                <h1 class="col-12"> Tus Productos</h1>
                <br><br>
                 <div class="col-lg-3 col-md-4 col-sm-6 pb-1"  v-for="product in productos" :key="product.id" :product="product" v-scrollanimation>
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="../assets/img/product-1.jpg" alt="">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square"  @click="goDetails(product.id)" ><i class="fa fa-search" style="color:black;" ></i></a>
                        </div>
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="">{{product.nombre}}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                            <h5>{{product.precio + ' €'}}</h5><h6 class="text-muted ml-2"></h6>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
</template>

<script>
import Api from '../Api'

export default {
  components: {  },
    data(){
        return{
            productos:[]
        }
    },
    methods:{
        goDetails(id){
            this.$router.push('/details/' + id)
        }
    },
    async mounted(){
        try {
            let id = localStorage.getItem('idUser')
            let response = await Api.products.productsByUser(id)
            this.productos = response.data
        } catch (error) {
            console.error(error)
        }
    }
}
</script>