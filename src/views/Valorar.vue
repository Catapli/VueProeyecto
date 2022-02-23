<template>
  <div class="col-md-12">
    <h4 class="mb-4">Deja tu Reseña</h4>
    <small
      >Su dirección de correo electrónico no será publicada. Los campos
      obligatorios están marcados *</small
    >
    <div class="row-5 rowCenter">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form class="bg-light" @submit.prevent="handleSubmit(submit)">
          <div class="col-md-12 form-group">
            <validation-provider
              rules="required"
              v-slot="{ errors }"
              name="comentario"
            >
              <label>comentario</label>
              <textarea
                class="form-control"
                v-model="valoracion.comentario"
                name="comentario"
                cols="30"
                rows="10"
              ></textarea>
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="col-md-12 form-group">
            <validation-provider
              rules="required"
              v-slot="{ errors }"
              name="valoracion"
            >
              <label>valoracion: </label>
              <select v-model="valoracion.valoracion">
                <option :value="undefined" name="payment" id="paypal">
                  --Selecciona una valoracion--
                </option>
                <option :value="1" name="payment" id="paypal">1</option>
                <option :value="2" name="payment" id="paypal">2</option>
                <option :value="3" name="payment" id="paypal">3</option>
                <option :value="4" name="payment" id="paypal">4</option>
                <option :value="5" name="payment" id="paypal">5</option>
              </select>
              <br />
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="col-md-12 form-group">
            <button type="submit" class="btn btn-default btn-primary">
              submit
            </button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>


<script>
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "El campo es requerido",
});

export default {
  components: { ValidationProvider, ValidationObserver },
  data() {
    return {
      valoracion: {},
    };
  },
  methods: {
    submit() {
      this.valoracion.id = this.$route.params.id;
      this.valoracion.valorador_id = this.$store.state.user.id;
      this.$store.dispatch("valoracion", this.valoracion);
    },
  },
};
</script>