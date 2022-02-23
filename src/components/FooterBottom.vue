<template>
    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-secondary mt-5 pt-5" id="totop" style="margin-top:200px;">

      <div class="row px-xl-5 pt-5">
        <div class="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
          <h5 class="text-secondary text-uppercase mb-4">ENCUENTRANOS</h5>
          <p class="mb-4">Tu tienda de seguda mano</p>
          <p class="mb-2">
            <i class="fa fa-map-marker-alt text-primary mr-3"></i>Batoi 03800,
            Alcoi/Alicante
          </p>
          <p class="mb-2">
            <i class="fa fa-envelope text-primary mr-3"></i>info@batoipop.com
          </p>
          <p class="mb-0">
            <i class="fa fa-phone-alt text-primary mr-3"></i>+966 843 321
          </p>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="row">
            <div class="col-md-4 mb-5">
              <h5 class="text-secondary text-uppercase mb-4">Quick Shop</h5>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-secondary mb-2" href="index.html"
                  ><i class="fa fa-angle-right mr-2"></i>Home</a
                >
                <a class="text-secondary mb-2" href="shop.html"
                  ><i class="fa fa-angle-right mr-2"></i>Tienda</a
                >
                <a class="text-secondary mb-2" href="detail.html"
                  ><i class="fa fa-angle-right mr-2"></i>Detalles de la
                  tienda</a
                >
                <a class="text-secondary mb-2" href="cart.html"
                  ><i class="fa fa-angle-right mr-2"></i>Carrito</a
                >
                <a class="text-secondary" href="contact.html"
                  ><i class="fa fa-angle-right mr-2"></i>Contacta con
                  nosotros</a
                >
              </div>
            </div>
            <div class="col-md-4 mb-5" v-if="userLoged">
              <h5 class="text-secondary text-uppercase mb-4">Mi cuenta</h5>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-secondary mb-2" href="#">{{this.$store.state.user.name}}</a>
                <a class="text-secondary mb-2" href="#">{{this.$store.state.user.email}}</a>
              </div>
            </div>
            <div class="col-md-4 mb-5">
              <h5 class="text-secondary text-uppercase mb-4">Newsletter</h5>
              <p>Suscribete a nuestro boletín de ofertas y novedades</p>
              <form action="">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Introduce tu email"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary">Registrarse</button>
                  </div>
                </div>
              </form>
              <h6 class="text-secondary text-uppercase mt-4 mb-3">
                Siguenos en
              </h6>
              <div class="d-flex">
                <a class="btn btn-primary btn-square mr-2" href="#"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a class="btn btn-primary btn-square mr-2" href="#"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a class="btn btn-primary btn-square mr-2" href="#"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
                <a class="btn btn-primary btn-square" href="#"
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row border-top mx-xl-5 py-4"
        style="border-color: rgba(256, 256, 256, 0.1) !important"
      >
        <div class="col-md-6 px-xl-0">
          <p class="mb-md-0 text-center text-md-left text-secondary">
            &copy; <a class="text-primary">BatoiPOP</a>. Todos los derechos
            reservados. Diseñada por
            <a class="text-primary">Carlos, Catalina y Manu</a>
          </p>
        </div>
        <div class="col-md-6 px-xl-0 text-center text-md-right">
          <img class="img-fluid" src="../assets/img/payments.png" alt="" />
        </div>
      </div>
    </div>
    <!-- Footer End -->
</template>

<script>


export default {
    name:'FooterBottom',
    computed:{
      userLoged(){
        return !!this.$store.state.token
      }
    }

}
</script>