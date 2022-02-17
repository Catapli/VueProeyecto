<template>
            <div class="col-lg-12">
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Iniciar Sesión</span></h5>
                <div class=" p-30 mb-5">
                    <div class="row rowCenter">
                        <form class="bg-light" @submit.prevent="submit">
                             <div class="col-md-12 form-group">
                            <label>E-mail</label>
                            <input class="form-control" v-model="user.email" type="text" placeholder="example@email.com">
                        </div>
                        <div class="col-md-12 form-group">
                            <label>Contraseña</label>
                            <input class="form-control" v-model="user.password" type="password" placeholder="password">
                        </div>
                        <div class="col-md-12 form-group">
                            <button type="submit" class="btn btn-default btn-primary">Iniciar Sesión</button>
                        </div>
                        </form>
                       
                        
                    </div>
                </div>
            </div>
</template>

<script>
import store from '../store'
export default {
    data(){
        return{
            user:{}
        }
    },
    methods: {
    async submit() {
        try {
            await store.dispatch('login', this.user)
        } catch (error) {
            console.error('error')
        }
    },

  },

}
</script>