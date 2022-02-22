import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Shop from '../views/Shop.vue'
import Details from '../views/Detail.vue'
import NotFound from '../views/NotFound.vue'
import Contact from '../views/Contact.vue'
import Buy from '../views/Buy.vue'
import VendorDetails from '../views/VendorDetails.vue'
import Profile from '../views/Profile.vue'
import Productos from '../views/Productos.vue'
import Datos from '../views/Datos.vue'
import Compras from '../views/Compras.vue'
import Valoraciones from '../views/Valoraciones.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import Valorar from '../views/Valorar.vue'
import PublicarProduct from '../views/PublicarProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/newContent',
    name: 'NewContent',
    component: PublicarProduct
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/compras',
    name: 'Compras',
    component: Compras
  },
  {
    path: '/valoraciones',
    name: 'Valoraciones',
    component: Valoraciones
  },
  {
    path: '/datos',
    name: 'Datos',
    component: Datos
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  },
  {
    path: '/valorar/:id',
    name: 'Valorar',
    component: Valorar
  },
  {
    path: '/buy/:id',
    name: 'buyProduct',
    component: Buy
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contact,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/not-found',
    name: '404',
    component: NotFound,
  },
  {
    path: '*',
    redirect: {
      name: '404',
    }},
    {
      path: '/vendorDetails/:id',
      name: 'VendorDetails',
      component: VendorDetails,
      props: true
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    }
    
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
})

export default router
