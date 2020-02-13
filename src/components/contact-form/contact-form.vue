<style src="./contact-form.css" scope ></style>
<template src="./contact-form.html"></template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
 
  export default {
    name: 'ContactForm',
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