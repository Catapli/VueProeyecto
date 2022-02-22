<template>
<div>
    
<div class="container-fluid px-xl-5">
    <div id="contenedor_carga" v-if="charge" >
    <div id="carga"></div>
  </div>

    <div v-else>
         <div class="row px-xl-5" >
            <div class="col-lg-5 mb-30" v-scrollanimation>
                <div id="product-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner bg-light">
                        <div class="carousel-item active">
                            <img class="w-100 h-100" src="../assets/img/product-1.jpg" alt="Image">
                        </div>
                        <div class="carousel-item">
                            <img class="w-100 h-100" src="../assets/img/product-2.jpg" alt="Image">
                        </div>
                        <div class="carousel-item">
                            <img class="w-100 h-100" src="../assets/img/product-3.jpg" alt="Image">
                        </div>
                        <div class="carousel-item">
                            <img class="w-100 h-100" src="../assets/img/product-4.jpg" alt="Image">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#product-carousel" data-slide="prev">
                        <i class="fa fa-2x fa-angle-left text-dark"></i>
                    </a>
                    <a class="carousel-control-next" href="#product-carousel" data-slide="next">
                        <i class="fa fa-2x fa-angle-right text-dark"></i>
                    </a>
                </div>
            </div>

            <div class="col-lg-7 h-auto mb-30">
                <div class="h-100 bg-light p-30">
                    <h3>{{producto.nombre}}</h3>
                    <small>Valoracion del Usuario</small>
                    <div class="d-flex mb-3" style="justify-content:center;">
                        <div class="text-primary mr-2">
                            <small class="fas fa-star" v-for="valoration in valoracionUser.average" :key="valoration"></small>
                            <small class="bi bi-star-half" v-if="!entero"></small>
                        </div>
                        <small class="pt-1">({{valoracionUser.count}} Reviews)</small>
                    </div>
                    <h3 class="font-weight-semi-bold mb-4">{{producto.precio+' €'}}</h3>
                    <p class="mb-4">
                        {{producto.descripcion}}
                    </p>
                    <div class="d-flex align-items-center mb-4 pt-2" style="justify-content:center;">
                        <button class="btn btn-primary px-3" @click="goBuy"><i class="fa fa-shopping-cart mr-1"></i> Comprar</button>
                    </div>
                    <div class="d-flex pt-2"  style="justify-content:center;">
                        <strong class="text-dark mr-2">Vendedor:</strong>
                        <div class="d-inline-flex">
                            <a @click="goDetails"  class=" px-2">
                                {{user.name}}
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row px-xl-5">
            <div class="col">
                <div class="bg-light p-30">
                    <div class="nav nav-tabs mb-4">
                        <a class="nav-item nav-link text-dark" v-bind:class="{active: lista}" @click="changeLista" id="tab-pane-1" data-toggle="tab">Descripción</a>
                        <a class="nav-item nav-link text-dark" v-bind:class="{active: !lista}" @click="changeLista" id="tab-pane-2" data-toggle="tab">Reseñas</a>
                    </div>
                    <div class="tab-content">
                        <div v-if="lista">
                            <h4 class="mb-3">Descripción del Producto </h4>
                            <p>{{producto.descripcion}}</p>
                        </div>
                        <div v-else class="active" >
                            <div class="row">
                                <div class="col-md-6">
                                    <h4 class="mb-4">1 review for {{producto.nombre}}</h4>
                                    <div class="media mb-4">
                                        <img src="../assets/img/user.jpg" alt="Image" class="img-fluid mr-3 mt-1" style="width: 45px;">
                                        <div class="media-body">
                                            <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                            <div class="text-primary mb-2">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star-half-alt"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                            <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h4 class="mb-4">Leave a review</h4>
                                    <small>Your email address will not be published. Required fields are marked *</small>
                                    <div class="d-flex my-3">
                                        <p class="mb-0 mr-2">Your Rating * :</p>
                                        <div class="text-primary">
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                    </div>
                                    <form>
                                        <div class="form-group">
                                            <label for="message">Your Review *</label>
                                            <textarea id="message" cols="30" rows="5" class="form-control"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="name">Your Name *</label>
                                            <input type="text" class="form-control" id="name">
                                        </div>
                                        <div class="form-group">
                                            <label for="email">Your Email *</label>
                                            <input type="email" class="form-control" id="email">
                                        </div>
                                        <div class="form-group mb-0">
                                            <input type="submit" value="Leave Your Review" class="btn btn-primary px-3">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
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
export default {
    data(){
        return{
            user: {},
            valoracionUser : [],
            producto: {},
            entero: true,
            charge: true,
            lista: true
        }
    },
    name:'ProductDetails',
    props:['producto_id'],
    methods:{
        changeLista(){
            if(this.lista){
                this.lista = false
                document.getElementById("tab-pane-2").className += "active";
            }else{
                this.lista = true
            }
        },
        goBuy(){
            this.$router.push('/buy/'+this.producto_id)
        },
        goDetails(){
            this.$router.push('/vendorDetails/'+this.user.id)
        },
        async getUser(){
            try {
                let usuario = await Api.users.getOne(this.producto.user_id)
                this.user = usuario.data
                this.getValoraciones()
            } catch (error) {
            console.error(error)
            }
        },
        async getProduct(){
            try {
                let product = await Api.products.getOne(this.producto_id)
                this.producto = product.data
                this.getUser()
            } catch (error) {
                console.error(error)
            }
        },
        async getValoraciones(){
            try {
                let valoraciones = await Api.valoraciones.getAllByUser(this.user.id)
                this.valoracionUser = valoraciones.data
                if(valoraciones.data.average % 1 != 0 ){
                    this.entero = false
                    let num = Math.floor(valoraciones.data.average)
                    this.valoracionUser.average = num
                }else{
                    this.valoracionUser.average = valoraciones.data
                }
            } catch (error) {
                console.error(error)
            }
        }
    },
    async mounted(){
        await this.getProduct()
        this.charge = false
    },
    
}
</script>


<style scoped >


.before-enter{
  opacity: 0;
  transform: translateX(-150px);
  transition: all 1s cubic-bezier(.21,.69,.53,.42);

}

.enter{
    opacity: 1;
    transform:  translateX(0px);

}


</style>