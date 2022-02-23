<template>
    <div>
        <div class="container-fluid">
        <div class="row px-xl-5">
            <div class="col-12">
                <nav class="breadcrumb bg-light mb-30">
                    <a class="breadcrumb-item text-dark" href="#"><router-link to="/">Home</router-link></a>
                    <a class="breadcrumb-item text-dark" href="#"><router-link to="/shop">Tienda</router-link></a>
                    <span class="breadcrumb-item active">Finalizar Compra</span>
                </nav>
            </div>
        </div>
        <div class="container-fluid">
        <div class="row px-xl-5" style="justify-content:center;">
            <div class="col-lg-4">
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Factura Total</span></h5>
                <div class="bg-light p-30 mb-5">
                    <div class="border-bottom">
                        <h6 class="mb-3">Products</h6>
                        <div class="d-flex justify-content-between">
                            <p>{{producto.nombre}}</p>
                            <p>{{producto.precio +' €'}}</p>
                        </div>
                    </div>
                    <div class="pt-2">
                        <div class="d-flex justify-content-between mt-2">
                            <h5>Total</h5>
                            <h5>{{producto.precio+' €'}}</h5>
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                    <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Pagos</span></h5>
                    <div class="bg-light p-30">
                        <ValidationObserver  v-slot="{ invalid }">
                        <form  @submit.prevent="sendForm">
                            <div class="form-group">
                            <div>
                                 <ValidationProvider rules="required" name="choice" v-slot="{ errors }">
                                <select v-model="producto.pago" class="custom-control custom-select" >
                                    <option   :value="undefined" name="payment" id="paypal">--Selecciona un metodo de pago--</option>
                                    <option   value="1" name="payment" id="paypal">Paypal</option>
                                    <option  value="2" name="payment" id="directcheck">Bizum</option>
                                    <option  value="3" name="payment" id="banktransfer">Transferencia</option>
                                </select>
                                <span class="text-danger">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                            
                        <button type="submit" :disabled="invalid" class="btn btn-block btn-primary font-weight-bold py-3">Place Order</button>
                        </form>
                        </ValidationObserver>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import Api from '../Api'
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required,oneOf } from 'vee-validate/dist/rules';
import { configure } from 'vee-validate';

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    dirty: ['is-dirty', 'is-dirty'], // multiple classes per flag!
    // ...
  }
})
extend('oneOf ', {
  ...oneOf ,
  message: 'Choose one'
});
extend('required', {
  ...required,
  message: 'Este campo es obligatorio'
});

export default {
    data(){
        return{
            producto:{},
        
        }
    },
    components:{
        ValidationProvider, ValidationObserver
    },
    async mounted(){
        try {
            let product = await Api.products.getOne(this.$route.params.id)
            this.producto = product.data
        } catch (error) {
            console.error(error)
        }
    },
    methods:{
        async sendForm(){
            let newProduct = {
                comprador_id: this.$store.state.user.id,
                id: this.producto.id,
                }
            try {
                let response = await Api.products.modify(newProduct)
                if(response.status == 200){
                    this.$router.push('/valorar/'+this.producto.id)
                }
            } catch (error) {
                console.error(error)
            }
        }
    }

}
</script>
