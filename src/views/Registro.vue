<template>
     <div class="col-lg-12">
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Registrarse</span></h5>
                <div class=" p-30 mb-5">
                    <div class="row rowCenter">
                        <ValidationObserver v-slot="{ handleSubmit }">
                        <form class="bg-light" @submit.prevent="handleSubmit(submit)">
                        <div class="col-md-12 form-group">
                            <validation-provider rules="required|min:4|max:20" v-slot="{ errors }" name="name">
                            <label>Nombre</label>
                            <input class="form-control" name="name" id="name" v-model="user.name" type="text" placeholder="Nombre">
                            <span class="text-danger">{{ errors[0] }}</span>
                            </validation-provider>
                        </div>    
                        <div class="col-md-12 form-group">
                            <validation-provider rules="required|email" v-slot="{ errors }" name="email">
                            <label>E-mail</label>
                            <input class="form-control" name="email" id="email" v-model="user.email" type="text" placeholder="example@email.com">
                            <span class="text-danger">{{ errors[0] }}</span>
                            </validation-provider>
                        </div>
                        <div class="col-md-12 form-group">
                            <validation-provider rules="confirmed:confirmation" v-slot="{ errors }" class="form-group">
                            <label>Contraseña</label>
                            <input class="form-control" name="password" id="password" v-model.lazy="user.password" type="password" placeholder="password">
                            <span class="text-danger">{{ errors[0] }}</span>
                            </validation-provider>
                        </div>

                        <div class="col-md-12 form-group">
                            <validation-provider vid="confirmation" name="confirmar_contraseña" v-slot="{ errors }" class="form-group">
                            <label>Repite Contraseña</label>
                            <input class="form-control" name="password2" id="password2"  v-model.lazy="confirmation" type="password" placeholder="password">
                            <span class="text-danger">{{ errors[0] }}</span>
                            </validation-provider>
                        </div>

                        
                        <div class="col-md-12 form-group">
                            <button type="submit" class="btn btn-default btn-primary">Registrarse</button>
                        </div>
                        </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import { ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, max, min , email ,confirmed } from 'vee-validate/dist/rules';



extend('required',{ 
  ...required,
  message: 'El campo es requerido'});
extend('max', {
  ...max,
  message: 'Has superado el máximo de caracteres permitidos para este campo'
});
extend('min', {
  ...min,
  message: 'Estas por debajo del minimo requerido'
});
extend('email', {
  ...email,
  message: 'Debe de ser tipo email'
});

extend('confirmed', {
  ...confirmed,
  message: 'La contraseñas deben ser iguales'
});

export default {

    components:{ValidationProvider, ValidationObserver},
    data(){
        return{
            user:{},
            confirmation: '',
        }
    },
    methods: {
     submit() {
         this.$store.dispatch('register',this.user)
    },

  },

}
</script>