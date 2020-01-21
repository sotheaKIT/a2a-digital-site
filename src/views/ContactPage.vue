<template>
  <div id="contact-page">
        <Navigator/>
        <ContactForm/>
        <!-- <Footer/> -->
  </div>
</template>

<script>

import Navigator from "../components/navigator/navigator.vue"
import ContactForm from "../components/contact-form/contact-form.vue"
// import Footer from "../components/footer/footer.vue"


export default {
  name: 'ContactPage',
  components: {
    Navigator,
    ContactForm,
    // Footer
  }
}
</script>



