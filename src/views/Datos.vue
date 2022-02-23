<template>
  <div>
    <div class="row px-xl-5">
      <div class="col-12">
        <nav class="breadcrumb bg-light mb-30">
          <a class="breadcrumb-item text-dark" href="#"
            ><router-link to="/">Home</router-link></a>
          <a class="breadcrumb-item text-dark" href="#"><router-link to="/profile">Perfil</router-link></a>
          <span class="breadcrumb-item active">Tus Datos</span>
        </nav>
      </div>
    </div>
    <div>
      <button @click="enabled" type="button" class="btn btn-success" v-if="!habilitado">Habilitar Campos</button>
      <button @click="enabled" type="button" class="btn btn-dark" v-if="habilitado">Deshabilitar Campos</button>
    
      <form>
                <div class="form-group marg">
                  <label for="nombre">Nombre</label>
                  <input type="text" class="form-control" id="nombre" :value="this.$store.state.user.name" aria-describedby="nombreHelp" disabled>
                  <small id="nombreHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group marg">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" :value="this.$store.state.user.email" aria-describedby="emailHelp" disabled>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                    </form>
                      <button type="button" @click="comprove" class="btn btn-success" v-if="habilitado">Editar Perfil</button>
                  </div>
                        <div v-if="habilitado">
      <form  @submit.prevent="addMarker">
      <h2>Busca tu ubicacion</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button type="submit" @click="addMarker">Add</button>
      </label>
      </form>
      <br/>
    <br>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;" 
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
  </div>
</template>

<script>
import Api from '../Api';
export default {
  data(){
    return{
      habilitado: false,
      userParams:{},
     center : {
          lat: this.$store.state.user.ubicacion.lat,
          lng: this.$store.state.user.ubicacion.lng
        },
      markers: [],
      places: [],
      currentPlace: null,
    }
  },
    mounted() {
    if(this.ubicacion != undefined){
      this.setPlace(this.ubicacion)
    }
  },
  methods:{
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    enabled(){
      let campoNombre = document.getElementById('nombre');
       campoNombre.disabled = !campoNombre.disabled
      let campoEmail = document.getElementById('email');
      campoEmail.disabled = !campoEmail.disabled
      if(this.habilitado){
        this.habilitado = false
      }else{
        this.habilitado = true
      }
    },
    async comprove(){
      let nombre = document.getElementById('nombre').value
      let email = document.getElementById('email').value
      let coords = this.center.lat+","+ this.center.lng
      if(nombre != this.$store.state.user.name || email != this.$store.state.user.email || coords){
        let editUser = {
          id: localStorage.getItem('idUser'),
          name: nombre,
          email: email,
          ubi: coords
        }
        try {
          let response = await Api.users.editarPerfil(editUser)
          if(response.status == 200){
            this.$store.state.user.name = editUser.name
            this.$store.state.user.email = editUser.email
            this.$store.state.user.ubicacion = this.center
            this.$router.push('/profile')
          }

        } catch (error) {
          console.error(error)
        }
      }
    }
  },
}
</script>

<style scoped>
.marg{
  margin: 1%;
}
</style>