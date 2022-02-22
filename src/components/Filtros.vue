<template>
            <div class="col-lg-3 col-md-4" v-scrollanimation >
                
                <!-- Price Start -->
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Filtrar por Precio</span></h5>

                <div class="bg-light p-4 mb-30">
                    <form>
                        <div class="custom-control custom-radio d-flex align-items-center justify-content-between mb-3">
                            <input type="radio" name="precio" v-model.number="filtroPrice" value="1000" class="custom-control-input" checked id="price">
                            <label class="custom-control-label" for="price">All Price</label>
                            
                        </div>
                        <div class="custom-control custom-radio d-flex align-items-center justify-content-between mb-3">
                            <input type="radio" name="precio" v-model.number="filtroPrice" value="100" class="custom-control-input" id="price-1">
                            <label class="custom-control-label" for="price-1">0€ - 100€</label>
                            
                        </div>
                        <div class="custom-control custom-radio d-flex align-items-center justify-content-between mb-3">
                            <input type="radio" name="precio" v-model.number="filtroPrice" value="200" class="custom-control-input" id="price-2">
                            <label class="custom-control-label" for="price-2">100€ - $200€</label>
                            
                        </div>
                        <div class="custom-control custom-radio d-flex align-items-center justify-content-between mb-3">
                            <input type="radio" name="precio" v-model.number="filtroPrice" value="300" class="custom-control-input" id="price-3">
                            <label class="custom-control-label" for="price-3">200€ - 300€</label>
                            
                        </div>
                        <div class="custom-control custom-radio d-flex align-items-center justify-content-between mb-3">
                            <input type="radio" name="precio" v-model.number="filtroPrice" value="400" class="custom-control-input" id="price-4">
                            <label class="custom-control-label" for="price-4">300€ - 400€</label>
                            
                        </div>
                        <div class="custom-control custom-radio d-flex align-items-center justify-content-between">
                            <input type="radio" name="precio" v-model.number="filtroPrice" value="500" class="custom-control-input" id="price-5">
                            <label class="custom-control-label" for="price-5">400€ - 500€</label>
                            
                        </div>
                    </form>
                </div>
                <!-- Price End -->
                
                <!-- Color Start -->
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Filtrar por etiqueta</span></h5>
                <div class="bg-light p-4 mb-30">
                    <form>
                        <div class="custom-control custom-radio d-flex align-items-center justify-content-between"  v-for="etiqueta in etiquetas.etiquetas" :key="etiqueta.id" :etiqueta="etiqueta">
                            <input type="radio" class="custom-control-input" name="etiqueta" v-model.number="filtroEtiqueta" :value="etiqueta.id" :id="etiqueta.id" >
                            <label class="custom-control-label" :for="etiqueta.id">{{etiqueta.nombre}}</label>
                            <span class="badge border font-weight-normal" :id="etiqueta.nombre">{{etiquetas.conteo[etiqueta.id]}}</span>
                        </div>
                    </form>
                </div>

                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Filtrar por Categoria</span></h5>
                <div class="bg-light p-4 mb-30">
                    <form>
                        <div class="custom-control custom-radio d-flex align-items-center justify-content-between"  v-for="categoria in categorias" :key="categoria.id" :categoria="categoria">
                            <input type="radio" class="custom-control-input" name="categoria" v-model.number="filtroCategoria" :value="categoria.id" :id="categoria.id+'category'" >
                            <label class="custom-control-label" :for="categoria.id+'category'">{{categoria.nombre}}</label>
                            <span class="badge border font-weight-normal" >{{conteoCategorias[categoria.id-1]}}</span>
                        </div>
                    </form>
                </div>
                <!-- Color End -->
            </div>
            <!-- Shop Sidebar End -->

</template>

<script>
import Api from "../Api.js";
export default {
    data(){
        return{
            etiquetas:[],
            filtroPrice:'',
            filtroEtiqueta:'',
            filtroCategoria:'',
            charge: true,
        }
    },


    watch:{
        filtroPrice(newValue){
            this.$store.commit('setFiltrosPrecio',newValue)
        },
        filtroEtiqueta(newValue){
             this.$store.commit('setFiltrosEtiqueta',newValue)
        },
        filtroCategoria(newValue){
            this.$store.commit('setFiltrosCategoria', newValue)
        }
    },
    async mounted(){
        try {
            let etiquets = await Api.etiquetas.getAll()
            this.etiquetas = etiquets.data
        } catch (error) {
            console.error(error)
        }
    },
    computed:{
        categorias(){
            return this.$store.state.categories.category
        },
        conteoCategorias(){
            return this.$store.state.categories.conteo
        }
    },
}
</script>


<style scoped>
.before-enter{
  opacity: 0;
  transform:  translateX(-100px);
  transition: all 1.5s ease-out;

}

.enter{
    opacity: 1;
    transform:  translateX(0px);

}
</style>