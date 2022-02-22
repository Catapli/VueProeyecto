<template>
    <div class="media mb-4">
                                       
                                        <div class="media-body">
                                             <img src="../assets/img/user.jpg" alt="Image" class="img-fluid mr-3 mt-1" style="width: 45px;">
                                            <h6 @click="goPerfil()">{{user.name}}<small> - <i>{{new Date(mensaje.created_at).toLocaleTimeString()}}</i></small></h6>
                                            <div class="text-primary mb-2">
                                                 <small class="fas fa-star" v-for="valoration in mensaje.valoracion" :key="valoration"></small>
                                                  <small class="bi bi-star-half" v-if="!entero"></small>

                                            </div>
                                            <p>{{mensaje.comentario}}</p>
                                        </div>
                                    </div>
</template>

<script>
import Api from '../Api'
export default {
    name:'NewRowValoraciones',
    data(){
        return{
            user:{},
            entero: true,
            num: ''
        }
    },
    methods:{
        goPerfil(){
            console.log(this.user.id)
            this.$router.replace('/vendorDetails/'+ this.user.id)
        }
    },
    props:['mensaje'],
    async mounted(){
            try {
                let response = await Api.users.getOne(this.mensaje.valorador_id)
                this.user = response.data
                if(this.mensaje.valoracion % 1 != 0 ){
                    this.entero = false
                    let num = Math.floor(this.mensaje.valoracion)
                    this.mensaje.valoracion = num
                }
            } catch (error) {
                console.error(error)
            }
    }
}
</script>