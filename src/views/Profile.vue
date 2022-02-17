<template>
    <div>
    
<div class="container-fluid pb-5">
        <div class="row px-xl-5" style="justify-content:space-around;">
            <div class="col-lg-3 mb-30 img" >
                    <img :src="this.$store.state.user.img" height="60%"  alt="Image" style="border-radius: 50%;" v-scrollanimation>
            </div>

            <div class="col-lg-7 h-auto mb-30">
                <div class="h-100 bg-light p-30">
                    <h3>{{this.$store.state.user.name}}</h3>

                    <div class="d-flex mb-3"  style="justify-content:center;">
                       <div class="text-primary mr-2">
                            <small class="fas fa-star" v-for="valoration in valoracionUser.average" :key="valoration"></small>
                             <small class="bi bi-star-half" v-if="!entero"></small>

                        </div>
                        <small class="pt-1">({{valoracionUser.count}} Reviews)</small>
                    </div>
                    <div class="divider"></div>
                    <div class="d-flex align-items-center mb-4 pt-2 cent mar-t"  >
                        <button class="btn btn-primary px-3" @click="goDatos"><i class="bi bi-activity"></i> Datos</button>
                    </div>
                    <div class="d-flex align-items-center mb-4 pt-2 cent">
                        <button class="btn btn-primary px-3" @click="goProductos"><i class="bi bi-basket"></i> Tus Productos</button>
                    </div>
                    <div class="d-flex align-items-center mb-4 pt-2 cent">
                        <button class="btn btn-primary px-3" @click="goCompras"><i class="bi bi-currency-dollar"></i> Tus Compras</button>
                    </div>
                    <div class="d-flex align-items-center mb-4 pt-2 cent">
                        <button class="btn btn-primary px-3" @click="govaloraciones"><i class="bi bi-star"></i> Valoraciones</button>
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
    data(){
        return {
            valoracionUser:[],
            entero: true,
        }
    },
    methods:{
        goDatos(){
            this.$router.push('/datos')
        },
        goProductos(){
            this.$router.push('/productos')
        },
        govaloraciones(){
            this.$router.push('/valoraciones')
        },
        goCompras(){
            this.$router.push('/compras')
        }
    },
    async mounted(){
        try {
            let valoraciones = await Api.valoraciones.getAllByUser(this.$store.state.user.id)
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
  transform:  translateX(-100px);
  transition: all 1.5s ease-out;

}
.img{
    display: flex;
    justify-content: center;
    align-items: center;
}

.cent{
    justify-content: center;
}

.mar-t{
    margin-top: 5%;
}

.enter{
    opacity: 1;
    transform:  translateX(0px);

}
</style>