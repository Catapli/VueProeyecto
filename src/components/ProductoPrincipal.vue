<template>
    <div class="col-lg-3 col-md-4 col-sm-6 pb-1" v-scrollanimation>
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="../assets/img/product-1.jpg" alt="">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" @click="goBuy"><i class="fa fa-shopping-cart" style="color:black;"></i></a>
                            <a class="btn btn-outline-dark btn-square"  @click="goDetails" ><i class="fa fa-search" style="color:black;" ></i></a>
                        </div>
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="">{{this.product.nombre}}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                            <h5>{{this.product.precio + ' €'}}</h5><h6 class="text-muted ml-2"></h6>
                        </div>

                       <div class="d-flex mb-3" style="justify-content:center;">
                        <div class="text-primary mr-2">
                            <small class="fas fa-star" v-for="valoration in valoracionUser.average" :key="valoration"></small>
                             <small class="bi bi-star-half" v-if="!entero"></small>

                        </div>
                        <small class="pt-1">({{valoracionUser.count}} Reviews)</small>
                    </div>
                    </div>
                </div>
            </div>
</template>
<script>
import Api from '../Api'
export default {
    data(){
        return{
            valoracionUser:[],
            entero: true
        }
    },
    name:'ProductoPrincipal',
    props:['product'],
    methods:{
        goBuy(){
            this.$router.push('/buy/'+ this.product.id)
        },
        goDetails(){
            this.$router.push('/details/' + this.product.id)
        }
    },
    async mounted(){
        try {
                let valoraciones = await Api.valoraciones.getAllByUser(this.product.user_id)
                this.valoracionUser = valoraciones.data
                if(valoraciones.data.average % 1 != 0 ){
                    this.entero = false
                    let num = Math.floor(valoraciones.data.average)
                    this.valoracionUser.average = num
                }

            } catch (error) {
                console.error(error)
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