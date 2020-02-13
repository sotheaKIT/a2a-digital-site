<style src="./service-contact-form.css" scoped></style>
<template src="./service-contact-form.html">
</template>
<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
export default {
  name: 'ServiceContactForm',
   data () {
    return {
      email: '',
      name: '',
      formSubmitted: false
    }
  },
  methods: {
    validateBeforeSubmit() {
        this.$validator.validateAll();

        if (!this.errors.any()) {
            this.submitForm()
        }
      },
    submitForm(){
      this.formSubmitted = true
    }
  }
}
</script>