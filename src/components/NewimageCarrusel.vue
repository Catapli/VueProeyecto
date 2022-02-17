<template>
<div class="col-lg-4">
     <div class="product-offer mb-30" style="height: 200px;" v-scrollanimation v-for="oferta in offers" :key="oferta.id" :oferta='oferta'>
                    <img class="img-fluid" src="../assets/img/offer-1.jpg" alt="" style="display:flex; justify-content:center;">
                    <div class="offer-text">
                        <h6 class="text-white text-uppercase">Nuevo Producto</h6>
                        <h3 class="text-white mb-3">{{oferta.nombre}}</h3>
                        <a class="btn btn-primary" @click="goToBuy(oferta.id)">Compra Ahora</a>
                    </div>
                </div>
                 </div>
</template>

<script>
import Api from "../Api.js";
export default {
    
    data(){
        return{
            offers:[]
        }
    },
    name:'NewImageCarrusel',
      async mounted(){
          try {
            let a = await Api.products.getAllByLimit(2)
            this.offers = a.data
          } catch (error) {
              console.error(error)
          }
        
  },
    methods:{
        goToBuy(id){
            this.$router.push('/buy/'+id)
        }
    }
}
</script>

<style scoped>
.before-enter{
  opacity: 0;
  transform:  translateY(100px);
  transition: all 1s ease-out;

}

.enter{
    opacity: 1;
    transform:  translateY(0px);

}
</style>