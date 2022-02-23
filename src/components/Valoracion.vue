<template>
    <div class="media mb-4" >
       <img :src="valoracion.imgUser" v-if="imagen" alt="Image" class="img-fluid mr-3 mt-1" style="width: 45px;">
        <img src="../assets/img/user.jpg" v-else height="50px" width="50px" style="border-radius:50%;">
       <div class="media-body">
           <h6>{{valoracion.user}}<small> - <i>{{new Date(valoracion.created_at).toLocaleTimeString()}}</i></small></h6>
          <div class="text-primary mb-2">
                <small class="fas fa-star" v-for="valoration in valoracion.valoracion" :key="valoration"></small>
                 <small class="bi bi-star-half" v-if="!entero"></small>

          </div>
           <p>{{valoracion.comentari}}</p>
       </div>
   </div>
</template>

<script>
export default {
    data(){
        return{
            entero: true,
            num: '',
            imagen:false
        }
    },
    props:['valoracion'],
    async mounted(){
        let average = this.valoracion.valoracion
        if(average % 1 != 0 ){
                    this.entero = false
                    let num = Math.floor(average)
                    this.valoracion.valoracion = num
        }
        if(this.valoracion.imgUser === null){
            this.imagen = false
        }else{
            this.imagen = true
        }
    }
}
</script>