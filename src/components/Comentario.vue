<template>
    <div class="media mb-4">
        <img src="../assets/img/user.jpg" alt="Image" class="img-fluid mr-3 mt-1" style="width: 45px;">
        <div class="media-body">
            <h6>{{user.name}}<small> - <i>{{new Date(message.created_at).toLocaleTimeString()}}</i></small> &nbsp;&nbsp;&nbsp;&nbsp;<i v-if="!denunciado" @click="denunciar" class="bi bi-exclamation-triangle size"></i></h6>
            <p>{{message.contenido}}</p>
        </div>
    </div>
</template>

<script>
import Api from '../Api'
export default {
    name:'Comentario',
    data(){
        return{
            user:{},
            denunciado:false
        }
    },
    methods:{
        async denunciar(){
            let denuncia = {
                    user_id : localStorage.getItem('idUser'),
                    mensaje_id: this.message.id
                }
            try {
                if(!this.denunciado){
                    console.log("entra")
                    let response = await Api.denunciasM.create(denuncia)
                    if(response.status == 201){
                        this.denunciado = true
                    }
                }
            } catch (error) {
                console.error(error)
            }
        },
        async getDenuncia(){
            let denuncia = {
                user_id : this.$store.state.user.id  ,
                mensaje_id: this.message.id
            }
            try {
                 let response = await Api.denunciasM.existe(denuncia)
            this.denunciado = response.data
            } catch (error) {
                console.error(error)
            }
           

        },
    },
    props:['message'],
    async mounted(){
        try {
        
            let response = await Api.users.getOne(this.message.emisor_id)
            this.user = response.data
            this.getDenuncia()
        } catch (error) {
            console.error(error)
        }
    }

}
</script>

<style scoped>
.size{
    font-size: 20px !important; 
}
</style>