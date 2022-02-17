<template>
    <div class="container-fluid">
                    <div v-cloak class="divtop">
            <transition name="fade">
                <div id="pagetop" style=" z-index: 2000000;" v-show="scY > 300" @click="toTop">
                    <i class="bi bi-arrow-up-circle itop" >
                        <path d="M18 15l-6-6-6 6"/>
                    </i>
                </div>
            </transition>
        </div> 

        <div class="row bg-secondary py-1 px-xl-5" >
            <div class="col-lg-6 d-none d-lg-block">
                <div class="d-inline-flex align-items-center h-100">
                    <a class="text-body mr-3" href="">Sobre Nosotros</a>
                    <a class="text-body mr-3" style="color:#6C757D !important;"> <router-link to="/contacto">Contacto</router-link></a>
                    <a class="text-body mr-3" href="">Ayuda</a>
                    <a class="text-body mr-3" href="">FAQs</a>
                </div>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <div class="btn-group" v-if="loged">
                         <button class="dropdown-item" @click="goProfile" type="button" >
                             <img :src="this.$store.state.user.img" height="50px" width="50px" style="border-radius:50%;">
                             {{this.$store.state.user.name}}
                         </button>
                        <button class="dropdown-item" @click="logOut" type="button" >Log Out</button>
                    </div>
                    <div class="btn-group" v-else>
                             <button class="dropdown-item" type="button" ><router-link class="gray" to="/login">Iniciar Sesión</router-link> </button>
                            <button class="dropdown-item" type="button"><router-link class="gray" to="/registro">Registrarse</router-link></button>
                    </div>
                </div>
                <div class="d-inline-flex align-items-center d-block d-lg-none">
                    <a href="" class="btn px-0 ml-2">
                        <i class="fas fa-heart text-dark"></i>
                        <span class="badge text-dark border border-dark rounded-circle" style="padding-bottom: 2px;">0</span>
                    </a>
                    <a href="" class="btn px-0 ml-2">
                        <i class="fas fa-shopping-cart text-dark"></i>
                        <span class="badge text-dark border border-dark rounded-circle" style="padding-bottom: 2px;">0</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex" v-scrollanimation >
            <div class="col-lg-4">
                <a href="" class="text-decoration-none">
                    <span class="h1 text-uppercase text-primary bg-dark px-2">Batoi</span>
                    <span class="h1 text-uppercase text-dark bg-primary px-2 ml-n1">POP</span>
                </a>
            </div>

            <div class="col-lg-8 col-6 text-right">
                <p class="m-0">Atención al cliente</p>
                <h5 class="m-0">+966 843 321</h5>
            </div>
        </div>
     
    </div>
</template>



<script>
export default {
    data(){
        return{
        scTimer: 0,
        scY: 0,
    }
  },
    name:'TopBar',
    methods:{
        handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      toTop: function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
      logOut(){
          this.$store.commit('logoutUser')
      },
      goProfile(){
          this.$router.push('/profile')
      }
  },
  computed:{
      loged(){
           return !!this.$store.state.token
      }
  },
    mounted(){
    window.addEventListener('scroll', this.handleScroll);
  },
}
</script>


<style scoped>
.divtop{
    height:48px; 
    position:fixed; 
    right:0; 
    bottom:20px; 
    z-index: 2000000;
}
.itop{
    color:#3deeb9; 
    font-size:48px;  
    z-index: 2000000;
    
}
.before-enter{
  opacity: 0;
  transform:  translateY(-100px);
  transition: all 1.5s ease-out;

}

.enter{
    opacity: 1;
    transform:  translateY(0px);

}

.gray{
    color:gray;
}

.gray:hover{
    color: #28a745;
}
</style>