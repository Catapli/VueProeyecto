<template>
    <div class="tab-content">
                        <div class="tab-pane fade  show active" id="tab-pane-2">
                            <div class="row" style="justify-content:center;">
                                <div class="col-md-6">
                                    <h4 class="mb-4">1 review for "Product Name"</h4>
                                    <new-row-valoraciones></new-row-valoraciones>
                                    <new-row-valoraciones></new-row-valoraciones>
                                </div>
                            </div>
                        </div>
                    </div>
</template>
<script>
import NewRowValoraciones from './NewRowValoraciones.vue'
export default {
  components: {NewRowValoraciones },
    name:'verValoraciones'
}
</script>