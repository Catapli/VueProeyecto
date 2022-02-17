<template>
  <div id="app">
     <link href="assets/img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">

    <!-- Font Awesome -->
      <!-- Favicon -->
    <link href="img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">  

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="assets/lib/animate/animate.min.css" rel="stylesheet">
    <link href="assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">


  <top-bar></top-bar>
  <nav-bar></nav-bar>
   

    <!-- Customized Bootstrap Stylesheet -->
    <router-view/>

  <footer-bottom></footer-bottom>

    

  </div>
</template>


<script>
import Api from './Api';
import FooterBottom from './components/FooterBottom.vue';
import NavBar from './components/NavBar.vue';
import TopBar from './components/TopBar.vue';


export default {
  components: { TopBar, NavBar,FooterBottom },
   async mounted(){
    navigator.geolocation.getCurrentLocation
    this.$store.dispatch('getAllCategories')
    if(localStorage.getItem('token')){
      try {
         let usuario = await Api.users.getOne(localStorage.getItem('idUser'))
        this.$store.state.user = usuario.data
        this.$store.state.token = localStorage.getItem('token')
      } catch (error) {
        console.error(error)
      }
     
    }
    }
    }
</script>

    <!-- Template Javascript -->
<style>
@import 'assets/css/style.css';

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");

#contenedor_carga{
	background-color: white;
	height: 100%;
	width: 100%;
	position: fixed;
	-webkit-transition: all 1.5s ease;
	-o-transition: all 1.5s ease;
	transition: all 1.5s ease;
	z-index: 1000000;
}

#carga{
	border: 15px solid #ccc;
	border-top-color: #3deeb9;;
	border-top-style: groove;
	height: 100px;
	width: 100px;

	border-radius: 100%;
	position: absolute;
	top: 0;
	left: 0 ;
	right: 0;
	bottom: 0;
	margin: auto;
	animation: girar 1.5s linear infinite;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
