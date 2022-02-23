<template>
<div>
    <div class="row px-xl-5">
            <div class="col-12">
                <nav class="breadcrumb bg-light mb-30">
                    <a class="breadcrumb-item text-dark" href="#"><router-link to="/">Home</router-link></a>
                    <a class="breadcrumb-item text-dark" href="#"><router-link to="/profile">Perfil</router-link></a>
                    <span class="breadcrumb-item active">Tus Valoraciones</span>
                </nav>
            </div>
        </div>
     <div class="row px-xl-5">
            <div class="col">
                <div class="bg-light p-30">
                    <div class="nav nav-tabs mb-4">
                        <a class="nav-item nav-link text-dark" v-bind:class="{active: lista}" @click="changeLista" id="tab-pane-1" data-toggle="tab">Valoraciones Recibidas</a>
                        <a class="nav-item nav-link text-dark" v-bind:class="{active: !lista}" @click="changeLista" id="tab-pane-2" data-toggle="tab">Valoraciones Hechas</a>
                    </div>
                    <div class="tab-content">
                        <div v-if="lista">
                            <h4 class="mb-3"> </h4>
                            <div class="col-md-6">
                                    <h4 class="mb-4">Total de {{this.valoracionesRecibidas.count}} reseñas recibidas</h4>
                                    <valoracion  v-for="valoracion in valoracionesRecibidas.valoracion " :key="valoracion.id" :valoracion="valoracion"></valoracion>
                                </div>
                        </div>
                        <div v-else class="active" >
                            <div class="row">
                                <div class="col-md-6" >
                                    <h4 class="mb-4">Total de {{this.valoracionesHechas.count}} reseñas hechas</h4>
                                    <valoracion v-for="valoracion in valoracionesHechas.valoracion " :key="valoracion.id" :valoracion="valoracion"></valoracion>
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
import Api from '../Api';
import Valoracion from '../components/Valoracion.vue';
export default {
    data(){
        return{
   
        
       charge: true,
            lista: true,
            valoracionesHechas:[],
            valoracionesRecibidas:[]
        }
    },
     methods:{
        changeLista(){
            if(this.lista){
                this.lista = false
                document.getElementById("tab-pane-2").className += "active";
            }else{
                this.lista = true
            }
        },
        async getValoracionesHechas(){
            try {
                let id = localStorage.getItem('idUser')
                let response = await Api.valoraciones.getByUserHechas(id)
                this.valoracionesHechas = response.data
            } catch (error) {
                console.error(error)
            }
        },
        async getValoracionesRecibidas(){
            try {
                 let id = localStorage.getItem('idUser')
                let response = await Api.valoraciones.getByUserRecibidas(id)
                this.valoracionesRecibidas = response.data
            } catch (error) {
                console.error(error)
            }
        }
     },
     mounted(){
         this.getValoracionesHechas()
         this.getValoracionesRecibidas()
     },
     components:{
         Valoracion
     }
}
</script>