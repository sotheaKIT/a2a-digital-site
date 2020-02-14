<style src="./contact-form.css" scope ></style>
<template src="./contact-form.html"></template>

<script>

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