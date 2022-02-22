<template>
    <div>
    
<div class="container-fluid pb-5">
        <div class="row px-xl-5" style="justify-content:center;">
            <div class="col-lg-7 h-auto mb-30">
                <div class="h-100 bg-light p-30">
                    <h3>{{user.name}}</h3>
                    <div class="d-flex mb-3" style="justify-content:center;">
                         <div class="text-primary mr-2">
                            <small class="fas fa-star" v-for="valoration in valoraciones.average" :key="valoration"></small>
                             <small class="bi bi-star-half" v-if="!entero"></small>

                        </div>
                        <small class="pt-1">({{valoraciones.count}} Reseñas)</small>
                    </div>
                    <google-map :key="user.ubicacion" :ubicacion="user.ubicacion"></google-map>
                </div>
            </div>
            
        </div>
        <div class="row px-xl-5">
            <div class="col">
                <div class="bg-light p-30">
                    <div class="nav nav-tabs mb-4">
                        <a class="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Reseñas</a>
                    </div>
                   <div class="tab-content">
                        <div class="tab-pane fade  show active" id="tab-pane-2">
                            <div class="row" style="justify-content:center;">
                                <div class="col-md-6">
                                    <h4 class="mb-4">{{valoracionesTotales.length}} Comentarios para {{user.name}}</h4>
                                    <new-row-valoraciones v-for="mensaje in valoracionesTotales" :key="mensaje.id" :mensaje="mensaje" ></new-row-valoraciones> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Api from '../Api'
import GoogleMap from './GoogleMap.vue'
import NewRowValoraciones from './NewRowValoraciones.vue'
export default {
  components: { NewRowValoraciones, GoogleMap },
    name:'VendedorDetalles',
    data(){
        return{
            user:{},
            valoraciones:[],
            entero: true,
            valoracionesTotales: [],
        }
    },
    methods:{
        async getReseñas(){
            let response = await Api.valoraciones.getAllByUser(this.$route.params.id)
            if(response.data.average % 1 != 0 ){
                this.entero = false
                let num = Math.floor(response.data.average)
                this.valoraciones = num
            }else{
                this.valoraciones = response.data
            }
        },
        async getValoraciones(){
            try {
                let response = await Api.valoraciones.getByUser(this.$route.params.id)
                this.valoracionesTotales = response.data
            } catch (error) {
                console.error(error)
            }
        },
    },
    async mounted(){
        if(this.$route.params.id){
            this.getReseñas()
            this.getValoraciones()
            try {
                let response = await Api.users.getOne(this.$route.params.id)
                this.user = response.data
               
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>