<template>
    <div class="container-fluid bg-dark mb-30" v-scrollanimation>
        <div class="row px-xl-5">
            <div class="col-lg-3 d-none d-lg-block">
                <a class="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style="height: 65px; padding: 0 30px;">
                    <h6 class="text-dark m-0"><i class="fa fa-bars mr-2"></i>Categorias</h6>
                    <i class="fa fa-angle-down text-dark"></i>
                </a>
                <nav class="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style="width: calc(100% - 30px); z-index: 999;">
                    <div class="navbar-nav w-100">
                        <div class="nav-item dropdown dropright">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Categoría 1 <i class="fa fa-angle-right float-right mt-1"></i></a>
                            <div class="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                <a href="" class="dropdown-item">Subcategoría</a>

                            </div>
                        </div>
                        <a href="" class="nav-item nav-link">Categoría 2</a>

                    </div>
                </nav>
            </div>
            <div class="col-lg-9">
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
                        <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
                            <a href="" class="btn px-0">
                                <i class="fas fa-heart text-primary"></i>
                                <span class="badge text-secondary border border-secondary rounded-circle" style="padding-bottom: 2px;">0</span>
                            </a>
                            <a href="cart.html" class="btn px-0 ml-3">
                                <i class="fas fa-shopping-cart text-primary"></i>
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
            user: false
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
            alert(this.isUserLoged)
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