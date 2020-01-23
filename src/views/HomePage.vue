<style src="../styles/home.css" scoped></style>
<template>
  <div id="home">
    
    <Slide/>
    <!-- <ServicesPage/> -->
    <!-- <ProductsPage/> -->
    <!-- <CardProduct />
    <PartnersPage/> -->
    
  </div>
</template>

<script>

// import ProductsPage from '../views/ProductsPage'
// import ServicesPage from '../views/ServicesPage'
// import PartnersPage from '../views/PartnersPage'
import Slide from '../components/slide/slide.vue'
// import CardProduct from '../components/card-product/card-product'


export default {
  name: 'Home',
  components: {
    // ProductsPage,
    // PartnersPage,
    // ServicesPage,
    Slide,
    // CardProduct,
  }
}
</script>

