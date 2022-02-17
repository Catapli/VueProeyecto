<template>
    <div>
    
<div class="container-fluid pb-5">
        <div class="row px-xl-5" style="justify-content:center;">
            <div class="col-lg-7 h-auto mb-30">
                <div class="h-100 bg-light p-30">
                    <h3>Name Vendor Here</h3>

                    <div class="d-flex mb-3" style="justify-content:center;">
                        <div class="text-primary mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star-half-alt"></small>
                            <small class="far fa-star"></small>
                        </div>
                        <small class="pt-1">(99 Reseñas)</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="row px-xl-5">
            <div class="col">
                <div class="bg-light p-30">
                    <div class="nav nav-tabs mb-4">
                        <a class="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Reseñas</a>
                    </div>
                    <ver-valoraciones></ver-valoraciones>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import VerValoraciones from './VerValoraciones.vue'
export default {
  components: { VerValoraciones },
    name:'VendedorDetalles'
}
</script>