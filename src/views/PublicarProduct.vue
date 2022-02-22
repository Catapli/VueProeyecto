<template>
     <div class="col-lg-12">
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Nuevo Producto</span></h5>
                <div class=" p-30 mb-5">
                    <div class="row rowCenter">
                        <ValidationObserver v-slot="{ handleSubmit }">
                        <form class="bg-light" @submit.prevent="handleSubmit(submit)">
                        <div class="col-md-12 form-group">
                            <validation-provider rules="required|min:4|max:20" v-slot="{ errors }" name="name">
                            <label>Nombre</label>
                            <input class="form-control" v-model="product.name" name="name" type="text">
                            <span class="text-danger">{{ errors[0] }}</span>
                            </validation-provider>
                        </div>  
                        <div class="col-md-12 form-group">
                            <validation-provider rules="required|min:4|max:100" v-slot="{ errors }" name="descripcion">
                            <label>Descripcion</label>
                            <textarea class="form-control" v-model="product.descripcion" name="descripcion"  cols="30" rows="10"></textarea>
                             <span class="text-danger">{{ errors[0] }}</span>
                            </validation-provider>
                        </div>   
                        <div class="col-md-12 form-group">
                            <validation-provider rules="required" v-slot="{ errors }" name="price">
                            <label>Precio</label>
                            <input class="form-control" v-model="product.price" name="price" type="number">
                             <span class="text-danger">{{ errors[0] }}</span>
                            </validation-provider>
                        </div>
                        <div class="col-md-12 form-group">
                            <validation-provider rules="required" v-slot="{ errors }" name="categoria">
                            <label>Categorias</label>
                            <select v-model="product.categoria">
                                <option   :value="undefined" name="payment" id="paypal">--Selecciona una categoria--</option>
                                <option name="categoria" v-for="categoria in categorias" :key="categoria.id" :categoria="categoria" :value="categoria.id" >{{categoria.nombre}}</option>
                            </select>
                            <br>
                             <span class="text-danger">{{ errors[0] }}</span>
                            </validation-provider>
                        </div>
                        <div class="col-md-12 form-group">
                            <button type="submit" class="btn btn-default btn-primary">submit</button>
                        </div>
                        </form>   
                        </ValidationObserver>        
                    </div>
                </div>
            </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, max, min , email } from 'vee-validate/dist/rules';


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

export default {
     components:{ValidationProvider,ValidationObserver},
    computed:{
        categorias(){
            return this.$store.state.categories.category
        }
    },
    data(){
        return{
            product:{}
        }
    },
    methods: {
    submit() {
        console.log()
       this.product.userId = this.$store.state.user.id
       this.$store.dispatch('newProduct',this.product)
    },

  },

}
</script>