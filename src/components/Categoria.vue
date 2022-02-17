<template>
    <div class="col-lg-4 col-md-4 col-sm-6 pb-1" v-scrollanimation >
                <a class="text-decoration-none" @click="goToProducts()">
                    <div class="cat-item d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style="width: 100px; height: 100px; display:flex;">
                            <img class="img-fluid" :src="require('@/assets/img/categorias/' + (this.categoria.id+'.png' || 'default.jpg'))" alt="">
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>{{this.categoria.nombre}}</h6>
                            <small class="text-body">{{this.cant}} Products</small>
                        </div>
                    </div>
                </a>
            </div>
</template>

<script>
import Api from '../Api'

export default {
    data(){
        return{
            cant: ''
        }
    },
    name:'Categoria',
    props:['categoria'],
    methods:{
        goToProducts(){
            this.$store.commit('setFiltrosCategoria',this.categoria.id)
            this.$router.push('/shop')
        }
    },
    async mounted(){
        try {
            let cantidad = await Api.products.countProductsByCategoria(this.categoria.id)
            this.cant = cantidad.data
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