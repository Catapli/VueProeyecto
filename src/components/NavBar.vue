<template>
    <div class="container-fluid bg-dark mb-30" v-scrollanimation>
        <div class="row px-xl-5">
            <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                    <a href="" class="text-decoration-none d-block d-lg-none">
                        <span class="h1 text-uppercase text-dark bg-light px-2">BATOI</span>
                        <span class="h1 text-uppercase text-light bg-primary px-2 ml-n1">POP</span>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                            <a class="nav-item nav-link active"> <router-link to="/">Home</router-link></a>
                            <a class="nav-item nav-link"> <router-link to="/shop">Tienda</router-link></a>
                             <a class="nav-item nav-link" v-if="user"> <router-link to="/newContent">Subir Producto</router-link></a>
                        </div>
                        <div v-if="user" class="navbar-nav ml-auto py-0 d-none d-lg-block">
                            <a href="" class="btn px-0">
                                <i @click="goValoraciones()" class="bi bi-star-fill text-primary"></i>
                                <span class="badge text-secondary border border-secondary rounded-circle" style="padding-bottom: 2px;">0</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name:'NavBar',
    data(){
        return{
            user: false,
            clickDesp: false
        }
    },
    methods:{
        desplegable(){
            if(this.clickDesp){
                this.clickDesp = false
                 document.getElementById("navbar-vertical").className += " collapse";
            }else{
                this.clickDesp = true
                 document.getElementById("navbar-vertical").classList.remove('collapse')
            }

        },
        goValoraciones(){
            this.$router.push("/valoraciones")
        }
    },
    computed:{
        isUserLoged(){
            return !!this.$store.state.token
        }
    },
    watch:{
        isUserLoged(newValue){
            this.user = newValue
        }
    },
    mounted(){
        if(this.isUserLoged){
            this.user = true;
        }
    }
}
</script>

<style scoped>
.before-enter{
  opacity: 0;
  transform:  translateY(-100px);
  transition: all 1.5s ease-out;

}

.enter{
    opacity: 1;
    transform:  translateY(0px);

}
</style>